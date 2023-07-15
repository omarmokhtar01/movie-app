import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import PaginationComponent from "./Pagination";
import { useDispatch, useSelector } from "react-redux";
import { allMovieAction } from "../redux/actions/movieAction";

const MoviesList = () => {

  const [movie, setMovie] = useState([]);
  //5-change data in reducer with dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allMovieAction())
  }, []);

  // 4- access date store from rducer with useSelector
  const dataMovie = useSelector((state) => state.movie)
  useEffect(() => {
    setMovie(dataMovie)
  }, [dataMovie]);

  return (
    <Row className="mt-3">
      {
        movie.length >= 1 ? (movie.map((item) => {
          return (<CardMovie data={item} key={item.id} />)
        }
        )) : <h4>لا يوجد افلام</h4>
      }
      <PaginationComponent />
    </Row>
  )
}

export default MoviesList;
