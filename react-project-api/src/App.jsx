import './App.css'
import Header from "./components/Header.jsx";
import searchImages from "./components/Api.jsx";
import Search from "./components/Search.jsx";
import {useState} from "react";
import ImageList from "./components/ImageList.jsx";

function App() {

    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
        const result = await searchImages(term)
        setImages(result)
    };

    return (
    <div>
      <Header/>
        <div>
            <Search search={handleSubmit}/>
        </div>
        <div>
            <ImageList imagePlaceholder={images}/>
        </div>
    </div>
  )
}

export default App
