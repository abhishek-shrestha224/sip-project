import React from "react";

async function getPhotos() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos",
    { cache: "force-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Trending = async () => {
  // const images = [
  //   { url: "/img/colors.png" },
  //   { url: "/img/banner.png" },
  //   { url: "/img/einstien.png" },
  //   { url: "/img/portrait-1.png" },
  //   { url: "/img/portrait-2.png" },
  //   { url: "/img/portrait-3.png" },
  //   { url: "/img/portrait-4.png" },
  //   { url: "/img/portrait-5.png" },
  //   { url: "/img/portrait-6.png" },
  //   { url: "/img/tree.png" },
  //   { url: "/img/vase.png" },
  //   { url: "/img/village.png" },
  // ];

  const images = await getPhotos();
  return (
    <section className="TrendingPage">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Trending:</h2>
      </div>
      <section className="ImageGallery">
        {images.map((image, index) => (
          <figure className="ImgWrapper" key={index}>
            <img src={image.url} alt="Images" />
          </figure>
        ))}
      </section>
    </section>
  );
};

export default Trending;
