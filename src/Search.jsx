import React, { useState } from "react";
import Sresult from "./Sresult";

const Search = () => {
  const [img, SetImg] = useState("");

  const InputEvent = (event) => {
    const Data = event.target.value;
    console.log(Data) //just for checkong the in[ut value]
    SetImg(Data);
  };

  return (
    <>
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search here"
          value={img}
          onChange={InputEvent}
        />
      </div>
      {img===""?null: <Sresult name={img} />}
     
     
    </>
  );
};

export default Search;
