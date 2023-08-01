import {Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";


const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function AllBeers() {
  const [fetching, setFetching] = useState(true);  
  const [beers, setBeers] = useState([]) ;

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(apiURL)
        setBeers(response.data);
        console.log(response.data);
       
      } catch (error) {console.log('Error getting data',error)}  
        setFetching(false);
        }
            
  fetchBeers();
  }, [] );




  return (
    <>
      <Navbar />
      {fetching && <p>Loading...</p>}
      
      {beers.map((beer) => {
        
        return (
          <div key={beer} className="card">
            <Link to={`/${beer}`} />
            
            <img src={`${beer.image_url}`} style={{width: "50px"}}/>
            
            <h1>Name: {`${beer.name}`}</h1>
           
            <h4>Tagline: {`${beer.tagline}`}</h4>
           
            <span>Contributed by: {`${beer.contributed_by}`}</span>
            <br />
            <Link to={`/${beer._id}`}><h5>Beer Details</h5></Link>
            
          </div>
        )
      })}


      
    
    </>
  )

}

export default AllBeers;
