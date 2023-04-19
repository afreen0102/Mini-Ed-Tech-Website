import React from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useState } from "react";

const App = () => {

  const [ courses, setCourses ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ category, setCategory ] = useState(filterData[0].title);

  useEffect( () => {
    const fetchData = async() => {

      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const result = await res.json();
        // console.log(result.data);
        setCourses(result.data);
      }
      catch(error){
        toast.error("Something went wrong");
      }
      setLoading(false);
    }

    fetchData();


  },[]);

  return (
    <div className="flex flex-col min-h-screen bg-bgDark2">
      <Navbar/>

      <div className="bg-bgDark2">
      <Filter filterData={filterData} category={category} setCategory={setCategory}/>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center items-center min-h-[50vh]
                  flex-wrap">
      { loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)}
      </div>

      </div>
      
      
    </div>
    
  )
};

export default App;


// npm i react-toastify