import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const IceButton = () => {
  const btnRef = useRef(null);
  const tlRef = useRef();

  useGSAP(
    () => {
      const drip1 = btnRef.current.querySelector('.drip');
      const drip2 = btnRef.current.querySelector('.drip2');
      const drip3 = btnRef.current.querySelector('.drip3');

      const tl = gsap.timeline({ paused: true });

      tl.to('.dropsStart', {
        scaleY: 1,
        transformOrigin: '50% 0%',
        duration: 0.25,
        ease: 'power3.out',
      })
        .to(
          '.drops',
          {
            top: 60,
            duration: 0.75,
            ease: 'power3.out',
          },
          0
        )
        .to(
          drip1,
          {
            top: 140,
            opacity: 1,
            duration: 0.7,
          },
          0.1
        )
        .to(
          drip2,
          {
            top: 160,
            opacity: 1,
            duration: 0.7,
          },
          0.25
        )
        .to(
          drip3,
          {
            top: 140,
            opacity: 1,
            duration: 0.7,
          },
          0.4
        );

      tlRef.current = tl;
    },
    { scope: btnRef }
  );

  return (
    <div
      ref={btnRef}
      onMouseEnter={() => tlRef.current?.play()}
      onMouseLeave={() => tlRef.current?.reverse()}
      className="w-[220px] h-[60px] bg-[#e3a458] rounded-full m-auto cursor-pointer absolute inset-0 overflow-hidden"
    >
      <div className="absolute top-5 left-7 z-20 text-white font-semibold text-sm tracking-[0.02em] uppercase font-[Oswald,sans-serif]">
        chug a spylt
      </div>

      {/* Drops Start */}
      <div className="dropsStart absolute top-[60px] scale-y-0">
        <svg width="200px" height="80px" viewBox="0 0 200 80">
          <path fill="#e3a458" d="M44,0c0,0-6,0-6,5.4c0,0.1,0,0.2,0,0.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0,0,0-0.2C27,0,20.8,0,20.8,0" />
          <path fill="#e3a458" d="M68,0c0,0-6,0-6,5.4c0,0.1,0,0.2,0,0.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0,0,0-0.2C51,0,44.8,0,44.8,0" />
          <path fill="#e3a458" d="M122,0c0,0-6,0-6,5.4c0,0.1,0,0.2,0,0.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0,0,0-0.2C105,0,98.8,0,98.8,0" />
          <path fill="#e3a458" d="M158,0c0,0-6,0-6,5.4c0,0.1,0,0.2,0,0.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0,0,0-0.2c0-5.4-6.2-5.4-6.2-5.4" />
          <path fill="#e3a458" d="M180,0c0,0-6,0-6,5.4c0,0.1,0,0.2,0,0.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0,0,0-0.2c0-5.4-6.2-5.4-6.2-5.4" />
        </svg>
      </div>

      {/* Drops */}
      <div className="drops absolute top-0">
        <svg width="200px" height="80px" viewBox="0 0 200 80">
          <path fill="#e3a458" d="M44,0c0,0-6,0-6,5.4s0,11.2,0,11.2s0.1,5.4-5.7,5.4c-5.8,0-5.3-5.4-5.3-5.4s0-5.8,0-11.2S20.8,0,20.8,0" />
          <path fill="#e3a458" d="M67.9,0c0,0-5.9,0-5.9,5.4S62,37,62,37s-0.1,6-5.9,6c-5.8,0-6.1-6-6.1-6s0-26.2,0-31.6S44.3,0,44.3,0" />
          <path fill="#e3a458" d="M122.1,0c0,0-6.1,0-6.1,5.4s0,11.2,0,11.2s0.2,5.4-5.6,5.4c-5.8,0-6.5-5.4-6.5-5.4s0-5.8,0-11.2C104,0,98.4,0,98.4,0" />
          <path fill="#e3a458" d="M158.1,0c0,0-6.1,0-6.1,5.4s0,24.8,0,24.8s0.3,6.8-5.5,6.8c-5.8,0-5.5-6.8-5.5-6.8s0-19.4,0-24.8S134.9,0,134.9,0" />
          <path fill="#e3a458" d="M180.3,0c0,0-6.3,0-6.3,5.4s0,2.4,0,2.4s0.7,6.2-5.1,6.2c-5.8,0-5.9-6.2-5.9-6.2s0,3.1,0-2.4c0-5.4-6-5.4-6-5.4" />
        </svg>
      </div>

      {/* Drips */}
      {[{ className: 'drip', left: 'left-[40px]' }, { className: 'drip2', left: 'left-[156px]' }, { className: 'drip3', left: 'left-[120px]' }].map(
        ({ className, left }, i) => (
          <div key={i} className={`${className} absolute ${left} top-0`}>
            <svg width="11px" height="30px" viewBox="0 0 16 30">
              <path
                fill="#e3a458"
                d="M13.2,13L7.9,0.2L2.2,13C2.2,13-5,28.3,7,28.9c0,0,0.4,0,0.5,0s0.5,0,0.5,0C21,28.3,13.2,13,13.2,13z"
              />
            </svg>
          </div>
        )
      )}
    </div>
  );
};

export default IceButton;