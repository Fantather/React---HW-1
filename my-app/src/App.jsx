import { InfoCity } from './AboutCity.jsx'
import { GetBook } from './FavoriteBook.jsx'


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
      </div>
    )
  }

export default App
