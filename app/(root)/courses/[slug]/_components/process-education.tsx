import ProcessEducationCard from "@/components/cards/process-education.card"
import { processEducation } from "@/constants"

function ProcessEducation() {
    return (
        <div className="container max-w-6xl mx-auto mt-20">
            <h1 className="text-5xl font-black">Ta’lim jarayoni</h1>
            <div className="grid mt-12 grid-cols-3 gap-x-8 gap-y-6">
                {processEducation.map((item, index) => (
                    <ProcessEducationCard key={index} {...item}/>
                ))}
            </div>
        </div>
    )
}

export default ProcessEducation


/*


import React from "react";
import { cn } from "@/lib/utils"; // Bu shadcn utility. Klasslarni birlashtirish uchun.

export function CustomCard({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border bg-white p-4 shadow-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CustomCardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CustomCardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h3>
  );
}

export function CustomCardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}


*/