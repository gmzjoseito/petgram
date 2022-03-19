import React from 'react'

export const ContentLoader = () => (
  <svg
    role='img'
    width='476'
    height='124'
    aria-labelledby='loading-aria'
    viewBox='0 0 476 124'
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
        <circle cx='50' cy='45' r='40' />
        <circle cx='250' cy='45' r='40' />
        <circle cx='350' cy='45' r='40' />
        <circle cx='450' cy='45' r='40' />
        <circle cx='150' cy='45' r='40' />
        <rect x='22' y='88' rx='0' ry='0' width='58' height='8' />
        <rect x='122' y='88' rx='0' ry='0' width='58' height='8' />
        <rect x='222' y='88' rx='0' ry='0' width='58' height='8' />
        <rect x='322' y='88' rx='0' ry='0' width='58' height='8' />
        <rect x='422' y='88' rx='0' ry='0' width='58' height='8' />
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
