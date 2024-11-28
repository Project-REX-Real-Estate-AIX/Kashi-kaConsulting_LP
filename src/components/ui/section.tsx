import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  background?: "white" | "gray" | "gradient" | "image"
}

export function Section({ 
  children, 
  className,
  background = "white",
  ...props 
}: SectionProps) {
  return (
    <section 
      className={cn(
        "w-full py-24",
        {
          "bg-white": background === "white",
          "bg-[#F9FAFA]": background === "gray",
          "bg-gradient-to-r from-primary to-accent": background === "gradient",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}