import React from 'react'
import "../App.css"
import { Link,BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const router = useNavigate()
  return (
    <div className='landingPageContainer'>
      <nav className='navbar'>
        <div className='navHeader'>
            <h2 style={{fontWeight:"700",fontSize:"32px" ,cursor: "pointer",letterSpacing: "1px"}} onClick={()=>{
              router("/")
            }}>Streamora</h2>
        </div>
        <div className="navList">
          <div>
            <p onClick={()=>{
              router("/q23qsc");
            }} style={{fontSize: "22px" }}>Join as Guest</p>
            </div>
          <div>
            <p onClick={()=>{
              router("/auth")
            }} style={{fontSize: "22px" }}>Register</p>
          </div>
            <div role='button' onClick={()=>{
              router("/auth")
            }}>
                <p style={{fontSize: "22px" }}>Login</p>
            </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1> <span style={{ color: '#FF9839' }}>Connect </span>with your Loved Ones</h1>
          <p>Cover a distance by Streamora</p>
          <div role='button'>
            <Link to={"/auth"}>Get Started</Link>
          </div>
        </div>
        <div className="landingImageContainer">
          <img src="/src/assets/Streamora.png" alt="Streamora" style={{borderRadius:"10px"}} />
        </div>
      </div>
    </div>
  )
}
