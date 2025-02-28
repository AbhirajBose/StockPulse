import SidebarNavigation from "./menubar";
import InvestmentDashboard from "./pie";
export default function Dashboard(){
  return(
  <div className="flex">
    <SidebarNavigation />
    <InvestmentDashboard />
  </div>);
}