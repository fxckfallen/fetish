import { ProfileInfoBlock } from "@/components/shared/profile-info-block";
import { ProfileOrdersTable } from "@/components/shared/profile-orders-table";
import { ProfileShippingBlock } from "@/components/shared/profile-shipping-block";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className=" flex-grow flex flex-col items-center justify-center gap-6">
    <div className="flex gap-10 w-[90%] items-center flex-col md:flex-row">
      <ProfileInfoBlock />
      <ProfileShippingBlock />
    </div>
    <div className="flex items-center space-x-2 w-[90%]">
      <Checkbox id="newletter"/>
      <Label htmlFor="newletter">Subscribe to our newsletter</Label>
    </div>
    <ProfileOrdersTable/>
    </main>
  )
}
