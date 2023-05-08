"use client";
import Link from "next/link";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { useEffect, useState } from "react";
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
  } from '@radix-ui/react-icons';
import Image from "next/image";
import { ThemeContext } from "../../app/theme-provider";

const Header = () => {

    const {darkMode, setDarkMode} = React.useContext(ThemeContext);

    const HomeNav = () => (
        <div id="logo" className="flex items-center">
            <Image src="/logo.svg" alt="Site Logo" width={40} height={40} />
            <span>Home</span>
        </div>
    );

    let nav_links = [
        {label: <HomeNav />, link: "/"},
        {label: "About us", link: "/about-us"},
        {label: "Contact us", link: "/contact-us"},
        {label: "Careers", link: "/careers"},
        {label: "Theme", link: "/theme"},
        {label: "Live", link: "https://baseshell-xf5r.vercel.app/"},

        {label: "User", link: "", children: [
          {label: "Sign up", link: "/account"},
          {label: "Login", link: "/logout"},
          {label: "Seperator", type: "seperator"},
          {label: "Help", link: "/logout"},
          {label: "Term and Conditions", link: "/logout"},
        ]},
    ];

    let secondary_nav_links = [
        {label: "Sign In", link: "/login"},
        {label: "Join Us", link: "/about-us", classes: "text-green-400"},
        {label: <input type="checkbox" onClick={() => {setDarkMode(!darkMode)}}/>}

        
    ];

    let mobile_links = [
        {label: "Home", link: "/"},
        {label: "About us", link: "/about-us"},
        {label: "Contact us", link: "/contact-us"},
        {label: "Careers", link: "/careers"}
    ];

    const [navScrolled, setNavScrolled] = useState(false);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 25) {
          setNavScrolled(true)
        } 
        if(window.scrollY < 5) {
          setNavScrolled(false)
        }
    }


    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);

    return (
        <div className={"sticky top-0 border-b-[1px] border-gray-600 " + ((navScrolled) ? "bg-gray-700" : "bg-gray-700")}>
            <div className={"container m-auto px-6 "}>
                <div className={navScrolled ? "py-3 transition-all duration-300" : "py-5 transition-all duration-300"}>
                    <header className="">

                        <nav className="flex items-center justify-end md:justify-between">

                            <div className={"hidden md:flex justify-between space-x-6 font-semibold relative text-left "  + ((navScrolled) ? "text-white" : "")}>
                                <MenuNav links={nav_links} scrolled={navScrolled}/>
                            </div>

                            <div className={"hidden md:flex justify-between space-x-6 font-semibold relative text-left "  + ((navScrolled) ? "text-white" : "")}>
                                <MenuNav links={secondary_nav_links} scrolled={navScrolled}/>
                            </div>

                            
                            <div className="md:hidden">
                                <HamburgerMenuIcon onClick={() => setMobileNavOpen(!mobileNavOpen)}/>
                                <div className={"fixed w-full left-0 right-0 min-h-screen bg-theme-dark transition-all duration-300 transform " + ((mobileNavOpen) ? "translate-x-0" : "translate-x-full")}>
                                    <div className="flex flex-col">
                                        <MobileNav links={mobile_links} />
                                    </div>
                                </div>

                            </div>
                        </nav>
                        
                    </header>
                </div>
            </div>
        </div>
    );
}

const MenuNav = (props) => {

    const {links, scrolled} = props;

    return (
        <>
        {links.map((link, i) => {
            var menu;
            if("children" in link) {
                menu = (
                <DropdownMenu.Root key={i}>
                    <DropdownMenu.Trigger asChild>
                        <button className={"text-lg nav-menu_inverted " + ((link.classes) ? link.classes: "")} aria-label="Customise options">
                        {link.label}
                        </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                        <DropdownMenu.Content className="min-w-[10em] md:min-w-[12em] rounded-lg py-2 shadow-2xl bg-white" sideOffset={5}>
                        {link.children.map((child_link, i) => {
                            var sub_menu;
                            if(child_link.type && child_link.type == "seperator") {
                                sub_menu = (
                                    <DropdownMenu.Separator className="my-1 h-px bg-gray-200" key={i}/>
                                );
                            } else {
                                sub_menu = (
                                    <DropdownMenu.Item className="flex cursor-default select-none items-center py-2 outline-none text-sm focus:bg-gray-200 " key={i}>
                                        <span className="flex-grow px-4">
                                            {child_link.label}
                                        </span>
                                    </DropdownMenu.Item>
                                );
                            }

                            return sub_menu;
                        })}
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                </DropdownMenu.Root>
                )
            } else {
                menu = (
                    <span className={((link.classes) ? link.classes: "") + " text-lg nav-menu_inverted"} key={i}>
                        {(link.link) ? (<Link href={link.link}>{link.label}</Link>) : link.label}
                    </span>
                )
            }
            return (
                menu
            );
        })}
        </>
    )
}

const MobileNav = (props) => {
    const {links} = props;

    return (
        <>
            {links.map((link, i) => {
                var menu;
                if("children" in link) {
                    menu = (
                        <div>
                            <Link href={link.link}>{link.label}</Link>
                        </div>
                    );
                } else {
                    menu = (
                        <div className="pl-10 py-5">
                            <Link className="theme_font_color heading_h5 " href={link.link}>{link.label}</Link>
                        </div>
                    );
                }
                
                return menu;
            })}
        </>
    )
}

export default Header;