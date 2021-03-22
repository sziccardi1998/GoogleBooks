import React from "react";

function Saved() {
  const style = {
    container: {
      position: "absolute",
      top: "50%",
      left: "39%",
    },
  };
  return (
    <div style={style.container}>
      <h3>No Books Match</h3>
    </div>
  );
}

export default Saved;