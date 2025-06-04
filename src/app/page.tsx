const square = {
  width: "200px",
  height: "200px",
  backgroundColor: "green",
};

const Square2 = () => {
  const square = {
    width: "200px",
    height: "200px",
    backgroundColor: "purple",
  };

  return <div style={square}></div>;
};

export default function Home() {
  return (
    <>
      <div
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
      ></div>

      <div className="w-[200px] h-[200px] bg-blue-500"></div>
      <div style={square}></div>
      <Square2 />
    </>
  );
}
