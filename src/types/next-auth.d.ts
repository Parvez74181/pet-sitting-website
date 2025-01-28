// next-auth.d.ts

import NextAuth, { DefaultSession } from "next-auth";

// Extend the default session interface
declare module "next-auth" {
  interface Session {
    accessToken?: string;
    maxAge: number;
    cartItemsCount: number;
    user: {
      username: string;
      address?: string;
      dob?: string;
      gender?: string;
      phone?: string;
      district?: string;
      thana?: string;
      is_verified?: boolean;
      rememberMe?: string;
      social_profile?: string;
    } & DefaultSession["user"];
  }

  interface User {
    username?: string;
    phone?: string;
    address?: string;
    district?: string;
    thana?: string;
    gender?: string;
    dob?: string;
    is_verified?: boolean;
    access?: string;
    cartItemsCount?: number;
    rememberMe?: string;
    social_profile?: string;
  }
}
