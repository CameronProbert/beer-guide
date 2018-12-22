import React from 'react';

const Image = ({image}) => {
  console.log(image)
  return (
    <div className='centre-align-contents'>
      <img src={image.image} alt={image.alt}/>
      <p className='description subtitle'>{image.subtitle}</p>
    </div>
  )
}

export default Image;