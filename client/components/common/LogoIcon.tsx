export default function LogoIcon({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SVG paths here */}
      <svg
    width="360"
    height="360"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Brand mark"
>
    <defs>
        <linearGradient
            id="g"
            x1="66"
            y1="0"
            x2="334"
            y2="0"
            gradientUnits="userSpaceOnUse"
        >
            <stop offset="0%" stop-color="#8B5CF6"/>
            <stop offset="100%" stop-color="#06B6D4"/>
        </linearGradient>
    </defs>

    <path
        d="M176 306C176 328 224 328 224 306Z"
        fill="url(#g)"
    />

    <path
        d="M286 48A36 36 0 0 1 334 70L224 306L176 284Z"
        fill="url(#g)"
    />

    <path
        d="M66 70A36 36 0 0 1 114 48L224 284L176 306Z"
        fill="url(#g)"
    />
</svg>
    </svg>
  );
}