import React from "react";

export default function Rating({ value, text, color }) {
  let arr = [1, 2, 3, 4, 5];
  const ratingClass = (value, index) => {
    return value >= index
      ? "fas fa-star"
      : value >= index - 0.5
      ? "fas fa-star-half-alt"
      : "far fa-star";
  };

  return (
    <div>
      {arr.map((target) => (
        <span>
          <i
            style={{ color, opacity: 0.7 }}
            className={ratingClass(value, target)}
          ></i>
        </span>
      ))}
      {text ? <span className="ml-2">{text}</span> : <></>}
    </div>
  );
}

Rating.defaultProps = {
  color: "var(--primary)",
};
