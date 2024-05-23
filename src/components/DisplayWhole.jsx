import {Link} from "react-router-dom"
import OneCard from "../components/OneCard"
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


function DisplayWhole({recipes}){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    }
    

    return(
     <div className="display-section ">
      
      <h2 className="h2-Display text-3xl font-bold dark:text-white">Explore<span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipees</span></h2>
      
     
        <div className="display-container slider-container">

        {/* <Slider {...settings}> */}
          {recipes.map(recipe => (
            <Link key={recipe.sys.id} to={`/recipe/${recipe.sys.id}`}>
            <OneCard key={recipe.sys.id}
            image={recipe.fields.image.fields.file.url} 
            title={recipe.fields.title} 
            style={{ maxWidth: '20rem', backgroundColor: '#EBEBEB' }} />
            </Link>
          ))}
         {/* </Slider> */}
        </div>
       
       
        
     </div>
    )
}
export default DisplayWhole;