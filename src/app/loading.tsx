"use client";
import logo from "@/app/icon.png"

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-2"
            >
                <img src={logo.src} className="max-h-[30px]" alt="Logo" />

                <p className="text-xl text-gray-600">Loading...</p>
            </motion.div>
        </div>
    );
}
