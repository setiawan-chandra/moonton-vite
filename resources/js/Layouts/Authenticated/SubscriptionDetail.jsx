export default function SubscriptionDetail(
    isPremium,
    remainingActiveDays,
    activiteDays
) {
    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-[#CCCCFF] rounded-[25px]">
                        <div className="text-black text-lg font-semibold mt-4 mb-8">
                            Basic
                        </div>
                        <div className="text-black text-sm mb-2">
                            5 of 30 days
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div className="rounded-full h-full w-9/12 bg-alerange"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-[30px]">
                    <div className="p-5 bg-black rounded-[25px]">
                        <img src="/icons/ic_star-rounded.svg" alt="" />
                        <div className="text-white text-lg font-semibold mt-4 mb-8">
                            For Greatest
                        </div>
                        <div className="text-white text-sm mb-2">
                            5 of 30 days
                        </div>
                        <div className="rounded-full w-full h-[6px] bg-[#333333]">
                            <div className="rounded-full h-full w-9/12 bg-alerange"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
