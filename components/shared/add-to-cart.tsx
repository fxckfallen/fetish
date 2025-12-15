"use client"

import { useUser } from "@/hooks/useUser";
import { toast } from "sonner"

interface Props {
  id: number;
  size: string | null;
  disabled: boolean;
}

export const AddToCart: React.FC<Props> = ({
  id,
  size,
  disabled
}) => {
    const { cart, updateCart } = useUser()

    return (
        <button
            className={`transition-all px-6 py-2 text-sm bg-black text-white border border-gray-300 hover:border-black rounded-l-lg ${
              disabled ? "opacity-50 cursor-not-allowed hover:border-gray-300" : ""
            }`}
            onClick={() => {
              if (disabled) return;
              updateCart(id, 1, size || "")
              toast("Item added!", {
                description: "Item successfully added to the cart",
                action: {
                  label: "Undo",
                  onClick: () => updateCart(id, -1, size || ""),
                },
            })}
        }
            disabled={disabled}
        >
            Add to Cart
        </button>
    )
};
