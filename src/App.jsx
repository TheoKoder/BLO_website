import { Route, Routes } from 'react-router-dom';
import DonateSection from '../src/Componets/DonateSection';
import Article from "../src/Pages/container/Article";
import ContactUs from "../src/Pages/container/ContactUs";
import EndArticle from "../src/Pages/container/EndArticle";
import Events from "../src/Pages/container/Events";
import Home from './Pages/home/Home';
import "./index.css";


function App() {
  return <div className="font-roborto max-h-screen dark:bg-slate-900 dark:text-gray-100 duration-100 ">
  <Routes>
    <Route index path="/" element={<Home/>}/>
    <Route path="/Articles" element={<Article/>}/>
    <Route path="/Events" element={<Events/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/EndArticle" element={<EndArticle/>}/>
    <Route path="/DonateSection" element={<DonateSection/>}/>
</Routes>
  </div>
}

export default App
