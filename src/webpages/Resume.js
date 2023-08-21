import React from 'react';
import pier from '../assets/images/pier.jpg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import resume from '../assets/downloads/Resume.pdf';

// Page for Resume Structure/Content
function Resume() {

  const background = {
    backgroundImage: `url(${pier})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div style={background}>
      <Header />
      <div className='resumeTitle'>
        <h3>Resume</h3>
      </div>

      <div className='center'>
        <a className='Download' href={resume} download={resume}>Download my resume</a>
      </div>

    <div className='FlexCard'>
      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Coding Languages</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>MySQL</li>
            <li>JavaScript</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Libraries</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>jQuery</li>
            <li>React.js</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Frameworks</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>Jest</li>
            <li>Bootstrap</li>
            <li>Express.js</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Database Structures</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>NoSQL</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
        </div>
      </section>

      <section className='Card'>
        <div className='CardContent'>
        <div className='CardTitle'>
          <h4>Practices</h4>
        </div>
        <div className='CardList'>
          <ul>
            <li>DRY</li>
            <li>Agile</li>
            <li>Test-Driven Development</li>
            <li>Object-Oriented Programming</li>
          </ul>
        </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  )
}

export default Resume
