"use client";
import { signOutUser } from "../../services/firebase-auth";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CookieValueTypes, deleteCookie, getCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
interface Props {
  email: CookieValueTypes;
}
const Navbar = ({ email }: Props) => {
  const router = useRouter();
  const [img, setImg] = useState<any>("");

  useEffect(() => {
    var img = getCookie("img");
    setImg(img);
  }, []);

  const [dropdpown, setDropdpown] = useState(false);
  const handleClick = () => {
    setDropdpown(!dropdpown);
  };

  const userSignOut = () => {
    signOutUser();
    deleteCookie("accessToken");
    deleteCookie("email");
    router.push("/login");
  };
  return (
    <>
      <div className="bg-[#FFCD00]  w-full  p-4 border-b-2 border-[#852E2C]">
        <ul className="flex flex-row justify-between items-center">
          <li>
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </li>
          <li>
            <div className="">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleClick}
              >
                <Image
                  src={img ? img : "/IMAGE.png"}
                  alt="logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />{" "}
                <FontAwesomeIcon icon={faAngleDown} className="h-6" size="sm" />
              </div>

              {dropdpown && (
                <div className=" p-2 absolute right-6 top-12 z-10  bg-white">
                  <ul className="cursor-pointer">
                    <li className="hover:bg-blue-100 text-[#852E2C] p-2">
                      {email}
                    </li>
                    <li className="hover:bg-blue-100 text-[#852E2C] p-2 ">
                      Settings
                    </li>
                    <li
                      className="hover:bg-blue-100 text-[#852E2C] p-2 "
                      onClick={userSignOut}
                    >
                      Sign Out{" "}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
