"use client";

import { FormData } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function Form() {
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        number: "",
        dueDate: new Date(),

        presentationDescription: "",
        slides: 5,
        isAnimated: false,
        theme: "black"
    });

    const [currentStep, setCurrentStep] = useState<number>(0);

    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup className="h-96">
                    <FieldSet>
                        {currentStep == 0 && <PersonalInfo formData={formData} setFormData={setFormData} />}
                        {currentStep == 1 && <PresentationInfo formData={formData} setFormData={setFormData} />}
                    </FieldSet>
                    <Field orientation="horizontal" className="mt-auto w-full flex justify-between">
                        <Button type="button" onClick={_ => setCurrentStep(prev => prev - 1)}
                            disabled={currentStep == 0} variant="outline">
                            Back
                        </Button>
                        <Button type="button" onClick={() => setCurrentStep(Math.min(currentStep + 1, 1))}>
                            {currentStep < 1 ? "Next" : "Submit"}
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
    return <FieldGroup>
        <FieldTitle className="text-2xl">Personal Information</FieldTitle>
        <Field>
            <div id="name-input" className="flex flex-col sm:flex gap-4">
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
            <FieldLabel htmlFor="presentation-description">
                What's you're Presenation about?*
            </FieldLabel>
            <Textarea
                id="presentation-description"
                placeholder="computer parts and their uses...."
            />
            <FieldDescription>
                *more than 100 characters
            </FieldDescription>
        </Field>
        <Field orientation="horizontal">
            <Checkbox id="enable-animations" />
            <FieldLabel htmlFor="enable-animations">
                Animations and Transitions
            </FieldLabel>
        </Field>
        <Field orientation="horizontal">
            <Input type="number" className="w-30" defaultValue={5} />
            <FieldLabel>
                Number of Slides
            </FieldLabel>
        </Field>
    </FieldGroup>
}
