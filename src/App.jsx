import './App.css';
import Container from './components/Container';
import topBanner from './img/topBanner.png';
const App = () => {

  return (
    
    <div className="App">
      <div className="banner">
        <img src={topBanner} alt="Hispanic Banner" />
      </div>
      <div className="title">
        <h2>Latino Owned Businesses In Baltimore, MD</h2>
      </div>
      <div className="container">
        <Container />
      </div>
      
    </div>


  )
}

export default App