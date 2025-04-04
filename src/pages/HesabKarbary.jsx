import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import hImg from '../img/h.png'
const HesabKarbary = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <img className='p-clear' src={hImg}></img>
                </div>
            </div>
        </div>
    );
};

export default HesabKarbary;



        