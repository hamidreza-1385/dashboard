import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import dImg from '../img/d.png'
const Didgah = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                    <img className='p-clear' src={dImg}></img>
                </div>
                
            </div>
        </div>
    );
};

export default Didgah;