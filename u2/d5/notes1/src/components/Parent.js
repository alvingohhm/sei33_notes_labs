import React from "react";

const Parent = () => {
  const [string, setString] = useState("");
  // const [renderCount, setRenderCount] = useState(1)
  // const renderCount = useRef(1); // {current:1}
  const prevString = useRef("");

  // useEffect(() => {
  //   renderCount.current = renderCount.current;
  //   // setRenderCount(renderCount + 1)
  // });
  useEffect(() => {
    prevString.current = string;
  }, [string]);

  return (
    <>
      <input value={string} onChange={(e) => setString(e.target.value)} />
      {/* <div>Render count {renderCount.current}</div> */}
      <div>
        The current string: {string} and prev is {prevString.current}.
      </div>
    </>
  );
};

export default Parent;
