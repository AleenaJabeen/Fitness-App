import React from 'react'

function Card(props) {
  return (
    <>
      <section className="card">
        <img src="" alt="" />
        <h4>{props.title}</h4>
        <button>Read More</button>
      </section>
    </>
  )
}

export default Card
