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
import { Offer, Order } from "@/lib/types"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { getUserOrders } from "@/lib/dummy_api"

export function ProfileOrdersTable() {
    const { user } = useUser();
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (user?.token) {
            const userOrders = getUserOrders(user.token);
            setOrders(userOrders);
        }
    }, [user]);

    const totalAmount = orders.reduce((total, order) => total + order.totalAmount, 0);

    if (!orders.length) {
        return (
            <div className="border rounded p-6 w-[90%] text-center text-gray-500">
                You have no orders yet.
            </div>
        );
    }

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
                    {orders.map((order: Order) => (
                        <TableRow key={order.id}>
                            <TableCell className="font-medium">{order.id}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>
                                {order.products.map((item: Offer, index) => (
                                    <React.Fragment key={item.id}>
                                        <Link
                                            href={`/preview/${item.id}`}
                                            className="relative inline-block
                                                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full
                                                after:scale-x-0 after:origin-center after:bg-current
                                                after:transition-transform after:duration-300
                                                hover:after:scale-x-100"
                                        >
                                            {item.title}
                                        </Link>
                                        {index < order.products.length - 1 && ", "}
                                    </React.Fragment>
                                ))}
                            </TableCell>
                            <TableCell className="text-right">${order.totalAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">${totalAmount}</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
