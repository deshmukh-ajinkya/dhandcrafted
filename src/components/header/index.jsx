import "../header/style.css";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";

export function Header() {
  return (
    <div id="header">
      <img
        src={Logo}
        width={200}
        height="auto"
        alt="Logo"
        className="logo-padding" // Added class for padding
      />
      <div id="contact-container">
        <img src={Whatsapp} width="24px" height="24px" alt="Whatsapp" />
        <p>+91-7719950703</p>
      </div>
    </div>
  );
}
