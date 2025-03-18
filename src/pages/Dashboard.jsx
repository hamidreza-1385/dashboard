import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faContactCard, faI } from '@fortawesome/free-solid-svg-icons';



const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-white rounded-4 p-4 justify-content-end'>
                    <section className='d-flex justify-content-end bg-primary text-white align-items-center p-2 rounded-2 w-auto'>شماره موبابل شما به درستی ثبت نشده است . لطفا در اصرا وقت به تصخیخ ان اقدام نمایید <FontAwesomeIcon className='bg-white text-primary p-2 m-2 rounded-2' icon={faContactCard}/></section>
                    <div className='col-12 bg-wig'>
                        <section className='col-6 bg-wig'></section>
                        <section className='col-6 bg-wig'></section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;