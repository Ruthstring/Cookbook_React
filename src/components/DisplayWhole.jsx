import {Link} from "react-router-dom"
import OneCard from "../components/OneCard"


function DisplayWhole({recipes}){
    return(
     <div className="display-section">
        <h2 className="h2-Display text-3xl font-bold dark:text-white">Explore<span class="underline underline-offset-3 decoration-8 decoration-lime-600 dark:decoration-green-600"> all the recipees</span></h2>
        <div className="display-container">
        {recipes.map(recipe => (
          <Link key={recipe.sys.id} to={`/recipe/${recipe.sys.id}`}>
          <OneCard key={recipe.sys.id}
           image={recipe.fields.image.fields.file.url} 
           title={recipe.fields.title} 
           style={{ maxWidth: '20rem' }} />
           </Link>
        ))}


        {/* <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem"}} />
        <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem",marginLeft: '0.5rem'}}  />
        <OneCard image={Rec2} title="Blueberry Cake" style={{ maxWidth: "20rem", marginLeft: '0.5rem'}}  /> */}
        </div>
     </div>
    )
}
export default DisplayWhole;