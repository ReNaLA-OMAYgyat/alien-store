// HomeCarousel.jsx
import React from "react";

export default function HomeCarousel() {
  const slides = [
    { id: 1, title: "Selamat Datang", subtitle: "Temukan produk favoritmu!", image: "https://images.tokopedia.net/img/cache/700/VqbcmM/2022/6/24/37920b3a-b59f-4fb9-8347-774c7f99abbd.jpg", buttonText: "Belanja Sekarang", buttonLink: "#" },
    { id: 2, title: "Promo Spesial", subtitle: "Diskon hingga 50%", image: "https://images.asics.com/is/image/asics/1183B493_100_SR_RT_GLB?qlt=100&wid=1024&hei=768&bgc=255,255,255&resMode=bisharp", buttonText: "Lihat Promo", buttonLink: "#" },
    { id: 3, title: "Produk Baru", subtitle: "Jangan sampai ketinggalan tren terbaru", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlWLxPNCqoOlAXS-F_0BP9jpaDPKZNqtgYsw&s", buttonText: "Cek Sekarang", buttonLink: "#" },
  ];

  return (
    <div className="container mt-4">
      <div id="homepageCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {slides.map((slide, index) => (
            <button key={slide.id} type="button" data-bs-target="#homepageCarousel" data-bs-slide-to={index} className={index===0?"active":""} aria-current={index===0?"true":undefined} aria-label={`Slide ${index+1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`carousel-item ${index===0?"active":""}`}>
              <img src={slide.image} className="d-block w-100 rounded-sm" alt={slide.title} style={{maxHeight:"500px", objectFit:"cover"}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                <h3>{slide.title}</h3>
                <p>{slide.subtitle}</p>
                <a href={slide.buttonLink} className="btn btn-primary">{slide.buttonText}</a>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#homepageCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#homepageCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
