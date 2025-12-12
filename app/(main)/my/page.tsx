import { getUser } from "@/api/users";
import { ProfileInfoBlock } from "@/components/shared/profile-info-block";
import { ProfileOrdersTable } from "@/components/shared/profile-orders-table";
import { ProfileShippingBlock } from "@/components/shared/profile-shipping-block";


export default function Home() {
  return (
    <main className=" flex-grow flex flex-col items-center justify-center gap-6">
    <div className="flex gap-10 w-[90%] items-center flex-col md:flex-row">
      <ProfileInfoBlock />
      <ProfileShippingBlock />
    </div>
    <ProfileOrdersTable/>
    </main>
  )
}
