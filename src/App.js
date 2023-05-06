import Main from "./Main";
import Footer from "./Footer";
import Chance from "chance";
import { BrowserRouter, useLocation } from 'react-router-dom';
var chance = new Chance();
function App() {
  var location = useLocation();
  console.log(location);
  return (
    <BrowserRouter>
      <>
      <Main name={chance.name()} aboutme={chance.paragraph()} domain={ chance.domain({ tld: "com" }) } country={chance.country().toLowerCase()}/>
      <Footer/>
      </>
    </BrowserRouter>
  )
}
export default App;