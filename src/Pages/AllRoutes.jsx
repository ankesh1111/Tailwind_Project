import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Home from "./Home";
import SingleArticle from "./SingleArticle";
import Feature from "./Feature";
import Pricing from "./Pricing";
import HeroSection from "./HeroSection";
import Contact from "./Contact";
 

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/blog" element={<Blog />}></Route>
       <Route path="/feature" element={<Feature />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/herosection" element={<HeroSection />}></Route>
      <Route path="/blog/article:blog_id" element={ <SingleArticle/>}></Route>
    </Routes>
  );
}

export default AllRoutes;
