const fishString =
  '357,160/406,150/447,121/497,92/546,79/518,122/503,170/504,228/515,286/547,326/494,324/449,299/404,265/364,297/317,320/267,335/217,338/160,316/116,286/122,233/157,189/201,152/256,128/306,129/355,156';
const fishArray = fishString.split('/');
const fish = fishArray.map((e) => {
  const coord = e.split(',');
  return {
    x: Number(coord[0]) / 10,
    y: Number(coord[1]) / 10,
  };
});

export default fish;
