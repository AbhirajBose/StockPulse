import UserProfilePage from "../components/profilecomp";
import SidebarNavigation from "../components/menubar";

const Profile = () => {
  return (
    <div className="flex flex-row">
      <SidebarNavigation />
      <UserProfilePage />
    </div>
  );
};

export default Profile;

