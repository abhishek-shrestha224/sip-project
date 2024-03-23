import React from "react";

const Trending = () => {
  const images = [
    { url: "/img/colors.png" },
    { url: "/img/banner.png" },
    { url: "/img/einstien.png" },
    { url: "/img/portrait-1.png" },
    { url: "/img/portrait-2.png" },
    { url: "/img/portrait-3.png" },
    { url: "/img/portrait-4.png" },
    { url: "/img/portrait-5.png" },
    { url: "/img/portrait-6.png" },
    { url: "/img/tree.png" },
    { url: "/img/vase.png" },
    { url: "/img/village.png" },
  ];
  return (
    <section className="TrendingPage">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Trending:</h2>
      </div>
      <section className="ImageGallery">
        {images.map((image, index) => (
          <figure className="ImgWrapper" key={index}>
            <img src={image.url} />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Trending;
