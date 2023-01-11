import { React} from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home(){
  return (
    <>
    <div>
        <div id="home">
            <div className="overlay">
                <div className="landing-text">
                    <h3>Best Hair Salon in Montreal</h3>
                    <h1>Your Own Salon</h1>
                    <hr id="hr-main"/>
                    <Link to="/appointment"  className="button btn-hire fs-5">Make Appointment</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home