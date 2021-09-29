import './css/style.css';
import Header from './components/header/Header'
import Delivery from './components/deliveryComponent/Delivery'
import Payment from './components/paymentComponent/Payment'
import Finish from './components/finishComponent/Finish'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>

        <Route exact path='/' render={() => <Delivery/>} />
        <Route path='/payment' render={() => <Payment/>} />
        <Route path='/finish' render={() => <Finish/>} />
      </div>
    </BrowserRouter>
  );
}

export default App;
