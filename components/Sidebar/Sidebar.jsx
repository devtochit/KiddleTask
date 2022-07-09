import React from 'react'
import Image from 'next/image'
import { HomeIcon } from "@heroicons/react/solid"
import SidebarMenuItem from './SidebarMenuItem'
import {
    BellIcon,
    BookmarkIcon,
    ClipboardIcon,
    DotsCircleHorizontalIcon,
    DotsHorizontalIcon,
    HashtagIcon,
    InboxIcon,
    UserIcon,

} from "@heroicons/react/outline"

function Sidebar() {
    return (
        <div className='bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-full 1g:auto'>
            <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>

            <div className="leading-10 text-xs text-gray-400">
                <SidebarMenuItem text="Home" Icon={HomeIcon} />
                <SidebarMenuItem text="Explore" Icon={HashtagIcon} />

            </div>

        </div>
    )
}

export default Sidebar;
// turn(
//     <div className="bg-white rounded-3xl px-5 py-6 shadow-lg w-2/3 md:w-1/2 lg:w-auto">
//         <h3 className="font-semibold mb-3 text-lg text-cusblack">Categories</h3>
//         <ul className="leading-10 text-xs text-gray-400">
//             <li>
//                 <button
//                     className={`${recent == "" ? `font-semibold text-cusblack` : ``
//                         } cursor-pointer`}
//                     onClick={() => dispatch(selectCategory(""))}
//                 >
//                     All products
//                 </button>
//             </li>
//             {typesData.map((type, idx) => (
//                 <li key={type.slug}>
//                     <button
//                         className={`${recent == type.name ? `font-semibold text-cusblack` : ``
//                             } cursor-pointer`}
//                         onClick={() => dispatch(selectCategory(type.name))}
//                     >
//                         {type.name}
//                     </button>
//                 </li>
//             ))}
//         </ul>
//     </div>