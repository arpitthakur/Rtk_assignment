import React from "react";
import { useGetPhotoByIdQuery } from "../api/photoApi";
import { useNavigate, useParams } from "react-router-dom";

const ImageView = () => {
  const { id } = useParams();
  const { data: photoData } = useGetPhotoByIdQuery(id);
  const photo = photoData?.photo;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  if (!photo) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="image-view">
      <img src={photo.url} alt={photo.title} className = "photo_img" />
      <div className="heading-text">
      <p className="title">Title: {photo.title}</p>
      <p className="description">Description: {photo.description}</p>
      <p className="url">URL: {photo.url}</p>
      </div>
      <button className="carousel-btn btn btn-primary" onClick={goBack}>
        Back to Carousel
      </button>
    </div>
  );
};

export default ImageView;
