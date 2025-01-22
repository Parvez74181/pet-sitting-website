"use client";
import { ArrowRight, ChevronDown, PawPrint } from "lucide-react";

import {
  Navbar as NavbarUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Button as DropDownButton,
} from "@heroui/react";
import Button from "./ui/buttton";
import SitterFindingModal from "./SitterFindingModal/SitterFindingModal";

const Navbar = () => {
  const menuItems = [
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <NavbarUI shouldHideOnScroll className="*:px-0 *:max-w-full *:px-container">
      <NavbarBrand>
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {/* services dropdown */}
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <DropDownButton
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={<ChevronDown />}
                radius="sm"
                variant="solid"
              >
                Services
              </DropDownButton>
            </DropdownTrigger>
          </NavbarItem>

          {/* dropdown menu */}
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="Pet Sitting"
              description="Trusted care and companionship for your pets while you're away."
            >
              Pet Sitting
            </DropdownItem>

            <DropdownItem key="Baby Sitting" description="Safe, loving, and reliable babysitting for your little ones.">
              Baby Sitting
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        {/* nav items */}
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={item.href}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end" className="hidden lg:flex">
        <NavbarItem>
          <SitterFindingModal color="primary" className="w-[220px]">
            Book a Sitter Now <PawPrint size={22} />
          </SitterFindingModal>
        </NavbarItem>
      </NavbarContent>
    </NavbarUI>
  );
};

export default Navbar;
