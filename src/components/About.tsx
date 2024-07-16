import Image from "next/image"

export default function About() {
    return (
        <>
            <div className="flex content-normal items-center">
                <div className="text-6xl font-bold w-1/3 ml-40 text-left text-gray-700 mt-32 ">Something About Law Firm</div>
                <div className="text-2xl text-left w-2/5 text-gray-600 mt-32 ml-16 border-l-4 border-red-600 pl-20">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Facilistyu quis odit, optio, dolorum est enim magni id voluptatum perspiciatis dicta voluptates quisquam, quam velit non consectetur vero obcaecati consequuntur repudiandae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia fugit delectus ipsa quisquam? Totam ipsum nisi quo commodi?
                    Eos illo ut, consequuntur odio eligendi sit eveniet dolore natus optio facilis.</div>
            </div>
            <div className="flex  mb-4 ">
                <div className="mr-32 ml-32 mt-28 w-1/3">
                    <Image
                        src="/about.jpg"
                        width={620}
                        height={7000}
                        alt="Law office"
                    />
                </div>
                <div className="flex-col w-2/5">
                    <div className="text-6xl font-bold text-gray-700 mt-28">
                        Why Hire Us?
                    </div>
                    <div className=" text-gray-600 text-2xl mt-7 mb-11">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam tempore eaque molestias cum dolore id doloremque ut sed corporis modi minus enim, numquam laboriosam distinctio voluptatibus laborum rerum. Velit, totam.
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-700 mb-1">Serving More than 25 Years</h3>
                        <p className=" text-gray-600 text-2xl mb-4">Lorem ipsum  fugiat nihil expedita aliquid enim, corrupti error similique nisi.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-700 mb-1">Great Case Portfolios</h3>
                        <p className=" text-gray-600 text-2xl mb-4">Lorem ipsum dolor sit amet consectetur adipisicing itia fugiat nihil expedita aliquid enim, corrupti error similique nisi.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-700 mb-1">Experienced Lawyers and Resources</h3>
                        <p className=" text-gray-600 text-2xl mb-4">Loria fugiat nihil expedita aliquid enim, corrupti error si.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-2xl text-gray-700 mb-1">Satisfying Success Rate</h3>
                        <p className=" text-gray-600 text-2xl mb-4">Lorem ipsum itia fugiat nihil expedita aliquid enim, corrupti error similique nisi.</p>
                    </div>
                </div>
            </div>
        </>
    )
}