// Initialize Konva stage
const stage = new Konva.Stage({
  container: 'map',
  width: window.innerWidth * 0.75,
  height: window.innerHeight
});

const layer = new Konva.Layer();
stage.add(layer);

let nodes = [];
let links = [];

// Utility function to create blinking effect (online/offline)
function blink(node, color1, color2) {
  let isPrimary = true;
  setInterval(() => {
    node.fill(isPrimary ? color1 : color2);
    layer.draw();
    isPrimary = !isPrimary;
  }, 800);
}

// Add Router
function addRouter() {
  const router = new Konva.Circle({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    radius: 20,
    fill: 'blue',
    stroke: 'black',
    strokeWidth: 2,
    draggable: true
  });
  layer.add(router);
  nodes.push(router);
  blink(router, 'blue', 'lightblue');
}

// Add Switch
function addSwitch() {
  const sw = new Konva.Rect({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    width: 40,
    height: 20,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 2,
    draggable: true
  });
  layer.add(sw);
  nodes.push(sw);
  blink(sw, 'green', 'lightgreen');
}

// Add Access Point
function addAP() {
  const ap = new Konva.RegularPolygon({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    sides: 3,
    radius: 20,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 2,
    draggable: true
  });
  layer.add(ap);
  nodes.push(ap);
  blink(ap, 'orange', 'yellow');
}

// Add Server
function addServer() {
  const server = new Konva.Rect({
    x: Math.random() * stage.width(),
    y: Math.random() * stage.height(),
    width: 30,
    height: 30,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 2,
    draggable: true
  });
  layer.add(server);
  nodes.push(server);
  blink(server, 'red', 'pink');
}

// Simulate links between nodes
function simulate() {
  clearLinks();
  for (let i = 0; i < nodes.length - 1; i++) {
    const line = new Konva.Line({
      points: [nodes[i].x(), nodes[i].y(), nodes[i + 1].x(), nodes[i + 1].y()],
      stroke: 'white',
      strokeWidth: 2,
      dash: [10, 5]
    });
    layer.add(line);
    links.push(line);
  }
  layer.draw();
}

// Clear everything
function clearStage() {
  nodes.forEach(n => n.destroy());
  links.forEach(l => l.destroy());
  nodes = [];
  links = [];
  layer.draw();
}

function clearLinks() {
  links.forEach(l => l.destroy());
  links = [];
  layer.draw();
}