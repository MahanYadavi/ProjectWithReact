import React, { useState } from 'react';

type Props = {
  className?: string;
  src?: string;
  alt?: string;
  invertInDark?: boolean;
};

const Logo: React.FC<Props> = ({ className = 'h-10', src = '/images/Logo.png', alt = 'PowerFlow', invertInDark = true }) => {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span className="text-xl font-bold bg-gradient-to-r from-navy-900 to-navy-700 dark:from-gold-400 dark:to-gold-600 bg-clip-text text-transparent">
        {alt}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`${className} object-contain ${invertInDark ? 'dark:invert' : ''}`}
      onError={() => setErrored(true)}
      draggable={false}
    />
  );
};

export default Logo;
