"use server"

import { db } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"

export async function UpdateUser(data) {

    const { UserID } = await auth();
    console.log("UserId :", UserID);

    if (!UserID) throw new Error("User not logged in");

    const user = await db.user.findUnique({
        where: {
            clerkUserID: UserID,
        }
    })

    if (!user) throw new Error("User not found");

    try {

        const result = await db.$transaction(
            async (tx) => {
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    }
                });

                if (!industryInsight) {
                    industryInsight = await tx.industryInsight.create({
                        data: {
                            industry: data.industry,
                            salaryRanges: [],
                            growthRate: 0,
                            demandLevel: "Medium",
                            topSkills: [],
                            marketOutlook: "Neutral",
                            keyTrends: [],
                            recommendedSkills: [],
                            nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                        }
                    })
                }

                const UpdateUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    },
                });
                return { UpdateUser, industryInsight }
            }, {
            Timeout: 10000
        }
        )
        return result.user
    } catch (error) {

    }
}

export async function getUserOnboadingStatus() {
    try {
        const { userId } = await auth();
        console.log("Authenticated userId:", userId); 

        if (!userId) throw new Error("User not logged in");

        const user = await db.User.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });

        console.log("Fetched user:", user);

        if (!user) throw new Error("User not found");

        return {
            isOnboarded: !!user.industry,
        };

    } catch (error) {
        console.error("Error checking onboarding status:", error.message);
        throw new Error("Failed to check onboarding status");
    }
}
