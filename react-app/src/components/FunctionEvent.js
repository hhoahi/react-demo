function FunctionEvent() {
  //   function handleClick() {
  //     console.log("Button is clicked");
  //   }
  const handleClick = () => {
    console.log("Button is clicked");
  };
  return (
    <div>
      Functional components
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default FunctionEvent;
