"use client";
import { authFirebase } from "@/app/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaHouse,
  FaPodcast,
  FaMusic,
  FaHeart,
  FaRightFromBracket,
  FaUser,
  FaUserPlus,
} from "react-icons/fa6";
import { MenuItem } from "./MenuItem";

export const Sider = () => {

    const [isLogin, setIsLogin] = useState<boolean>();

    useEffect(() => {
        onAuthStateChanged(authFirebase, (user) => {
            if (user) { 
                setIsLogin(true);
            } else {
                setIsLogin(false);
            } 
        });
    }, [])

    const menu = [
        {
        title: "Trang chủ",
        icon: (
            <>
            <FaHouse />
            </>
        ),
        url: "/",
        },
        {
        title: "Danh mục bài hát",
        icon: (
            <>
            <FaMusic />
            </>
        ),
        url: "/categories",
        },
        {
        title: "Ca sĩ",
        icon: (
            <>
            <FaPodcast />
            </>
        ),
        url: "/singers",
        },
        {
        title: "Bài hát yêu thích",
        icon: (
            <>
            <FaHeart />
            </>
        ),
        url: "/wishlist",
        isLogin: true,
        },
        {
        title: "Đăng xuất",
        icon: (
            <>
            <FaRightFromBracket />
            </>
        ),
        url: "/logout",
        isLogin: true,
        },
        {
        title: "Đăng nhập",
        icon: (
            <>
            <FaUser />
            </>
        ),
        url: "/login",
        isLogin: false,
        },
        {
        title: "Đăng ký",
        icon: (
            <>
            <FaUserPlus />
            </>
        ),
        url: "/register",
        isLogin: false,
        },
    ];

    return (
        <>
        <Link
            href="/"
            className="inner-logo py-[25px] pl-[20px] pr-[56px] bg-[#1C1C1C] flex gap-[12px] items-center"
        >
            <img src="/logo.svg" alt="" className="w-[42px] h-[42px]" />
            <span className="font-[700] text-[24px] text-primary">Hune Music</span>
        </Link>

        <nav className="mt-[30px]">
            <ul className="flex flex-col gap-[30px] px-[30px]">
            {menu.map((item, index) => (
                <MenuItem key={index} item={item} isLogin={isLogin} />
            ))}
            </ul>
        </nav>
        </>
    );
};
