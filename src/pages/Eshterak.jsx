import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import eImg from '../img/e.png'

const Eshterak = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-white rounded-4 p-4 justify-content-end'>
                    <img className='p-clear' src={eImg}></img>
                </div>
            </div>
        </div>
    );
};

export default Eshterak;