import React from "react";
import resim from "../assets/is-hukuku.jpg";

const Hizmetler = () => {
  const handleClick = () => {
    console.log("tıklandı");
  };

  return (
    <div className="container-hizmetler">
      <div className="hizmetler">
        <h1 style={{ textAlign: "center", fontWeight: "700" }}>Hizmetler</h1>
        <p style={{ textAlign: "center", padding: "2rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
        </p>
      </div>

      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          justifyContent: "center",
        }}
      >
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              İş Hukuku ve Sosyal Güvenlik
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              İş Sağlığı ve Güvenliği
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              Teşvikler
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              KVKK
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              Yönetim ve Organizasyon
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{ width: "30rem", cursor: "pointer" }}
          onClick={handleClick}
        >
          <img className="card-img-top" src={resim} alt="resim" />
          <div className="card-body">
            <h5 className="card-title" style={{ fontWeight: "700" }}>
              Emeklilik
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Hizmetler;
