// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   HiHome,
//   HiTag,
//   HiTicket,
//   HiUser,
// } from "react-icons/hi";
// import { BiHeadphone } from "react-icons/bi";
// import "./Navbar.scss";

// export default function Navbar() {
//   const [submenuOpen, setSubmenuOpen] = useState(false); // Submenu toggle

//   const navItems = [
//     { name: "Home", href: "#Homepage", Icon: HiHome },
//     { name: "Offers", href: "#Offers", Icon: HiTag },
//     {
//       name: "Ticket Booking",
//       Icon: HiTicket,
//       subItems: [
//         { name: "Bus", href: "#bus" },
//         { name: "Train", href: "#train" },
//         { name: "Flight", href: "#flight" },
//       ],
//     },
//     { name: "Need Help", href: "#NeedHelp", Icon: BiHeadphone },
//     { name: "Login/Signup", href: "#LoginSignup", Icon: HiUser },
//   ];

//   return (
//     <nav className="custom-navbar">
//       <div className="container">
//         <div className="brand">
//           <a href="#Homepage">
//             <span className="logo-text">Indu Travel</span>
//           </a>
//         </div>

//         <ul className="nav-list">
//           {navItems.map(({ name, href, Icon, subItems }) => (
//             <li
//               className={`nav-item ${subItems ? "has-submenu" : ""}`}
//               key={name}
//               onClick={() => {
//                 if (subItems) {
//                   setSubmenuOpen(prev => !prev);
//                 }
//               }}
//             >
//               <a className="nav-link" href={href || "#"}>
//                 <Icon className="nav-icon" />
//                 <span className="nav-text">{name}</span>
//               </a>

//               {subItems && submenuOpen && (
//                 <ul className="submenu">
//                   {subItems.map((item) => (
//                     <li key={item.name}>
//                       <a href={item.href}>{item.name}</a>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }





import { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome, HiTag, HiTicket, HiUser } from "react-icons/hi";
import { BiHeadphone } from "react-icons/bi";
import "./Navbar.scss";

export default function Navbar({ setSelected }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", Icon: HiHome },
    { name: "Offers", href: "#Offers", Icon: HiTag },
    {
      name: "Ticket Booking",
      Icon: HiTicket,
      subItems: [
        { name: "Bus", key: "bus" },
        { name: "Train", key: "train" },
        { name: "Flight", key: "flight" },
      ],
    },
    { name: "Need Help", href: "#NeedHelp", Icon: BiHeadphone },
    { name: "Login/Signup", href: "/auth", Icon: HiUser },
  ];

  return (
    <nav className="custom-navbar">
      <div className="container">
        <div className="brand">
          <Link to="/">
            <span className="logo-text">Indu Travel</span>
          </Link>
        </div>

        <ul className="nav-list">
          {navItems.map(({ name, href, Icon, subItems }) => (
            <li
              className={`nav-item ${subItems ? "has-submenu" : ""}`}
              key={name}
              onClick={() => {
                if (subItems) setSubmenuOpen((prev) => !prev);
              }}
            >
              {href ? (
                href.startsWith("/") ? (
                  <Link className="nav-link" to={href}>
                    <Icon className="nav-icon" />
                    <span className="nav-text">{name}</span>
                  </Link>
                ) : (
                  <a className="nav-link" href={href}>
                    <Icon className="nav-icon" />
                    <span className="nav-text">{name}</span>
                  </a>
                )
              ) : (
                <div className="nav-link">
                  <Icon className="nav-icon" />
                  <span className="nav-text">{name}</span>
                </div>
              )}

              {subItems && submenuOpen && (
                <ul className="submenu">
                  {subItems.map((item) => (
                    <li key={item.name}>
                      <button
                        className="submenu-btn"
                        onClick={() => {
                          setSelected(item.key); // Set foreground
                          setSubmenuOpen(false); // Close submenu
                        }}
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
