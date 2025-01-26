class Background {
    constructor(color) {
      this.color = color; // Color in the form [r, g, b, a]
    }
  
    // Render the background by changing the canvas color
    render() {
      gl.clearColor(this.color[0], this.color[1], this.color[2], this.color[3]);
      gl.clear(gl.COLOR_BUFFER_BIT);
    }
  }
  