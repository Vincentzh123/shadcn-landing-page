"use client";

import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

export const CustomerService = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    type="button"
                    size="icon"
                    className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg"
                    aria-label="打开智能客服"
                >
                    <MessageCircle className="h-6 w-6" />
                </Button>
            </SheetTrigger>

            <SheetContent
                side="right"
                className="flex h-[min(100vh,850px)] w-full flex-col gap-0 p-0 sm:max-w-[520px]"
            >
                <SheetHeader className="border-b px-6 py-4 text-left">
                    <SheetTitle>智能客服</SheetTitle>
                </SheetHeader>

                <div className="min-h-0 flex-1">
                    <iframe
                        src="https://udify.app/chatbot/rlBdSTeYc7WlKiCL"
                        title="智能客服"
                        className="h-full min-h-[700px] w-full border-0"
                        allow="microphone;clipboard-write"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
};