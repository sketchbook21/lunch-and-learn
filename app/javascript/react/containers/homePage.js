import React from 'react'
import DayPicker from '../components/DayPicker';

export const HomePage = (props) => {
  let lineHeight = {
    lineHeight: 1.2,
  }

  return (
    <div>
      <div id="hero">
        <div className="grid-x">
          <div className="small-12 cell" id="hero-text-location">
            <div className="text1 weight4" style={lineHeight}>
              Coordinating<br/>
              Lunch and Learns<br/>
              Made Easy
            </div>
            <div className="text3 weight3" id="hero-description">
              WeLunch&Learn helps Sales Teams<br/>
            easily create and keep track of upcoming<br/>
              catered lunch presentations.
            </div>
            <a href="/users/sign_up" className="button radius" style={{marginTop: '20px'}}>Sign Up</a>
            <div className="text4 weight4" style={{marginTop: '0px'}}>
              Already have an account?
            <a href="/users/sign_in" style={{fontWeight: 700, textDecoration: 'none'}}> Log in.</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
