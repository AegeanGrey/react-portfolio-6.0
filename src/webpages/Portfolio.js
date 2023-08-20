import React from 'react';
import pikes from '../assets/images/pikes.JPEG';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaCard from '../components/Cards'

// Page for my Portfolios Structure/Content
function Portfolio() {

  const background = {
    backgroundImage: `url(${pikes})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={background}>
      <Header />
      <div className='portfolioTitle'>
        <h3>Portfolio</h3>
      </div>
      <MediaCard />
      <Footer />
    </div>
  )
}

export default Portfolio
