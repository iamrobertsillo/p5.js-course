// Import stylesheets
import p5 from 'p5';
import './style.css';

// Write Javascript code!
function createGrid() {
  const points = [];
  const count = 5;
  for (let x = 0; x <= count; x++) {
    for (let y = 0; y <= count; y++) {
      const u = x / count;
      const v = y / count;
      points.push([u, v]);
    }
  }
  return points;
}
const points = createGrid();

const sketch = (s) => {
  s.setup = () => {
    s.createCanvas(500, 500);
    s.background(0);
  };

  s.draw = () => {
    points.forEach((point) => {
      let x = point.u * s.width;
      let y = point.v * s.height;
      s.fill('#fff');
      s.circle(x, y, 10);
    });
  };
};
const sketchInit = new p5(sketch);
