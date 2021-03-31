import React from 'react'
import data from './ReviewData'
import Title from './Title'
import { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'

function Reviews() {
    const [people] = useState(data)
  const [index, setIndex] = React.useState(0)

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1
      if (index > people.length - 1) {
        index = 0
      }
      return index
    })
  }
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = people.length - 1
      }
      return index
    })
  }

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1
        if (index > people.length - 1) {
          index = 0
        }
        return index
      })
    }, 5000)
    return () => {
      clearInterval(slider)
    }
  }, [index, people.length])

    return (
        <div className='review'>
            <div className="review-details">
                <div className='review-title'><Title title='reviews' /></div>
                
                <div className='section-center-review'>
                    {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person

                    let position = 'nextSlide article'
                    if (personIndex === index) {
                        position = 'activeSlide article'
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide article'
                    }

                    return (
                        <article className={position} key={id}>
                            <div className='person-img-con'>
                                <img src={image} alt={name} className='person-img' />
                                <FaQuoteRight className='icon' />
                            </div>
                               
                            <h4 className='reviewer'>{name}</h4>
                            <p className='title'>{title}</p>
                            <p className='text'>{quote}</p>
                           
                        </article>
                    )
                    })}
                    <button className='prev' onClick={prevSlide}>
                    <FiChevronLeft />
                    </button>
                    <button className='next' onClick={nextSlide}>
                    <FiChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
