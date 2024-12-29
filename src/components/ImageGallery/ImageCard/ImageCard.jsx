import s from "./ImageCard.module.css";

const ImageCard = ({ alt, link, orientation }) => {
  return (
    <div className={`${s.imageCard} ${s[orientation]}`}>
      <img src={link} alt={alt} />
    </div>
  );
};

export default ImageCard;
