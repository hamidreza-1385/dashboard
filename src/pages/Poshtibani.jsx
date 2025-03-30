import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Poshtibani = () => {
    return (
        <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                poshtibani
            </div>
        </div>
    );
};

export default Poshtibani;