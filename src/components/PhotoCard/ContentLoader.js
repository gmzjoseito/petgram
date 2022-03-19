import React from 'react'

export const ContentLoader = () => (
  <svg
    role='img'
    width='97%'
    height='460'
    aria-labelledby='loading-aria'
    viewBox='0 0 400 460'
    preserveAspectRatio='none'
  >
    <title id='loading-aria'>Loading...</title>
    <rect
      x='0'
      y='0'
      width='100%'
      height='100%'
      clipPath='url(#clip-path)'
      style={{ fill: 'url("#fill")' }}
    />
    <defs>
      <clipPath id='clip-path'>
        <rect x='12' y='2' rx='2' ry='2' width='400' height='250' />
        <circle cx='29' cy='268' r='12' />
        <rect x='48' y='265' rx='0' ry='0' width='44' height='6' />
      </clipPath>
      <linearGradient id='fill'>
        <stop
          offset='0.599964'
          stopColor='#f3f3f3'
          stopOpacity='1'
        >
          <animate
            attributeName='offset'
            values='-2; -2; 1'
            keyTimes='0; 0.25; 1'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
        <stop
          offset='1.59996'
          stopColor='#ecebeb'
          stopOpacity='1'
        >
          <animate
            attributeName='offset'
            values='-1; -1; 2'
            keyTimes='0; 0.25; 1'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
        <stop
          offset='2.59996'
          stopColor='#f3f3f3'
          stopOpacity='1'
        >
          <animate
            attributeName='offset'
            values='0; 0; 3'
            keyTimes='0; 0.25; 1'
            dur='2s'
            repeatCount='indefinite'
          />
        </stop>
      </linearGradient>
    </defs>
  </svg>
)
