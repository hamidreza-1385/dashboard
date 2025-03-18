import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
const Poshtibani = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="main-content">
                <Header />
                Poshtibani
                
            </div>
        </div>
    );
};

export default Poshtibani;