import Sidebar from "@/Layouts/Authenticated/Sidebar";
import Topbar from "@/Layouts/Authenticated/Topbar";
import React from "react";

export default function Authenticated({ children }) {
    return (
        <>
            <div class="mx-auto max-w-screen hidden lg:block">
                {/* START: Sidebar */}
                {/* END: Sidebar */}

                {/* START: Content */}
                <div class="ml-[300px] px-[50px]">
                    <div class="py-10 flex flex-col gap-[50px]">
                        {/* START: Topbar */}
                        {/* END: Topbar */}
                        <main>{children}</main>
                    </div>
                </div>

                {/* END: Content */}
            </div>
            <div class="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div class="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </>
    );
}
