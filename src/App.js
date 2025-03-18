import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import './index.css'
import Eshterak from './pages/Eshterak';
import MizKar from './pages/MizKar';
import Payamha from './pages/Payamha';
import Poshtibani from './pages/Poshtibani';
import Didgah from './pages/Didgah';
import HesabKarbary from './pages/HesabKarbary';
import ListVazayef from './pages/ListVazayef';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path='/eshterak' element={<Eshterak/>}/>
                <Route path="/hesabkarbary" element={<HesabKarbary />} />
                <Route path='/mizkar' element={<MizKar/>}/>
                <Route path='/payamha' element={<Payamha/>}/>
                <Route path="/listvazayef" element={<ListVazayef />} />
                <Route path='/poshtibani' element={<Poshtibani/>}/>
                <Route path='/didgah' element={<Didgah/>}/>
            </Routes>
        </Router>
    );
}

export default App;