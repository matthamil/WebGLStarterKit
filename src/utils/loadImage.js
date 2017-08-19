// @flow
const loadImage = async (source: string) => new Promise((resolve, reject) => {
  const image = new Image(0, 0);
  image.src = source;
  image.onload = () => {
    resolve(image);
  };
});

export default loadImage;