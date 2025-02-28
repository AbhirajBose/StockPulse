import SidebarNavigation from "../components/menubar.jsx";
import InvestmentDashboard from "../components/pie.jsx";
export default function Dashboard(){
  return(
  <div className="flex">
    <SidebarNavigation />
    <InvestmentDashboard />
  </div>);
}