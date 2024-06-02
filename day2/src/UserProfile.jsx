import './App.css'
import { useState } from 'react'

function UserProfile() {

    return (
        <div className='App'>
            <div className="Counter User">
                <h1>User Profile</h1>
                <div className="UserBox">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="" />
                    <div className="userInfo">
                        <div className="userTitle">
                            <b>Name: </b> <br /> <br />
                            <b>Email: </b> <br /> <br />
                            <b>Address: </b> <br /> <br />
                            <b>DOB: </b> <br />
                        </div>
                        <div className="userData">
                            <p>Aashruti Patolia</p> <br /> 
                            <p>aashrutipatolia@gmail.com</p> <br /> 
                            <p>Rajkot, Gujarat</p> <br /> 
                            <p>30th January, 2003</p> <br />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserProfile;