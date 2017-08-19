// @flow

const initWebGL = (canvas: HTMLCanvasElement): ?WebGLRenderingContext => {
  let gl = canvas.getContext('webgl');
  if (!gl) {
    console.info('WebGL not supported. Falling back on experimental-webgl.');
    gl = canvas.getContext('experimental-webgl');
  }
  if (!gl) {
    alert('Your browser does not support WebGL.');
  }

  return gl;
};

export default initWebGL;