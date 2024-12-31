'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import home from './img/home.png'
import fruitCake from './img/fruit.jpg'
import fruitCake1 from './img/fruit1.jpg'
import fruitCake2 from './img/fruit2.jpg'
import fruitCake3 from './img/fruit3.jpg'
import chocolateCake from './img/chocolate.jpg'
import chocolateCake1 from './img/chocolate1.jpg'
import chocolateCake2 from './img/chocolate2.jpg'
import chocolateCake3 from './img/chocolate3.jpg'
import birthdayCake from './img/birthday.jpg'
import birthdayCake1 from './img/birthday1.jpg'
import birthdayCake2 from './img/birthday2.jpg'
import birthdayCake3 from './img/birthday3.jpg'

export default function Home() {

  const [isOpen, setIsOpen] = useState(1)
  const [showme, setShowMe] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    let t = setTimeout(() => {
      setShowMe('home')
    }, 100);
  }, [])

  function handleClick(panel) {
    setIsOpen((prevPanel) => (prevPanel === panel ? null : panel))
  }

  return (
    <div className="container">
      <section className={"home d-flex " + (showme === 'home' ? '' : 'hide')}>
        <Stripes />
        <h1>
          <span>Welcome to</span>
          <span>Paradise</span>
          <span>Cake!</span>
          <small>Treat yourself any day<br />Enjoy at any time</small>
          <button type="button" className="button" onClick={() => setShowMe('cakes')}>Browse</button>
        </h1>
        <div className="img d-flex">
          <Image src={home} alt="cake" />
        </div>
      </section>
      <section className={"cakes d-flex " + (showme === 'cakes' ? '' : 'hide')}>
        <Stripes />
        <h2>
          <span>Our Passion,</span>
          <span>Your Paradise</span>
          <small>Our Exclusive Cakes</small>
        </h2>
        <div className="accordion">
          <Panel isOpen={isOpen === 1} onClick={() => handleClick(1)}>
            <p className="d-flex"><strong>Fruit Cakes</strong><span>+</span></p>
            <div>
              <Image src={fruitCake} alt="fruit cake" />
              <button type="button" className="button" onClick={(e) => { e.stopPropagation(); setShowMe('carousel'); setCategory('Fruit')}}>
                Browse All
              </button>
            </div>
          </Panel>
          <Panel isOpen={isOpen === 2} onClick={() => handleClick(2)}>
            <p className="d-flex"><strong>Chocolate Cakes</strong><span>+</span></p>
            <div>
              <Image src={chocolateCake} alt="chocolate cake" />
              <button type="button" className="button" onClick={(e) => { e.stopPropagation(); setShowMe('carousel'); setCategory('Chocolate')}}>
                Browse All
              </button>
            </div>
          </Panel>
          <Panel isOpen={isOpen === 3} onClick={() => handleClick(3)}>
            <p className="d-flex"><strong>Birthday Cakes</strong><span>+</span></p>
            <div>
              <Image src={birthdayCake} alt="birthday cake" />
              <button type="button" className="button" onClick={(e) => { e.stopPropagation(); setShowMe('carousel'); setCategory('Birthday')}}>
                Browse All
              </button>
            </div>
          </Panel>
        </div>
      </section>
      <section className={"carousel d-flex " + (showme === 'carousel' ? '' : 'hide')}>
        <Stripes />
        <h2>
          <span>Paradisiac</span>
          <span>{category}</span>
          <span>Cakes</span>
        </h2>
        <div className="slide-wrapper">
          <Slides show={category === 'Fruit'} category={category} img1={fruitCake1} img2={fruitCake2} img3={fruitCake3} />
          <Slides show={category === 'Chocolate'} category={category} img1={chocolateCake1} img2={chocolateCake2} img3={chocolateCake3} />
          <Slides show={category === 'Birthday'} category={category} img1={birthdayCake1} img2={birthdayCake2} img3={birthdayCake3} />
          <div className="text-center browse-more">
            <button className="button" onClick={() => setShowMe('cakes')}>More Cakes</button>
            <button className="button" onClick={() => setShowMe('home')}>Home</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stripes() {
  return (
    <div className="stripes">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

function Panel({ children, isOpen, onClick }) {
  return (
    <div className={"panel d-flex" + (isOpen  ? ' open' : '')} onClick={onClick}>
      {children}
    </div>
  )
}

function Slides({ show, category, img1, img2, img3 }) {
  const [isActive, setIsActive] = useState(1)

  return (
    <div className={"slides " + (show ? '' : 'hide')}>
      <div className={"slide" + (isActive === 1 ? ' active' : '')}>
        <Image src={img1} alt={category + " cake"} />
      </div>
      <div className="arrows">
        <span className="arrow-left" onClick={() => setIsActive(3)}>&lt;</span>
        <span className="arrow-right" onClick={() => setIsActive(2)}>&gt;</span>
      </div>
      <div className={"slide" + (isActive === 2 ? ' active' : '')}>
        <Image src={img2} alt={category + " cake"} />
      </div>
      <div className="arrows">
        <span className="arrow-left" onClick={() => setIsActive(1)}>&lt;</span>
        <span className="arrow-right" onClick={() => setIsActive(3)}>&gt;</span>
      </div>
      <div className={"slide" + (isActive === 3 ? ' active' : '')}>
        <Image src={img3} alt={category + " cake"} />
      </div>
      <div className="arrows">
        <span className="arrow-left" onClick={() => setIsActive(2)}>&lt;</span>
        <span className="arrow-right" onClick={() => setIsActive(1)}>&gt;</span>
      </div>
    </div>
  )
}
