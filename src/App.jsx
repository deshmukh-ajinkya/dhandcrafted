import "./App.css";
import Logo from "./assets/logo.png";
import Whatsapp from "./assets/whatsapp.png";
import Special1 from "./assets/special-1.jpg";
import Portrait from "./assets/portrait.jpg";

const galleries = [
  {
    className: "gallery-top",
    items: [
      {
        src: Special1,
        alt: "Special",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Portrait 1",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Portrait 2",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
    ],
  },
  {
    className: "gallery-middle",
    items: [
      {
        src: Portrait,
        alt: "Portrait 1",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Portrait 2",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Special1,
        alt: "Special",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
    ],
  },
  {
    className: "gallery-bottom",
    items: [
      {
        src: Portrait,
        alt: "Portrait 1",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Portrait 2",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Special",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
      {
        src: Portrait,
        alt: "Special",
        title: "Amazing Waterfall",
        price: "RS 150",
      },
    ],
  },
];

function App() {
  return (
    <>
      <div>
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
        <div id="banner">
          <p id="banner-txt">
            Curate Your Home with Art
            That Speaks - Devyani
          </p>
        </div>
        {galleries.map((gallery, index) => (
          <div key={index} className={gallery.className}>
            {gallery.items.map((item, idx) => (
              <div key={idx} className={`${gallery.className}-item`}>
                <img src={item.src} alt={item.alt} />
                <p className="contact-item">{item.title}</p>{" "}
                {/* Added class for text styling */}
                <p>{item.price}</p>
              </div>
            ))}
          </div>
        ))}
        <p className="rights-reserved">@All Rights Reserved</p>{" "}
        {/* Added class for styling */}
      </div>
    </>
  );
}

export default App;
