import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
    <div className="">
      <div className="main__header">
        <hr />
        <h1>Build & manage distributed teams like no one else.</h1>
        <div>
          <h6>Experienced Individuals</h6>
          <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
          <h6>Easy to Implement</h6>
          <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
          <h6>Enhanced Productivity</h6>
          <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
        </div>
      </div>

      <div className="main__inner">
        <div className='container'>
          <h1>Delivering real results for top <br /> companies. Some of our <span>success stories.</span></h1>
          <div className='main__flex'>
            <div>
              <h5> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</h5>
              <h4>Kady Baker</h4>
              <p>Product Manager at Bookmark</p>
            </div>
            <div>
              <h5>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</h5>
              <h4>Aiysha Reese</h4>
              <p>Founder of Manage</p>
            </div>
            <div>
              <h5>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</h5>
              <h4>Arthur Clarke</h4>
              <p>Co-founder of MyPhysio</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    
    </>
  )
}

export default Hero