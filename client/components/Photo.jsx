import React from 'react';

const imgWithClick = { cursor: 'pointer' };

const Photo = ({ index, toggleLightbox, photo, margin, top, left, key }) => {
  const imgStyle = { margin: margin, display: 'block' };
  imgStyle.position = 'absolute';
  imgStyle.left = left;
  imgStyle.top = top;
  let styles = {
    position: 'relative',
    width: photo.width,
    height: photo.height,
    top: top,
    left: left
  };
  return (
    <img
      key={key}
      style={imgStyle}
      {...photo}
      onClick = {() => { toggleLightbox(index); }}
    />
  );
};


export default Photo;
