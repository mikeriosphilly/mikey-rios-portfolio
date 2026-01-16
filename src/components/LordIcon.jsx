import { Player } from "@lordicon/react";

export default function LordIcon({ src, size = 18, className = "" }) {
  return (
    <span
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Player
        src={src}
        size={size}
        trigger="hover"
        // You can also do trigger="morph" or "loop-on-hover" depending on icon
      />
    </span>
  );
}
