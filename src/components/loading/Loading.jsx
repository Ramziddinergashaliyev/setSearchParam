import React from "react";
import "./loading.scss";

function Loading() {
  return (
    <div className="loading">
      <div className="container">
        <div class="singleLoading container">
          <div class="singleLoading__img bg__anim"></div>
          <div className="singleLoading__info">
            <div class="singleLoading__title bg__anim"></div>
            <div class="singleLoading__title bg__anim"></div>
            <div class="singleLoading__title bg__anim"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
