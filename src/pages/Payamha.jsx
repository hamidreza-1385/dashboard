import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import pImg from '../img/p.png'
const Payamha = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-white rounded-4 p-4 justify-content-end'>
                    <img className='p-clear' src={pImg}></img>
                </div>
                
                
            </div>
        </div>
    );
};

export default Payamha;