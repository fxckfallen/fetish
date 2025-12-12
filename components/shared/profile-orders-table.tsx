'use client'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { useUser } from "@/hooks/useUser"
import { Offer, Order, User } from "@/lib/types"
import Link from "next/link"
import React from "react"
  
interface Props {
}

export function ProfileOrdersTable() {
    const {user, setUser} = useUser();
    return (
      <div className="border rounded p-2 w-[90%]">
      <Table>
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">OrderID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Items</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.orders.map((order: Order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order.products.map((item: Offer, index) => (
                <React.Fragment key={item.id}>
                  <Link href={`/preview/${item.id}`} className="relative inline-block 
      after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
      after:scale-x-0 after:origin-center after:bg-current
      after:transition-transform after:duration-300
      hover:after:scale-x-100">
                    {item.title}
                  </Link>
                  {index < order.products.length - 1 && ", "}
                </React.Fragment>
              ))}</TableCell>
              <TableCell className="text-right">${order.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter >
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">${user.orders.reduce((total, order) => total + order.totalAmount, 0)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      </div>
    )
  }
  