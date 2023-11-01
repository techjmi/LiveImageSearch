import React from "react";

const Sresult = (props) => {
  return (
    <>
      <div className="img">
        <img
          src={`https://source.unsplash.com/random/300x300/?${props.name}`}
          alt="slow net"
        />

      </div>
    </>
  );
};

export default Sresult;
