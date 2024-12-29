const LoadMoreBtn = ({ loadNextPage }) => {
  return (
    <button
      type="button"
      style={{
        display: "block",
        margin: "20px auto",
        borderRadius: "8px",
        border: "none",
        padding: 20,
        textAlign: "center",
      }}
      onClick={() => loadNextPage((prev) => prev + 1)}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
