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

const Header = () => {

    let nav_links = [
        {label: "Home", link: ""},
        {label: "About us", link: "/about-us"},
        {label: "Contact us", link: "/contact-us"},
        {label: "Careers", link: "/careers"},
        {label: "Company Details", link: "company-details"},
        {label: "User", link: "", children: [
          {label: "Sign up", link: "/account"},
          {label: "Login", link: "/logout"},
          {label: "Seperator", type: "seperator"},
          {label: "Help", link: "/logout"},
          {label: "Term and Conditions", link: "/logout"},
        ]},
    ];

    const [navScrolled, setNavScrolled] = useState(false);

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
        <div className={"container m-auto px-6 sticky top-0 border-b-[1px] border-gray-300 " + ((navScrolled) ? "bg-white" : "")}>
            <div className={navScrolled ? "py-4 transition-all duration-300" : "py-6 transition-all duration-300"}>
                <header className="flex items-center justify-between">
                    <div id="logo"><Image src="/logo.svg" alt="Site Logo" width={72} height={16} /></div>

                    <nav>
                        <div className="hidden md:flex justify-between space-x-6 font-semibold relative text-left">
                            {nav_links.map((link, i) => {
                                if("children" in link) {
                                  var menu = (
                                    <DropdownMenu.Root key={i}>
                                        <DropdownMenu.Trigger asChild>
                                            <button className="IconButton" aria-label="Customise options">
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
                                    var menu = (
                                        <span className={"font-semibold " + ((link.class) ? link.class: "")} key={i}>
                                            {(link.link) ? (<Link href={link.link}>{link.label}</Link>) : link.label}
                                        </span>
                                    )
                                }
                                return (
                                    menu
                                );
                            })}
                        </div>
                        <div className="md:hidden">
                            <HamburgerMenuIcon />
                        </div>
                    </nav>
                    
                </header>
            </div>
        </div>
    );
}

export default Header;