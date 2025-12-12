'use client'
import { useState, useRef, useEffect } from "react";

export default function ProductDescription({ title, price, description }) {
  const [descExpanded, setDescExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState("48px");
  const descRef = useRef(null);

  useEffect(() => {
    if (!descRef.current) return;
    setMaxHeight(descExpanded ? `${descRef.current.scrollHeight}px` : "48px");
  }, [descExpanded]);

  return (
    <div className="flex flex-col h-full max-w-[30%]">
      <p className="text-2xl font-medium">{title}</p>
      <p className="text-lg font-bold mt-2">${price}</p>

      <div className="text-sm text-gray-600 mt-4">
        <div
          ref={descRef}
          className="relative overflow-hidden transition-all duration-500 ease-in-out"
          style={{ maxHeight }}
        >
          {description}
          {!descExpanded && (
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
          )}
        </div>
        <button onClick={() => setDescExpanded(!descExpanded)} className="text-sm underline mt-2">
          {descExpanded ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}
