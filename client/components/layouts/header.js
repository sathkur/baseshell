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

    const HomeNav = () => (
        <div id="logo" className="flex items-center">
            {/* <Image src="/logo.svg" alt="Site Logo" width={40} height={40} /> */}
            <svg fill="#000000" viewBox="0 0 24 24" id="home-alt-3" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                    <path id="primary" d="M21.71,11.29l-9-9a1,1,0,0,0-1.42,0l-9,9a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,13H4v7.3A1.77,1.77,0,0,0,5.83,22H8.5a1,1,0,0,0,1-1V16.1a1,1,0,0,1,1-1h3a1,1,0,0,1,1,1V21a1,1,0,0,0,1,1h2.67A1.77,1.77,0,0,0,20,20.3V13h1a1,1,0,0,0,.92-.62A1,1,0,0,0,21.71,11.29Z" aaastyle="fill: #000000;"></path>
            </svg>
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
          {label: "Login", link: "/logout"},
          {label: "Sign up", link: "/account", children: [
            {label: "Register", link: "/account"},
            {label: "Login with Google", link: "/account"}
          ]},
          {label: "Seperator", type: "seperator"},
          {label: "Help", link: "/logout"},
          {label: "Term and Conditions", link: "/logout"},
        ]},
    ];

    let secondary_nav_links = [
        {label: "Sign In", link: "/login"},
        {label: "Join Us", link: "/signup", classes: "text-green-400"},
        {label: <DarkToggle />}
        
    ];

    let mobile_links = [
        {label: "Home", link: "/"},
        {label: "About us", link: "/about-us"},
        {label: "Contact us", link: "/contact-us"},
        {label: "User", link: "", children: [
            {label: "Login", link: "/logout"},
            {label: "Sign up", link: "/account", children: [
                {label: "Register", link: "/account"},
                {label: "Login with Google", link: "/account"}
            ]},
            {label: "Seperator", type: "seperator"},
            {label: "Help", link: "/logout"},
            {label: "Term and Conditions", link: "/logout"},
        ]},
        {label: "Careers", link: "/careers"},
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

                            <div className={"hidden md:flex justify-between gap-x-6 font-semibold relative text-left "  + ((navScrolled) ? "text-white" : "")}>
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

const DarkToggle = () => {

    const {darkMode, setDarkMode} = React.useContext(ThemeContext);

    return (
        <button  onClick={() => {setDarkMode(!darkMode)}} type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            <svg className={" w-5 h-5 " + (darkMode ? "hidden" : "")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
            <svg className={" w-5 h-5 " + (darkMode ? "" : "hidden")} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </button>
    )
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
                                if(child_link.children){
                                    sub_menu = (
                                        <DropdownMenu.Sub>
                                            <DropdownMenu.SubTrigger className="flex cursor-default select-none items-center py-2 outline-none text-lg nav-menu focus:bg-gray-200 ">
                                                <span className="flex-grow px-4">{child_link.label}</span>
                                                <div className="RightSlot">
                                                    <ChevronRightIcon />
                                                </div>
                                            </DropdownMenu.SubTrigger>
                                            <DropdownMenu.Portal>
                                                <DropdownMenu.SubContent
                                                    className="DropdownMenuSubContent min-w-[10em] md:min-w-[12em] rounded-lg py-2 shadow-2xl bg-white"
                                                    sideOffset={2}
                                                    alignOffset={-5}
                                                >
                                                    {child_link.children.map((sub_child, y) => {
                                                        return (
                                                            <DropdownMenu.Item className="flex cursor-default select-none items-center py-2 outline-none text-lg nav-menu focus:bg-gray-200 " key={i}>
                                                                <span className="flex-grow px-4">
                                                                    {sub_child.label}
                                                                </span>
                                                            </DropdownMenu.Item>
                                                        )
                                                    })}
                                                </DropdownMenu.SubContent>
                                            </DropdownMenu.Portal>
                                        </DropdownMenu.Sub>
                                    )
                                } else {
                                    sub_menu = (
                                        <DropdownMenu.Item className="flex cursor-default select-none items-center py-2 outline-none text-lg nav-menu focus:bg-gray-200 " key={i}>
                                            <span className="flex-grow px-4">
                                                {child_link.label}
                                            </span>
                                        </DropdownMenu.Item>
                                    );
                                }
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
                menu = (
                    <div className="pl-10 py-5">
                        <Link className="theme_font_color heading_h5 " href={link.link}>{link.label}</Link>
                        {("children" in link) ? 
                            (<div>
                                {link.children.map((child_link, i) => (
                                    <>
                                        <div className="pl-10 py-5">
                                            <Link className="theme_font_color heading_h5 " href="">{child_link.label}</Link>
                                        </div>
                                    </>
                                ))}
                            </div>)
                        : ""}
                    </div>
                );                
                return menu;
            })}
        </>
    )
}

export default Header;