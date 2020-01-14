import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import tw from "tailwind.macro";
import { width as twWidth } from "../../tailwind";
import { hidden } from "../styles/utils";

const Wrapper = styled.svg`
  ${tw`absolute`};
  stroke: currentColor;
  ${props => props.hiddenMobile && hidden};
  color: ${props => props.stroke};
  width: ${props => props.svgWidth};
  fill: ${props => props.fill};
  left: ${props => props.left};
  top: ${props => props.top};
`;

const icons = {
  triangle: {
    shape: (
      <>
        <path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" />
      </>
    ),
    viewBox: "0 0 24 24"
  },
  circle: {
    //iron-man
    shape: (
      <>
        <path d="M 32 1.9375 C 27.789063 1.9375 23.574219 2.859375 19.652344 4.703125 L 18.800781 5.105469 C 15.867188 6.484375 13.738281 9.207031 13.105469 12.382813 L 11.210938 21.84375 C 11.148438 22.148438 10.957031 22.40625 10.675781 22.542969 C 9.644531 23.0625 9 24.101563 9 25.257813 L 9 36.742188 C 9 37.898438 9.640625 38.9375 10.746094 39.488281 C 11.003906 39.617188 11.191406 39.851563 11.265625 40.128906 L 14.910156 53.796875 C 15.03125 54.25 15.257813 54.671875 15.566406 55.019531 L 22.65625 62.992188 C 23.222656 63.632813 24.042969 64 24.898438 64 L 39.101563 64 C 39.957031 64 40.777344 63.632813 41.34375 62.992188 L 48.433594 55.019531 C 48.742188 54.671875 48.96875 54.246094 49.089844 53.796875 L 52.734375 40.128906 C 52.808594 39.851563 52.996094 39.621094 53.324219 39.457031 C 54.355469 38.9375 55 37.898438 55 36.742188 L 55 25.257813 C 55 24.101563 54.355469 23.0625 53.324219 22.542969 C 53.042969 22.402344 52.851563 22.148438 52.789063 21.84375 L 50.894531 12.386719 C 50.261719 9.207031 48.132813 6.488281 45.199219 5.109375 L 44.347656 4.703125 C 40.421875 2.859375 36.210938 1.9375 32 1.9375 Z M 32 3.9375 C 35.921875 3.9375 39.84375 4.796875 43.496094 6.515625 L 44.347656 6.917969 C 46.710938 8.027344 48.425781 10.21875 48.9375 12.777344 L 49.046875 13.324219 C 48.148438 12.507813 47.140625 11.8125 46.046875 11.296875 C 44.066406 10.363281 41.960938 9.621094 39.792969 9.09375 C 39.242188 8.960938 38.65625 9.074219 38.1875 9.398438 C 37.714844 9.734375 37.40625 10.253906 37.34375 10.828125 L 36.203125 21.109375 C 36.148438 21.617188 35.71875 22 35.207031 22 L 28.789063 22 C 28.277344 22 27.851563 21.617188 27.796875 21.109375 L 26.65625 10.828125 C 26.59375 10.253906 26.285156 9.730469 25.8125 9.398438 C 25.34375 9.070313 24.757813 8.960938 24.207031 9.09375 C 22.042969 9.617188 19.933594 10.359375 17.941406 11.296875 C 16.847656 11.8125 15.851563 12.511719 14.953125 13.324219 L 15.0625 12.777344 C 15.578125 10.214844 17.289063 8.027344 19.652344 6.914063 L 20.503906 6.515625 C 24.15625 4.796875 28.078125 3.9375 32 3.9375 Z M 31 7 C 30.449219 7 30 7.449219 30 8 C 30 8.550781 30.449219 9 31 9 L 33 9 C 33.550781 9 34 8.550781 34 8 C 34 7.449219 33.550781 7 33 7 Z M 39.320313 11.035156 C 41.359375 11.53125 43.335938 12.226563 45.191406 13.105469 C 46.578125 13.757813 47.824219 14.738281 48.796875 15.9375 L 46.582031 29.566406 C 46.542969 29.792969 46.378906 29.976563 46.160156 30.035156 C 36.894531 32.601563 27.101563 32.601563 17.839844 30.035156 C 17.621094 29.972656 17.457031 29.792969 17.421875 29.578125 L 15.207031 15.953125 C 16.179688 14.75 17.40625 13.761719 18.796875 13.105469 C 20.664063 12.226563 22.644531 11.53125 24.671875 11.046875 L 25.808594 21.328125 C 25.976563 22.851563 27.257813 24 28.792969 24 L 35.210938 24 C 36.742188 24 38.023438 22.851563 38.191406 21.328125 Z M 31 12 C 30.449219 12 30 12.449219 30 13 C 30 13.550781 30.449219 14 31 14 L 33 14 C 33.550781 14 34 13.550781 34 13 C 34 12.449219 33.550781 12 33 12 Z M 31 17 C 30.449219 17 30 17.449219 30 18 C 30 18.550781 30.449219 19 31 19 L 33 19 C 33.550781 19 34 18.550781 34 18 C 34 17.449219 33.550781 17 33 17 Z M 13.738281 19.402344 L 15.445313 29.910156 C 15.46875 30.054688 15.53125 30.183594 15.578125 30.320313 C 15.539063 30.363281 15.488281 30.394531 15.453125 30.445313 L 14.503906 31.871094 C 13.621094 33.195313 13.925781 34.980469 15.199219 35.9375 L 16.621094 37 C 17.480469 37.644531 18.542969 38 19.621094 38 L 25.050781 38 C 26.195313 38 27.222656 37.363281 27.734375 36.34375 L 28.96875 33.871094 C 29.980469 33.925781 30.988281 33.964844 32 33.964844 C 32.777344 33.964844 33.558594 33.9375 34.335938 33.90625 L 35.550781 36.34375 C 36.0625 37.363281 37.09375 38 38.234375 38 L 43.667969 38 C 44.742188 38 45.808594 37.644531 46.667969 37 L 48.085938 35.9375 C 49.359375 34.980469 49.664063 33.195313 48.78125 31.871094 L 48.128906 30.894531 C 48.332031 30.59375 48.492188 30.269531 48.554688 29.902344 L 50.261719 19.402344 L 50.828125 22.234375 C 51.007813 23.152344 51.59375 23.914063 52.425781 24.332031 C 52.78125 24.507813 53 24.863281 53 25.257813 L 53 36.742188 C 53 37.136719 52.78125 37.492188 52.359375 37.703125 C 52.179688 37.792969 51.417969 38.152344 51.253906 38.335938 L 44.265625 46.199219 C 43.449219 47.113281 43 48.296875 43 49.519531 L 43 52.171875 C 43 52.4375 42.894531 52.691406 42.707031 52.878906 L 42.109375 53.480469 L 40.402344 51.199219 C 39.835938 50.449219 38.9375 50 38 50 L 26 50 C 25.0625 50 24.164063 50.445313 23.597656 51.199219 L 21.890625 53.480469 L 21.292969 52.878906 C 21.105469 52.691406 21 52.4375 21 52.171875 L 21 49.519531 C 21 48.296875 20.550781 47.113281 19.734375 46.199219 L 12.746094 38.335938 C 12.582031 38.148438 11.773438 37.769531 11.574219 37.671875 C 11.21875 37.492188 11 37.136719 11 36.742188 L 11 25.257813 C 11 24.863281 11.21875 24.507813 11.574219 24.332031 C 12.40625 23.914063 12.988281 23.152344 13.171875 22.234375 Z M 16.949219 31.808594 C 17.066406 31.863281 17.179688 31.929688 17.308594 31.964844 C 20.429688 32.832031 23.613281 33.410156 26.8125 33.714844 L 25.945313 35.449219 C 25.773438 35.789063 25.433594 36 25.050781 36 L 19.621094 36 C 18.972656 36 18.335938 35.789063 17.820313 35.402344 L 16.402344 34.335938 C 15.976563 34.019531 15.871094 33.421875 16.167969 32.980469 Z M 46.476563 32.019531 L 47.117188 32.980469 C 47.414063 33.421875 47.3125 34.019531 46.886719 34.335938 L 45.46875 35.402344 C 44.949219 35.789063 44.3125 36 43.667969 36 L 38.234375 36 C 37.851563 36 37.511719 35.789063 37.34375 35.449219 L 36.5 33.769531 C 39.859375 33.492188 43.199219 32.914063 46.476563 32.019531 Z M 14.050781 42.8125 L 18.242188 47.527344 C 18.730469 48.078125 19 48.785156 19 49.519531 L 19 52.171875 C 19 52.972656 19.3125 53.726563 19.878906 54.292969 L 20.480469 54.890625 C 20.886719 55.300781 21.457031 55.515625 22.03125 55.472656 C 22.613281 55.433594 23.144531 55.140625 23.492188 54.675781 L 25.199219 52.402344 C 25.386719 52.148438 25.6875 52 26 52 L 38 52 C 38.3125 52 38.613281 52.148438 38.800781 52.402344 L 40.507813 54.675781 C 40.855469 55.140625 41.386719 55.433594 41.96875 55.472656 C 42.015625 55.476563 42.058594 55.480469 42.109375 55.480469 C 42.636719 55.480469 43.144531 55.269531 43.519531 54.890625 L 44.121094 54.292969 C 44.6875 53.726563 45 52.972656 45 52.171875 L 45 49.519531 C 45 48.785156 45.269531 48.078125 45.757813 47.527344 L 49.949219 42.8125 L 47.15625 53.285156 C 47.117188 53.433594 47.042969 53.574219 46.9375 53.691406 L 39.847656 61.664063 C 39.660156 61.878906 39.386719 62 39.101563 62 L 24.898438 62 C 24.613281 62 24.339844 61.878906 24.152344 61.664063 L 17.0625 53.6875 C 16.957031 53.574219 16.882813 53.433594 16.84375 53.28125 Z M 27 56 C 26.449219 56 26 56.449219 26 57 L 26 59 C 26 59.550781 26.449219 60 27 60 C 27.550781 60 28 59.550781 28 59 L 28 57 C 28 56.449219 27.550781 56 27 56 Z M 32 56 C 31.449219 56 31 56.449219 31 57 L 31 59 C 31 59.550781 31.449219 60 32 60 C 32.550781 60 33 59.550781 33 59 L 33 57 C 33 56.449219 32.550781 56 32 56 Z M 37 56 C 36.449219 56 36 56.449219 36 57 L 36 59 C 36 59.550781 36.449219 60 37 60 C 37.550781 60 38 59.550781 38 59 L 38 57 C 38 56.449219 37.550781 56 37 56 Z " />
      </>
    ),
    viewBox: "0 0 100 100"
  },
  arrowUp: {
    shape: (
      <>
        <path
          id="telegram-1"
          d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"
        />
      </>
    ),
    viewBox: "0 0 50 50"
  },
  upDown: {
    //instsgram
    shape: (
      <>
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
      </>
    ),
    viewBox: "0 0 100 100"
  },
  box: {
    shape: (
      <>
        <path d="M 39.800781 24.101563 C 37.199219 22.398438 35.199219 21.300781 33 19 C 32.601563 18.601563 32.101563 18.101563 31.898438 18.101563 C 31.699219 17.898438 31.300781 18.101563 31 18.101563 C 29.898438 18.101563 29.101563 17.601563 28.199219 17.199219 C 29.199219 17.101563 30.300781 17 31.101563 17 C 34.699219 17 37.300781 17.898438 39.101563 19 C 39.699219 18.398438 40.601563 17.898438 41.101563 17.101563 C 40.5 16.398438 40.199219 14.699219 40 13.800781 C 39.800781 13.101563 39.800781 12.5 39.601563 12.101563 C 38.5 8.101563 37.199219 5 35 2 C 37.199219 6.300781 39.199219 10.699219 39 17 C 37.199219 16.398438 31.601563 16 31 16 C 30.101563 16 28.898438 16.300781 28 16.300781 C 28.398438 15.699219 28.601563 14.800781 29.300781 14.601563 C 29.699219 14.398438 30.199219 14.601563 30.800781 14.601563 C 32.601563 14.601563 34.601563 14.398438 35.101563 15 C 35.5 14.398438 36.398438 14.199219 36.601563 13.699219 C 36.601563 13.5 36.398438 12.601563 36.199219 12 C 36 11.398438 35.800781 10.699219 35.601563 10.300781 C 34.898438 7.300781 33.5 4 32.398438 1.601563 L 32 1 C 33.101563 4.699219 34 8.300781 34 13 C 32 13 31.199219 13 29 13 C 28.300781 13.601563 27.601563 14.601563 27 15 C 27.199219 14.101563 26.5 13.5 26 13.101563 C 26.199219 13.5 26.699219 14.601563 26.300781 15.199219 C 25.898438 15.199219 26.101563 14.601563 25.699219 14.601563 C 25.5 14.800781 25.199219 14.898438 25 14.898438 C 24.699219 14.898438 24.5 14.898438 24.300781 14.601563 C 23.898438 14.601563 24.101563 15.199219 23.699219 15.199219 C 23.300781 14.601563 23.800781 13.5 24 13.101563 C 23.398438 13.5 22.800781 14.101563 23 15 C 22.398438 14.601563 21.800781 13.601563 21 13 C 18.800781 13 18 13 16 13 C 16 8.300781 16.898438 4.699219 18 1 L 17.601563 1.601563 C 16.5 4 15.199219 7.398438 14.398438 10.300781 C 14.199219 10.699219 14 11.398438 13.800781 12 C 13.601563 12.601563 13.398438 13.5 13.398438 13.699219 C 13.601563 14.300781 14.5 14.5 14.898438 15 C 15.300781 14.398438 17.300781 14.601563 19.199219 14.601563 C 19.800781 14.601563 20.300781 14.398438 20.699219 14.601563 C 21.398438 14.800781 21.601563 15.699219 22 16.300781 C 21.101563 16.300781 19.898438 16 19 16 C 18.398438 16 12.800781 16.398438 11 17 C 10.800781 10.699219 12.800781 6.300781 15 2 C 12.800781 5 11.5 8.101563 10.398438 12.199219 C 10.199219 12.601563 10.199219 13.101563 10 13.898438 C 9.800781 14.800781 9.5 16.5 8.898438 17.199219 C 9.5 17.898438 10.398438 18.5 10.898438 19.101563 C 12.699219 18 15.300781 17.101563 18.898438 17.101563 C 19.601563 17.101563 20.699219 17.101563 21.800781 17.300781 C 20.898438 17.699219 20.101563 18.199219 19 18.199219 C 18.601563 18.199219 18.300781 18 18.101563 18.199219 C 17.898438 18.199219 17.398438 18.800781 17 19.101563 C 14.800781 21.300781 12.800781 22.5 10.199219 24.199219 C 9.5 24.800781 8.898438 25.300781 8 24.601563 C 8 32 9.699219 37.5 12.101563 42.5 C 12.398438 42.898438 13 44 13 44 C 11.199219 39.699219 10 34.699219 10 28.699219 C 10 28.101563 9.800781 27.199219 10 26.800781 C 10.199219 26.101563 11.300781 25.101563 12 24.601563 C 14 22.699219 15.5 22 17.699219 20.300781 C 18.101563 19.898438 18.398438 19.601563 18.800781 19.398438 C 19.199219 19.199219 21 18.898438 21.800781 18.5 C 20.898438 19.398438 19.800781 21.101563 18.699219 22 C 18.5 22.199219 18.300781 22 18 22 C 18 31 18.398438 38.601563 20.800781 44.898438 C 21.398438 46.398438 22.101563 47.898438 23 49 C 19.699219 43 20 33.300781 20 24 C 19.300781 23.398438 19.800781 23.101563 20.398438 22.398438 C 21.101563 21.699219 22 19.800781 23 19.398438 C 23 19.800781 22.800781 20.101563 22.601563 20.398438 C 22.398438 20.699219 22 21.199219 22 21.398438 C 21.800781 22.101563 22.199219 23.601563 22.398438 24.398438 C 23 27 23.699219 30 24.601563 32 C 25 32 24.800781 31.199219 25 31 C 25.199219 31.199219 25 32 25.398438 32 C 26.300781 30 27.101563 27 27.601563 24.398438 C 27.800781 23.699219 28.199219 22.199219 28 21.398438 C 28 21.199219 27.601563 20.800781 27.398438 20.5 C 27.199219 20.199219 27 19.800781 27 19.5 C 27.898438 19.898438 28.800781 21.699219 29.601563 22.5 C 30.199219 23.199219 30.699219 23.601563 30 24.101563 C 30 33.398438 30.300781 43.101563 27 49.101563 C 27.898438 48 28.699219 46.5 29.199219 45 C 31.601563 38.601563 32 31 32 22 C 31.601563 22 31.398438 22.199219 31.300781 22 C 30.199219 21.101563 29.101563 19.398438 28.199219 18.5 C 29 18.898438 30.800781 19.199219 31.199219 19.398438 C 31.601563 19.601563 31.898438 20 32.300781 20.300781 C 34.5 22 35.898438 22.800781 38 24.601563 C 38.699219 25.199219 39.800781 26.101563 40 26.800781 C 40.199219 27.199219 40 28.101563 40 28.699219 C 40 34.699219 38.898438 39.699219 37 44 C 37 44 37.601563 42.898438 37.898438 42.300781 C 40.300781 37.300781 42 31.800781 42 24.398438 C 41.101563 25.199219 40.5 24.601563 39.800781 24.101563 Z" />
      </>
    ),
    viewBox: "0 0 50 50"
  },
  hexa: {
    //twitter icon
    shape: (
      <>
        <path d="M 24 1 L 11.853516 13.146484 C 11.538516 13.461484 11.762031 14 12.207031 14 L 15 14 L 10.683594 19.179688 C 10.412594 19.505688 10.642406 20 11.066406 20 L 13 20 L 7 29 L 18.146484 17.853516 C 18.461484 17.538516 18.237969 17 17.792969 17 L 16 17 L 20.316406 11.820312 C 20.587406 11.494312 20.357594 11 19.933594 11 L 17 11 L 24 1 z M 15 3 C 8.383 3 3 8.383 3 15 C 3 18.838 4.8188594 22.251219 7.6308594 24.449219 L 8.7382812 22.785156 C 6.4612812 20.950156 5 18.145 5 15 C 5 9.486 9.486 5 15 5 C 15.676 5 16.336609 5.0682656 16.974609 5.1972656 L 18.613281 3.5585938 C 17.472281 3.1965937 16.259 3 15 3 z M 22.929688 6.0175781 L 21.775391 7.6660156 C 23.752391 9.4940156 25 12.101 25 15 C 25 20.514 20.514 25 15 25 C 14.626 25 14.256578 24.975547 13.892578 24.935547 L 12.177734 26.650391 C 13.084734 26.870391 14.026 27 15 27 C 21.617 27 27 21.617 27 15 C 27 11.424 25.419687 8.2175781 22.929688 6.0175781 z" />
      </>
    ),
    viewBox: "0 0 30 30"
  },
  cross: {
    shape: (
      <>
        <path
          fill-rule="evenodd"
          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
        />
      </>
    ),
    viewBox: "0 0 16 16"
  },
  fsc: {
    shape: (
      <>
        <path d="M 46.710938 15.214844 C 46.898438 14.816406 47 14.375 47 13.929688 C 47 12.3125 45.742188 11 44.199219 11 C 44.050781 11 43.886719 11.035156 43.71875 11.070313 C 40.878906 5.191406 33.578125 1 25 1 C 16.421875 1 9.121094 5.191406 6.28125 11.070313 C 6.113281 11.035156 5.949219 11 5.800781 11 C 4.257813 11 3 12.3125 3 13.929688 C 3 14.378906 3.101563 14.816406 3.289063 15.214844 C 3.101563 15.613281 3 16.050781 3 16.5 C 3 16.949219 3.101563 17.386719 3.289063 17.785156 C 3.101563 18.183594 3 18.625 3 19.070313 C 3 20.4375 3.902344 21.578125 5.113281 21.898438 C 5.042969 22.257813 5 22.621094 5 23 C 5 24.777344 5.8125 26.367188 7.105469 27.46875 C 7.3125 27.644531 7.753906 28.363281 8.078125 29.019531 C 8.03125 29.339844 8 29.664063 8 30 C 8 31.621094 8.554688 33.105469 9.480469 34.292969 C 11.109375 39.621094 13.308594 41.191406 14.472656 42 C 16.074219 43.109375 17.632813 43.546875 17.632813 45 C 17.632813 46.648438 20.261719 48 22 48 L 28 48 C 29.738281 48 32.367188 46.648438 32.367188 45 C 32.367188 43.546875 33.921875 43.109375 35.527344 42 C 36.691406 41.191406 38.890625 39.621094 40.519531 34.292969 C 41.445313 33.105469 42 31.621094 42 30 C 42 29.664063 41.96875 29.339844 41.921875 29.019531 C 42.246094 28.363281 42.6875 27.644531 42.894531 27.464844 C 44.1875 26.367188 45 24.777344 45 23 C 45 22.621094 44.957031 22.257813 44.886719 21.898438 C 46.097656 21.578125 47 20.4375 47 19.070313 C 47 18.621094 46.898438 18.183594 46.710938 17.785156 C 46.898438 17.386719 47 16.949219 47 16.5 C 47 16.050781 46.898438 15.613281 46.710938 15.214844 Z M 8.769531 17.144531 C 8.875 17.269531 9 17.484375 9 17.785156 C 9 18.1875 8.777344 18.546875 8.445313 18.671875 C 8.386719 18.691406 8.191406 18.792969 7.925781 18.953125 C 6.515625 19.792969 5.988281 19.984375 5.800781 20 C 5.359375 20 5 19.582031 5 19.070313 C 5 18.769531 5.125 18.554688 5.230469 18.429688 L 5.773438 17.785156 L 5.230469 17.140625 C 5.125 17.015625 5 16.800781 5 16.5 C 5 16.199219 5.125 15.984375 5.230469 15.855469 L 5.773438 15.214844 L 5.230469 14.570313 C 5.125 14.445313 5 14.230469 5 13.929688 C 5 13.417969 5.359375 13 5.792969 13 C 5.988281 13.015625 6.515625 13.207031 7.925781 14.046875 C 8.195313 14.207031 8.386719 14.308594 8.445313 14.328125 C 8.777344 14.457031 9 14.8125 9 15.214844 C 9 15.515625 8.875 15.730469 8.769531 15.855469 L 8.226563 16.5 Z M 27.4375 13.4375 C 27.804688 13.074219 29.5625 10 33 10 C 34.308594 10 35.683594 10.378906 36.996094 11.519531 C 37.6875 12.117188 37.628906 13.113281 36.996094 12.804688 C 35.882813 12.261719 34.886719 12 34 12 C 31.3125 12 29.972656 15.148438 29.5625 15.5625 C 28.976563 16.148438 28.023438 16.148438 27.441406 15.5625 C 26.855469 14.976563 26.855469 14.023438 27.4375 13.4375 Z M 36 19.867188 C 36 21.863281 34.101563 20.597656 32.597656 20.597656 C 31.09375 20.597656 29 21.742188 29 20.199219 C 29 18.65625 30.996094 17.007813 32.5 17.007813 C 34.003906 17.007813 36 17.855469 36 19.867188 Z M 13.003906 11.519531 C 14.316406 10.378906 15.691406 10 17 10 C 20.4375 10 22.195313 13.074219 22.5625 13.4375 C 23.148438 14.023438 23.148438 14.976563 22.5625 15.558594 C 21.976563 16.144531 21.023438 16.144531 20.441406 15.558594 C 20.027344 15.148438 18.6875 12 16 12 C 15.113281 12 14.117188 12.261719 13.003906 12.804688 C 12.371094 13.109375 12.3125 12.117188 13.003906 11.519531 Z M 21 20.199219 C 21 21.742188 18.90625 20.597656 17.402344 20.597656 C 15.898438 20.597656 14 21.859375 14 19.863281 C 14 17.851563 15.996094 17.003906 17.5 17.003906 C 19.003906 17.003906 21 18.65625 21 20.199219 Z M 35.699219 35.386719 C 33.863281 35.984375 32.945313 36 29.410156 36 C 29.410156 36 20.589844 36 20.589844 36 C 17.054688 36 16.136719 35.984375 14.300781 35.386719 C 11.960938 34.625 10 32.730469 10 29.96875 C 10 27.570313 12.136719 25 14.410156 25 C 13.488281 25.597656 12.648438 26.546875 12.648438 27.46875 C 12.648438 29.402344 14.03125 30.96875 15.734375 30.96875 C 17.074219 30.96875 19.34375 27.027344 20.996094 27 C 21.398438 27.617188 22.039063 28.023438 22.769531 28.023438 C 22.886719 28.023438 23.148438 28.125 23.210938 28.199219 C 23.472656 29.25 26.527344 29.25 26.789063 28.199219 C 26.847656 28.125 27.113281 28.023438 27.230469 28.023438 C 27.960938 28.023438 28.601563 27.617188 29.003906 27 C 30.65625 27.023438 32.925781 30.96875 34.265625 30.96875 C 35.96875 30.96875 37.351563 29.402344 37.351563 27.46875 C 37.351563 26.546875 36.714844 25.6875 35.585938 25 C 37.792969 25 40 27.570313 40 29.96875 C 40 32.730469 38.039063 34.625 35.699219 35.386719 Z M 44.769531 15.855469 C 44.875 15.984375 45 16.199219 45 16.5 C 45 16.800781 44.875 17.015625 44.769531 17.144531 L 44.226563 17.785156 L 44.769531 18.429688 C 44.875 18.554688 45 18.769531 45 19.070313 C 45 19.582031 44.640625 20 44.207031 20 C 44.011719 19.984375 43.484375 19.792969 42.074219 18.953125 C 41.808594 18.792969 41.613281 18.691406 41.554688 18.671875 C 41.222656 18.542969 41 18.1875 41 17.785156 C 41 17.484375 41.125 17.269531 41.230469 17.144531 L 41.773438 16.5 L 41.230469 15.855469 C 41.125 15.730469 41 15.515625 41 15.214844 C 41 14.8125 41.222656 14.453125 41.554688 14.328125 C 41.613281 14.308594 41.804688 14.207031 42.074219 14.046875 C 43.484375 13.207031 44.011719 13.011719 44.199219 13 C 44.640625 13 45 13.417969 45 13.929688 C 45 14.230469 44.875 14.445313 44.769531 14.570313 L 44.230469 15.214844 Z" />
      </>
    ),
    viewBox: "0 0 50 50"
  },
  go: {
    shape: (
      <>
        <path
          fill="#ffcc80"
          d="M35.547 42.431l-3.182-3.182-2.121 2.121 3.182 3.182c.586.586 1.536.586 2.121 0S36.133 43.017 35.547 42.431zM38.547 24.431l-3.182-3.182-2.121 2.121 3.182 3.182c.586.586 1.536.586 2.121 0S39.133 25.017 38.547 24.431zM12.683 42.431l3.182-3.182 2.121 2.121-3.182 3.182c-.586.586-1.536.586-2.121 0S12.097 43.017 12.683 42.431zM9.433 24.431l3.182-3.182 2.121 2.121-3.182 3.182c-.586.586-1.536.586-2.121 0S8.847 25.017 9.433 24.431z"
        />
        <path
          fill="#4dd0e1"
          d="M38 8c0-1.933-1.149-3-3.231-3S31 7.567 31 9.5c0 1 1.923 1.5 3 1.5C36.082 11 38 9.933 38 8zM10 8c0-1.933 1.149-3 3.231-3S17 7.567 17 9.5c0 1-1.923 1.5-3 1.5C11.918 11 10 9.933 10 8z"
        />
        <path
          fill="#424242"
          d="M35 7A1 1 0 1 0 35 9 1 1 0 1 0 35 7zM13 7A1 1 0 1 0 13 9 1 1 0 1 0 13 7z"
        />
        <path
          fill="#4dd0e1"
          d="M37,34c0,4.774-3.219,10-13.31,10C15.568,44,11,38.774,11,34c0-5,1-5.806,1-10c0-4.688,0-7,0-10 c0-4.774,3.076-11,11.69-11S36,6.991,36,13c0,3-0.237,5.453,0,10C36.186,26.562,37,31,37,34z"
        />
        <g>
          <path
            fill="#f5f5f5"
            d="M29 6A4 4 0 1 0 29 14 4 4 0 1 0 29 6zM19 6A4 4 0 1 0 19 14 4 4 0 1 0 19 6z"
          />
        </g>
        <g>
          <path
            fill="#eee"
            d="M24 20c0 .552.448 1 1 1s1-.448 1-1v-3h-2V20zM22 20c0 .552.448 1 1 1s1-.448 1-1v-3h-2V20z"
          />
        </g>
        <path
          fill="#ffcc80"
          d="M26.5,18c-0.412,0-0.653-0.085-1.011-0.205c-0.975-0.328-2.021-0.326-2.996,0.002 C22.138,17.916,21.91,18,21.5,18c-1.334,0-1.5-1-1.5-1.5c0-1.5,1.5-2.5,3-2.5c0.835,0,1.165,0,2,0c1.5,0,3,1,3,2.5 C28,17,27.834,18,26.5,18z"
        />
        <g>
          <path
            fill="#424242"
            d="M27 9A1 1 0 1 0 27 11 1 1 0 1 0 27 9zM17 9A1 1 0 1 0 17 11 1 1 0 1 0 17 9zM24 13A2 1 0 1 0 24 15 2 1 0 1 0 24 13z"
          />
        </g>
      </>
    ),
    viewBox: "0 0 48 48"
  },
  py: {
    shape: (
      <>
        <path
          fill="#0277BD"
          d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
        />
        <path
          fill="#FFC107"
          d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
        />
      </>
    ),
    viewBox: "0 0 48 48"
  },
  js: {
    shape: (
      <>
        <path fill="#ffd600" d="M6,42V6h36v36H6z" />
        <path
          fill="#000001"
          d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"
        />
      </>
    ),
    viewBox: "0 0 48 48"
  },
  react: {
    shape: (
      <>
        <path
          fill="#283593"
          fill-rule="evenodd"
          d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
          clip-rule="evenodd"
        />
        <path
          fill="#5c6bc0"
          fill-rule="evenodd"
          d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
          clip-rule="evenodd"
        />
        <path
          fill="#fff"
          fill-rule="evenodd"
          d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
          clip-rule="evenodd"
        />
        <path
          fill="#3949ab"
          fill-rule="evenodd"
          d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
          clip-rule="evenodd"
        />
      </>
    ),
    viewBox: "0 0 48 48"
  },
  git: {
    shape: (
      <>
        <path
          fill="#F4511E"
          d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"
        />
      </>
    ),
    viewBox: "0 0 48 48"
  },
  kali: {
    shape: (
      <>
        <path
          fill="#78909c"
          d="M46.125,38.868c-0.192-0.815-0.481-1.618-0.919-2.346c-0.871-1.466-2.199-2.585-3.594-3.489 c-1.409-0.901-2.916-1.624-4.458-2.219c-2.953-1.141-2.81-1.103-4.803-1.814c-4.416-1.574-6.868-3.914-7.022-6.452 c-0.074-1.229,1.126-5.234,6.074-4.282c1.175,0.226,2.287,0.543,3.382,1.037c1.009,0.456,3.954,1.884,4.986,3.917v0 c0.078,0.897,0.394,1.244,1.656,1.84c0.949,0.448,1.907,0.935,1.993,2.039c0.005,0.06,0.051,0.109,0.131,0.121 c0.052,0,0.1-0.031,0.121-0.081c0.182-0.439,0.915-0.989,1.461-0.839c0.063,0.016,0.119-0.009,0.148-0.061 c0.03-0.052,0.02-0.116-0.021-0.158l-0.863-0.854c-0.311-0.31-0.651-0.721-0.939-1.249c-0.078-0.142-0.145-0.282-0.204-0.417 c-0.038-0.094-0.076-0.187-0.114-0.281c-0.724-1.895-2.073-3.925-3.465-5.24c-0.756-0.727-1.588-1.367-2.475-1.913 c-0.891-0.538-1.819-1.016-2.833-1.302l-0.074,0.256c0.947,0.327,1.833,0.849,2.662,1.419c0.828,0.579,1.593,1.243,2.273,1.979 c0.971,1.032,1.736,2.23,2.282,3.512l-1.993-2.477l0.055,0.858l-1.633-1.841l0.101,0.862l-1.586-1.279l0.136,0.584 c-0.357-0.236-3.525-1.496-5.106-2.09s-4.705-3.524-3.804-7.232c0,0-1.477-0.574-2.535-0.965c-1.043-0.376-2.09-0.717-3.14-1.046 c-2.1-0.658-4.212-1.258-6.335-1.818c-2.123-0.557-4.26-1.062-6.409-1.508c-2.15-0.441-4.312-0.834-6.5-1.053L2.722,3.319 C4.875,3.65,7,4.152,9.109,4.701c2.108,0.555,4.202,1.166,6.279,1.829c2.076,0.665,4.139,1.37,6.177,2.128 c1.018,0.379,2.033,0.769,3.027,1.188c0.211,0.088,0.426,0.18,0.641,0.272c-1.224-0.241-2.448-0.432-3.673-0.591 c-2.211-0.281-4.424-0.458-6.639-0.558c-2.214-0.1-4.43-0.116-6.642-0.034C6.068,9.021,3.856,9.194,1.674,9.568l0.043,0.304 c2.18-0.224,4.375-0.246,6.563-0.183c2.189,0.067,4.374,0.231,6.547,0.477c2.172,0.246,4.335,0.567,6.469,0.986 c1.316,0.261,2.624,0.564,3.903,0.921c-1.011-0.101-2.017-0.127-3.014-0.115c-1.977,0.03-3.926,0.247-5.848,0.574 c-1.922,0.33-3.818,0.773-5.675,1.346c-1.851,0.579-3.681,1.267-5.361,2.249l0.116,0.208c1.72-0.828,3.568-1.358,5.426-1.779 c1.862-0.414,3.751-0.698,5.644-0.868c1.891-0.168,3.792-0.224,5.663-0.101c1.664,0.11,3.317,0.363,4.83,0.849c0,0,0,0,0,0 c0.065,0.445,0.366,1.346,0.511,1.796c0,0,0,0,0,0c-4.255,1.957-4.794,5.477-4.446,7.365c0.409,2.214,2.011,3.902,3.904,4.995 c1.567,0.891,3.168,1.459,4.726,2.047c1.555,0.583,3.095,1.143,4.467,1.918c1.352,0.747,2.476,1.901,3.391,3.21 c1.837,2.638,2.572,5.964,2.792,9.245l0.365-0.01c0.008-3.323-0.47-6.802-2.252-9.812c-0.588-0.986-1.314-1.921-2.171-2.733 c0.992,0.384,1.961,0.818,2.887,1.333c1.373,0.779,2.667,1.749,3.548,3.051c0.444,0.647,0.755,1.375,0.983,2.133 c0.202,0.767,0.295,1.565,0.329,2.371h0.312C46.337,40.522,46.291,39.69,46.125,38.868z"
        />
      </>
    ),
    viewBox: "0 0 48 48"
  }
};

const SVG = ({ stroke, fill, width, icon, left, top, hiddenMobile }) => (
  <Wrapper
    viewBox={icons[icon].viewBox}
    stroke={stroke}
    fill={fill}
    svgWidth={twWidth[`${width}`]}
    left={left}
    top={top}
    hiddenMobile={hiddenMobile}
  >
    {icons[icon].shape}
  </Wrapper>
);

export default SVG;

SVG.propTypes = {
  stroke: PropTypes.string,
  fill: PropTypes.string,
  width: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  left: PropTypes.string,
  top: PropTypes.string,
  hiddenMobile: PropTypes.bool
};

SVG.defaultProps = {
  stroke: "transparent",
  width: 8,
  fill: "none",
  left: "0%",
  top: "0%",
  hiddenMobile: false
};
