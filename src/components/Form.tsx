"use client";

import { FormData } from "@/lib/types"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import ThemeSelector from "./form/ThemeSelector";
import { supabase } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Counter } from "./ui/shadcn-io/counter";

export function Form() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        number: "",
        dueDate: new Date(),

        presentationTitle: "",
        presentationDescription: "",
        slides: 5,

        theme: "White",
        isAnimated: true,
    });

    const [currentStep, setCurrentStep] = useState<number>(0);
    const router = useRouter();

    return (
        <div className="w-full max-w-xl min-h-[80vh] sm:min-h-fit">
            <form className="bg-linear-to-r min-h-[80vh] sm:min-h-fit from-purple-100 to-orange-100 rounded-xl p-5">
                <FieldGroup className="min-h-[80vh] sm:min-h-fit">
                    <FieldSet>
                        {currentStep == 0 && <PersonalInfo formData={formData} setFormData={setFormData} />}
                        {currentStep == 1 && <PresentationInfo formData={formData} setFormData={setFormData} />}
                        {currentStep == 2 && <ThemeSelector formData={formData} setFormData={setFormData} />}
                    </FieldSet>
                    <Field orientation="horizontal" className="mt-auto w-full flex justify-between">
                        <Button type="button" onClick={_ => setCurrentStep(prev => prev - 1)}
                            disabled={currentStep == 0} variant="outline">
                            Back
                        </Button>
                        <Button type="button" onClick={() => {
                            if (currentStep < 2) {
                                setCurrentStep(currentStep + 1)
                            } else {
                                const send = async () => {
                                    const { error } = await supabase.from("requests").insert(formData);
                                    console.log(error);
                                    router.push("/");
                                }
                                send();
                            }
                        }}>
                            {currentStep < 2 ? "Next" : "Submit"}
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}


function PersonalInfo({
    formData,
    setFormData
}: {
    formData: FormData
    setFormData: any
}) {
    return <FieldGroup className="items-center sm:items-start">
        <FieldTitle className="text-3xl text-center sm:text-2xl">Personal Information</FieldTitle>
        <Field>
            <div id="name-input" className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <FieldLabel htmlFor="first-name">
                        First Name
                    </FieldLabel>
                    <Input
                        id="first-name"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value, })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <FieldLabel htmlFor="last-name">
                        Last Name
                    </FieldLabel>
                    <Input
                        id="last-name"
                        placeholder="doe"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value, })}
                        required
                    />
                </div>
            </div>
        </Field>
        <Field>
            <FieldLabel htmlFor="whatsapp-number">
                Whatsapp Number
            </FieldLabel>
            <Input
                id="whatsapp-number"
                placeholder="0612345678"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value, })}
                required
            />
        </Field>
    </FieldGroup>
}

function PresentationInfo({
    formData,
    setFormData
}: {
    formData: FormData
    setFormData: any
}) {
    return <FieldGroup>
        <FieldTitle className="text-2xl">Customize You're Presentation</FieldTitle>
        <Field>
            <FieldLabel htmlFor="presentation-title">
                Presentation Title
            </FieldLabel>
            <Input
                value={formData.presentationTitle}
                onChange={(e) => setFormData({ ...formData, presentationTitle: e.target.value, })}
                id="presentation-title"
                placeholder="RAM & ROM"
            />
        </Field>
        <Field>
            <FieldLabel htmlFor="presentation-description">
                What's you're Presenation about?
            </FieldLabel>
            <Textarea
                value={formData.presentationDescription}
                onChange={(e) => setFormData({ ...formData, presentationDescription: e.target.value, })}
                id="presentation-description"
                placeholder="What are RAM and ROM?...."
            />
        </Field>
        <Field orientation="horizontal">
            <Counter
                number={formData.slides}
                setNumber={(newNumber) => setFormData({ ...formData, slides: Math.min(Math.max(2, newNumber), 7) })}
            />
            <FieldLabel> Number of Slides
            </FieldLabel>
        </Field>
    </FieldGroup>
}
