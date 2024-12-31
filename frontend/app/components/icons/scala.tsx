import React from "react";
const ScalaIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="1538"
    height="2500"
    viewBox="0 0 256 416"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMinYMin meet"
  >
    <defs>
      <linearGradient x1="0%" y1="50%" y2="50%" id="a">
        <stop stop-color="#4F4F4F" offset="0%" />
        <stop offset="100%" />
      </linearGradient>
      <linearGradient x1="0%" y1="50%" y2="50%" id="b">
        <stop stop-color="#C40000" offset="0%" />
        <stop stop-color="#F00" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M0 288v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 302.425 0 293.39 0 288"
      fill="url(#a)"
      transform="matrix(1 0 0 -1 0 544)"
    />
    <path
      d="M0 160v-32c0-5.394 116.377-14.428 192.2-32 36.628 8.49 63.8 18.969 63.8 32v32c0 13.024-27.172 23.51-63.8 32C116.376 174.425 0 165.39 0 160"
      fill="url(#a)"
      transform="matrix(1 0 0 -1 0 288)"
    />
    <path
      d="M0 224v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      fill="url(#b)"
      transform="matrix(1 0 0 -1 0 416)"
    />
    <path
      d="M0 96V0c0 8 256 24 256 64v96c0-40-256-56-256-64"
      fill="url(#b)"
      transform="matrix(1 0 0 -1 0 160)"
    />
    <path
      d="M0 352v-96c0 8 256 24 256 64v96c0-40-256-56-256-64"
      fill="url(#b)"
      transform="matrix(1 0 0 -1 0 672)"
    />
  </svg>
);
export default ScalaIcon;
