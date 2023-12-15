import axios from "axios";
import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials,setTutorials]=useState([])
  const getTutorial = async () => {
    const URL = "https://tutorial-api.fullstack.clarusway.com/tutorials/";
    const res = await axios(URL);
    console.log(res);
    setTutorials(res.data);

  };
  useEffect(() => {
   getTutorial();
  
    
  }, [])
  

 
  return (
    <>
      <AddTutorial />
      <TutorialList />
    </>
  );
};

export default Home;
