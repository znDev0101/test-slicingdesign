import Hero from "./dashboard/Hero";
import Information from "./dashboard/Information";
import Notification from "./dashboard/Notification";
import UserInformation from "./dashboard/UserInformation";

const Dashboard = () => {
  return (
    <>
      {/* for dekstop */}
      <UserInformation />
      <Information />
      {/* for mobile */}
      <Hero />
      <Notification />
    </>
  );
};

export default Dashboard;
