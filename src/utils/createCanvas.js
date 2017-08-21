// @flow

type CanvasStyleType = {
  height: string | number,
  width: string | number
};

const defaultCanvasStyle: CanvasStyleType = {
  height: window.innerHeight,
  width: window.innerWidth
};

const createCanvas = (id: string = 'canvas-sandbox', style: CanvasStyleType = defaultCanvasStyle): HTMLCanvasElement => {
  const canvas: HTMLCanvasElement & {
    [attribute: string]: string
  } = document.createElement('canvas');
  canvas.id = id;
  Object.keys(style).forEach((attribute: 'height' | 'width') => {
    canvas[attribute] = String(style[attribute]);
  });

  if (!document.body) {
    throw new Error('Cannot attach canvas to DOM.');
  }

  document.body.appendChild(canvas);
  return canvas;
};

export default createCanvas;