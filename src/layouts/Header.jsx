import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdPersonalVideo } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import CAvatar from "../pages/components/CAvatar";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { Button, Popover } from "antd";
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

export default function Header() {
    const [isLogin, setIsLogin] = useState(false);

    const [open, setOpen] = useState(false);
    const hide = () => {
        setOpen(false);
    };
    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
    };

    return (
        <header className="flex items-center justify-between px-5 py-1 border-b border-[#ffc6c7]">
            <Link to="/" className="">
                <h1 className="text-xl font-bold text-text matemasie-regular">Social Network</h1>
            </Link>
            <ul className="flex items-center gap-5 text-paragraph">
                <li>
                    <NavLink to="/" className="flex w-[75px] justify-center ">
                        <IoHomeOutline size={25} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/video" className="flex w-[75px] justify-center ">
                        <MdPersonalVideo size={25} />
                    </NavLink>
                </li>{" "}
                <li>
                    <NavLink to="/notification" className="flex w-[75px] justify-center">
                        <IoMdNotificationsOutline size={25} />
                    </NavLink>
                </li>
            </ul>
            <div className="">
                {isLogin ? (
                    <Link to="#">
                        <button>Đăng nhập</button>
                    </Link>
                ) : (
                    <div className="flex gap-2 items-center">
                        <div className="w-[40px] h-[40px] border-2 border-text text-text flex items-center justify-center rounded-full">
                            <FaFacebookMessenger size={20} />
                        </div>
                        <div className="w-[40px] h-[40px] border-2 border-text text-text flex items-center justify-center rounded-full">
                            <IoIosNotifications size={25} />
                        </div>

                        <Popover
                            content={
                                <div>
                                    <Link to="/profile" className="flex items-center gap-1 hover:bg-bg text-text px-3 py-2">
                                        <FaRegUser />
                                        Profile
                                    </Link>
                                    <Link to="/setting" className="flex items-center gap-1 hover:bg-bg text-text px-3 py-2">
                                        <IoSettingsOutline />
                                        Setting
                                    </Link>
                                    <Button className="flex items-center gap-1 mt-2 bg-[#ef4444] text-[#fff]">
                                        <IoIosLogOut />
                                        Đăng xuất
                                    </Button>
                                </div>
                            }
                            trigger="click"
                            open={open}
                            onOpenChange={handleOpenChange}>
                            <button className="p-0 bg-bg">
                                <CAvatar />
                            </button>
                        </Popover>
                    </div>
                )}
            </div>
        </header>
    );
}
