import React from 'react'

const Navbar = () => {
  return (<>
    <div className='container1'>
      <div className="title">
        <a href="http://localhost:5173/"> <h1 id="fashionhub"><i>FashionHub</i></h1>  </a>
        <div className="navlinks">
          <span><select id="category">
            <option>shoes</option>
            <option>bags</option>
            <option>hats</option>
          </select></span>
          <span id="brand">Brand</span>
          <a href="./contact.html" id="contactdisplay"><span id="contact">Contact</span></a>
          <span id="faq">FAQ's</span>
        </div>
      </div>

      <div className="basket">
        <button id="basketimg">
          <span id="items-selected"><a href="./card.html" id="hover" className="hover">0</a></span>
          {/* ${cardItems.length} */}
          <i id="icon1" className="fa-solid fa-bag-shopping"></i>
        </button>
        <button id="bell">
          <span id="bells"></span>
          <i id="icon2" className="fa-regular fa-bell"></i>
        </button>
        <div className="title-image">
          <img src="./image/IMG-20220225-WA0033.jpg" />
          <div className="name">
            <span id="gmorning">Good morning</span>
            <span id="johnson">Scarlet Johnson</span>
          </div>
        </div>
      </div>
    </div>
    <hr id="hr"/>
  </>

  )
}

export default Navbar