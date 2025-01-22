"use client";
import { getNavbarContent } from "../content_config/navbar_config";
import {authorConfig} from "../content_config/author_config";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import ThemeSwitch from "./themeSwitch";

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const author = authorConfig.name;

  return (
    <Navbar
      maxWidth="full"
      className="bg-lightmodeBG2 dark:bg-darkmodeBG2"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-24 font-raleway text-lightmodeFont1 dark:text-darkmodeFont">
            {author}
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-lightmodeFont1 hover:scale-105 hover:text-switchLightMode dark:text-darkmodeFont dark:hover:text-switchDarkMode md:hidden"
        />
        {getNavbarContent().map((item, index) => (
          <NavbarItem className="hidden hover:scale-105  md:flex" key={index}>
            <a
              href={item.url}
              className="text-18 font-raleway text-lightmodeFont1 hover:text-switchLightMode dark:text-darkmodeFont dark:hover:text-switchDarkMode"
            >
              {item.title}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu className="bg-lightmodeBG2 dark:bg-darkmodeBG2 ">
        {getNavbarContent().map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              href={item.url}
              className="text-18 font-raleway text-lightmodeFont1 hover:text-switchLightMode dark:text-darkmodeFont dark:hover:text-switchDarkMode"
            >
              {item.title}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
