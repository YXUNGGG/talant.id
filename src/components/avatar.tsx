import clsx from "clsx"

type AvatarProps = {
  className: string
  children: React.ReactNode
}

export function Avatar({ children, className }: AvatarProps) {
  return (
    <div
      className={clsx(
        className,
        "flex items-center justify-center rounded-full bg-primary text-primary-foreground"
      )}
    >
      {children}
    </div>
  )
}
