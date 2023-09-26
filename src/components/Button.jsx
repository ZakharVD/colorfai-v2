function Button({ onClick, text }) {
  return (
    <button
      className="py-1 px-5 ml-1 bg-[#FF4820] text-white rounded hover:brightness-[90%]"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
