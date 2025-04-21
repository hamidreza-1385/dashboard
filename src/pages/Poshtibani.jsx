import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TicketDashboard from '../components/TicketDashboard';

const Poshtibani = () => {
    return (
        <div className="dashboard-container ml">
            <div className='d-none d-lg-block'><Sidebar/></div>
            <div className="main-content">
                <Header />
                <div className='bg-light rounded-4 p-4 justify-content-end'>
                <TicketDashboard/>
                </div>
            </div>
        </div>
    );
};

export default Poshtibani;