import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import "./products.scss";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { NavLink, useSearchParams } from "react-router-dom";
import Module from "../Module/Module";
import Loading from "../loading/Loading";

let API_URL = "https://dummyjson.com";

function Products() {
  const [data, setData] = useState(null);
  const [searchParams, setsearchParams] = useSearchParams();
  const [datail, setDatail] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  let id = searchParams.get("detail");
  let limit = searchParams.get("limit") || 1;
  let count = 6;

  document.body.style.overflow = id ? "hidden" : "auto";

  useEffect(() => {
    axios
      .get(`${API_URL}/products`, {
        params: {
          limit: count * limit,
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [limit]);

  useEffect(() => {
    let id = searchParams.get("detail");
    if (id) {
      setDetailsLoading(true);
      axios
        .get(`${API_URL}/products/${id}`)
        .then((res) => setDatail(res.data))
        .finally(() => setDetailsLoading(false));
    }
  }, [searchParams]);

  const closeDetails = useCallback(() => {
    setDatail(null);
    setsearchParams({});
  }, []);

  let categoryCard = data
    ?.slice(0, 15)
    ?.map((el) => <li className="products__item">{el?.brand}</li>);

  let productData = data?.map((product) => (
    <div key={product.id} className="products__card">
      <div className="products__card__img">
        <img
          onClick={() => setsearchParams({ detail: product.id })}
          src={product?.images[0]}
          alt=""
        />
      </div>
      <div className="products__card__info">
        <NavLink to={`/single/${product.id}`}>
          <h3 className="products__card__info__title">{product?.title}</h3>
        </NavLink>
        <p className="products__card__info__text">{product?.description}</p>
      </div>
      <div className="products__card__info__shop">
        <p className="products__card__info__desc">{product?.price} руб</p>
        <button>
          <LiaShoppingBagSolid />
          <p>В корзину</p>
        </button>
      </div>
    </div>
  ));

  return (
    <section className="products">
      <h1 className="products__title">Готовые наборы</h1>
      <ul className="products__category container">{categoryCard}</ul>
      <div className="products__cards container">{productData}</div>
      {searchParams.get("detail") ? (
        <Module width={"60%"} close={closeDetails}>
          {detailsLoading ? (
            <Loading />
          ) : (
            <div className="products__module">
              <img src={datail?.images[0]} alt="" />
              <div className="products__module__info">
                <h2>{datail?.title}</h2>
                <p>{datail?.description}</p>
              </div>
            </div>
          )}
        </Module>
      ) : (
        <></>
      )}
      <button
        onClick={() => setsearchParams({ limit: +limit + 1 })}
        className="products__btns-more"
      >
        setsearchParams
      </button>
    </section>
  );
}

export default Products;
