import { AdminTable } from "@/components/shared/admin-table";
import { DashboardBlocks } from "@/components/shared/DashboardBlocks";
import { MonthlyVisitorsChart } from "@/components/shared/monthly-visitors-chart";

export default function Home() {
  return (
    <main className="w-full pl-[159px] py-[100px] pr-[100px]">
      <DashboardBlocks/>
      <MonthlyVisitorsChart/>
      <AdminTable/>
    </main>
  )
}
