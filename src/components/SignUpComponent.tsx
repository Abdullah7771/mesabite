"use client";
import { createUser } from "../../services/firebase-auth";
import Input from "../../utils/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const SignUpComponent = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleSubmit = async () => {
    if (pass === confirmPass) {
      try {
        const a = await createUser(email, pass);
        if (a) router.push("/");
      } catch (error: any) {
        toast.error(error.message);
      }
    } else {
      toast.error("passwords do not match");
    }
  };

  return (
    <div className="bg-[#FFF6DF] h-screen flex   flex-col justify-center items-center">
      <div className=" h-fit w-fit border-2 border-gray-500 p-24 ">
        <h3 className="text-3xl font-bold ">SignUp</h3>
        <br />
        <Input
          name={"Username"}
          val={setName}
          styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  sm:w-[368px] sm:h-[52px]     mb-2      w-full  bg-contain bg-no-repeat pl-3"
        />
        <Input
          type="email"
          name={"Email"}
          val={setEmail}
          styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  sm:w-[368px] sm:h-[52px]     mb-2     w-full  bg-contain bg-no-repeat pl-3"
        />
        <Input
          type="password"
          name={"Password"}
          val={setPass}
          styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  sm:w-[368px] sm:h-[52px]     mb-2     w-full  bg-contain bg-no-repeat pl-3"
        />
        <Input
          type="password"
          name={"Confirm Password"}
          val={setConfirmPass}
          styles="bg-[url('/inputshape2.png')]  lg:w-[350px] lg:h-[40px]  sm:w-[368px] sm:h-[52px]     mb-2     w-full  bg-contain bg-no-repeat pl-3"
        />

        <button
          className="bg-[#852e2c] text-white font-bold w-[150px] h-[50px] mt-2   rounded-full"
          onClick={handleSubmit}
        >
          Sign Up
        </button>

        <p className="text-base  mt-12">
          Already have an acccount?{" "}
          <span
            className="underline cursor-pointer text-blue-700"
            onClick={() => router.push("/login")}
          >
            Login{" "}
          </span>
        </p>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUpComponent;
