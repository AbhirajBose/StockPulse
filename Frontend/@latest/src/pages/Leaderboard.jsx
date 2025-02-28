import SidebarNavigation from "../components/menubar";

import LeaderboardPage from "../components/leadership";

export default function Leaderboard() {
    return (
        <div className="flex flex-row">
        <SidebarNavigation />
        <LeaderboardPage />
        </div>
    );
    }