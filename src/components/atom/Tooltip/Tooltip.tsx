import {  useLayoutEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

interface Props {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  eventType?: 'hover' | 'click';
  size?: 'sm';
}

const TooltipContainerStyle = styled.span`
  visibility: hidden;
  position: absolute;
  display: inline-flex;
  top: calc(100% + 1rem);
  left: 50%;
  z-index: 99;
  white-space: nowrap;
  transition:
    transform 0.2s ease-out,
    opacity 0.2s ease-out,
    visibility 0.2s 0.2s;
  opacity: 0;
  transform: translateY(-0.6rem);
  pointer-events: none;

  .tooltip-content {
    position: relative;
    max-width: 30rem;
    width: max-content;
    padding: 0.8rem 1.2rem;
    border-radius: 0.4rem;
    background-color: #000;
    color: var(--color-gray1);
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.35;
    word-break: keep-all;
    white-space: pre-line;
    text-align: left;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      top: -0.6rem;
      left: 50%;
      width: 1.6rem;
      height: 1rem;
      transform: translateX(-50%);
      background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none"><path d="M8.28087 0.976086C7.88054 0.47568 7.11946 0.475679 6.71913 0.976086L0.799757 8.3753C0.275946 9.03007 0.742119 10 1.58062 10L13.4194 10C14.2579 10 14.7241 9.03007 14.2002 8.37531L8.28087 0.976086Z" fill="black"/></svg>');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-position: center;
    }

    a {
      color: inherit;
      font: inherit;
      text-decoration: underline;
    }

    > * {
      pointer-events: auto;
    }
  }

  &.sm {
    .tooltip-content {
      padding: 0.4rem 0.8rem;
      font-size: 1.2rem;
    }
  }

  &.top {
    top: auto;
    bottom: calc(100% + 1rem);
    transform: translateY(0.6rem);
    .tooltip-content {
      &::before {
        top: auto;
        bottom: -0.6rem;
        transform: translateX(-50%) rotate(180deg);
      }
    }
  }

  &.top.show,
  &.bottom.show {
    transition-delay: 0s;
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  //direction left style
  &.left {
    left: auto;
    right: calc(100% + 1rem);
    top: 50%;
    transform: translate(0.6rem, -50%);
    .tooltip-content {
      transform: none;
      text-align: right;
      &::before {
        top: 50%;
        left: auto;
        right: -0.9rem;
        transform: translate(0, -50%) rotate(90deg);
      }
    }
  }

  //direction right style
  &.right {
    left: calc(100% + 1rem);
    top: 50%;
    transform: translate(-0.6rem, -50%);
    .tooltip-content {
      transform: none;
      text-align: left;
      &::before {
        top: 50%;
        left: -0.9rem;
        transform: translate(0, -50%) rotate(-90deg);
      }
    }
  }

  // left, right show style
  &.left.show,
  &.right.show {
    transition-delay: 0s;
    transform: translateY(-50%) translateX(0);
    opacity: 1;
    visibility: visible;
  }
`;

export const Tooltip = ({
  eventType = 'hover',
  direction = 'bottom',
  size,
  children,
}: React.PropsWithChildren<Props>) => {
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const [show, setShow] = useState(false);

  // position: static인 부모에 relative를 추가해줌
  useLayoutEffect(() => {
    if (!tooltipRef.current) return;

    const $tooltip = tooltipRef.current;
    const $parent = $tooltip?.parentElement?.closest(
      'div, a, button, span'
    ) as HTMLElement;

    if ($parent) {
      const parentPosition = window.getComputedStyle($parent).position;

      if (parentPosition === 'static') {
        $parent.style.position = show ? 'relative' : '';
      }
    }
  }, [show]);

  // event type에 따라서 show를 관리해야함
  useLayoutEffect(() => {
    if (!tooltipRef.current) return () => {};

    const $tooltip = tooltipRef.current;
    const $parent = $tooltip?.parentElement?.closest(
      'div, a, button, span'
    ) as HTMLElement;

    if (eventType === 'hover') {
      const handleMouseEnter = () => setShow(true);
      const handleMouseLeave = () => setShow(false);

      $parent?.addEventListener('mouseenter', handleMouseEnter);
      $parent?.addEventListener('mouseleave', handleMouseLeave);
      $parent?.addEventListener('focusin', handleMouseEnter);
      $parent?.addEventListener('focusout', handleMouseLeave);
      return () => {
        $parent?.removeEventListener('mouseenter', handleMouseEnter);
        $parent?.removeEventListener('mouseleave', handleMouseLeave);
        $parent?.removeEventListener('focusin', handleMouseEnter);
        $parent?.removeEventListener('focusout', handleMouseLeave);
      };
    }

    if (eventType === 'click') {
      const handleClick = (e: MouseEvent) => {
        if ($tooltip.contains(e.target as Node)) return;
        setShow(prev => !prev);
      };

      const handleClickOutside = (e: MouseEvent) => {
        if (!$parent?.contains(e.target as Node)) {
          setShow(false);
        }
      };

      $parent?.addEventListener('click', handleClick);
      document.addEventListener('click', handleClickOutside);

      return () => {
        $parent?.removeEventListener('click', handleClick);
        document.removeEventListener('click', handleClickOutside);
      };
    }

    return () => {};
  }, [eventType]);

  return (
    <TooltipContainerStyle
      ref={tooltipRef}
      className={`${show ? 'show' : ''} ${direction} ${size}`}
    >
      <span className="tooltip-content">{children}</span>
    </TooltipContainerStyle>
  );
};
