import "../dashboard/style.css";
import Logo from "../../assets/logo.png";
import Whatsapp from "../../assets/whatsapp.png";
import Special1 from "../../assets/special-1.jpg";
import Portrait from "../../assets/portrait.jpg";

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

function Dashboard() {
  return (
    <>
      <div>
        <div id="banner">
          <p id="banner-txt">Curate Your Home with Handmade Art That Speaks</p>
        </div>
        {galleries.map((gallery, index) => (
          <div key={index} className={gallery.className}>
            {gallery.items.map((item, idx) => (
              <div key={idx} className={`${gallery.className}-item`}>
                <img src={item.src} alt={item.alt} />
                <p className="contact-item">{item.title}</p> <p>{item.price}</p>
              </div>
            ))}
          </div>
        ))}
        <p className="rights-reserved">@All Rights Reserved</p>{" "}
      </div>
    </>
  );
}

export default Dashboard;
