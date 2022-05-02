import React, { useState } from "react";
import "./HoverText.css";

export default function HoverText(props) {
  const [showText, setShowText] = useState(true);

  return (
    <div className="hover-text-wrapper"
      onMouseEnter={(e) => {
        setShowText(false);
      }}
      onMouseLeave={(e) => {
        setShowText(true);
      }}
    >
      {showText ? <>{props.text}</> : <>{props.altText}</>}
    </div>
  );
}
