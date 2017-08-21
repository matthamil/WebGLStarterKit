// @flow

import createAndCompileShader from './createAndCompileShader';

type ShaderConfigType = {
  vertexShaderSrc: string,
  fragmentShaderSrc: string
};

const createProgram = (gl: WebGLRenderingContext, { vertexShaderSrc, fragmentShaderSrc }: ShaderConfigType): {
  gl: WebGLRenderingContext,
  program: WebGLProgram
} => {
  const vertexShader = createAndCompileShader(gl, vertexShaderSrc, gl.VERTEX_SHADER);
  const fragmentShader = createAndCompileShader(gl, fragmentShaderSrc, gl.FRAGMENT_SHADER);

  const program = gl.createProgram();
  if (!program) {
    throw new Error('Failed to create program.');
  }

  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  gl.linkProgram(program);

  const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    const linkError = gl.getProgramInfoLog(program);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    throw new Error(linkError);
  }

  gl.useProgram(program);

  return {
    gl,
    program
  };
};

const initWebGLProgram = (canvas: HTMLCanvasElement): any => {
  if (!canvas) {
    throw new Error('No canvas element passed to initWebGL');
  }
  let gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    alert('Your browser does not support WebGL.');
    throw new Error('WebGL is not supported in this browser.');
  }

  // $FlowFixMe
  return (shaderConfig: ShaderConfig): WebGLRenderingContext => createProgram(gl, shaderConfig);
};

export default initWebGLProgram;