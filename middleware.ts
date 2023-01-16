export { default } from "next-auth/middleware";

// add protected route which require authentication
export const config = { matcher: ["/edit"] };
