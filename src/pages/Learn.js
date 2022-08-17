import React from "react";
import "./Learn.css";

function Learn() {
  return (
    <div>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <div className="wrapper-overview">
        <div className="wrapper-rating-facilities">
          <div className="wrapper-rating">
            <div className="wrapper-title">
              <h3 className="title">Rating</h3>
            </div>
            <div className="box-rating">
              <img
                src="/assets/icon/icon-rating-fantastic.svg"
                alt="fantastic"
              />
              <div className="rating-score">9.7</div>
              <div className="wrapper-rating-desc">
                <strong>Fantastis</strong>
                <div>Dari 172 ulasan</div>
              </div>
            </div>
          </div>
          <div className="wrapper-facilities">
            <div className="wrapper-title">
              <h3 className="title">Fasilitas Hotel</h3>
              <a className="link-text" href="#">
                Lihat Semua
              </a>
            </div>
            <ListFacilities />
          </div>
        </div>
      </div>
    </div>
  );
}

function ListFacilities() {
  let facilities = [
    "Wifi",
    "Restoran",
    "Kulkas",
    "Area Parkiran",
    "TV Kabel",
    "Gym",
    "Resepsionis & Layanan Kamar",
    "Coworking Space",
    "Brankas Kamar",
    "Kebersihan Kamar",
  ];

  let facilCol = [];
  let floor = Math.floor(facilities.length / 5);

  if (facilities.length % 5 === 0) {
    for (let colIndex = 0; colIndex < 5; colIndex++) {
      facilCol[colIndex] = [];
      console.log("column ke-", colIndex + 1, facilCol[colIndex]);
      for (let rowIndex = 0; rowIndex < floor; rowIndex++) {
        console.log("loop ke-", rowIndex, ", column ke-", colIndex + 1);
        facilCol[colIndex].push(facilities[0]);
        facilities.splice(0, 1);
        console.log(facilCol, facilities);
      }
    }
  } else {
    console.log("else");
  }

  return (
    <ol className="wrapper-list">
      {facilCol.map((col, colIndex) => {
        return (
          <div className="column-list" key={colIndex}>
            {col.map((item, itemIndex) => {
              return <li key={itemIndex}>{item}</li>;
            })}
          </div>
        );
      })}
    </ol>
  );
}

export default Learn;
