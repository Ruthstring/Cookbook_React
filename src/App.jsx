import './App.css'

import { ContentfulClient,ContentfulProvider } from 'react-contentful'
import {useState, useEffect} from "react"
import { Routes, Route } from 'react-router-dom';
//files: 
import SingleRecipePage from './components/SingleRecipePage'
import Layout from "./components/Layout"
import Homepage from './components/Homepage'

function App() {

 const client= new ContentfulClient({
     space: import.meta.env.VITE_APP_SPACE_ID,
     accessToken: import.meta.env.VITE_APP_ACCES_TOKEN
 })
 
 const[recipes, setRecipes]=useState([])

 useEffect(()=>{
  const fetchContent = async () => {
    try {
     

      const response = await client.getEntries({
       content_type: "cookbook"
       });

      
   
    console.log(response.items)
    
   setRecipes(response.items);
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

fetchContent(); // Call fetchContent inside useEffect
console.log(recipes)

}, []);


 
  return (
    <div>
      <ContentfulProvider client={client}>
        <Routes>
        <Route
          path='/'
          element={
            <Layout
              recipes={recipes}
              setRecipes={setRecipes}
            />
          }
        >
          <Route path='/' element={<Homepage recipes={recipes} />} />
          <Route path='/SingleRecipePage' element={<SingleRecipePage recipes={recipes} />} />
        </Route>
        </Routes>
      </ContentfulProvider>
    </div>
  )
}



export default App;
