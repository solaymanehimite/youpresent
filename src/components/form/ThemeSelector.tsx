"use client";

import { Field, FieldGroup, FieldLabel, FieldTitle } from "../ui/field";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { FormData } from "@/lib/types";

export default function ThemeSelector({
    formData,
    setFormData
}: {
    formData: FormData
    setFormData: any
}) {
    const themes = [
        { name: "White" },
        { name: "Dark" },
        { name: "Space" },
        { name: "Rose" },
        { name: "Pistachio" },
        { name: "Gold" },
    ];

    return <FieldGroup className="h-full">
        <FieldTitle className="text-2xl">Choose a Template</FieldTitle>
        <Field>
            <div className="flex flex-col w-fit sm:grid sm:grid-cols-3 gap-2">{
                themes.map(theme => <div key={theme.name} className={cn("p-4 rounded-xl text-lg flex flex-col gap-2 justify-center border-2",
                    formData.theme == theme.name ? "bg-green-200 border-green-500 " : "border-transparent")}
                    onClick={() => { setFormData({ ...formData, theme: theme.name }) }}>
                    <Image src={`/Templates/${theme.name.toLowerCase()}.png`} alt={theme.name} className="rounded-lg" width={300} height={90} unoptimized />
                    {theme.name}
                </div>)
            }
            </div>
            <Field orientation="horizontal">
                <Checkbox id="enable-animations"
                    checked={formData.isAnimated}
                    onCheckedChange={e => {
                        setFormData({ ...formData, isAnimated: e.valueOf() });
                    }} />
                <FieldLabel htmlFor="enable-animations">
                    Animated
                </FieldLabel>
            </Field>
        </Field>
    </FieldGroup >
}

