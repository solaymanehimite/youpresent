import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 min-h-screen items-center justify-center p-10 sm:px-100 bg-zinc-50 font-sans dark:bg-black">

            <h1 className="font-semibold text-center">Make You're Presentation <br /> the <span className="text-transparent bg-linear-to-r from-orange-500 to-blue-500 bg-clip-text">right</span> way
            </h1>
            <p className="w-md text-center">PresentNow gives you the tools and inspiration to craft stunning, unique presentations with ease.</p>
            <div className="flex gap-2">
                <Button asChild><Link href="/form">Get Started</Link></Button>
            </div>
        </div>
    );
}
