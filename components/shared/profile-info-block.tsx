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
import { editUser } from "@/api/users";
import { useUser } from "@/hooks/useUser";

interface Props {

}

export const ProfileInfoBlock: React.FC<Props> = (
 
) => {
  const [open, setOpen] = useState(false);
  const {user, setUser} = useUser();
  
  const [formData, setFormData] = useState({
  id: 0,
  first_name: '',
  last_name: '',
  middle_name: '',
  email: '',
  phone: '',
});

useEffect(() => {
  if (user && user.id) {
    setFormData({
      id: user.id,
      first_name: user.first_name || '',
      last_name: user.last_name || '',
      middle_name: user.middle_name || '',
      email: user.email || '',
      phone: user.phone || '',
    });
  }
}, [user]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  

  const confirmEdit = async (formData: any) => {
    const res = await editUser(formData);
    setUser(res);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild >
        <div className="w-full md:w-[50%] p-6 h-fit border rounded hover:border-black transition-all duration-300 cursor-pointer">
          <p className="mb-2">Personal information</p>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">First Name:</p>
            <p>{user.first_name || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Last Name:</p>
            <p>{user.last_name || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Middle Name:</p>
            <p>{user.middle_name || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Email:</p>
            <p>{user.email || '-'}</p>
          </div>
          <div className="w-full flex items-center">
            <p className="font-semibold mr-2">Phone:</p>
            <p>{user.phone || '-'}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] lg:max-w-[55vw]">
        <DialogHeader>
          <DialogTitle>Edit Personal Info</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 grid-cols-1 lg:grid-cols-2">
          {["first_name", "last_name", "middle_name", "email", "phone"].map((field) => (
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
          <Button onClick={() =>  confirmEdit(formData)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
