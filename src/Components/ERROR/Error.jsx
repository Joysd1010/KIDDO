import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <div className=' absolute md:top-36 md:left-1/3 text-white text-4xl font-bold p-2 bg-slate-600 bg-opacity-30 rounded-lg hover:bg-opacity-95 duration-500'><h1>OOPs The Page Not Found</h1></div>
            <img className=' w-screen h-screen' src="https://i.postimg.cc/8CkcTDKh/Unlock-your-potential-with-limitless-1.png" alt="" />
            <NavLink to={"/"}><button className="absolute left-[620px] top-56 btn btn-active btn-primary">Lets GO BACK</button></NavLink>
        </div>
    );
};

export default Error;