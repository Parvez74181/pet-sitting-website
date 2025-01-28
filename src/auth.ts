import NextAuth, { Session } from "next-auth";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Facebook,
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "Email", placeholder: "Email" },
        password: { label: "Password", type: "Password", placeholder: "Password" },
        rememberMe: { label: "remember me", type: "checkbox" },
      },
      async authorize(credentials) {
        try {
          console.log(credentials);

          const res = await fetch(`${process.env.API_ROUTING}/api/login/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...credentials }),
            cache: "no-store",
          });

          const json = await res.json();

          if (!json.user) {
            return null;
          }
          return {
            ...json.user,

            rememberMe: credentials.rememberMe,
            access: json.accessToken,
            cartItemsCount: json.cart_item_count,
          };
        } catch (error) {
          console.log("auth", error);
          throw new Error("auth authorize error");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24 * 1,
    updateAge: 1 * 60 * 60, // Refresh session every 1 hours
  },
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      if (trigger === "update" && session) {
        token.username = session.username;
        token.phone = session.phone;
        token.address = session.address;
        token.district = session.district;
        token.thana = session.thana;
        token.gender = session.gender;
        token.dob = session.dob;
        token.picture = session.image;
      }

      if (account) {
        // Store the provider in the token object
        token.provider = account.provider;
        token.isNewUser = true;
      }

      token.cart_item_count = 0; // Number of cart items

      if (user) {
        token.accessToken = user.access;
        // Check if rememberMe was selected and adjust maxAge accordingly
        token.maxAge = user.rememberMe === "true" ? 60 * 60 * 24 * 3 : 60 * 60 * 24 * 1; // 3 days if rememberMe is true, otherwise 1 day
        token.provider = account!.provider;
        token.cart_item_count = user.cartItemsCount; // Number of cart items
        token.username = user.username;
        token.phone = user.phone;
        token.address = user.address;
        token.district = user.district;
        token.thana = user.thana;
        token.gender = user.gender;
        token.dob = user.dob;
        token.is_verified = user.is_verified;
      }

      return token;
    },

    async session({ session, token }): Promise<Session> {
      // Check if the provider is Google

      if (token && token.provider === "google") {
        const user = session.user;

        try {
          // Sync the user data with the backend, but only once
          const res = await fetch(`${process.env.API_ROUTING}/api/socialLogin/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...user, provider: token.provider }),
            cache: "no-store",
          });
          const json = await res.json();

          // After syncing, remove the flag so it doesn't sync again
          token.isNewUser = false;

          // Modify session with new data from API
          session.user = json.user || session.user;
          session.cartItemsCount = json.cart_item_count || 0;
          session.accessToken = (json.accessToken || token.accessToken) as string;
          session.maxAge = token.maxAge as number;
        } catch (error) {
          console.error("Error syncing user:", error);
        }
      } else {
        session.user = {
          ...session.user, // Keep default fields (name, email, image)
          username: token.username as string,
          phone: token.phone as string,
          address: token.address as string,
          district: token.district as string,
          thana: token.thana as string,
          gender: token.gender as string,
          dob: token.dob as string,
          is_verified: token.is_verified as boolean,
        };
        session.cartItemsCount = token.cart_item_count as number;
        session.accessToken = (token.access || token.accessToken) as string;
        session.maxAge = token.maxAge as number;
      }

      return session;
    },
    async redirect({ url, baseUrl }) {
      return (url.includes("redirect") && url) || baseUrl;
    },
  },
  pages: {
    // signIn: "/auth/login", // Redirect to custom login page
  },
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       domain: ".martege.com", // Set your root domain here
  //       path: "/",
  //       secure: true,
  //       sameSite: "lax",
  //     },
  //   },
  // },
});
