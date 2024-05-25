import {Link} from "react-router-dom"
import OneCard from "../components/OneCard"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function DisplayWhole({recipes}){

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
    

    return(
     <div className="display-section ">
      
      <h2 className="h2-Display text-3xl font-bold dark:text-white">Explore<span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipees</span></h2>
      
        <Carousel responsive={responsive} className="display-container slider-container">
          {recipes.map(recipe => (
            <div key={recipe.sys.id}>
            <Link key={recipe.sys.id} to={`/recipe/${recipe.sys.id}`}>
            <OneCard key={recipe.sys.id}
            image={recipe.fields.image.fields.file.url} 
            title={recipe.fields.title} 
            style={{ maxWidth: '20rem', backgroundColor: '#EBEBEB' }} />
            </Link>
            </div>
          ))}
          </Carousel>
           
     </div>
    )
}
export default DisplayWhole;