function ImageOutput({ imageUrl }) {
  return (
    <div className="flex justify-center mt-8 max-h-1/2">
      {/* image container */}
      <div>
        <img
          src={imageUrl}
          alt=""
          className="rounded"
          width={"500px"}
          height={"auto"}
        />
      </div>
    </div>
  );
}

export default ImageOutput;
