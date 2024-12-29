import ReactModal from "react-modal";
import { FaHeart } from "react-icons/fa";
import s from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

const ImageModal = ({ isOpen, selectedImage, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          position: "relative",
          padding: 0,
          border: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "90vw",
          maxHeight: "90vh",
          margin: 0,
          overflow: "hidden",
          inset: "auto",
          backgroundImage: "url(/public/png-back.jpeg)",
          backgroundSize: "cover",
        },
      }}
    >
      <img
        src={selectedImage.urls.regular}
        alt={selectedImage.alt_description}
        className={s.modalImage}
      />
      <div className={s.boxInfo}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",

            width: "90%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={selectedImage.user.profile_image.small}
              alt={selectedImage.user.name + " profile image"}
              className={s.profileImage}
            />
            <p>{selectedImage.user.name}</p>
          </div>
          <p style={{ display: "flex", alignItems: "center" }}>
            <FaHeart style={{ color: "red", marginRight: "5px" }} />
            {selectedImage.likes}
          </p>
        </div>
        <p
          style={{
            paddingRight: "2rem",
            paddingLeft: "2rem",
            width: "calc(100% - 4rem)",
            backgroundColor: "white",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          {selectedImage.alt_description}
        </p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;
