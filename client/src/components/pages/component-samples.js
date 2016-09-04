import React, { Component } from 'react'

const bronzeFeatures = ['Really cool', 'Pretty cheap', 'Awesome']
const silverFeatures = ['A couple features', 'Pretty neat']
const goldFeatures = ['A bit cooler yet']
const social = [
  {
    name: 'Facebook',
    href: 'http://facebook.com/',
    img: 'http://localhost:8080/src/public/img/icons/facebook.svg'
  },
  {
    name: 'Twitter',
    href: 'http://twitter.com/',
    img: 'http://localhost:8080/src/public/img/icons/twitter.svg'
  }
]

const rotators = [
  {
    img: '',
    headline: '',
    text: 'I love React!',
    author: 'JS'
  },
  {
    img: '',
    headline: '',
    text: 'MERN stack is pretty cool.',
    author: 'DM'
  }
]

class ComponentSamplesPage extends Component {
  render () {
    return (
      <div className='select-plan'>
        <h1>To be defined</h1>
      </div>
    )
  }
}

export default ComponentSamplesPage
