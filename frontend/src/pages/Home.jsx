import React ,{useState,useContext}from 'react'
import withAuth from '../utils/Auth';
import { useNavigate } from 'react-router-dom';
import "../App.css";
import { IconButton,Button,TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import Logo from "../assets/Logo.svg";
import { AuthContext } from '../contexts/AuthContext';

function Home() {
  let navigate = useNavigate();

  const [meetingCode,setMeetingCode] = useState("");

  const {addToUserHistory} = useContext(AuthContext);

  let handleJoinVideoCall = async()=>{
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`)
  }
  return (
    <div className='Home'>
    
    <div className='navBar'>
      <h2>Stremora</h2>
      <div style={{display:"flex",alignItems:"center"}}>
        
        <IconButton onClick={()=>{navigate("/history")}}>
          <RestoreIcon/>
          <p>History</p>
        </IconButton>
        <Button onClick={()=>{
          localStorage.removeItem("token");
          navigate("/auth");
        }}>Logout</Button>
      </div>
    </div>
    
        <div className="meetContainer">
          <div className="leftPanel">
            <div >
              <h2>Providing Quality Video Call Just Like Quality Education</h2>

              <div style={{display:"flex",gap:"10px"}}>
                <TextField onChange={(e)=>setMeetingCode(e.target.value)} id="outlined" label="Meeting Code" variant="outlined" ></TextField>
                <Button variant='contained' onClick={handleJoinVideoCall}>Join</Button>
              </div>
            </div>
          </div>

          <div className="rightPanel">
            <img src={Logo} alt="Stremora Logo"/>
          </div>

        </div>

    </div>
  )
}

export default  withAuth(Home)
