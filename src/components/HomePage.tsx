import Image from "next/image";

export default function () {
    return (
        <div className="relative h-screen w-full">
            <Image
                src="/slider-1.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="-z-1"
            />
            <div className="relative z-10">
                <h1 className="text-white text-6xl ml-8 pt-36 font-semibold ">Winners for Global Legal Innovation</h1>
                <br />
                <p className="text-white ml-8 text-2xl w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis nobis molestias voluptatum, libero quia quis ad itaque eligendi placeat in assumenda vel at, quos eius, doloribus doloremque ut quae.</p>
                <button className="bg-red-800 hover:bg-gray-100 text-white font-semibold py-2 px-4 border mt-16 ml-8 h-16 rounded shadow">
                    <a href="#contact">Free Consultation</a>
                </button>




            </div>
        </div>
    )
}