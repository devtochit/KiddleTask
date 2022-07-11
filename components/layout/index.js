import React, { useState } from 'react'
import Header from '../Header/header'
import Sidebar from '../Sidebar/Sidebar'
import Topcategory from '../topCategory/Topcategory';



function Index() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full min-h-screen bg-cusgray pb-10">
            <button
                onClick={() => setOpen(!open)}
                className="w-12 h-12 rounded-full bg-white fixed z-30 drop-shadow-2xl lg:hidden flex justify-center place-items-center bottom-0 left-0 m-5"
            >
                <svg
                    className="w-6 text-cusblack h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                </svg>
            </button>
            <Header />
            <div className="max-w-6xl mx-auto pt-14 md:px-0">
                <Topcategory />
                <div className="grid grid-cols-4 gap-x-6">
                    <div

                    >
                        <Sidebar />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Index