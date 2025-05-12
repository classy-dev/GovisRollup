import React from 'react';
import * as Loader from 'react-spinners';
import styled from '@emotion/styled';

type SpinnerVariant =
  | 'beat'
  | 'climbing'
  | 'clock'
  | 'fade'
  | 'small'
  | 'pacman'
  | 'puff'
  | 'pulse'
  | 'ring'
  | 'scale'
  | 'sync';

type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg';

export interface SpinnerProps {
  variant?: SpinnerVariant;
  width?: number;
  height?: number;
  scaleDown?: SpinnerSize;
  size?: number;
  color?: string;
  radius?: number;
  speedMultiplier?: number;
}

const SmallFade = styled.div`
  position: relative;
  transform: scale(0.5);
  transform-origin: 50% 50%;
  left: 2px;
`;

const Spinner = ({
  variant = 'small',
  width,
  height,
  size,
  scaleDown,
  color,
  radius,
  speedMultiplier,
}: SpinnerProps) => {
  return (
    <>
      {variant === 'small' ? (
        <SmallFade>
          <Loader.FadeLoader
            color={color ?? '#36d7b7'}
            className="spinner"
            radius={radius ?? 1}
            speedMultiplier={speedMultiplier ?? 1}
          />
        </SmallFade>
      ) : variant === 'fade' ? (
        <Loader.FadeLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          width={width ?? 5}
          height={height ?? 15}
          radius={radius ?? 2}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'beat' ? (
        <Loader.BeatLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'climbing' ? (
        <Loader.ClimbingBoxLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'clock' ? (
        <Loader.ClockLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'pacman' ? (
        <Loader.PacmanLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'puff' ? (
        <Loader.PuffLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'pulse' ? (
        <Loader.PulseLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'ring' ? (
        <Loader.RingLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : variant === 'scale' ? (
        <Loader.ScaleLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          width={width ?? 4}
          height={height ?? 35}
          radius={radius ?? 2}
          speedMultiplier={speedMultiplier ?? 1}
        />
      ) : (
        <Loader.SyncLoader
          color={color ?? '#36d7b7'}
          className="spinner"
          size={size ?? 15}
          speedMultiplier={speedMultiplier ?? 1}
        />
      )}
    </>
  );
};

export default Spinner;

export const PageSpinnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: calc(50% + 16rem);
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  width: 20rem;
  height: 13rem;
  border: 1px solid #ddd;
  border-radius: 0.8rem;

  > span {
    margin-left: 1rem;
  }

  /* common */
  .loading {
    margin-top: 10px;
    font-size: 1.6rem;
    font-weight: 400;
    text-align: center;
    color: #fff;
  }
  .loading span {
    display: inline-block;
    margin: 0 -0.05em;
  }

  /* code #1 */
  .loading01 span {
    animation: loading01 2s infinite alternate;
  }
  .loading01 span:nth-child(1) {
    animation-delay: 0s;
  }
  .loading01 span:nth-child(2) {
    animation-delay: 0.1s;
  }
  .loading01 span:nth-child(3) {
    animation-delay: 0.2s;
  }
  .loading01 span:nth-child(4) {
    animation-delay: 0.3s;
  }
  .loading01 span:nth-child(5) {
    animation-delay: 0.4s;
  }
  .loading01 span:nth-child(6) {
    animation-delay: 0.5s;
  }
  .loading01 span:nth-child(7) {
    animation-delay: 0.6s;
  }

  @keyframes loading01 {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

// https://codepen.io/nxworld/pen/zwGpXr
export const PageSpinner = ({
  spinnerText = 'Loading',
}: {
  spinnerText?: string;
}) => {
  return (
    <PageSpinnerWrap>
      <Spinner variant="fade" />
      <div className="loading loading01">
        {spinnerText.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </PageSpinnerWrap>
  );
};
