import modernbanner from "../../assets/modernbanner.png";
import minetodolistbannder from "../../assets/minetodolistbannder.png";
function bannerProject() {
  return (
    <div className="flex gap-4">
      <img
        className="w-[300px] h-[200px] rounded-xl shadow-xl"
        src={modernbanner}
      />
      <img
        className="w-[300px] h-[200px] rounded-xl shadow-xl"
        src={minetodolistbannder}
      />
      <div className="w-[300px] h-[200px] bg-slate-500">img</div>
    </div>
  );
}

export default bannerProject;
