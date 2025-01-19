"use client";
import { getNavbarContent } from "../content_config/navbar_config";
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

export default function NavigationBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const author = String(process.env.NEXT_PUBLIC_AUTHOR).replace(/['"]/g, "");

  return (
    <Navbar
      maxWidth="full"
      className="light bg-lightmodeBG2"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarBrand>
          <p className="text-24 font-raleway text-lightmodeFont hover:text-red-800">
            {author}
          </p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end" className="md:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="text-lightmodeFont md:hidden"
        />
      </NavbarContent>
      <NavbarContent justify="end" className="hidden md:flex">
        {getNavbarContent().map((item, index) => (
          <NavbarItem className="" key={index}>
            <a
              href={item.url}
              className="text-18 font-raleway text-lightmodeFont hover:text-red-800"
            >
              {item.title}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className="light bg-lightmodeBG2">
        {getNavbarContent().map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <a
              href={item.url}
              className="text-18 font-raleway text-lightmodeFont hover:text-red-800"
            >
              {item.title}
            </a>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}