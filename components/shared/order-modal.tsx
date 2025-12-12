'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Props {

}

export const OrderModal: React.FC<Props> = ({

}) => {
    return (
        <>
        <div className="h-screen w-screen fixed top-0 left-0 bg-black opacity-70 z-30"></div>
        <div className="w-[400px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded">
            <div className="w-full flex items-center justify-between h-10">
                <p className="text-[15px] font-semibold ml-4">Order #12345</p>
                <button className="mr-4">X</button>
            </div>
            <Tabs defaultValue="info">
                <TabsList className="w-full mx-auto">
                    <TabsTrigger value="info">Information</TabsTrigger>
                    <TabsTrigger value="items">Items</TabsTrigger>
                </TabsList>
                <TabsContent value="info">
                    <div className="w-[90%] z-40 bg-white p-4">
                        Info
                    </div>
                </TabsContent>
                <TabsContent value="items">
                    <div className="w-[90%] z-40 bg-white p-4">
                        Items
                    </div>
                </TabsContent>
            </Tabs>
        </div>
        </>
    )
};