import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import ProfileHeader from "../../components/layout/ProfileHeader";
import UserDescription from "../../components/layout/UserDescription";
import RecentEvents from "../../components/layout/RecentEvents";

export default function UserProfile() {
  return (
    <div className="flex w-full  bg-gradient-to-t from-purple-500 to-indigo-600 text-white ">
      <div className="content_User_Profile flex w-[84%] m-auto h-[85%] mt-4 mb-4 scale-90  ">
        <Sidebar />
        <div className="flex-1 p-20 overflow-auto bg-[#1f1f1f70] rounded-2xl">
          <ProfileHeader />
          <UserDescription />
          <RecentEvents />
        </div>
      </div>
    </div>
  );
}
