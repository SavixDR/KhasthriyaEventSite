import React, { FormEvent, useState } from "react";
import Modal from "@/utils/Modal";
import { signIn } from "next-auth/react";
import * as z from "zod";
import { useRouter } from "next/navigation";

interface LoginModalProps {
  isOpen: boolean;
  handleClose: () => void;
  callBackUrl?: string ;
}

const FormSchema = z.object({
	email: z.string().min(1, "Email is required").email("Invalid email"),
	password: z
		.string()
		.min(1, "Password is required")
		.min(8, "Password must have than 8 characters"),
});

const LoginModal = ({ isOpen, handleClose,callBackUrl = "/" }: LoginModalProps) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: callBackUrl, // or the page you want to redirect to after successful login
    });
    console.log("Sign in result:", result);
    if (result?.error) {
      console.log("Sign-in error:", result.error);
    } else {
      handleClose(); // Close the modal on successful sign-in
      window.location.href = result?.url??""; // Redirect to the callback URL
    }
  };

  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      <div className="lg:w-[368px] xl:w-[368px]  max-w-sm p-6 sm:m-12 border border-[#FFD700] rounded-3xl bg-black shadow-[#FFD700]/20 shadow-2xl   ">
        <div>
          <img src="/logo.svg" className="w-24 mx-auto" alt="Logo" />
        </div>
        <div className="mt-2 flex flex-col items-center">
          <h1 className="text-lg xl:text-lg font-extrabold text-white">
            Sign in to our platform
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-[#FFD700] text-gray-800 hover:bg-[#b49e1f] flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline" onClick={() => signIn()}>
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fill="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fill="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fill="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fill="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4" >Sign Up with Google</span>
              </button>
            </div>

            <div className="my-6 border-b text-center">
              <div className="leading-none px-2 inline-block text-sm text-gray-300 tracking-wide font-medium bg-black transform translate-y-1/2">
                Or sign up with e-mail
              </div>
            </div>

            <div className="mx-auto max-w-xs mt-12">
              <form onSubmit={handleSignIn}>
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required={true}
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-900 border border-[#FFD700] placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                  id="password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-[#FFD700] text-gray-100 w-full py-4 rounded-lg hover:bg-[#b49e1f] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" type="submit">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    color="black"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 8v6M23 11h-6" />
                    <circle cx="8.5" cy="7" r="4" />
                  </svg>
                  <span className="ml-3 text-black">Sign Up</span>
                </button>
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </a>{" "}
                and its{" "}
                <a href="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
