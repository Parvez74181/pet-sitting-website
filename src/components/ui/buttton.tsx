"use client";
import { cn } from "@/utils/utils";
import { Button as ButtonUI } from "@heroui/react";

type button = {
  text?: string;
  isLoading?: boolean;
  className?: string;
  id?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary" | "success" | "warning" | "danger";
  type?: "submit" | "reset" | "button";
  ref?: React.Ref<HTMLButtonElement>;
  onPress?: () => void;
};

const Button = ({ text, isLoading = false, className, children, color, type = "button", id, ref, onPress }: button) => {
  return (
    <>
      <ButtonUI
        ref={ref}
        isLoading={isLoading}
        color={color}
        radius="full"
        type={type}
        id={id}
        className={cn("flex px-5 py-2 rounded-full font-medium text-base transition delay-50", className)}
        onPress={onPress}
      >
        {children || text} {/* Renders children if provided, otherwise text */}
      </ButtonUI>
    </>
  );
};

export default Button;
