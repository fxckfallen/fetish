"use client"
 
import { toast } from "sonner"

interface Props {
   
    
}

export const AddToCart: React.FC<Props> = ({
    
}) => {
    return (
        <button className="transition-all px-6 py-2 text-sm bg-black text-white border border-gray-300 hover:border-black rounded-l-lg"
            onClick={() =>
        toast("Item added!", {
          description: "Item successfully added to the cart",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
        >
                Add to Cart
              </button>
    )
};