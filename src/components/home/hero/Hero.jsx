import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO recruitx' title='Where techies realise their true potential !!' />
            <p>Let leading Indian technology companies compete to hire you.</p>
            <div className='button'>
              <button className='primary-btn'>
              GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                Book Demo Session <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
