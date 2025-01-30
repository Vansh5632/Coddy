"use client";
import LoginButton from "./LoginButton";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { User } from "lucide-react";
export const HeaderProfileBtn = () => {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            href="/profile"
            labelIcon={<User className="size-4" />}
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        <LoginButton />
      </SignedOut>
    </>
  );
};
