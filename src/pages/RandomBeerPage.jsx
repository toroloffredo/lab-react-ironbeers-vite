import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers";

function RandomBeersPage() {
  const [beer, setBeer] = useState(null);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    const fetchBeerData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.log("Error fetching beer data", error);
        return null;
      }
    };

    const fetchRandomBeer = async () => {
      try {
        const totalBeersData = await fetchBeerData(apiURL);
        const randomIndex = Math.floor(Math.random() * totalBeersData.length);
        const randomBeerIdData = totalBeersData[randomIndex];
      
        setBeer(randomBeerIdData);
      } catch (error) {
        console.log("Error fetching random beer data", error);
      }
      setFetching(false);
    };

    fetchRandomBeer();
  }, []);
    
  return (
    <>
      <Navbar />
      <h1>Random Beer</h1>
      
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

export default RandomBeersPage;
