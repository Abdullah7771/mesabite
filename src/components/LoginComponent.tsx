"use client";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { googleSignin, signIn } from "../../services/firebase-auth";
import Input from "../../utils/Input";


const LoginComponent = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(true);

 
  const handleGoogleSignin = async () => {
    try {
      const res = await googleSignin();
      const str = res.user.accessToken;
      console.log(res.user.photoURL);
      setCookie("accessToken", str);
      setCookie("email", res.user.email);
      setCookie("img", res.user.photoURL);

      if (res) {
        router.push("/home");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const handleSubmit = async () => {
    try {
      const a = await signIn(email, pass);
      console.log(a.user, a);

      const str = a.user.accessToken;

      setCookie("accessToken", str);
      setCookie("email", a.user.email);
      console.log(a);
      if (a) {
        router.push("/home");
      } else {
        toast.error("Invalid Credentials");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
    
        <div className="bg-[#FFF6DF] h-screen flex   flex-col justify-center items-center">
          <div className="   h-fit w-fit border-2 border-gray-500 p-24 ">
            <h3 className="text-3xl font-bold ">Login</h3>
            <br />
            <Input
              name={"Email"}
              val={setEmail}
              type="email"
              styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  md:w-[368px] md:h-[52px]    sm:w-[320px] ] mb-2     w-[120%]  bg-contain bg-no-repeat pl-3"
            />
            <Input
              type="password"
              name={"Password"}
              val={setPass}
              styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  md:w-[368px] md:h-[52px]    sm:w-[320px] ] mb-2    w-[120%]  bg-contain bg-no-repeat pl-3"
            />

            <button
              className="bg-[#852E2C] text-white font-bold w-[150px] h-[50px] mt-2   rounded-full"
              onClick={handleSubmit}
            >
              Login
            </button>
            <p className="text-base  mt-12">
              Don&apos;t have an acccount?{" "}
              <span
                className="underline cursor-pointer text-blue-700"
                onClick={() => router.push("/signup")}
              >
                Signup{" "}
              </span>
            </p>
            <div
              className="rounded-full w-fit p-2 h-15 bg-white cursor-pointer mx-auto mt-10"
              onClick={handleGoogleSignin}
            >
              <FontAwesomeIcon icon={faGoogle} size="xl" color="#852E2C" />
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
 
    </>
  );
};

export default LoginComponent;
