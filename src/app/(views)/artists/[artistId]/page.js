import React from "react";
import { FaCircleUser } from "react-icons/fa6";

export function generateMetadata({ params }) {
  return {
    title: `Artist-${params.artistId}`,
  };
}
async function getArtists() {
  const res = await fetch("https://jsonplaceholder.typicode.com//users", {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

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

export default async function Artist({ params }) {
  const artists = await getArtists();
  console.log(params.artistId);
  const images = await getPhotos();

  const artist = artists.find((a) => params.artistId == a.id);
  return (
    <section className="ArtistsDynamic">
      <div className="ArtistDetail">
        <figure className="AvatarWrapper">
          <FaCircleUser />
        </figure>
        <p>@{artist.username.toLowerCase()}</p>
        <h2>{artist.name}</h2>
      </div>
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>ArtWorks:</h2>
      </div>
      <div className="ImageGallery">
        {images.map((image, index) => (
          <figure className="ImgWrapper" key={index}>
            <img src={image.url} alt="Images" />
          </figure>
        ))}
      </div>
    </section>
  );
}
