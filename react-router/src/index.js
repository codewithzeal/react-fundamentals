
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
     
      
      <Routes>
        <Route path='home' element={<HomeComponent/>}/>
        <Route path='about' element={<AboutComponent/>}/>
        <Route path='navigate' element={<NavigateParent/>}/>
        <Route path='success' element={<Success/>}/>
        <Route path="*" element={<NoMatchParent/>}/>
      </Routes> 
    
  </BrowserRouter>
);
