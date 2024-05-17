import { useParams } from 'react-router-dom';


function SingleRecipePage({recipes}) {

  const { id } = useParams();

  const recipe = recipes.find(recipe => recipe.sys?.id === id);


  if (!recipe) {
    return<div>Recipe not found</div>
  }

  const { title, shortdescription, image } = recipe.fields;
  const imageRecipe = image.fields.file.url;
  const ingredients=recipe.fields.ingredients;
  const shortDescription=recipe.fields.shortdescription
  const description=recipe.fields.description



    return (
      
        <div>
        <div className="container lg:flex">
      <div className="relative lg:w-1/2 mt-1 overflow-hidden bg-cover bg-no-repeat">
       <img className="" alt="image of the recipe" src={imageRecipe}/>
       <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out hover:opacity-70  flex justify-center items-center">
        <span className="text-center text-white text-6xl">Mamma mia!</span>
       </div>
      </div>
       <div className="second-column flex-column content-end pl-10">
        <span> <h1 className=" md:mt-10 ml-2 title text-4xl"> {title}</h1></span>
        <span className=" text-md"> <h2 class="ml-2"> {shortDescription}</h2></span>
        <table className="mt-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  <th className="px-6 py-3">Ingredients</th>
                  
              </tr>
          </thead>
          <tbody className="">
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td  className="px-6 py-1">{ingredients[0]}</td>
                  
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-1">{ingredients[1]}</td>
                  
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-1">{ingredients[2]}</td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-1">{ingredients[3]}</td>
              
             </tr>
             <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-1">{ingredients[4]}</td>
            
             </tr>
             
          </tbody>
          </table>
          <span className=" text-md"> <h2 class="ml-2"> {description}</h2></span>
       </div>
       
       
       <div className="lg:self-end ml-10 sharing-buttons flex flex-wrap">
        <a className="border-4 duration-200 ease flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-purple-700 hover:border-purple-700" target="_blank" rel="noopener" href="https://wa.me/?text=%20" aria-label="Share on Whatsapp" draggable="false">
          <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
            <title>Whatsapp</title>
            <path d="M413 97A222 222 0 0 0 64 365L31 480l118-31a224 224 0 0 0 330-195c0-59-25-115-67-157zM256 439c-33 0-66-9-94-26l-7-4-70 18 19-68-4-7a185 185 0 0 1 287-229c34 36 56 82 55 131 1 102-84 185-186 185zm101-138c-5-3-33-17-38-18-5-2-9-3-12 2l-18 22c-3 4-6 4-12 2-32-17-54-30-75-66-6-10 5-10 16-31 2-4 1-7-1-10l-17-41c-4-10-9-9-12-9h-11c-4 0-9 1-15 7-5 5-19 19-19 46s20 54 23 57c2 4 39 60 94 84 36 15 49 17 67 14 11-2 33-14 37-27s5-24 4-26c-2-2-5-4-11-6z">
            </path>
          </svg>
        </a>
        <a className=" ml-2 border-4 duration-200 ease inline-flex items-center mb-1 mr-1 transition p-1 rounded text-white border-blue-600 bg-blue-600 hover:bg-purple-700 hover:border-purple-700 " target="_blank" rel="noopener" href="https://telegram.me/share/url?text=&amp;url=" aria-label="Share on Telegram" draggable="false">
          <svg aria-hidden="true" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4">
            <title>Telegram</title>
            <path d="M256 8a248 248 0 1 0 0 496 248 248 0 0 0 0-496zm115 169c-4 39-20 134-28 178-4 19-10 25-17 25-14 2-25-9-39-18l-56-37c-24-17-8-25 6-40 3-4 67-61 68-67l-1-4-5-1q-4 1-105 70-15 10-27 9c-9 0-26-5-38-9-16-5-28-7-27-16q1-7 18-14l145-62c69-29 83-34 92-34 2 0 7 1 10 3l4 7a43 43 0 0 1 0 10z">
            </path>
          </svg>
        </a>
      </div>
    </div>
      </div>
      

    )
}

  
  export default SingleRecipePage