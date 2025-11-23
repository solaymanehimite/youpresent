import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowRight, Phone } from "lucide-react"
import Image from "next/image"
import { CopyButton } from "../ui/shadcn-io/copy-button"

export default function RequestDialog({ request }: {
    request: any
}) {
    return (
        <Dialog>
            <DialogTrigger className="hover:bg-neutral-300 cursor-pointer p-2 transition-all rounded-md">
                <ArrowRight />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle asChild><h1>{request.presentationTitle}</h1></DialogTitle>
                    <DialogDescription >
                        {request.presentationDescription}
                    </DialogDescription>
                    <p>Due At <span className="text-red-500">{request.dueDate}</span></p>
                </DialogHeader>
                <div className="grid items-center justify-center grid-cols-2 w-full space-y-2">
                    <p className="text-neutral-500 text-lg">Theme:</p>
                    <div className="flex flex-col w-full items-center gap-2 rounded-md bg-neutral-200 p-2">
                        <Image
                            src={"/Templates/" + (request.theme as String).toLowerCase() + ".png"}
                            alt="style"
                            width={750}
                            height={500}
                        />
                        <p className="text-lg">{request.theme}</p>
                    </div>
                    <p className="text-neutral-500 text-lg">Number of Slides:</p>
                    <p className="text-lg">{request.slides}</p>
                    <p className="text-neutral-500 text-lg">Animated:</p>
                    <p className="text-lg">{request.isAnimated ? "Yes" : "No"}</p>
                </div>
                <div className="w-full flex justify-center">
                    <p className="pl-3 pr-1 py-1 rounded-xl flex bg-neutral-200 gap-3 items-center">
                        {request.number}
                        <CopyButton variant="ghost" content={request.number} />
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )
}

