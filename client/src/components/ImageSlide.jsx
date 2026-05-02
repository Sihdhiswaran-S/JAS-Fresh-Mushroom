import React, { useState, useEffect, useRef } from 'react'
import '../styles/ImageSlide.css'

const images = [
  {
    url: 'https://5.imimg.com/data5/SELLER/Default/2023/7/328178976/HK/RA/HU/67969090/fresh-oyster-mushroom.jpg',
    label: 'Wild Forest Mushrooms'
  },
  {
    url: 'https://cdn.dotpe.in/longtail/item_thumbnails/7193447/1NIH4RES.webp',
    label: 'Fresh Button Mushrooms'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gu8DDEDeJmFr8Ud1JCap6qqcA3rIgZvblA&s',
    label: 'Organic Harvest'
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYrY1IE7gcFnneZaqrkEwjBxilXlgHfovEg&s',
    label: 'Farm to Table'
  },
  {
    url: 'https://orishtech.com/wp-content/uploads/2025/07/Fresh-Mushroom-scaled.jpg',
    label: 'Gourmet Selection'
  },
]
const bacgroundimg =
  "https://cpur.in/blog/wp-content/uploads/2024/03/WhatsApp-Image-2024-10-11-at-12.48.06-PM-13.jpeg";

function ImageSlide() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, 3000)
  }

  const stopSlider = () => {
    clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startSlider()
    return () => stopSlider()
  }, [])

  return (
    <div
      className="slide__wrapper"
      onMouseEnter={stopSlider}
      onMouseLeave={startSlider}>
      {/* Slides */}
      <div
        className="slide__track"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, i) => (
          <div
            className="slide__item"
            key={i}
            style={{ backgroundImage: `url(${bacgroundimg})` }}>
            <img src={img.url} alt={img.label} className="slide__img" />
            <div className="slide__overlay">
              <span className="slide__label">{img.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="slide__dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`slide__dot ${i === current ? "slide__dot--active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="slide__progress">
        <div className="slide__progress-bar" key={current} />
      </div>
    </div>
  );
}

export default ImageSlide