function ColorBlock({ element, index }) {
  return (
    <div className="bg-[#031B34] h-24 m-2 rounded-[5px] md:h-32">
      <div
        style={{
          backgroundColor: element,
          borderTopRightRadius: "5px",
          borderTopLeftRadius: "5px",
        }}
        className="w-full h-[70%]"
        key={index}
      >
        ‎
      </div>
      <div
        className="h-[30%] p-1 text-xs font-light flex items-center"
        key={index + 10}
      >
        HEX: {element}
      </div>
    </div>
  );
}

export default ColorBlock;
