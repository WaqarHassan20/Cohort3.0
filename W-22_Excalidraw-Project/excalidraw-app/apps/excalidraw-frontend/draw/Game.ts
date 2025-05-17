import { tool } from "@/components/Canvas";
import { getShapes } from "./http";

type shape =
  | {
      type: "rect";
      x: number;
      y: number;
      width: number;
      height: number;
    }
  | {
      type: "circle";
      radius: number;
      centerX: number;
      centerY: number;
    }
  | {
      type: "pencil";
      startX: number;
      startY: number;
      endX: number;
      endY: number;
    };

export class Game {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private existingShapes: shape[] = [];
  private roomId: string;
  private clicked: boolean = false;
  private startX: number = 0;
  private startY: number = 0;
  private selectedTool: tool = "circle";

  socket: WebSocket;
  constructor(canvas: HTMLCanvasElement, roomId: string, socket: WebSocket) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d")!;
    this.existingShapes = [];
    this.roomId = roomId;
    this.socket = socket;
    this.init();
    this.initHandlers();
    this.initMouseHandlers();
  }

  Destructor() {
    this.canvas.removeEventListener(
      "mousedown",
      this.mouseDownHandler.bind(this)
    );
    this.canvas.removeEventListener("mouseup", this.mouseUpHandler.bind(this));
    this.canvas.removeEventListener(
      "mousemove",
      this.mouseMoveHandler.bind(this)
    );
  }

  setTool(shape: "rect" | "circle" | "pencil") {
    this.selectedTool = shape;
  }

  async init() {
    this.existingShapes = await getShapes(this.roomId);
    console.log(this.existingShapes);
    this.clearCanvas();
  }

  initHandlers() {
    this.socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      if (message.type === "chat") {
        const parsedShape = JSON.parse(message.message);

        this.existingShapes.push(parsedShape.shape);

        this.clearCanvas();
      }
    };
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.fillStyle = "rgba(0,0,0)";

    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.existingShapes.map((shape) => {
      if (shape.type === "rect") {
        this.ctx.strokeStyle = "rgba(255,255,255)";

        this.ctx.strokeRect(shape.x, shape.y, shape.width, shape.height);
      } else if (shape.type === "circle") {
        this.ctx.beginPath();

        this.ctx.arc(
          shape.centerX,
          shape.centerY,
          Math.abs(shape.radius),
          0,
          Math.PI * 2
        );

        this.ctx.stroke();

        this.ctx.closePath();
      } else if (shape.type === "pencil") {
        this.ctx.beginPath();

        this.ctx.moveTo(shape.startX, shape.startY);

        this.ctx.lineTo(shape.endX, shape.endY);

        this.ctx.stroke();

        this.ctx.closePath();
      }
    });
  }

  mouseDownHandler(e: MouseEvent): void {
    this.clicked = true;
    this.startX = e.clientX;
    this.startY = e.clientY;
  }

  mouseUpHandler(e: MouseEvent): void {
    this.clicked = false;
    const width: number = e.clientX - this.startX;

    const height: number = e.clientY - this.startY;

    const selectedTool: tool = this.selectedTool;

    let shape: shape | null = null;

    if (selectedTool === "rect") {
      shape = {
        type: "rect",
        x: this.startX,
        y: this.startY,
        width,
        height,
      };
    } else if (selectedTool === "circle") {
      const radius: number = Math.max(width, height) / 2;

      shape = {
        type: "circle",
        radius: radius,
        centerX: this.startX + width / 2,
        centerY: this.startY + height / 2,
      };
    } else if (selectedTool === "pencil") {
      shape = {
        type: "pencil",
        startX: this.startX,
        startY: this.startY,
        endX: e.clientX,
        endY: e.clientY,
      };
    }

    if (!shape) {
      console.log("Invalid shape type");
      return;
    }

    this.existingShapes.push(shape);

    this.socket.send(
      JSON.stringify({
        type: "chat",
        roomId: Number(this.roomId),
        message: JSON.stringify({ shape }),
      })
    );
  }

  mouseMoveHandler(e: MouseEvent): void {
    if (this.clicked) {
      const width = e.clientX - this.startX;

      const height = e.clientY - this.startY;

      this.clearCanvas();

      this.ctx.strokeStyle = "rgba(255,255,255)";

      const selectedTool = this.selectedTool;

      //  ========================================= //
      //  ========================================= //
      //  ========================================= //

      if (selectedTool === "rect") {
        this.ctx.strokeRect(this.startX, this.startY, width, height);
      } else if (selectedTool === "circle") {
        const width = e.clientX - this.startX;
        const height = e.clientY - this.startY;

        const radius = Math.max(Math.abs(width), Math.abs(height)) / 2;

        const centerX = this.startX + width / 2;
        const centerY = this.startY + height / 2;

        this.ctx.beginPath();

        this.ctx.arc(centerX, centerY, Math.abs(radius), 0, Math.PI * 2);

        this.ctx.stroke();

        this.ctx.closePath();
      } else if (selectedTool === "pencil") {
        this.ctx.beginPath();

        this.ctx.moveTo(this.startX, this.startY);

        this.ctx.lineTo(e.clientX, e.clientY);

        this.ctx.stroke();

        this.ctx.closePath();

        const shape: shape = {
          type: "pencil",
          startX: this.startX,
          startY: this.startY,
          endX: e.clientX,
          endY: e.clientY,
        };

        this.existingShapes.push(shape);

        this.socket.send(
          JSON.stringify({
            type: "chat",
            roomId: Number(this.roomId),
            message: JSON.stringify({ shape }),
          })
        );

        this.startX = e.clientX;
        this.startY = e.clientY;
      }
    }
  }

  initMouseHandlers() {
    // Arrow functions inherit this from their surrounding scope, so this correctly refers to the class instance. Normal functions don't, causing this to become undefined or incorrect in class methods.
    // using the arrow function over the normal functions //

    this.canvas.addEventListener("mousedown", this.mouseDownHandler.bind(this));

    this.canvas.addEventListener("mouseup", this.mouseUpHandler.bind(this));

    this.canvas.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  }
}
