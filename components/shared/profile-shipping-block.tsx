"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUser } from "@/hooks/useUser";
import { editUser } from "@/lib/dummy_api";
import { toast } from "sonner";

export const ProfileShippingBlock: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useUser();

  const [formData, setFormData] = useState({
    id: 0,
    zip_code: "",
    city: "",
    street: "",
    house_number: "",
    apartment_number: "",
  });

  useEffect(() => {
    if (user && user.id) {
      setFormData({
        id: user.id,
        zip_code: user.zip_code || '',
        city: user.city || '',
        street: user.street || '',
        house_number: user.house_number || '',
        apartment_number: user.apartment_number || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const confirmEdit = () => {
    if (!user) return;

    const updatedUser = editUser(
      user.token,
      undefined, // first_name
      undefined, // last_name
      undefined, // middle_name
      undefined, // email
      undefined, // phone
      undefined, // country
      formData.zip_code,
      formData.city,
      formData.street,
      formData.house_number,
      formData.apartment_number
    );

    setUser(updatedUser);
    toast("Shipping info updated successfully!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="w-full md:w-[50%] p-6 h-fit border rounded hover:border-black transition-all duration-300 cursor-pointer">
          <p className="mb-2">Delivery information</p>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Zip/Postal code:</p>
            <p>{user?.zip_code || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">City:</p>
            <p>{user?.city || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Street address:</p>
            <p>{user?.street || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">House Number:</p>
            <p>{user?.house_number || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Apartment Number:</p>
            <p>{user?.apartment_number || '-'}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] lg:max-w-[55vw]">
        <DialogHeader>
          <DialogTitle>Edit Shipping Info</DialogTitle>
          <DialogDescription>
            Make changes to your delivery info here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 grid-cols-1 lg:grid-cols-2">
          {["zip_code", "city", "street", "house_number", "apartment_number"].map((field) => (
            <div key={field} className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={field} className="text-right capitalize whitespace-nowrap">
                {field.replace("_", " ")}
              </Label>
              <Input
                id={field}
                className="col-span-3"
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={confirmEdit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
