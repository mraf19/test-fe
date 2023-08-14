import date from "date-and-time";
import Burger from "../assets/topbar-items.svg";
import Frame from "../assets/Frame892.svg";

export default function Navbar() {
  const now = new Date();
  const fullDate = date.format(now, "ddd, MMM DD YYYY");
  const hour = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  return (
    <nav className="w-[93.5%] flex h-[80px] bg-theme px-[24px] py-[20px] items-center justify-between absolute left-[120px] top-0 rounded-bl-2xl">
      <div className="flex">
        <img
          src={Burger}
          alt="topbar"
          width={24}
          height={24}
          className="justify-items-start mr-[20px]"
        />
        <h1 className="font-Inter text-[24px] text-white ">
          DIGITALIZATION LINE PRODUCTION{" "}
        </h1>
      </div>
      <div className="flex">
        <span className="font-Inter text-[24px] text-white">{`${fullDate.toUpperCase()}|${hour}`}</span>
        <img
          src={Frame}
          alt="frame"
          width={24}
          height={24}
          className="justify-items-end mr-[24px] ml-[16px]"
        />
      </div>
    </nav>
  );
}
