"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function ScrollUpButton() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed right-4 bottom-4 z-50 transition-opacity duration-500 ${
        isHidden ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <span className="text-3xl hover:text-4xl">
        <FontAwesomeIcon icon={faArrowUp} />
      </span>
    </div>
  );
}
