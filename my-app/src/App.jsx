import './App.css'

// Создайте и запустите приложение React, выводящее краткую информацию о вашем городе в браузере:
// 1) Название города.
// 2) Год основания.
// 3) Несколько фотографий достопримечательностей города.

// При разработке использовать функциональные компоненты, синтаксис JSX и стили.

function App() {
  function InfoCity(){
    return (
      <div>
        <div>City: Odessa</div>
        <div>FoundationYear: For a long time</div>
        <div>
          <div className='img-container'>
            <img src="https://odessa-life.od.ua/wp-content/uploads/2023/07/Ploskij-dom.jpg" alt="A House with one wall" />
            <img src="https://th.bing.com/th/id/OIP.Cer8YplioOB9-kM71oTDpgHaE7?w=243&h=180&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Sea" />
          </div>
          <div className='img-container'>
            <img src="https://th.bing.com/th/id/OIP.aKyMKqhmnWR58RZuJXqrpwHaD0?w=309&h=179&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Central railway station" />
            <img src="https://th.bing.com/th/id/OIP.8l9EghM5hMjXcAhCQa5OZgHaEK?w=327&h=184&c=7&r=0&o=7&cb=ucfimg2&pid=1.7&rm=3&ucfimg=1" alt="Theater" />
          </div>
        </div>
      </div>
    );
  }

  return (
    InfoCity()
  )
}

export default App
