import Authenticated from "@/Layouts/Authenticated/Index";

export default function SubscriptionPlan() {
    return (
        <Authenticated>
                        <div class="py-20 flex flex-col items-center">
                <div class="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p class="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from movies.
                </p>

                {/* Pricing Card */}
                <div class="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    <div
                        class="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-black w-[300px] h-[max-content]">
                        {/* Top Content: Name-Price */}
                        <div>
                            <div class="text-sm mb-2">Basic</div>
                            <div class="text-[28px] font-bold">
                                IDR 299.000
                            </div>
                            <p class="text-gray-1 text-xs font-light">/3 months</p>
                        </div>

                        {/* Mid Content: Benefits */}
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <img src="assets/icons/ic_tick.svg" alt="" />
                                <span class="text-sm">
                                    Unlock 10 basic movies
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <img src="assets/icons/ic_tick.svg" alt="" />
                                <span class="text-sm">
                                    Up to 3 users
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <img src="assets/icons/ic_tick.svg" alt="" />
                                <span class="text-sm">
                                    Support 24/7 ready
                                </span>
                            </div>
                        </div>

                        {/* Bottom: CTA Button */}
                        <div>
                            <a href="payment_status/failed.html"
                                class="rounded-2xl border border-[#F1F1F1] py-[13px] text-center grid">
                                <span class="text-base">Start Basic</span>
                            </a>
                        </div>
                    </div>

                    {/* For Greatest */}
                    <div
                        class="flex flex-col gap-[30px] py-[30px] px-7 outline outline-1 outline-[#F1F1F1] rounded-[26px] text-white w-[300px] bg-black">

                    {/* Ornament Icon */}
                        <div class="bg-alerange rounded-full p-[13px] max-w-max">
                            <img src="assets/icons/ic_star.svg" width="24" alt=""/>
                        </div>
                        {/* Top Content: Name-Price */}
                        <div>
                            <div class="text-sm mb-2">For Greatest</div>
                            <div class="text-[28px] font-bold">
                                IDR 800.000
                            </div>
                            <p class="text-[#767676] text-xs font-light">/3 months</p>
                        </div>

                        {/* Mid Content: Benefits */}
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    Unlock 200 awards movies
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    180 subtitles available
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    iOS, Android, TV
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    Offline Mode
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    Up to 20 users
                                </span>
                            </div>
                            <div class="flex items-center gap-2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.4402 12.0001L10.8142 14.3731L15.5602 9.62708" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M2.7498 12.0001C2.7498 18.9371 5.0628 21.2501 11.9998 21.2501C18.9368 21.2501 21.2498 18.9371 21.2498 12.0001C21.2498 5.06312 18.9368 2.75012 11.9998 2.75012C5.0628 2.75012 2.7498 5.06312 2.7498 12.0001Z"
                                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="text-sm">
                                    Support 24/7 ready
                                </span>
                            </div>
                        </div>

                        {/* Bottom: CTA Button */}
                        <div>
                            <a href="payment_status/success.html"
                                class="rounded-2xl bg-alerange py-[13px] text-center grid">
                                <span class="text-base font-semibold">Subscribe Now</span>
                            </a>
                        </div>
                    </div>
                </div>
                {/* /Pricing Card */}
            </div>
        </Authenticated>
    );
}
