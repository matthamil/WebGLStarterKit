// @flow

const createAndCompileShader = (gl: WebGLRenderingContext, src: string, type: number): WebGLShader => {
  const shader = gl.createShader(type);
  if (!shader) {
    throw new Error(`Failed to create shader with type: ${type}`);
  }

  gl.shaderSource(shader, src);
  gl.compileShader(shader);

  const isCompiled = !!gl.getShaderParameter(shader, gl.COMPILE_STATUS);

  if (!isCompiled) {
    const compilerError = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error(compilerError);
  }

  return shader;
};

export default createAndCompileShader;