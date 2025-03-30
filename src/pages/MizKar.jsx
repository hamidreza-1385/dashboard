import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import mImg from '../img/m.png'
const MizKar = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-white rounded-4 p-4 justify-content-end'>
                    <img className='p-clear' src={mImg}></img>
                </div>
                
            </div>
        </div>
    );
};

export default MizKar;