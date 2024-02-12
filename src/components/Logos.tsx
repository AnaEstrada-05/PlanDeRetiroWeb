import "./Logos.css";

function Logos() {
  return (
    <div className="logos">
      <div id="logoSM">
        <a href="/segurosmonterrey">
          <img src="src/assets/segurosMonterrey.png" alt="segurosMonterrey" />
        </a>
      </div>
      <div id="logoPru">
        <a href="/prudential">
          <img src="src/assets/prudential.png" alt="prudential" />
        </a>
      </div>
      <div id="logoAll">
        <a href="/allianz">
          <img src="src/assets/allianz.png" alt="allianz" />
        </a>
      </div>
    </div>
  );
}

export default Logos;
