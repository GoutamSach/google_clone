import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import Header from "./components/Header";
import Footer from "./pages/Footer";
import { AppContext } from "./utils/contextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startindex" element={<SearchResults />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;

{
  /* <script async src="https://cse.google.com/cse.js?cx=34e0750b056674df7">
</script>
<div class="gcse-search"></div> */
}
