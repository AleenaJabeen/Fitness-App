import React from 'react'

function TestimononialsCard(props) {
  return (
    <>
      <section className="testimonial">
        <img src="" alt="" />
        <h3>{props.headline}</h3>
        <p>{props.description}</p>
        <div className="ratings">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
      </section>
    </>
  )
}

export default TestimononialsCard
