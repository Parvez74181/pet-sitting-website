namespace NodeJS {
  interface ProcessEnv {
    // Public environment variables (available on both server and client)
    NEXT_PUBLIC_BASE_URL: string;
    NEXT_PUBLIC_API_URL: string;
    AUTH_SECRET: string;
  }
}
