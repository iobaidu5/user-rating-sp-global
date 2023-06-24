import React, { useState, useEffect } from "react";
// import './StarRating.css';

interface StarRatingProps {
  rating: number;
  onChange: (newRating: number) => void;
  isValid: boolean;
  theme: "light" | "dark" | string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onChange,
  isValid,
  theme,
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [inputValue, setInputValue] = useState(rating.toString());

  const handleStarClick = (newRating: number) => {
    if (newRating !== rating) {
      onChange(newRating);
    }else{
        onChange(newRating);   
    }
  };

  const handleStarHover = (newHoverRating: number) => {
    setHoverRating(newHoverRating);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
     setInputValue(value);
  };

  const handleInputBlur = () => {
    const newRating = parseFloat(inputValue);
    if (!isNaN(newRating)) {
      onChange(newRating);
    } else {
      setInputValue(rating.toString());
    }
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      const isFilled = i <= rating;
      const isHovered = i <= hoverRating;
      const isHalfFilled = i === Math.ceil(rating) && rating % 1 !== 0;
      const starClassName = `star ${
        isFilled
          ? "filled"
          : isHalfFilled
          ? "half-filled"
          : isHovered
          ? "hovered"
          : ""
      }`;

      stars.push(
        <span
          key={i}
          className={` star-icon ${starClassName}`}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => handleStarHover(i)}
          onMouseLeave={() => handleStarHover(0)}
        >
          {isHalfFilled ? "☆" : "★"}
        </span>
      );
    }

    return stars;
  };

  const themeClassName = theme === "dark" ? "dark-theme" : "light-theme";
  const validationMessage = isValid ? null : (
    <div className="error-message">Invalid rating</div>
  );

  useEffect(() => {
    setInputValue(rating.toString());
  }, [rating]);

  return (
    <div className="star">
      <div className="star-container">
        <div className={`star-rating ${themeClassName}`}>
          <input
            type="number"
            min="1"
            max="5"
            step="0.5"
            value={inputValue}
            onChange={handleInputChange}
            className="star-input"
            onBlur={handleInputBlur}
          />
          {validationMessage}
          <label className="star-input-label">Enter Rating for User</label>
        </div>
        <div className="star-render">{renderStars()}</div>
      </div>
    </div>
  );
};

export default StarRating;
