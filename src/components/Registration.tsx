'use client';

import { useRouter } from "next/navigation";

export default function Registration() {
    const router = useRouter()
    return (
        <>
            <div className="bg-[url('/slider-3.jpg')] bg-cover text-charcoal min-h-screen font-sans leading-normal overflow-x-hidden lg:overflow-auto ">
                <main className="flex-1 md:p-0 lg:pt-8 lg:px-8 md:ml-24 flex flex-col">
                    <section className="bg-cream-lighter p-4 ">
                        <div className="md:flex">
                            <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-3xl mb-6 text-white font-bold">Registration</h2>
                        </div>
                        <form className="">
                            <div className="md:flex mb-8">
                                <div className="md:w-1/3 flex-col text-white">
                                    <legend className="uppercase tracking-wide text-xl font-bold">Personal Info</legend>
                                    <p className="text-xs font-light text-red">This entire section is required.</p>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3 border border-solid rounded  bg-yellow-900">
                                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                        <input
                                            className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mt-4 mr-2  w-2/5"
                                            type="text"
                                            name="first_name"
                                            id="email"
                                            placeholder="First Name"
                                            required
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-7/12"
                                            type="text"
                                            name="last_name"
                                            id="email"
                                            placeholder="Last Name"
                                            required
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/6"
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            required
                                        >
                                        </input>
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/6"
                                            type="text"
                                            name="id"
                                            id="id"
                                            placeholder="ID Number"
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/5"
                                            type="text"
                                            name="phone"
                                            id="phone"
                                            placeholder="Phone"
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-5/12"
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex mb-8">
                                <div className="md:w-1/3 flex-col">
                                    <legend className="uppercase tracking-wide text-xl font-bold text-white">Family Info</legend>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3 border border-solid rounded bg-yellow-900">
                                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                        <input
                                            className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mt-4 mr-2  w-2/5"
                                            type="text"
                                            name="wife_first_name"
                                            id="wife_first_name"
                                            placeholder="Wife's First Name"
                                            required
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-7/12"
                                            type="text"
                                            name="wife_last_name"
                                            id="wife_last_name"
                                            placeholder="Wife's Last Name"
                                            required
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/6"
                                            type="date"
                                            name="wife_birthday"
                                            id="wife_birthday"
                                            required
                                        >
                                        </input>
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/6"
                                            type="email"
                                            name="wife_email"
                                            id="wife_email"
                                            placeholder="ID Number"
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 mr-3 w-1/5"
                                            type="text"
                                            name="wife_phone"
                                            id="wife_phone"
                                            placeholder="Phone"
                                        />
                                        <input className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-5/12"
                                            type="email"
                                            name="wife_email"
                                            id="wife_email"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                            </div>


                            <div className="md:flex mb-8">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-xl font-bold text-white">Address</legend>
                                </div>
                                <div className="md:flex-1 mt-2 mb:mt-0 md:px-3 border border-solid rounded bg-yellow-900">
                                    <div className="md:flex-1 mt-2 mb:mt-0 md:px-3 ">
                                        <div className="text-white">Personal</div>
                                        <input
                                            className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-full"
                                            type="text"
                                            name="personal_address"
                                            id="personal_address"
                                            placeholder="Address"
                                        />


                                        <div className="md:flex mb-4">
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-2/12"
                                                type="text"
                                                name="personal_number"
                                                id="personal_number"
                                                placeholder="Number"
                                            />

                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1  w-3/12"
                                                type="text"
                                                name="personal_complement"
                                                id="personal_complement"
                                                placeholder="Complement"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-8/12"
                                                type="text"
                                                name="neighborhood"
                                                id="neighborhood"
                                                placeholder="Neighborhood"
                                            />
                                        </div>
                                        <div className="md:flex mb-4">
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-2/12"
                                                type="text"
                                                name="personal_zip"
                                                id="personal_zip"
                                                placeholder="Zip Code"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-4/12"
                                                type="text"
                                                name="personal_city"
                                                id="personal_city"
                                                placeholder="City"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-4/12"
                                                type="text"
                                                name="personal_state"
                                                id="personal_state"
                                                placeholder="State"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3"
                                                type="text"
                                                name="personal_country"
                                                id="personal_country"
                                                placeholder="Country"
                                            />
                                        </div>
                                        <div className="text-white">Business</div>

                                        <input
                                            className="  pt-3 pb-2 pr-3 pl-3 border border-solid rounded mb-4 w-full"
                                            type="text"
                                            name="busines_address"
                                            id="busines_address"
                                            placeholder="Business Address"
                                        />
                                        <div className="md:flex mb-4">
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-2/12"
                                                type="text"
                                                name="business_number"
                                                id="business_number"
                                                placeholder="Number"
                                            />

                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-3/12"
                                                type="text"
                                                name="complement"
                                                id="complement"
                                                placeholder="Complement"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-8/12"
                                                type="text"
                                                name="wife_neighborhood"
                                                id="wife_neighborhood"
                                                placeholder="Neighborhood"
                                            />
                                        </div>
                                        <div className="md:flex mb-4">
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-2/12"
                                                type="text"
                                                name="business_zip"
                                                id="business_zip"
                                                placeholder="Zip Code"
                                            />
                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-4/12"
                                                type="text"
                                                name="business_city"
                                                id="business_city"
                                                placeholder="City"
                                            />

                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3 mr-1 w-4/12"
                                                type="text"
                                                name="business_state"
                                                id="business_state"
                                                placeholder="State"
                                            />

                                            <input
                                                className="border border-solid rounded pt-3 pb-2 pr-3 pl-3"
                                                type="text"
                                                name="business_country"
                                                id="business_country"
                                                placeholder="Country"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="md:flex mb-6">
                                <div className="md:w-1/3">
                                    <legend className="uppercase tracking-wide text-xl font-bold text-white">Personal and Business Description</legend>
                                </div>
                                <div className="md:flex-1 mt-2 mb-4 md:px-3 border border-solid rounded bg-yellow-900">
                                    <div className="md:flex-1 mt-6 md:px-3">
                                        <textarea className="w-full border border-1 p-4 mt-3" placeholder="describe in a few words about your personal life." ></textarea>
                                    </div>
                                    <div className="md:flex mb-6">
                                        <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
                                            <textarea className="w-full  p-4 border border-1" placeholder="describe in a few words about your business." ></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <div></div>
                                <div><button className=" pb-2 pt-2 pr-3 pl-3 rounded-md border border-solid bg-yellow-900 text-white hover:bg-yellow-800 "
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Sign Up
                                </button></div>
                            </div>
                        </form>
                    </section>
                </main>
            </div>
        </>
    )
}