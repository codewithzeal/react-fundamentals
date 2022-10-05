
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App'
import LinkComponent from './2_Links';
import { AboutComponent } from './1_Intro';
import { HomeComponent } from './1_Intro';
import {Routes} from 'react-router-dom'
import { NavigateParent } from './4_Navigating_Programatically';
import { Success } from './4_Navigating_Programatically';
import NoMatchParent from './5_No_Match_Route';
import { Cost,Product,Description } from './6_Nested_route';
import { ChildB, ChildC, ChildD, ParentA } from './7_index_routes';
import DynamicComponent from './8_Dynamic_route';
import ParamParent from './9_URL_PARAMS';
import QueryParent from './10_Query_or_Search_params';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
     
      
      <Routes>
        <Route path='home' element={<HomeComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='navigate' element={<NavigateParent/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path="*" element={<NoMatchParent/>}/>
        <Route path="product" element={<Product/>}>
          <Route path="description" element={<Description/>}></Route>
          <Route path="cost" element={<Cost/>}></Route>
        </Route>
        <Route path="indexExample" element={<ParentA/>}>
          <Route index element={<ChildB/>}/>
          <Route path="childB" element={<ChildB/>}/>
          <Route path="childC" element={<ChildC/>}/>
          <Route path="childD" element={<ChildD/>}/>
        </Route>
        <Route path='dynamic/:anyId' element={<DynamicComponent/>}/>
        <Route path='get-url-param/:userID' element={<ParamParent/>}/>
        <Route path='query' element={<QueryParent/>}/>
      </Routes> 
    
  </BrowserRouter>
);
