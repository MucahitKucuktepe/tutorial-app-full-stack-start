import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials,setTutorials]=useState([])
  const getTutorial = async () => {
    // const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios(process.env.REACT_APP_URL);
    console.log(res);
    setTutorials(res.data);

  };
  useEffect(() => {
   getTutorial();
  
    
  }, [])
  

 
  return (
    <>
      <AddTutorial getTutorial={getTutorial} />
      <TutorialList tutorials={tutorials} getTutorial={getTutorial} />
    </>
  );
};

export default Home;
