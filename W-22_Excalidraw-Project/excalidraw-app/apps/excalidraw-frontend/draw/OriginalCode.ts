import { HTTP_BACKEND } from "@/config";
import axios from "axios";

// Define a union type `shape` to represent either a rectangle or a circle
type shape =
  | {
      type: "rect"; // Rectangle shape identifier
      x: number; // Top-left corner X coordinate
      y: number; // Top-left corner Y coordinate
      width: number; // Width of the rectangle
      height: number; // Height of the rectangle
    }
  | {
      type: "circle"; // Circle shape identifier (not currently used in drawing)
      radius: number; // Radius of the circle
      centerX: number; // X coordinate of the circle center
      centerY: number; // Y coordinate of the circle center
    }
  | {
      type: "pencil";
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    };

// Initializes drawing on the canvas
export async function initDraw(
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
) {
  const ctx = canvas.getContext("2d"); // Get the 2D drawing context

  const existingShapes: shape[] = await getShapes(roomId); // Array to store already drawn shapes

  if (!ctx) return; // Exit if canvas context is not available

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data); // Parse incoming message

    if (message.type === "chat") {
      const parsedShape = JSON.parse(message.message);

      existingShapes.push(parsedShape.shape); // Add new shape to existing shapesf

      clearCanvas(canvas, ctx, existingShapes);
    }
  };

  // Set canvas background to black
  ctx.fillStyle = "rgba(0,0,0)";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  clearCanvas(canvas, ctx, existingShapes); // Clear and redraw the canvas with existing shapes

  // Variables to track mouse interaction

  let clicked = false; // Tracks if mouse is being clicked

  let startX = 0; // X coordinate where mouse was pressed down

  let startY = 0; // Y coordinate where mouse was pressed down

  // When mouse is pressed down on canvas

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startX = e.clientX; // Record starting X
    startY = e.clientY; // Record starting Y
  });

  // When mouse is released after clicking
  canvas.addEventListener("mouseup", (e) => {
    clicked = false;

    const width = e.clientX - startX; // Calculate width based on mouse movement

    const height = e.clientY - startY; // Calculate height based on mouse movement

    // @ts-expect-error: Accessing selectedTool from window object for debugging
    const selectedTool = window.selectedTool; // Get the selected tool type

    let shape: shape | null = null;

    if (selectedTool === "rect") {
      shape = {
        // @ts-expect-error: Accessing selectedTool from window object for debugging
        type: window.selectedTool, // Use the selected tool type
        x: startX,
        y: startY,
        width,
        height,
      };

      existingShapes.push(shape);
    } else if (selectedTool === "circle") {
      const radius = Math.max(width, height) / 2;

      shape = {
        // @ts-expect-error: Accessing selectedTool from window object for debugging
        type: window.selectedTool,
        radius: radius,
        centerX: startX + radius,
        centerY: startY + radius,
      };

      existingShapes.push(shape);
    } else if (selectedTool === "pencil") {
      shape = {
        type: "pencil",
        startX: startX,
        startY: startY,
        endX: e.clientX,
        endY: e.clientY,
      };
    }

    if (!shape) {
      return;
    }

    console.log("Invalid shape type");

    existingShapes.push(shape);

    socket.send(
      JSON.stringify({
        type: "chat",
        roomId: Number(roomId),
        message: JSON.stringify({ shape }),
      })
    );
  });

  // While mouse is moving and clicked down (dragging)

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const width = e.clientX - startX;

      const height = e.clientY - startY;

      // Clear canvas and redraw existing shapes and current preview rectangle
      clearCanvas(canvas, ctx, existingShapes);

      ctx.strokeStyle = "rgba(255,255,255)"; // Set stroke color to white for drawing preview

      //@ts-expect-error: Accessing selectedTool from window object for debugging

      const selectedTool = window.selectedTool;

      //  ========================================= //
      //  ========================================= //
      //  ========================================= //

      if (selectedTool === "rect") {
        ctx.strokeRect(startX, startY, width, height); // Draw preview rectangle
      } else if (selectedTool === "circle") {
        const radius = Math.max(width, height) / 2; // Calculate radius based on width and height

        const centerX = startX + width / 2; // Calculate center X for circle

        const centerY = startY + height / 2; // Calculate center Y for circle

        ctx.beginPath(); // Start a new path for the circle

        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

        ctx.stroke();

        ctx.closePath(); // Close the path for the circle
      } else if (selectedTool === "pencil") {
        ctx.beginPath();

        ctx.moveTo(startX, startY);

        ctx.lineTo(e.clientX, e.clientY);

        ctx.stroke();

        ctx.closePath();
      }
      //  ========================================= //
      //  ========================================= //
      //  ========================================= //
    }
  });
}

// Clears and redraws the canvas
function clearCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  existingShapes: shape[]
) {
  // Clear the entire canvas

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Redraw background as black

  ctx.fillStyle = "rgba(0,0,0)";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Redraw all previously drawn rectangles

  existingShapes.map((shape) => {
    if (shape.type === "rect") {
      ctx.strokeStyle = "rgba(255,255,255)";

      ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
    } else if (shape.type === "circle") {
      ctx.beginPath();

      ctx.arc(shape.centerX, shape.centerY, shape.radius, 0, Math.PI * 2);

      ctx.stroke();

      ctx.closePath();
    }
  });
}

// Working of the above code and canvas drawing //
// This TypeScript code enables interactive rectangle drawing on an HTML canvas. When the user presses the mouse button (mousedown) on the canvas, it records the starting point. As the mouse moves (mousemove) with the button pressed, it shows a white rectangle preview being drawn from the start point to the current cursor position. On releasing the mouse (mouseup), the final rectangle is stored in an array. Each movement clears and redraws the canvas with a black background, then renders all previously drawn rectangles along with the current preview. Although the shape type includes a circle definition, the current implementation only handles rectangles.

async function getShapes(roomId: string) {
  const res = await axios.get(`${HTTP_BACKEND}/chats/${roomId}`);

  const messages = res.data.messages;

  const shapes = messages
    .map((x: { message: string }) => {
      try {
        const messageData = JSON.parse(x.message);

        return messageData.shape;
      } catch (err) {
        console.log(err);

        console.warn("Invalid JSON message:", x.message);

        return null;
      }
    })
    .filter(Boolean); // Remove nulls

  console.log(shapes);

  return shapes;
}
