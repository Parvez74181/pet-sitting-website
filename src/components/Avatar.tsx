"use client";
import { Avatar, AvatarGroup } from "@heroui/react";

const AvatarUI = () => {
  return (
    <>
      <AvatarGroup className="*:size-8">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      </AvatarGroup>
    </>
  );
};

export default AvatarUI;
