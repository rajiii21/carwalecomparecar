import React, { Suspense, lazy, useReducer } from "react";
import { initialstate, reducer } from "./Component/Reducer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import globalState from "./Component/Context.js";
import Home from "./Component/Home/Home.js";
import Branddetail from "./Component/Branddetail/Branddetail.js";
import Header from "./Component/Header/Head.js";
import CaramountDetail from "./Component/Caramountdetail/Caramountdetail.js"
import Cardetail from "./Component/Cardetails/Cardetail.js"
import Comparecardetail from "./Component/Comparecardetail/Comparecardetail.js"
import Comparing from "./Component/Comparecar/Comparecar.js"
import Footer from "./Component/Footer/Footer.js"

const Routing = () => {
     const [state, dispatch] = useReducer(reducer, initialstate)
     console.log(state, dispatch);

     return (
          <globalState.Provider value={{ state, dispatch }}>
               <BrowserRouter>
               <Header />
                    <Routes>
                         <Route path="/home" element={<Home />}></Route>
                         <Route path="/branddetail/:brand" element={<Branddetail />}></Route>
                         <Route path="/filterprice/:btn/:price" element={<CaramountDetail />}></Route>
                         <Route path="/cardetail/:name" element={<Cardetail />} />
                         <Route path="/comparedetail" element={<Comparecardetail />} />
                         <Route path="/comparing" element={<Comparing />} />
                    </Routes>
                    <Footer />
               </BrowserRouter>
          </globalState.Provider>

     )
}

export default Routing