import profileImage from "../../assets/imgs/UsuarioPagina/woman.png";
import editIcon from "../../assets/imgs/UsuarioPagina/Edit 2.png";
export default function ProfileHeader() {
  return (
    <div className="flex items-center gap-6 overflow-x-hidden">
      <div className="relative profile_infos flex flex-col text-center gap-4 ">
        <img
          src={profileImage}
          alt="User"
          className="w-61 h-61 rounded-full shadow-md"
        />
        <span className="text-2xl font-normal">Ana Santos</span>
        <img src={editIcon} alt="" className="absolute right-5 bottom-15 w-6" />
        <button className="px-4 py-2 bg-white text-black font-bold rounded-md">
          Edit Profile
        </button>
      </div>
      <div className="w-[70%] flex flex-col h-[361px] justify-center pl-10  gap-8 relative">
        <div className="timeInSite transform translate-y-[-50px]">
          <p className="text-xl font-extralight text-[#ffffffa4]">
            Acessado recentemente
          </p>
          <p className="text-lg">Site acessado por 15 horas - Última semana</p>
        </div>
        <div className="mt-2 translate-y-[-50px]">
          <span className="text-2xl font-bold">10 lvl</span>
          <span className="ml-4 text-md text-purple-400">
            6 more events to level up
          </span>
          <div className="bg-white h-2 w-full mt-2 rounded-full inset-shadow-black shadow-md">
            <div className="bg-[#7b2eba] h-2 w-1/2 rounded-full"></div>
          </div>
        </div>
        <div className="absolute bottom-2 flex items-end gap-10">
          <h1 className="text-xl">
            Conquistas: <span className="text-purple-400">44 de 69</span>
          </h1>
          <div className="conquistas flex gap-6">
            <div className="w-12 h-12 border-white border rounded-xl"></div>
            <div className="w-12 h-12 border-white border rounded-xl"></div>
            <div className="w-12 h-12 border-white border rounded-xl"></div>
            <div className="w-12 h-12 border-white border rounded-xl"></div>
            <div className="w-12 h-12 border-white border rounded-xl"></div>
            <div className="w-12 h-12 border-white border rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
