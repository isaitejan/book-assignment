import Contact from './components/Contact';
import FlipBook from './components/FlipBook';
import Footer from './components/Footer';
import Home from './components/Home';
import Howitworks from './components/Howitworks';
import MissionVision from './components/MissionVision';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Home />
      <Review />
      <MissionVision />
      <FlipBook />
      <Howitworks />
      <Footer />
      <Contact />
    </div>
  );
}

export default App;
