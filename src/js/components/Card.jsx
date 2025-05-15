import React from 'react'

const Card = ({title, text, imagen}) => {

  let btnText = "Find out more!"
  let styleDiv = {width: "17rem" }

  return (
    <div className="card" style={styleDiv}>
      <img src={imagen} className="card-img-top" alt="random internet pic" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">{btnText}</a>
      </div>
    </div>
  );
};

export default Card