import * as React from "react";

export default function Gallery() {
  return (
    <article className="Gallery">
      <div className="Header">
        <div className="Shape"></div>
        <h2>From Our Collections</h2>
      </div>
      <div className="Wrapper">
        <figure className="ImgWrapper Grid1">
          <img src="/img/tree.png" className="Img" />
        </figure>

        <figure className="ImgWrapper Grid2">
          <img src="/img/einstien.png" className="Img" />
        </figure>

        <figure className="ImgWrapper Grid3">
          <img src="/img/vase.png" className="Img" />
        </figure>

        <figure className="ImgWrapper Grid4">
          <img src="/img/colors.png" className="Img" />
        </figure>

        <figure className="ImgWrapper Grid5">
          <img src="/img/village.png" className="Img" />
        </figure>
      </div>
    </article>
  );
}
