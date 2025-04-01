import TaskList from "../components/VazayefV/TaskList";
import TaskForm from "../components/VazayefV/TaskForm";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const ListVazayef = () => {
  return (
    <div className="dashboard-container ml">
            <Sidebar />
            <div className="main-content">
                <Header />
                <div className="bg-white rounded-4 p-4 justify-content-end d-flex">
                  <div className="col-6"><h1 className="text-2xl font-bold text-center mb-4">لیست کارها</h1><TaskList /></div>
                  <div className="col-5 border p-3 mx-5"><TaskForm /></div>
                </div>
            </div>
        </div>
  );
};
 export default ListVazayef;