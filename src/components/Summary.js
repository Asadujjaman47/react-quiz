// import successImage from "../assets/images/success.png";
// import useFetch from '../hooks/useFetch';
// import classes from "../styles/Summery.module.css";

// export default function Summary({score, noq}) {
//   const getKeyWord = () => {
//     if((score/(noq*5)) * 100 < 50){
//       return "failed";
//     } else if((score/(noq*5)) * 100 < 75){
//       return "good";
//     } else if((score/(noq*5)) * 100 < 100){
//       return "very good";
//     } else {
//       return "excellent";
//     }
//   };
  
//   const {loading, error, result} = useFetch(
//     `https://api.pexels.com/v1/search?query=${getKeyWord()}&per_page=1`, "GET", { 
//       Authorization: process.env.REACT_APP_PEXELS_API_KEY
//     }
//   );

//   const image = result ? result.photos[0].src.medium : successImage;

//     return (
//         <div className={classes.summary}>
//           <div className={classes.point}>
//             <p className={classes.score}>
//               Your score is <br />
//               {score} out of {noq * 5}
//             </p>
//           </div>

//           {loading && <div className={classes.badge}>Loading...</div>}
//           {error && <div className={classes.badge}>An error occured!</div>}

//           {!loading && !error && (
//             <div className={classes.badge}>
//               <img src={image} alt="Success" />
//             </div>
//           )}
//         </div>
//     )
// }

import Awesome from '../assets/images/awesome.jpg';
import Grand from '../assets/images/Grand success.jpg';
import Great from '../assets/images/great.jpg';
import Image from '../assets/images/success.png';
import classes from "../styles/Summery.module.css";


export default function Summary ({score,noq}) {
  noq = noq * 5;

  const ShowImage = () =>{
    if(score === 0){
      return <p>You need to improve!</p>
    }
    else if(score === 5){
      return <img src={Image} alt="Success" height='200px' width='200px'/>
    }
    else if(score === 10){
      return <img src={Awesome} alt="Success" height='200px' width='200px'/>
    }
    else if(score === 15){
      return <img src={Grand} alt="Success" height='200px' width='200px'/>
    }
    else{
      return <img src={Great} alt="Success" height='200px' width='200px'/>
    }
  }
  
    return(
        <div className={classes.summary}>
          <div className={classes.point}>
            <p className={classes.score}>
              Your score is <br />
              {score} out of {noq}
            </p>
          </div>
          
          <div className={classes.badge}>
          {/* <img src={image} alt="Success" height='200px' width='200px'/> */}
          </div>
          <ShowImage/>
        </div>
    )
}
