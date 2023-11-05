import MyLogo from "./Curve";

function Banner() {
  return (
    <>
      <div className=" flex justify-center">
        <div className="w-28 h-24 flex items-start pt-[-30px] mr-[-56px]">
          <MyLogo />
        </div>
        <div className="flex justify-center text-[#E09EA0] text-[64px] mt-8 py-2">
          To Do List
        </div>
      </div>
    </>
  );
}

export default Banner;
