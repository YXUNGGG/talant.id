import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldGroup } from "@/components/ui/field"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
} from "@/components/ui/popover"
import { useState } from "react"
import { Input } from "./ui/input"
import { PlusIcon, XIcon } from "lucide-react"
import { Button } from "./ui/button"
import clsx from "clsx"
import { useAutoAnimate } from "@formkit/auto-animate/react"

type BadgeGroupProps = {
  values: string[]
  className?: string
  variant?: "default" | "primary" | "secondary"
  label?: string
  onChange?: (values: string[]) => void
  /**
   * Needs to implement add and remove functionality
   * @param fullState requires an array of the same data as `values`, but wider
   */
  fullState?: string[]
  fullStateLabel?: string
}

export function BadgeGroup({
  label,
  values,
  className,
  variant,
  fullState,
  fullStateLabel,
  onChange,
}: BadgeGroupProps) {
  const [parentRef] = useAutoAnimate()

  const [active, setActive] = useState(values)
  const [full, setFull] = useState(fullState ?? [])

  const handleSetActive = (value: string) => {
    if (active.includes(value)) {
      setActive((prev) => {
        const newActive = prev.filter((val) => val !== value)

        if (onChange) onChange(newActive)
        return newActive
      })
    } else {
      setActive((prev) => {
        const newActive = [...prev, value]

        if (onChange) onChange(newActive)
        return newActive
      })
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    if (!value) setFull(fullState ?? [])

    const filteredFull = fullState?.filter((val) =>
      val.toLowerCase().includes(value.toLowerCase())
    )
    setFull(filteredFull ?? fullState ?? [])
  }

  return (
    <div className="flex max-w-[250px] flex-wrap gap-1.5" ref={parentRef}>
      {label && <div className="w-full">{label}</div>}
      {active.map((val, idx) => (
        <Badge
          key={val + idx}
          variant={variant}
          className={clsx(className, "h-5 rounded-sm")}
        >
          {val}
          {fullState && (
            <XIcon
              className="pointer-events-auto! cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                setActive((prev) => prev.filter((v) => v !== val))
              }}
            />
          )}
        </Badge>
      ))}

      {fullState && (
        <Popover>
          <PopoverTrigger asChild>
            <Button
              onClick={(e) => e.stopPropagation()}
              className=":bg-primary size-5 rounded-sm bg-[#B692F6] p-0 text-accent hover:bg-primary"
            >
              <PlusIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className="w-45 gap-3 p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <PopoverHeader>
              <PopoverTitle>{fullStateLabel}</PopoverTitle>
            </PopoverHeader>
            <Input
              placeholder="Поиск"
              className="h-8"
              onChange={handleSearch}
            />
            <FieldGroup className="gap-2 px-1.5">
              {fullState.length === 0 ? (
                <p>Ничего не нашлось</p>
              ) : (
                full.map((state) => (
                  <Field key={state} orientation="horizontal" className="group">
                    <Checkbox
                      className={"not-aria-checked:group-hover:bg-muted"}
                      id={state}
                      checked={active.includes(state)}
                      onCheckedChange={() => {
                        handleSetActive(state)
                      }}
                    />
                    <Label htmlFor={state} className="w-full cursor-pointer">
                      {state}
                    </Label>
                  </Field>
                ))
              )}
            </FieldGroup>

            <Button
              onClick={() => {
                setActive([])
                setFull(fullState)
              }}
              size="sm"
              variant="primary"
            >
              Сбросить всё
            </Button>
          </PopoverContent>
        </Popover>
      )}
    </div>
  )
}
