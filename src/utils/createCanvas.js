// @flow

type CanvasStyleType = {
  height: string,
  width: string
};

const defaultCanvasStyle: CanvasStyleType = {
  height: window.innerHeight,
  width: window.innerWidth
};

const createCanvas = (id: string = 'canvas-sandbox', style: CanvasStyleType = defaultCanvasStyle): ?HTMLElement => {
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