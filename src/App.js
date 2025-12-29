import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Key_feature from "./Key_feature";
import Today_special from "./Today_special";
import Review from "./Review";
import Menu from "./Menu";
import Philosophy from "./Philosophy";
import Table_book from "./Table_book";
import Footer from "./Footer";
// import Com from './Com'

function App() {
  return (
    <div className="App">
      {/* <Com></Com> */}
      <Header></Header>
      <Key_feature></Key_feature>
      <Today_special></Today_special>
      <Review></Review>
      <Menu></Menu>
      <Philosophy></Philosophy>
      <Table_book></Table_book>
      <Footer></Footer>
    </div>
  );
}

export default App;
