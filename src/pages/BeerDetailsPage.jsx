import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function BeerDetailsPage() {
  const {_id} = useParams()
  const [beer, setBeer] = useState(null);
  const [fetching, setFetching] = useState(true); 
  
  useEffect(() => {
    const fetchBeer = async () => {
        try {
          const response = await axios.get(`${apiURL}/${_id}`);
          setBeer(response.data);
          console.log(response.data);
        
        } catch (error) {console.log('Error fetching beer data',error)
          }  
          setFetching(false);
      }
    fetchBeer();
  }, [_id] );
  
  return (
    <>
    <Navbar />
    <h1>Beer Details</h1>
    
    {fetching ? (
       <p>Loading...</p>
    ) : beer ? (
      
      <div key={beer._id} className="card">
       
          <img src={`${beer.image_url}`} style={{width: "130px"}}/>
          <h3> Name:</h3><p> {beer.name}</p>
          <h3>Tagline:</h3><p> {beer.tagline}</p>
          <h3>First Brewed:</h3><p> {beer.first_brewed}</p>
          <h3>Attenuation Level:</h3><p> {beer.attenuation_level}</p>
          <h3>Description:</h3><p> {beer.description}</p>
          <h3>Contributed by:</h3><p> {beer.contributed_by}</p>
                     
      </div>
    ) : (
      <p>Beer not found.</p>
    )}
  </>  
  )

}

export default BeerDetailsPage;
