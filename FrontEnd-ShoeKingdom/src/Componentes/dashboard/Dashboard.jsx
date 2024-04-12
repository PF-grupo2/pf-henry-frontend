import "./Dashboard.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
