import React from "react";
import Caraousel from "./components/caraousel";//13
import Craousel from "./components/Reactcarousel";//1
import Info from "./components/info";//8
import Addon from "./components/Addon";//18
import Install from "./components/install";//7
import End from "./components/End";//11
import Last from "./components/last";//6
import AboutUsInfo from "./components/aboutInfo";//22/////////
import AboutUslast from "./components/aboutLast";//21/////////
import AboutUsCaraousel from "./components/aboutUsCaraousel";//20///
import AboutUsEnd from "./components/AboutUsEnd";//19
import BuyBitcoin from "./components/buyBitcoin";//17
import Buybonds from "./components/buyBonds";//16
import Buyfunds from "./components/buyFunds";//15
import Buystocks from "./components/buyStocks";//14
import ContactUs from "./components/contact";//12
import Header from "./components/header";//9
import Footer from "./components/footer";//10
import AddOn from "./components/MarketsAddOn";//5
import Marketlast from "./components/Marketslast";//4
import Verify from "./components/Marketsverify";//3
import OurWorks from "./components/OurWorks";//2

import {Routes,Route, json,useParams} from "react-router-dom";

//import { BrowserRouter,Routes, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <div>
     <Routes>
      <Route exact path="/AboutUsInfo" element={<AboutUsInfo/>}/>
      <Route exact path="/AboutUslast" element={<AboutUslast/>}/>
      <Route exact path="/AboutUsCaraousel" element={<AboutUsCaraousel/>}/>
      <Route exact path="/AboutUsEnd" element={<AboutUsEnd/>}/>
      <Route exact path="/Caraousel" element={<Caraousel/>}/>
      <Route exact path="/" element={<Craousel/>}/>
      <Route exact path="/Info" element={<Info/>}/>
      <Route exact path="/Addon" element={<Addon/>}/>
      <Route exact path="/Install" element={<Install/>}/>
      <Route exact path="/End" element={<End/>}/>
      <Route exact path="/Last" element={<Last/>}/>
      <Route exact path="/OurWorks" element={<OurWorks/>}/>
      <Route exact path="/Verify" element={<Verify/>}/>
      <Route exact path="/AddOn" element={<AddOn/>}/>
      <Route exact path="/Buystocks" element={<Buystocks/>}/>
      <Route exact path="/Buyfunds" element={<Buyfunds/>}/>
      <Route exact path="/Buybonds" element={<Buybonds/>}/>
      <Route exact path="/Marketlast" element={<Marketlast/>}/>
      <Route exact path="/AboutUsCaraousel" element={<AboutUsCaraousel/>}/>
      <Route exact path="/Header" element={<Header/>}/>
      <Route exact path="/Footer" element={<Footer/>}/>
      <Route exact path="/AddOn" element={<BuyBitcoin/>}/>
      <Route exact path="/ContactUs" element={<ContactUs/>}/>
     </Routes>
    </div>
  );
}
