import React from 'react';
import { Carousel } from 'antd';
import { useGetPhotosQuery } from '../api/photoApi'; 
import { useNavigate } from 'react-router-dom';

function Carousels() {
  const { data: photosData } = useGetPhotosQuery();
  const photos=photosData?.photos
  const navigate = useNavigate();

// Carousel styling//
  const contentStyle = {
    height: '660px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%'
  };
  // ViewPhoto Functionality //
  const viewPhoto = (photoId) => {
   
    navigate(`/${photoId}`);
  };
  return (
    <Carousel autoplay>
      {photos?.map((photo, index) => (
        <div className = "image_section" key={index}>
          <img
            src={photo.url}
            alt={photo.title}
            style={{ ...contentStyle, background: `url(${photo.url}) center/cover` }}
          />
          <div className = "view-btn">
          <button className="btn btn-primary" onClick={() => viewPhoto(photo.id)} style={{marginLeft:'43rem'}}>View</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Carousels;