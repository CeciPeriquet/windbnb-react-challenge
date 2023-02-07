//IMPORTS
//Styles
import '../styles/App.scss';
//Services

//Hooks

//Components
import Header from './Header';
import SearchStays from './SearchStays';
import StaysList from './StaysList';
import Footer from './Footer';
//FUNCTION
function App() {
  //State
  //Events
  //Filters
  //RENDER
  return (
    <>
      <Header></Header>
      <main>
        <SearchStays></SearchStays>
        <StaysList></StaysList>
      </main>
      <Footer></Footer>
    </>
  );
}
export default App;
