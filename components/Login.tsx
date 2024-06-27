"use client";

import { useState } from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import LoginModal from "@/utils/LoginModal";

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
						className="px-5 py-2 border-2 border-white rounded-md"
						onClick={() => signOut()}
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
				className="px-5 py-2 border-2 border-white rounded-md"
				onClick={() => setIsOpen(true)}
			>
				Login
			</button>
			{isOpen && (
				<LoginModal isOpen={isOpen} handleClose={toggleLoginForm}>
        <div className="bg-white rounded-lg dark:bg-gray-700">
					<div className="flex justify-end p-2">
						<button
							type="button"
							className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
							onClick={() => setIsOpen(false)}
						>
							<svg
								className="w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
									clip-rule="evenodd"
								></path>
							</svg>
						</button>
					</div>
					<form
						className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
						action="#"
					>
						<h3 className="text-xl font-medium text-gray-900 dark:text-white">
							Sign in to our platform
						</h3>
						<div>
							<label
								htmlFor="email"
								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="name@company.com"
								required={true}
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
							>
								Your password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required={true}
							/>
						</div>
						<div className="flex justify-between">
							<div className="flex items-start">
								<div className="flex items-center h-5">
									<input
										id="remember"
										aria-describedby="remember"
										type="checkbox"
										className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
										required={true}
									/>
								</div>
								<div className="text-sm ml-3">
									<label
										htmlFor="remember"
										className="font-medium text-gray-900 dark:text-gray-300"
									>
										Remember me
									</label>
								</div>
							</div>
							<a
								href="#"
								className="text-sm text-blue-700 hover:underline dark:text-blue-500"
							>
								Lost Password?
							</a>
						</div>
						<button
							type="submit"
							className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Login to your account
						</button>
            <div className="relative flex align-middle justify-center px-3 border-red-600 border-2" onClick={() => signIn()}>Login using Google</div>
            <div className="relative flex align-middle justify-center px-3 border-red-600 border-2" >Login using Facebook</div>
						<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Not registered?{" "}
							<a
								href="#"
								className="text-blue-700 hover:underline dark:text-blue-500"
							>
								Create account
							</a>
						</div>
					</form>
				</div>
        </LoginModal>
			)}
		</div>
	);
};

export default Login;
