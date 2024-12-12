import Image from "next/image";

export default function () {
    return (
        <div className="relative h-screen w-full">
            <Image
                src="/jerusalem.jpeg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                quality={100}
                className="-z-1"
            />

<div className="absolute inset-0 bg-black opacity-50 -z-0"></div>
            <div className="relative z-10">
                <h1 className="text-white text-6xl ml-8 pt-36 font-semibold ">Tradition and Technology - excellence in every detail</h1>
                <br />
                <p className="text-white ml-8 text-2xl w-3/5">I am deeply versed in Judaism, with a profound appreciation for its traditions and wisdom, while also being passionate about technology and its transformative potential. I thrive on sharing my skills and knowledge, constantly seeking innovative ways to bridge these two worlds. Dedicated to continuous learning and self-improvement, I am always looking for opportunities to grow and make meaningful contributions. Whether through solving complex challenges or creating impactful solutions, I strive to bring excellence and creativity to everything I do.</p>
            </div>
        </div>
    )
}