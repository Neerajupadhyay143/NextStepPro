import { getUserOnboadingStatus } from '@/action/User';
import React from 'react'

const IndustryInsightsPage = async () => {
    // Check if user is already onboarded
    const { isOnboarded } = await getUserOnboadingStatus();

    if (!isOnboarded) {
        redirect("/onboarding");
    }
    return (
        <div>
            IndustryInsightsPage
        </div>
    )
}

export default IndustryInsightsPage
