import React, { useEffect, useState } from 'react';

const Loader = ({ onFinish }) => {
  const [isHiding, setIsHiding] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      setIsHiding(true);
      setTimeout(() => {
        document.body.style.overflow = '';
        onFinish();
      }, 500); // 500ms for fade out animation
    }, 1500); // Show loader for 2 seconds

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [onFinish]);

  return (
    <div className={`preloader ${isHiding ? 'fade-out' : ''}`}>
      <div className="loader-content">
        <span className="loader-text pulse">C</span>
        <span className="loader-text">K</span>
      </div>
      <div className="loader-progress">
        <div className="loader-bar"></div>
      </div>
    </div>
  );
};

export default Loader;
