import { FaCircleUser } from "react-icons/fa6";

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

export default async function Artists() {
  const artists = await getArtists();
  const photos = await getPhotos();
  return (
    <section className="ArtistsPage">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Artists:</h2>
      </div>
      <main className="ArtistsWrapper">
        {artists.map((artist, index) => (
          <div className="Artist" key={index}>
            <figure className="AvatarWrapper">
              <FaCircleUser />
            </figure>
            <div className="TextWrapper">
              <h2>{artist.name}</h2>
              <p>@{artist.username.toLowerCase()}</p>
            </div>
          </div>
        ))}
      </main>
    </section>
  );
}
