import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import "./single.scss";
const API_URL = "https://dummyjson.com";

function Single() {
  const [single, setSingle] = useState(null);
  let { id } = useParams();
  console.log(id);
  console.log(single);
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((res) => setSingle(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single container">
      <div className="single__card">
        <div className="single__card__img">
          <img src={single?.images[0]} alt="" />
        </div>
        <div className="single__card__info">
          <h2 className="single__card__info">{single?.title}</h2>
          <p className="single__card__info">{single?.description}</p>
          <p className="single__card__info">price: {single?.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Single;
