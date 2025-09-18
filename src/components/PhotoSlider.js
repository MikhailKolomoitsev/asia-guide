import React from 'react';
import { useTranslation } from 'react-i18next';

const PhotoSlider = () => {
  const { t } = useTranslation();

  const photos = [
    {
      src: "/photos/author-balcony.jpg",
      alt: t('home.slider.photos.author.alt'),
      caption: t('home.slider.photos.author.caption')
    },
    {
      src: "/photos/thailand-temple.jpg",
      alt: t('home.slider.photos.thailand.alt'),
      caption: t('home.slider.photos.thailand.caption')
    },
    {
      src: "/photos/vietnam-street.jpg",
      alt: t('home.slider.photos.vietnam.alt'),
      caption: t('home.slider.photos.vietnam.caption')
    },
    {
      src: "/photos/bali-rice-fields.jpg",
      alt: t('home.slider.photos.bali.alt'),
      caption: t('home.slider.photos.bali.caption')
    },
    {
      src: "/photos/malaysia-city.jpg",
      alt: t('home.slider.photos.malaysia.alt'),
      caption: t('home.slider.photos.malaysia.caption')
    }
  ];

  // Split photos into two columns
  const leftColumnPhotos = photos.filter((_, index) => index % 2 === 0);
  const rightColumnPhotos = photos.filter((_, index) => index % 2 === 1);

  return (
    <div className="photo-slider">
      <div className="dual-column-container">
        <div className="photo-column left-column">
          <div className="moving-photos">
            {/* Duplicate photos for seamless loop */}
            {[...leftColumnPhotos, ...leftColumnPhotos].map((photo, index) => (
              <div key={`left-${index}`} className="photo-item">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="column-image"
                />
                <div className="photo-overlay">
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="photo-column right-column">
          <div className="moving-photos reverse">
            {/* Duplicate photos for seamless loop */}
            {[...rightColumnPhotos, ...rightColumnPhotos].map((photo, index) => (
              <div key={`right-${index}`} className="photo-item">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="column-image"
                />
                <div className="photo-overlay">
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSlider;