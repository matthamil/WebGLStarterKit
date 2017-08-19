// @flow
type CanvasStyle = {
  height: string,
  width: string
};

const defaultCanvasStyle: CanvasStyle= {
  height: window.innerHeight,
  width: window.innerWidth
};

const createCanvas = (id: string = 'canvas-sandbox', style: CanvasStyle = defaultCanvasStyle) => {
  const canvas: HTMLCanvasElement & {
    [attribute: string]: string
  } = document.createElement('canvas');
  canvas.id = id;
  Object.keys(style).forEach((attribute: 'height' | 'width') => {
    canvas[attribute] = String(style[attribute]);
  });
  if (document.body) {
    document.body.appendChild(canvas);
    return document.getElementById(id);
  }
  return null;
};

export default createCanvas;