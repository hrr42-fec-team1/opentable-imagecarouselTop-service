export const computeColumnLayout = ({ photos, columns, containerWidth}) => {
  photos = photos.slice(0, 10);
  let minColWidth = containerWidth / columns;
  const margin = minColWidth / 100;
  const photosPositioned = [];
  //small picutre
  const sm = minColWidth;
  //large picture
  const lg = 2 * minColWidth + margin * 2;
  photos[0].width = photos[0].height = photos[1].width = photos[1].height = photos[3].width = photos[3].height = photos[4].width = photos[4].height = photos[6].width = photos[6].height = photos[7].width = photos[7].height = sm;
  photos[2].width = photos[2].height = photos[5].width = photos[5].height = photos[8].width = photos[8].height = photos[9].width = photos[9].height = lg;
  // column1
  photos[0].top = 0;
  photos[0].left = 0;
  photos[1].top = Math.round((sm + margin * 2), 1);
  photos[1].left = 0;
  // column2
  photos[2].top = 0;
  photos[2].left = Math.round((sm + margin * 2), 1);
  // column3
  photos[3].top = 0;
  photos[3].left = Math.round((sm + lg + margin * 4), 1);
  photos[4].top = Math.round((sm + margin * 2), 1);
  photos[4].left = Math.round((sm + lg + margin * 4), 1);
  photos[5].top = 0;
  photos[5].left = Math.round((sm * 2 + lg + margin * 6), 1);
  // column4
  photos[6].top = 0;
  photos[6].left = Math.round((sm * 2 + lg * 2 + margin * 8), 1);
  photos[7].top = Math.round((sm + margin * 2), 1);
  photos[7].left = Math.round((sm * 2 + lg * 2 + margin * 8), 1);
  photos[8].top = 0
  photos[8].left = Math.round((sm * 3 + lg * 2 + margin * 10), 1);
  photos[9].top = 0;
  photos[9].left = Math.round((sm * 3 + lg * 3 + margin * 12), 1);

  for (var i = 0; i < photos.length; i++) {
    photosPositioned.push(photos[i]);
  }


  return photosPositioned;
};
