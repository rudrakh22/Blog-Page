import "./App.css";
import react, {useContext,useEffect} from "react";
import {AppContext} from "./Context/AppContext";
import Header from "./Components/Header";
import Blogs from "./Components/Blogs";
import Pagination from "./Components/Pagination";

function App() {

  const {fetchBlogPosts}=useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);



  return (  
        <div className="flex flex-col items-center justify-center gap-x-1 ">
            <Header/>
            <Blogs/>
            <Pagination/>
        </div>
  );
}

export default App;
