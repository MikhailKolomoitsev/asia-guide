import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const PhotoSlider = () => {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const photos = [
    {
      src: "/photos/discover-creativity.jpg",
      alt: t('home.slider.photos.discoverCreativity.alt'),
      caption: t('home.slider.photos.discoverCreativity.caption')
    },
    {
      src: "/photos/enjoy-the-sky.png",
      alt: t('home.slider.photos.enjoyTheSky.alt'),
      caption: t('home.slider.photos.enjoyTheSky.caption')
    },
    {
      src: "/photos/feel-your-spirit.jpg",
      alt: t('home.slider.photos.feelYourSpirit.alt'),
      caption: t('home.slider.photos.feelYourSpirit.caption')
    },
    {
      src: "/photos/IMG_7013.jpeg",
      alt: t('home.slider.photos.img7013.alt'),
      caption: t('home.slider.photos.img7013.caption')
    },
    {
      src: "/photos/katana.jpg",
      alt: t('home.slider.photos.katana.alt'),
      caption: t('home.slider.photos.katana.caption')
    },
    {
      src: "/photos/meet-friends.jpg",
      alt: t('home.slider.photos.meetFriends.alt'),
      caption: t('home.slider.photos.meetFriends.caption')
    },
    {
      src: "/photos/reach-top-of-skies.jpg",
      alt: t('home.slider.photos.reachTopOfSkies.alt'),
      caption: t('home.slider.photos.reachTopOfSkies.caption')
    },
    {
      src: "/photos/see-mooling.jpg",
      alt: t('home.slider.photos.seeMooling.alt'),
      caption: t('home.slider.photos.seeMooling.caption')
    },
    {
      src: "/photos/swim-in-waterfals.jpg",
      alt: t('home.slider.photos.swimInWaterfalls.alt'),
      caption: t('home.slider.photos.swimInWaterfalls.caption')
    },
    {
      src: "/photos/take-mom-to-surfing.jpg",
      alt: t('home.slider.photos.takeMomToSurfing.alt'),
      caption: t('home.slider.photos.takeMomToSurfing.caption')
    },
    {
      src: "/photos/try-adrenaline.jpg",
      alt: t('home.slider.photos.tryAdrenaline.alt'),
      caption: t('home.slider.photos.tryAdrenaline.caption')
    },
    {
      src: "/photos/watch-sunsets.jpg",
      alt: t('home.slider.photos.watchSunsets.alt'),
      caption: t('home.slider.photos.watchSunsets.caption')
    }
  ];

  // Split photos into two columns
  const leftColumnPhotos = photos.filter((_, index) => index % 2 === 0);
  const rightColumnPhotos = photos.filter((_, index) => index % 2 === 1);

  const openModal = (photo, e) => {
    // Prevent modal opening if user was dragging
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    setSelectedImage(photo);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Mouse and touch event handlers
  const handleStart = (clientY) => {
    setIsDragging(true);
    setStartY(clientY);
    setIsAnimationPaused(true);
  };

  const handleMove = (clientY) => {
    if (!isDragging) return;

    const deltaY = clientY - startY;
    const newOffset = scrollOffset + deltaY * 0.5; // Sensitivity factor
    setScrollOffset(newOffset);
    setStartY(clientY);

    // Apply transform to both columns
    if (leftColumnRef.current) {
      leftColumnRef.current.style.transform = `translateY(${newOffset}px)`;
    }
    if (rightColumnRef.current) {
      rightColumnRef.current.style.transform = `translateY(${-newOffset}px)`;
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    setIsAnimationPaused(false);
  };

  // Mouse events
  const handleMouseDown = (e) => {
    e.preventDefault();
    handleStart(e.clientY);
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientY);
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  // Touch events
  const handleTouchStart = (e) => {
    handleStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    handleMove(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  // Add global event listeners for mouse
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, startY, scrollOffset]);

  return (
    <div className="photo-slider">
      <div
        className="dual-column-container"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div className="photo-column left-column">
          <div
            ref={leftColumnRef}
            className={`moving-photos ${isAnimationPaused ? 'paused' : ''}`}>
            {/* Duplicate photos for seamless loop */}
            {[...leftColumnPhotos, ...leftColumnPhotos].map((photo, index) => (
              <div key={`left-${index}`} className="photo-item" onClick={(e) => openModal(photo, e)}>
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
          <div
            ref={rightColumnRef}
            className={`moving-photos reverse ${isAnimationPaused ? 'paused' : ''}`}>
            {/* Duplicate photos for seamless loop */}
            {[...rightColumnPhotos, ...rightColumnPhotos].map((photo, index) => (
              <div key={`right-${index}`} className="photo-item" onClick={(e) => openModal(photo, e)}>
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

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="modal-image"
            />
            <div className="modal-caption">
              <p>{selectedImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoSlider;