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
      </div>
    )
  }

export default App
