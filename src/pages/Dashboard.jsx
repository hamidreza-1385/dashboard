import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faContactCard, faI } from '@fortawesome/free-solid-svg-icons';
import PersianDateWidget from '../components/Date';
import VazayefList from '../components/Vazayef';
import MizKarV from '../components/MizKarV';
import TicketV from '../components/TicketV';



const Dashboard = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className='bg-white rounded-4 p-4 justify-content-end'>
                    <section className='d-flex justify-content-end bg-primary text-white align-items-center p-2 rounded-2 w-auto m-3'>شماره موبابل شما به درستی ثبت نشده است . لطفا در اصرا وقت به تصخیخ ان اقدام نمایید <FontAwesomeIcon className='bg-white text-primary p-2 m-2 rounded-2' icon={faContactCard}/></section>
                    <div className='d-flex justify-content-end'>
                        <div className='m-3 d-flex justify-content-end w-25'><VazayefList/></div>
                        <div className='m-3 d-flex justify-content-end w-25'><PersianDateWidget/></div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='m-3 d-flex justify-content-end w-35'><MizKarV/></div>
                        <div className='m-3 d-flex justify-content-end w-35'><TicketV/></div>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='m-3 d-flex justify-content-end w-35'><MizKarV/></div>
                        <div className='m-3 d-flex justify-content-end w-35'><TicketV/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;