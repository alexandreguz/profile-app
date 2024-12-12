"use client";
 
import { useRouter } from 'next/navigation'
import Image from "next/image";
import Link from "next/link";

export default function Login() {
    const router = useRouter()
  return (
    <>
      <div className="flex justify-between ">
        <div>
          <div className=" rounded-sm overflow-hidden">
            <div className="pt-24 pr-8 pb-5 pl-8 bg-white flex-col w-full">
              <h1 className="text-5xl text-gray-800 bold m-20 text-center">
                Welcome!
              </h1>
              <p className="text-3xl mb-5">Lorem ipsum dolor sit.</p>
              <div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-between items-center mt-2 underline">
                <Link key={"forgot_password"} href={"/forgot_password"}>
                  Forgot your password?
                </Link>
                <button className=" pb-2 pt-2 pr-3 pl-3 rounded-md  border-solid bg-yellow-900 text-white hover:bg-yellow-950"
                        onClick={() => router.push('/dashboard')}
                >
                  Login
                </button>
              </div>
              <p className="text-center mt-24">
                Don&apos;t have an account?
                <span className="text-yellow-900 font-bold">
                  <Link key={"signup"} href={"/signup"}>
                    &nbsp; Sign up now
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full m-auto">
          <Image
            src="/call_action.jpg"
            width={1732}
            height={1000}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
}
