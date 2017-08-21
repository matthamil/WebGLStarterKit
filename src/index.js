import 'babel-polyfill';
import createCanvas from './utils/createCanvas';
import initWebGLProgram from './utils/initWebGLProgram';

const vertexShaderText = `
  void main() {
    // vertex shader code
  }
`;

const fragmentShaderText = `
  void main() {
    // fragment shader code
  }
`;

const init = () => {
  const canvas = createCanvas('game-surface', {
    height: window.innerHeight,
    width: window.innerWidth
  });
  const shaderConfig = {
    vertexShaderSrc: vertexShaderText,
    fragmentShaderSrc: fragmentShaderText
  };
  const gl = initWebGLProgram(canvas)(shaderConfig);

  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);
};

init();