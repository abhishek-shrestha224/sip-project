import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";

export function generateMetadata({ params }) {
  return {
    title: `Artists`,
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

export default async function Artists() {
  const artists = await getArtists();

  return (
    <section className="ArtistsPage">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Artists:</h2>
      </div>
      <main className="ArtistsWrapper">
        {artists.map((artist, index) => (
          <div key={index}>
            <Link href={`/artists/${artist.id}`} className="Artist">
              <figure className="AvatarWrapper">
                <FaCircleUser />
              </figure>
              <div className="TextWrapper">
                <h2>{artist.name}</h2>
                <p>@{artist.username.toLowerCase()}</p>
              </div>
            </Link>
          </div>
        ))}
      </main>
    </section>
  );
}
