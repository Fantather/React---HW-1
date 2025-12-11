import { InfoCity } from './AboutCity.jsx'
import { GetBook } from './FavoriteBook.jsx'
import { GetRecipeHtml } from './Recipe/Recipe.jsx'



function App() {
  return (
    BuildBody()
  )
}

function BuildBody() {
  return (
    <div>
      <InfoCity />
      <hr />
      <GetBook />
      <hr />
      <GetRecipeHtml />
      <hr />
      <Task4El name = "Anna"/>
    </div>
  )
}

function Task4El(props)
{
  return(
    <div>Hello: {props.name}</div>
  );
}

export default App
