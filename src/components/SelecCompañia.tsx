import { CSSProperties } from "react";

function Selecciona() {
  const divStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 130,
  };

  const hrStyle: CSSProperties = {
    width: 360,
    height: 1,
    backgroundColor: "black",
    marginBottom: 15,
  };

  const titleStyle: CSSProperties = {
    fontSize: 30,
    padding: "20px 50px",
  };
  return (
    <div style={divStyle}>
      <div style={hrStyle}></div>
      <p style={titleStyle}>Selecciona tu compañía</p>
      <div style={hrStyle}></div>
    </div>
  );
}

export default Selecciona;
