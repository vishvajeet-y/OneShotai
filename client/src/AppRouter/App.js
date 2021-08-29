import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Company from '../component/Company'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Switch>
     <Route  exact={true} path='/' component={Company}/>
     </Switch>

     </BrowserRouter>
    </div>
  );
}

export default App;
