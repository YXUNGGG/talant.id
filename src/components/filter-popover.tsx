import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { Field, FieldGroup } from "./ui/field"
import { Label } from "./ui/label"
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "./ui/popover"

type FilterPopoverProps = {
  values: string[]
  children: React.ReactElement
  onChange: (filter: string[]) => void
  title?: string
}

export function FilterPopover({
  title,
  values,
  children,
  onChange,
}: FilterPopoverProps) {
  const [filters, setFilter] = useState<string[]>([])

  const handleCheck = (filter: string) => {
    setFilter((prev) => {
      if (prev.includes(filter)) {
        return prev.filter((f) => f !== filter)
      } else {
        return [...prev, filter]
      }
    })
  }

  useEffect(() => {
    if (filters) onChange(filters)
  }, [filters])

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align="start"
        className="gap-3 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <PopoverHeader>
            <PopoverTitle>{title}</PopoverTitle>
          </PopoverHeader>
        )}

        <FieldGroup className="gap-2 px-1.5">
          {values.length === 0 ? (
            <p>Ничего не нашлось</p>
          ) : (
            values.map((filter, idx) => (
              <Field
                key={filter + idx}
                orientation="horizontal"
                className="py-1"
              >
                <Checkbox
                  id={filter}
                  checked={filters.includes(filter)}
                  onCheckedChange={() => handleCheck(filter)}
                  className={"not-aria-checked:group-hover:bg-muted"}
                />
                <Label htmlFor={filter} className="w-full cursor-pointer">
                  {filter}
                </Label>
              </Field>
            ))
          )}
        </FieldGroup>

        <Button
          onClick={() => {
            setFilter([])
          }}
          size="sm"
          variant="primary"
        >
          Сбросить всё
        </Button>
      </PopoverContent>
    </Popover>
  )
}
