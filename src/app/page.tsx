import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col gap-10 min-h-screen items-start justify-center p-10 sm:px-100 bg-zinc-50 font-sans dark:bg-black">
            <h1 className="text-5xl font-semibold">Make You're Presentation the right way</h1>
            <p></p>
            <div className="flex gap-2">
                <Button asChild><Link href="/form">Get Started</Link></Button>
            </div>
        </div>
    );
}
