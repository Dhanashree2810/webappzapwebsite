import React from 'react';

const Loader = () => {
    return (
        <section
            id="loader"
            className="min-h-screen w-screen fixed top-0 left-0 z-50 flex justify-center items-center bg-white"
        >
            <div className="relative w-[200px] h-[200px]">                
                <div className="absolute w-full h-full rounded-full animate-circle-animation shadow-[0_0_5px_rgba(214,211,211,0.3)]"></div>                            
                <span className="absolute inset-0 flex items-center justify-center text-center text-sm font-medium tracking-wide text-gray-800">
                    Digitalisation is the <br /> Future
                </span>
            </div>
        </section>
    );
};

export default Loader;
