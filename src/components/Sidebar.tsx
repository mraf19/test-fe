import Icon from "../assets/image46.svg";
import Setting from "../assets/settings.svg";
import Dashboard from "../assets/Group.svg";
import Detail from "../assets/icon _notification status_.svg";
import Logout from "../assets/logout1.svg";
import ActivityUser from "../assets/Activity.svg";
import Account from "../assets/user(1).svg";
import ManagementUser from "../assets/user(2).svg";
import Maintanance from "../assets/icon _tools_.svg";
import MasterData from "../assets/Calendar.svg";

export default function Sidebar() {
  return (
    <div className="flex flex-col w-[100px] h-[100vh] bg-theme items-center justify-center absolute top-0 left-0">
      <div className="w-full h-[84px] flex-1 flex-col justify-center items-center">
        <img
          src={Icon}
          alt="setting"
          className="object-cover items-center mt-4 m-auto"
        />
      </div>
      <div className="w-full h-[84px] flex-col justify-center items-center">
        <img src={Dashboard} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-sky-600 text-xs mt-2">Dashboard</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={Detail} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Detail</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={Maintanance} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Maintanance</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={MasterData} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Master Data</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={ActivityUser} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Activity User</p>
      </div>
      <div className="w-full h-[84px]">
        <img
          src={ManagementUser}
          alt="setting"
          className="object-cover m-auto"
        />
        <p className="text-center text-white text-xs mt-2">Management User</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={Account} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Account</p>
      </div>
      <div className="w-full h-[84px]">
        <img src={Setting} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Setting</p>
      </div>
      <div className="w-full h-[84px] flex-1">
        <img src={Logout} alt="setting" className="object-cover m-auto" />
        <p className="text-center text-white text-xs mt-2">Logout</p>
      </div>
    </div>
  );
}
