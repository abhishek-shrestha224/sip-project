import React from "react";

const Abstracts = () => {
  return (
    <article className="Portraits">
      <div className="_Banner">
        <div className="Shape"></div>
        <h2>Abstract:</h2>
      </div>
      <div className="Wrapper">
        <figure className="Img1 ImgWrapper">
          <img src="/img/portrait-1.png" className="Img" />
        </figure>

        <figure className="Img2 ImgWrapper">
          <img src="/img/portrait-2.png" className="Img" />
        </figure>
        <figure className="Img6 ImgWrapper">
          <img src="/img/portrait-6.png" className="Img" />
        </figure>
        <figure className="Img3 ImgWrapper">
          <img src="/img/portrait-3.png" className="Img" />
        </figure>
        <figure className="Img4 ImgWrapper">
          <img src="/img/portrait-4.png" className="Img" />
        </figure>
        <figure className="Img5 ImgWrapper">
          <img src="/img/portrait-5.png" className="Img" />
        </figure>
      </div>
    </article>
  );
};

export default Abstracts;
