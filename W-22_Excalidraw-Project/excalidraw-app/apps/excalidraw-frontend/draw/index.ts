// Initializes drawing on the canvas
export async function initDraw(
  canvas: HTMLCanvasElement,
  roomId: string,
  socket: WebSocket
) {
  const ctx = canvas.getContext("2d");

  const existingShapes: shape[] = await getShapes(roomId);

  if (!ctx) return;


  ctx.fillStyle = "rgba(0,0,0)";

  ctx.fillRect(0, 0, canvas.width, canvas.height);

  clearCanvas(canvas, ctx, existingShapes);

  let clicked = false;

  let startX = 0;

  let startY = 0;

  canvas.addEventListener("mousedown", (e) => {
    clicked = true;
    startX = e.clientX;
    startY = e.clientY;
  });

  canvas.addEventListener("mouseup", (e) => {
    clicked = false;

    const width = e.clientX - startX;

    const height = e.clientY - startY;

    // @ts-expect-error: Accessing selectedTool from window object for debugging
    const selectedTool = window.selectedTool;

    let shape: shape | null = null;

    if (selectedTool === "rect") {
      shape = {
        // @ts-expect-error: Accessing selectedTool from window object for debugging
        type: window.selectedTool,
        x: startX,
        y: startY,
        width,
        height,
      };
    } else if (selectedTool === "circle") {
      const radius = Math.max(width, height) / 2;

      shape = {
        // @ts-expect-error: Accessing selectedTool from window object for debugging
        type: window.selectedTool,
        radius: radius,
        centerX: startX + radius,
        centerY: startY + radius,
      };
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

  canvas.addEventListener("mousemove", (e) => {
    if (clicked) {
      const width = e.clientX - startX;

      const height = e.clientY - startY;

      clearCanvas(canvas, ctx, existingShapes);

      ctx.strokeStyle = "rgba(255,255,255)";

      // @ts-expect-error: Accessing selectedTool from window object for debugging
      const selectedTool = window.selectedTool;

      //  ========================================= //
      //  ========================================= //
      //  ========================================= //

      if (selectedTool === "rect") {
        ctx.strokeRect(startX, startY, width, height);
      } else if (selectedTool === "circle") {
        const radius = Math.max(width, height) / 2;

        const centerX = startX + width / 2;

        const centerY = startY + height / 2;

        ctx.beginPath();

        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);

        ctx.stroke();

        ctx.closePath();
      } else if (selectedTool === "pencil") {
        ctx.beginPath();

        ctx.moveTo(startX, startY);

        ctx.lineTo(e.clientX, e.clientY);

        ctx.stroke();

        ctx.closePath();

        const shape: shape = {
          type: "pencil",
          startX: startX,
          startY: startY,
          endX: e.clientX,
          endY: e.clientY,
        };

        existingShapes.push(shape);

        socket.send(
          JSON.stringify({
            type: "chat",
            roomId: Number(roomId),
            message: JSON.stringify({ shape }),
          })
        );

        startX = e.clientX;
        startY = e.clientY;
      }
    }
  });
}

// Clears and redraws the canvas
function clearCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  existingShapes: shape[]
)

