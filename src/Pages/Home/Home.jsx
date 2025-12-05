import React from 'react';
import hero from "../../assets/hero.png";
import facts from "../../assets/Facts.png";
import fi1 from "../../assets/fi_16076057.png";
import fi2 from "../../assets/fi_5977575.png";

const Home = () => {
    return (
        <div className='max-w-[1250px] mx-auto'>
            <div className='text-center text-7xl font-bold'>
                <h1>We Build</h1>
                <h1>
                    <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                        Productive
                    </span>
                    {" "}Apps
                </h1>
            </div>

            <div className='text-center m-5'>
                <p>
                    We create powerful and user-friendly mobile apps that help businesses grow,
                    improve productivity, and connect with their customers more effectively.
                </p>
                <p>
                    From smart tools to everyday utility apps — our mission is to build digital
                    solutions that make your life easier and your ideas come alive.
                </p>
            </div>

            <div className="flex justify-center gap-4 m-7">
                <button className='flex items-center gap-3 btn'>
                    <img src={fi1} className="w-5 h-5" alt="" />
                    Google Play
                </button>

                <button className='flex items-center gap-3 btn'>
                    <img src={fi2} className="w-5 h-5" alt="" />
                    App Store
                </button>
            </div>

            <img className="mx-auto" src={hero} alt="Hero Banner" />
            <img className="mx-auto" src={facts} alt="Facts Banner" />
        </div>
    );
};

export default Home;
