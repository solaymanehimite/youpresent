import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function Form() {
    return (
        <div className="w-full max-w-md">
            <form>
                <FieldGroup>
                    <FieldSet>
                        <FieldGroup>
                            <FieldTitle className="text-2xl">Personal Information</FieldTitle>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    Full Name*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="Solaymane Himite"
                                    required
                                />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                                    Whatsapp Number*
                                </FieldLabel>
                                <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="0612345678"
                                    required
                                />
                            </Field>
                        </FieldGroup>
                        <FieldSeparator />
                        <FieldGroup>
                            <FieldTitle className="text-2xl">Customize You're Presentation</FieldTitle>
                            <Field>
                                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                                    What's you're Presenation about?*
                                </FieldLabel>
                                <Textarea
                                    id="checkout-7j9-card-number-uw1"
                                    placeholder="computer parts and their uses...."
                                    required
                                />
                                <FieldDescription>
                                    *more than 100 characters
                                </FieldDescription>
                            </Field>
                            <FieldLabel htmlFor="deadline-presentation">
                                Presentation Deadline*
                            </FieldLabel>
                            <div className="flex gap-4">
                                <Field id="deadline-presentation">
                                    <FieldLabel htmlFor="deadline-month">
                                        Month
                                    </FieldLabel>
                                    <Select defaultValue="" required>
                                        <SelectTrigger id="deadline-month">
                                            <SelectValue placeholder="Month" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 12 }, (_, index) => (
                                                <SelectItem value={`${index + 1}`} key={-index}>{index + 1}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="deadline-year">
                                        Year
                                    </FieldLabel>
                                    <Select defaultValue="2025" required>
                                        <SelectTrigger id="deadline-year">
                                            <SelectValue placeholder="Year" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="2025">2025</SelectItem>
                                            <SelectItem value="2026">2026</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                                <Field>
                                    <FieldLabel htmlFor="deadline-day">
                                        Day
                                    </FieldLabel>
                                    <Select defaultValue="" required>
                                        <SelectTrigger id="deadline-day">
                                            <SelectValue placeholder="Day" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {Array.from({ length: 31 }, (_, index) => (
                                                <SelectItem value={`${index + 1}`} key={index}>{index + 1}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
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
                    </FieldSet>
                    <Field orientation="horizontal">
                        <Button type="submit">Submit</Button>
                        <Button variant="outline" type="button">
                            Cancel
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}

