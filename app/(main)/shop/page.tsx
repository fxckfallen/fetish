import { Offer } from "@/components/shared/Offer";
import { searchOffers } from "@/lib/dummy_api";

export default function Home() {
  let offers = searchOffers();
  return (
    <main className="w-full h-full  px-6 mt-4 .no-scrollbar">
      <div className="flex gap-3 flex-wrap">
        {offers.map(offer => (
          <Offer key={offer.id} id={offer.id} title={offer.description} price={offer.price} type={2} image={offer.images[0]} image2={offer.images[1]} liked={false}/>
        ))}
       </div>
    </main>
  )
}
