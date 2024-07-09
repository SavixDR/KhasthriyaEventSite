"use client";

import { useState } from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import LoginModal from "./LoginModal";

const Login = () => {
	const [isOpen, setIsOpen] = useState(false);

	const { data: session } = useSession();

  const toggleLoginForm = () => {
    setIsOpen(!isOpen);
  }

	if (session && session!.user) {
		return (
			<>
				<div>
					{/* <button className='px-5 py-2 border-2 border-white rounded-md' onClick={toggleLoginForm}>Login</button>    */}
					<button
						className="rounded-xl font-bold bg-[#FFD700] px-5 py-2.5 text-sm text-gray-700 hover:text-black shadow hover:bg-[#ddc74a]"
						onClick={() => signOut({redirect: false})}
					>
						Log out
					</button>
				</div>
				{/* {isOpen && (<section id="login-overlay" onClick={toggleLoginForm} className="absolute top-0 bottom-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 flex items-center flex-wrap overflow-hidden">
      </section>)} */}
			</>
		);
	}
	return (
		<div>
			<button
				className="rounded-xl font-bold bg-[#FFD700] px-5 py-2.5 text-sm text-gray-700 hover:text-black shadow hover:bg-[#ddc74a]"
				onClick={() => setIsOpen(true)}
			>
				Login
			</button>
			{isOpen && (
				<LoginModal isOpen={isOpen} handleClose={toggleLoginForm}/>
			)}
		</div>
	);
};

export default Login;
