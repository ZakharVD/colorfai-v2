import { forwardRef } from "react";
import Button from "./Button";

function InnerInput({ onButtonClick }, ref) {
  return (
    <div className="mx-auto mt-5 flex justify-center w-auto max-w-[600px]">
      <input
        type="search"
        className="bg-[#031B34] rounded w-2/3 p-1 font-extralight"
        placeholder="Image URL"
        ref={ref}
      />
      <Button onClick={onButtonClick} text={"Detect"}/>
    </div>
  );
}

export const Input = forwardRef(InnerInput);
