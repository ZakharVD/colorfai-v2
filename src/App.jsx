import { useState, useRef } from "react";
import { makeClarifaiRequest } from "./services/api";
import { transformDataToHEX } from "./helpers/transformData";
import { Input } from "./components/Input";
import Title from "./components/Title";
import ImageOutput from "./components/Image";
import ColorOutput from "./components/ColorOutput";
import Error from "./components/Error";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [colors, setColors] = useState([]);
  const inputRef = useRef();

  async function onButtonClick() {
    // clear error state, and prev colots when the function starts
    setError(null);
    setColors([]);

    // validate input
    if (!inputRef.current.value) {
      setError("Error!");
      return;
    }

    setLoading(true);

    try {
      const result = await makeClarifaiRequest(inputRef.current.value);
      const data = result.outputs[0].data.colors;
      const colors = transformDataToHEX(data);
      setColors(colors);
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  }

  let output;
  if (loading) {
    output = <Loading/>;
  } else if (error) {
    output = <Error/>;
  } else {
    output = (
      <>
        {inputRef.current?.value ? (
          <ImageOutput imageUrl={inputRef.current?.value} />
        ) : undefined}
        {colors?.length > 0 ? <ColorOutput colors={colors} /> : ""}
      </>
    );
  }

  return (
    <>
      <Title />
      <Input onButtonClick={onButtonClick} ref={inputRef} />
      {output}
    </>
  );
}

export default App;
