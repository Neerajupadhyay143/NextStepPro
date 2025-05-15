import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// ✅ Efficient route matcher
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/resume(.*)",
    "/interview(.*)",
    "/ai-cover-letter(.*)",
    "/onboading(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
    // ✅ Destructure once
    const { userId, redirectToSignIn } = await auth();

    // ✅ If route needs protection and user not logged in
    if (!userId && isProtectedRoute(req)) {
        return redirectToSignIn();
    }

    return NextResponse.next(); // ✅ Proceed normally
});

// ✅ Cleaner matcher with static + API separation
export const config = {
    matcher: [
        // 🔒 Skip static files & internal Next.js routes
        '/((?!_next|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

        // 🔁 Always run middleware for API and trpc
        '/(api|trpc)(.*)',
    ],
};
