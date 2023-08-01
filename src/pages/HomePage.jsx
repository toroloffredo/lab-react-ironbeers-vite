import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";


function HomePage() {
  
  return (
    <>
    <Navbar />

    <img src="/src/assets/beers.png" />
    <Link to="/allbeers">
      <h1>All Beers</h1>
    </Link>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde fuga iure natus. A repellat error molestiae vero placeat quas omnis distinctio veritatis fuga quod consequuntur quis quae, reprehenderit commodi?</p>
    
    <img src="/src/assets/random-beer.png" />
    <Link to="/random">
      <h1>Random Beer</h1>
    </Link>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime ipsam corrupti voluptatum explicabo culpa magni quo aspernatur vel ullam eaque, vero odit iusto tempore mollitia ad doloribus consequuntur! Consequuntur, consectetur.</p>
    
    <img src="/src/assets/new-beer.png" />
    <Link to="/new">
      <h1>New Beer</h1>
    </Link>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eos eaque sit impedit maxime in consequuntur, asperiores quod saepe modi eveniet odio velit. Tempora incidunt quae, inventore voluptate quam reprehenderit!</p>

    </>

  )

}

export default HomePage;
