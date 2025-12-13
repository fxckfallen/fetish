import Checkmark from "@/components/shared/checkmark";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" flex-grow flex flex-col items-center justify-center gap-6">
      <Checkmark />
      <h1 className="text-5xl">Thank you for your purchase</h1>
      <h1>Thank you for your purchase, your order is now complete! Please register for additional features (personal profile, promotions, coupons, emails, etc.).  Regards, I AM YOUR FETISH.</h1>
      <h1>Your order number is #123123</h1>
      <Button >Back to Home</Button>
    </main>
  )
}
