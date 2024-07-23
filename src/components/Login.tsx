'use client'

import Image from "next/image"


export default function Login() {
    return (
        <>

            <div className="flex justify-between ">
                <div>
                    <div className=" rounded-sm overflow-hidden">
                        <div className="pt-24 pr-8 pb-5 pl-8 bg-white flex-col w-full">
                            <h1 className="text-5xl text-gray-800 bold m-20 text-center">Welcome!</h1>
                            <p className="text-3xl mb-5">Lorem ipsum dolor sit.</p>
                            <div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4">
                                <input type="email" name="email" id="email" placeholder="Email" />
                            </div>
                            <div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </div>
                            <div className="flex justify-between items-center mt-2 underline">
                                <a href="" className="">Forgot your password?</a>
                                <button className=" pb-2 pt-2 pr-3 pl-3 rounded-md  border-solid bg-yellow-900 text-white">Login</button>
                            </div>
                            <p className="text-center mt-24">Don't have an account? <a href="#" className="text-yellow-900 font-bold">Sign up now</a></p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <Image 
                          src="/coffee-computer.png"
                          width={1732}
                          height={800}
                          alt="Picture of the author"/>
                </div>
                

                {/* <div className="">
                    <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
                </div> */}

            </div>


        </>
    )
}




{/* <div className="flex max-w-72 w-full rounded-sm overflow-hidden absolute">
<div className="pt-16 pr-8 pb-5 pl-8 bg-white flex ">
<h1 className="text-2xl text-gray-800">Welcome!</h1>
<p className="modal-desc">Fanny pack hexagon food truck, street art waistcoat kitsch.</p>
<div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded">
<label  className="">Email</label>
<input type="email" name="email" id="email" placeholder="Email" />
</div>
<div className="flex flex-col pt-3 pb-2 pr-3 pl-3 border border-solid rounded">
<label  className="input-label">Password</label>
<input type="password" name="password" id="password" placeholder="Password" />
</div>
<div className="modal-buttons">
<a href="" className="">Forgot your password?</a>
<button className="input-button">Login</button>
</div>
<p className="sign-up">Don't have an account? <a href="#">Sign up now</a></p>
</div>
</div>
<div className="modal-right">
<img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80" alt="" />
</div> */}

