import React from "react";

function Avator({ img, onClick }) {
  return (
    <div className="my-6">
      <img className="w-32 h-32 cursor-pointer " src={img} alt="Avatar" onClick={onClick} />
    </div>
  );
}

export default Avator;