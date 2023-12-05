import { Link } from "react-router-dom";
import profileimage from "../assets/profileimage.png";
import { PiCursorClickThin } from "react-icons/pi";
function Profile() {
  return (
    <div className="container-profile">
      <div className="flex flex-col items-center text-[38px] font-semibold p-16">
        <div>Hi! Everyone</div>

        <div>I&prime;m Nattanicha Niyomchan</div>
      </div>
      <main className="flex justify-between font-medium">
        <div className="w-80 mt-6">
          I have recently completed bootcamp in Full Stack developer at Software
          park.
        </div>
        <img src={profileimage} className=" " />
        <main className="flex flex-col gap-5 justify-center mt-[-180px]">
          <div className="w-80">
            .....And I would like to apply the knowledge and skills I have
            gained to a position in Front-end Developer or Programming-related
            careers.
          </div>
          <main className="flex w-28 items-center">
            <a
              href="https://drive.google.com/file/d/1XMYw7EtlnVdejrqK1gBiFfK2PXPl_XN-/view?usp=sharing"
              target=" blank"
              className="w-80 underline"
            >
              My resume
            </a>
            <div>
              <PiCursorClickThin />
            </div>
          </main>
          <Link to="/project">
            <main className="flex w-28 items-center">
              <div
                href="https://drive.google.com/file/d/1XMYw7EtlnVdejrqK1gBiFfK2PXPl_XN-/view?usp=sharing"
                target=" blank"
                className="w-80 underline"
              >
                My Project
              </div>
              <div>
                <PiCursorClickThin />
              </div>
            </main>
          </Link>
        </main>
      </main>
    </div>
  );
}

export default Profile;
