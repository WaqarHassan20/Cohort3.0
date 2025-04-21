// ================= CLASS CODE ================

class rectangle {
  constructor(length, width, color) {
    this.length = length;
    this.width = width;
    this.color = color;
  }

  area() {
    return this.length * this.width;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

const rect = new rectangle(4, 5, "Yellow");
console.log("Length is : ", rect.length);
console.log("width is : ", rect.width);
console.log("Color is : ", rect.color);
let result = rect.area();
console.log("Area of rectangle is : ", result);
rect.paint();

// ================= DATE CODE ================

const date = new Date();
console.log(date.toLocaleTimeString());
console.log(date.getFullYear());

// ================= MAP CODE ================

const map = new Map();
map.set("firstName", "Waqar");
map.set("surName", "Hassan");
console.log(map.get("firstName"));
console.log(map.get("surName"));
