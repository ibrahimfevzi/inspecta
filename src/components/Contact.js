import React from "react";

const Contact = () => {
  return (
    <div
      className="contact-container"
      style={{
        paddingTop: "5rem",
        backgroundColor: "#0f2145",
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.6978151628673!2d29.21623517623796!3d40.90044312605749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5b0979b4a45%3A0x7e84412f3eba0c52!2zSW5zcGVjdGEgRGFuxLHFn21hbmzEsWsgdmUgRGVuZXRpbSBBLsWeLg!5e0!3m2!1str!2str!4v1685655435778!5m2!1str!2str"
            width="70%"
            height="350"
            style={{ border: "0", display: "block", margin: "auto" }}
            allowFullScreen=""
            loading="lazy"
            title="Inspecta Danışmanlık ve Denetim A.Ş. Google Maps"
          ></iframe>
        </div>
        <div className="col-md-6">
          <div
            className="address-container"
            style={{
              color: "#fff",
              paddingRight: "2rem",
              paddingLeft: "2rem",
              paddingTop: "2rem",
            }}
          >
            <h2 style={{ fontWeight: "700" }}>İletişim</h2>
            <br />
            <>
              Inspecta Danışmanlık ve Denetim A.Ş. <br />
              <br />
              Yalı Mah. Topselvi Cad. No:100/B Mai Rezidans B Blok D:20
              Kartal/İstanbul <br />
              <br />
              www.inspecta.com.tr <br />
              <br />
              info@inspecta.com.tr <br />
              <br />
              +90 551 009 75 72 <br />
            </>
          </div>
        </div>
      </div>
      <div
        className="footer"
        style={{
          textAlign: "center",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "1rem",
        }}
      >
        © 2023 | INSPECTA | All Rights Reserved
      </div>
    </div>
  );
};

export default Contact;
