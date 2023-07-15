import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardMovie = ({ data }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${data.id}`}>
        <div className="card">

          <img src={'https://image.tmdb.org/t/p/w500/' + data.poster_path} className="card__image" alt="hu" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفيلم : {data.title}</p>
              <p>تاريخ الاصدار:{data.release_date}</p>
              <p>عدد المقيمين:{data.vote_count}</p>
              <p>التقييم:{data.vote_average} </p>
            </div>
          </div>
        </div>
      </Link>
    </Col >
  );
};

export default CardMovie;
