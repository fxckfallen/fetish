'use client'

import { AdminTable } from "@/components/shared/admin-table";
import { DashboardBlocks } from "@/components/shared/DashboardBlocks";
import { MonthlyVisitorsChart } from "@/components/shared/monthly-visitors-chart";
import { useIsMobile } from "@/hooks/useIsMobile";
import { cn } from "@/lib/utils";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <main className={cn("w-full ", isMobile ? `px-[50px] py-[50px]` : `pl-[159px] pr-[100px] py-[100px]`)}>
      <DashboardBlocks/>
      <MonthlyVisitorsChart/>
      <AdminTable/>
    </main>
  )
}
