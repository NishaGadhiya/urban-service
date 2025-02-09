import React from 'react'
import './MainPage.css'
import '@fortawesome/fontawesome-free/css/all.css';
import s1 from './img/plumber1.png'
import s2 from './img/wedding2.png'
import s3 from './img/IT2.png'
import s4 from './img/CR1.png'
import s5 from './img/M1.png'
import s6 from './img/C1.png'
import grid_1 from './img/M2.png'
import grid_2 from './img/E1.png'
import grid_3 from './img/Hair1.png'
import { Link } from 'react-router-dom';


export const MainPage = () => {
  return (
    <div
    style={{
      backgroundColor: "#f0f0f0",
    }}>
    <nav>
      <div className="navbar_logo">
        <Link to="/" className='logo'>Urban Services😃</Link>
      </div>
      <ul className="nav_links">
        {/* <li className="link">Home</li>
        <li className="link">Blog</li>
        <li className="link">Offers</li>
        <li className="link">Services</li> */}
        <Link to='/login'><li className="link">Login</li></Link>
        <Link to='/registration'><li className="link">Sign Up</li></Link>
      </ul>
    </nav>
    <header>
      <div className="section_container">
        <div className="header_content">
          <h1>Urban Services: Your Trusted Service Provider.</h1>
          <p>
          Welcome to Urban Services.At Urban Services, we bring convenience and expertise to your doorstep. Say goodbye to the hassle of finding reliable service providers. Whether you need a plumber, electrician, cleaner, or beautician, we've got you covered. Our platform connects you with skilled professionals who are vetted, experienced, and ready to tackle your needs.
          </p>
          <Link to='/login'><button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>{" "}
            Know more
          </button></Link>
        </div>
      </div>
    </header>
    <section className="journey_container">
      <div className="section_container">
        <h2 className="section_title">Start Your Journey With Us</h2>
        <p className="section_subtitle">
          Our Services{" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
  <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"/>
</svg>
        </p>
        <div className="journey_grid">
          <div className="service_card">
            <img src={s1} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>Plumber</span>
            </div>
          </div>
          <div className="service_card">
            <img src={s2} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>Wedding Catering</span>
            </div>
          </div>
          <div className="service_card">
            <img src={s3} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>IT solutions</span>
            </div>
          </div>
          <div className="service_card">
            <img src={s4} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>Car repair</span>
            </div>
          </div>
          <div className="service_card">
            <img src={s5} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>Massage</span>
            </div>
          </div>
          <div className="service_card">
            <img src={s6} alt="service" />
            <div className="service_name">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
              <span>Cleaning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="banner_container">
      <div className="section_container">
        <div className="banner_content">
          <h2> Exclusive Offer: Get 20% Off Your First Service Booking!</h2>
          <p>
          Experience the difference with Urban Services and enjoy a special discount on your initial booking. Whether you're in need of home maintenance, beauty treatments, or specialized repairs, take advantage of this limited-time offer to save on quality service. Don't miss out - book now and elevate your service experience with Urban Services!"
          </p>
          <Link to='/login'><button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-heart" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
            Book Now!
          </button></Link>
        </div>
      </div>
    </section>
    <section className="display_container">
      <div className="section_container">
        <h2 className="section_title">Why Choose Us</h2>
        <p className="section_subtitle">
        Choose Urban Services for reliable professionals and top-notch quality every time. Our user-friendly platform offers convenience with just a few clicks, covering all your needs from household maintenance to beauty and wellness. Enjoy flexible scheduling options and our satisfaction guarantee. Trust Urban Services for convenience, reliability, and satisfaction.
        </p>
        <div className="display_grid">
          <div className="display_card grid-1">
            <img src={grid_1} alt="grid" />
          </div>
          <div className="display_card">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
            </div>
            <h4>Tailored Service Selection</h4>
            <p>Personalized selection for home, beauty, and specialized repair needs.</p>
          </div>
          <div className="display_card">
            <img src={grid_2} alt="grid" />
          </div>
          <div className="display_card">
            <img src={grid_3} alt="grid" />
          </div>
          <div className="display_card">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>
            <h4>Seamless Booking Experience</h4>
            <p>Effortless scheduling with user-friendly platform for hassle-free service access.</p>
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div className="section_container">
        <h4>Urban Services😃</h4>
        <p>Connect with Us:<br/>
        Stay updated on the latest news and offers by following us on social media. Join our community for tips, insights, and exclusive promotions.</p>
        <p>Copyright © 2024 Urban Services. All rights reserved.</p>
        {/* <p>Made with ❤️ By Swapnil</p> */}
        <div className="social_icons">
          <span className='icon facebook'>
            <i className="fa-brands fa-facebook-f" />
          </span>
          <span className='icon twitter'>
            <i className="fa-brands fa-twitter" />
          </span>
          <span className='icon instagram'>
            <i className="fa-brands fa-instagram" />
          </span>
          <span className='icon tiktok'>
            <i className="fa-brands fa-tiktok" />
          </span>
        </div>
        <p>"Elevating Service Excellence, One Appointment at a Time!"</p>
      </div>
    </footer>
  </div>
  
  )
}
