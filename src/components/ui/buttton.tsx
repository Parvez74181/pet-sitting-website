"use client";
import { cn } from "@/lib/utils";
import { Button as ButtonUI } from "@heroui/react";

type button = {
  text?: string;
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;

  color?: "primary" | "secondary" | "success" | "warning" | "danger";
};

const Button = ({ text, isLoading = false, className, children, color }: button) => {
  return (
    <>
      <ButtonUI
        isLoading={isLoading}
        color={color}
        radius="full"
        className={cn(" flex px-5 py-2 rounded-full font-medium text-base  transition delay-50", className)}
      >
        {children || text} {/* Renders children if provided, otherwise text */}
      </ButtonUI>
    </>
  );
};

export default Button;
