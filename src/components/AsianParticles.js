import React from 'react';

const AsianParticles = () => {
  const particles = [
    { emoji: '🌸', delay: 0, duration: 15 },
    { emoji: '🌴', delay: 2, duration: 18 },
    { emoji: '🏮', delay: 4, duration: 20 },
    { emoji: '🥢', delay: 6, duration: 16 },
    { emoji: '🍜', delay: 8, duration: 19 },
    { emoji: '🥥', delay: 10, duration: 17 },
    { emoji: '🐉', delay: 12, duration: 22 },
    { emoji: '⛩️', delay: 14, duration: 21 },
    { emoji: '🎋', delay: 16, duration: 18 },
    { emoji: '🍱', delay: 18, duration: 16 },
    { emoji: '🌸', delay: 20, duration: 19 },
    { emoji: '🌴', delay: 22, duration: 17 },
    { emoji: '🍣', delay: 24, duration: 18 },
    { emoji: '🥭', delay: 26, duration: 16 },
    { emoji: '🐅', delay: 28, duration: 20 },
    { emoji: '🦋', delay: 30, duration: 15 },
    { emoji: '🌺', delay: 32, duration: 19 },
    { emoji: '🥖', delay: 34, duration: 17 },
    { emoji: '🍯', delay: 36, duration: 21 },
    { emoji: '🦚', delay: 38, duration: 18 },
    { emoji: '🌊', delay: 40, duration: 16 },
    { emoji: '🏯', delay: 42, duration: 20 },
    { emoji: '🎎', delay: 44, duration: 19 },
    { emoji: '🪷', delay: 46, duration: 17 },
    { emoji: '🍤', delay: 48, duration: 18 },
    { emoji: '🐘', delay: 50, duration: 22 },
    { emoji: '🥟', delay: 52, duration: 16 },
    { emoji: '🍊', delay: 54, duration: 15 },
    { emoji: '🌿', delay: 56, duration: 19 },
    { emoji: '🦎', delay: 58, duration: 17 }
  ];

  return (
    <div className="asian-particles-container">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="floating-particle"
          style={{
            '--delay': `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--start-x': `${Math.random() * 100}%`,
            '--end-x': `${Math.random() * 100}%`
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default AsianParticles;