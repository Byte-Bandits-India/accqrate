"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "@/lib/utils"

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-4", className)}
            {...props}
            ref={ref}
        />
    )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "group relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#29266E]",
                "flex-shrink-0", // This is likely the missing piece
                "outline outline-1 outline-red-500", // DEBUG: Shows the actual shape
                "hover:border-[#194BED] transition-colors duration-200",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#194BED] focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                "data-[state=checked]:border-[#194BED] data-[state=checked]:bg-white",
                className
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <span className="h-3 w-3 rounded-full bg-[#194BED] transition-transform duration-200 group-data-[state=checked]:scale-100 scale-0" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>


    )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// Custom wrapper for radio options with labels
interface RadioOptionProps {
    value: string
    label: string
    description?: string
    className?: string
}

const RadioOption = React.forwardRef<
    React.ElementRef<"div">,
    RadioOptionProps & React.ComponentPropsWithoutRef<"div">
>(({ value, label, description, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer",
                "data-[state=checked]:border-[#29266E] data-[state=checked]:bg-[#F5F5FF]",
                className
            )}
            {...props}
        >
            <RadioGroupItem value={value} id={value} />
            <div className="flex flex-col space-y-1">
                <label
                    htmlFor={value}
                    className="text-sm font-medium text-gray-900 cursor-pointer"
                >
                    {label}
                </label>
                {description && (
                    <p className="text-sm text-gray-500">{description}</p>
                )}
            </div>
        </div>
    )
})
RadioOption.displayName = "RadioOption"

export { RadioGroup, RadioGroupItem, RadioOption }