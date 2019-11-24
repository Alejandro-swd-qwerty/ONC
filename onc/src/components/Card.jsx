import React from 'react'

function Card(props) {
  return (

    <div className="card mb-3 col-3 mr-3">
      <img src={ props.graph } className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> { props.title } </h5>
        <p className="card-text"> { props.description } </p>
      </div>
    </div>
  )
}

export default Card