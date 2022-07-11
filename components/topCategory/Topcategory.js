import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from "next/dist/client/router";
import Search from '../Search/Search';

const data = [
    {
        id: 1,
        name: 'product1',
    },
    {
        id: 2,
        name: 'product2',
    },

    {
        id: 3,
        name: 'product4',
    },
    {
        id: 4,
        name: 'product5',
    },
    {
        id: 5,
        name: 'product5',
    },
    {
        id: 42,
        name: 'product3',
    },

]

function Topcategory() {
    const [isActive, setIsActive] = useState("/Chat");
    const { asPath } = useRouter();
    useEffect(() => {
        setIsActive(asPath);
    }, [asPath]);

    return (
        <div className=" navbot bg-cusgray z-30 w-full px-1 md:px-0">
            <div className='mx-auto md:flex place-items-center max-w-6xl'>
                <div className='category overflow-x-auto flex flex-wrap place-items-center py-2'>
                    <Link key="all" href={`/Chat`}>
                        <button
                            className={`${isActive == `/Chat`
                                ? `bg-cusblack text-white shadow-lg`
                                : `bg-white text-cusblack`}
                                py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0`}
                        >
                            all items
                        </button>
                    </Link>

                    {data.map(cat => (
                        <Link key={cat.id} href={`/cat/${cat.id}`}>
                            <button
                                className={`${isActive == `/shop/${cat.id}`
                                    ? `bg-cusblack text-white shadow-lg`
                                    : ` bg-white text-cusblack`
                                    } py-2.5 px-6 rounded-3xl text-xs mr-3 mb-2 md:mb-0 `}
                            >
                                {cat.name}

                            </button>
                        </Link>
                    ))}

                </div>
                <Search />
            </div>
        </div>
    )
}

export default Topcategory