let IS_PROD= true;

const server = IS_PROD? 
    "http://localhost:8000":

    "https://stemoravideocall.onrender.com"


export default server;