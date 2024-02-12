import { useState, useEffect, ChangeEvent } from "react";
import "./NewsLetter.css";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showWarning, setShowWarning] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Nuevo estado para el mensaje de éxito

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(inputEmail);
    setIsValidEmail(isValid);

    setShowWarning(inputEmail.trim() === "" || !isValid);
  };

  const handleSubscribe = () => {
    if (isValidEmail && email.trim() !== "") {
      fetch(
        "https://script.google.com/macros/s/AKfycbw6ykJMFpaXLsbUvXeBATGbghH7RUkGHEKjLsjByMbRhx6R3Un3of-fTcsumH0KL7qaRQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        }
      )
        .then((response) => response.text())
        .then((data) => {
          console.log("Suscrito:", email);
          console.log("Response from server:", data);

          // Mostrar el mensaje de éxito después de la suscripción exitosa
          setShowSuccessMessage(true);
        })
        .catch((error) => {
          console.error("Error subscribing:", error);
        })
        .finally(() => {
          setEmail("");
        });
    } else {
      setShowWarning(true);
    }
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  useEffect(() => {
    console.log("Componente montado");
  }, []);

  return (
    <div id="newsletter" className="newsletter">
      <div className="newsletterInfo">
        <h3>Suscríbete a nuestro Newsletter</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
          massa ex.
        </p>
      </div>
      <div className="userInfo">
        <div className="input">
          <input
            type="text"
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChange={handleEmailChange}
          />
          <div style={{ position: "relative" }}>
            {showWarning && !isValidEmail && (
              <p id="warning" style={{ color: "red", marginTop: "10px" }}>
                Por favor, introduce un correo electrónico válido.
              </p>
            )}
            {showSuccessMessage && (
              <p id="success" style={{ color: "green", marginTop: "10px" }}>
                ¡Gracias por suscribirte a nuestro newsletter!
              </p>
            )}
          </div>
        </div>
        <button className="empezar" onClick={handleSubscribe}>
          Suscribirse
        </button>
      </div>
    </div>
  );
}

export default Newsletter;
