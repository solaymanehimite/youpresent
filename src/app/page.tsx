import { BentoGrid } from "@/components/landing/Bento";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto flex flex-col gap-10 min-h-screen items-center w-full sm:px-40">
            <div className="flex flex-col items-center justify-center gap-10 h-screen">
                <h1 className="font-semibold text-center">
                    Make You're Presentation <br />
                    the <span className="text-transparent bg-linear-to-r from-purple-500 to-orange-500 bg-clip-text animated-background">
                        right
                    </span> way
                </h1>

                <p className="w-sm sm:w-md text-center">
                    PresentNow gives you the tools and inspiration to craft stunning, unique presentations with ease.
                </p>
                <div className="flex gap-2">
                    <Button asChild className="bg-linear-to-r from-purple-800 to-orange-800 rounded-none text-md group">
                        <Link href="/form">
                            Get Started<ArrowRight className="size-0 group-hover:size-4 transition-all" />
                        </Link></Button>
                </div>
                <ChevronDown className="opacity-20 animate-bounce" />
            </div>

            <BentoGrid />
        </div>
    );
}
