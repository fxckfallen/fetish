"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

interface BreadcrumbStep {
  href: string;
  label: string;
}

const steps: BreadcrumbStep[] = [
  { href: "/shop", label: "Shop" },
  { href: "/delivery", label: "Information" },
  { href: "/shipping", label: "Shipping" },
  { href: "/payment", label: "Payment" },
];

export default function BreadcrumbNavigation() {
  const pathname = usePathname();

  // Определяем текущий шаг
  const currentStepIndex = steps.findIndex((step) => step.href === pathname);

  return (
    <Breadcrumb className="mt-[1em] ">
      <BreadcrumbList>
        {steps.map((step, index) => {
          const isPastStep = index < currentStepIndex;
          const isCurrentStep = index === currentStepIndex;

          return (
            <React.Fragment key={step.href}>
              <BreadcrumbItem className="text-[12px]">
                {isPastStep ? (
                  <BreadcrumbLink href={step.href}>{step.label}</BreadcrumbLink>
                ) : isCurrentStep ? (
                  <BreadcrumbPage>{step.label}</BreadcrumbPage>
                ) : (
                  <span>{step.label}</span>
                )}
              </BreadcrumbItem>
              {/* Добавляем разделитель вне BreadcrumbItem, кроме последнего элемента */}
              {index < steps.length - 1 && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
