import React from "react";
import "./index.css";
import SwitchPageButton from "../SwitchPageButton";
import { useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function RecommendBox({ image, title, desc, likes, path }) {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate(path);
  };

  return (
    <div className="recommend-box">
      <img src={image} alt={title} className="recommend-image" />

      <div className="recommend-content">
        <h3 className="recommend-title">{title}</h3>
        <p className="recommend-desc">{desc}</p>
        <div className="recommend-footer">
          <span className="recommend-likes">
            <FavoriteBorderIcon className="like-icon" />
            {likes}
          </span>
          <SwitchPageButton className="playButton" onClick={handleStart}>
            Play
          </SwitchPageButton>
        </div>
      </div>
    </div>
  );
}
