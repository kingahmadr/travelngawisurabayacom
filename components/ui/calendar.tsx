"use client"

import React from "react"
import DatePicker from "react-datepicker"
import { ChevronLeft, ChevronRight } from "lucide-react"

import "react-datepicker/dist/react-datepicker.css"
import { cn } from "@/lib/utils"

export interface CalendarProps {
  selected?: Date | null
  onChange?: (date: Date | null) => void
  className?: string
  inline?: boolean
}

export function Calendar({ selected, onChange, className, inline = true }: CalendarProps) {
  return (
    <div className={cn("p-3", className)}>
      <DatePicker
        selected={selected}
        onChange={onChange}
        inline={inline}
        calendarClassName="rounded-md border bg-popover text-popover-foreground shadow"
        dayClassName={(date) =>
          cn(
            "h-9 w-9 flex items-center justify-center text-sm rounded-md hover:bg-accent hover:text-accent-foreground",
            selected && date?.toDateString() === selected?.toDateString()
              ? "bg-primary text-primary-foreground"
              : ""
          )
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex items-center justify-between px-2 py-1">
            <button onClick={decreaseMonth} className="p-1 rounded hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <span className="text-sm font-medium">
              {date.toLocaleString("default", {
                month: "long",
                year: "numeric",
              })}
            </span>

            <button onClick={increaseMonth} className="p-1 rounded hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      />
    </div>
  )
}
