import React from "react";
import SidebarNavigation from "../components/menubar";
import TradingEducationPage from "../components/tutovideo";
export default function Tutorials() {
  return (
    <div className="flex flex-row">
      <SidebarNavigation />

      <TradingEducationPage />
    </div>
  );
}
