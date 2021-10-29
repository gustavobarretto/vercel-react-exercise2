import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Section from './components/Section';


function App() {
  const clickButton = "Peça seu delivery aqui!";
  const titleText = "PI-ZA"
  const companyName = "PI-ZA CO."

  return (
    <>
      <Header />
      <Banner>
        <Section clickButton={clickButton} titleText={titleText}/>
      </Banner>
      <Footer companyName={companyName}/>    
    </>
  );
}

export default App;
