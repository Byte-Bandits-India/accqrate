"use client";

import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import FloatingPhone from "@/Components/FloatingPhone";
import BackToTop from "@/Components/BackToTop";
import Loading from "./loading";
import { useLoading } from "@/Util/LoadingContext";
import { usePageLoading } from "@/Hooks/usePageLoading";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
    const { loading } = useLoading();

    // Track route changes and toggle loading state
    usePageLoading();

    return (
        <>
            {loading && <Loading />}
            <Header />
            <main>{children}</main>
            <Footer />
            <FloatingPhone phoneNumber="+919876543210" />
            <BackToTop />
        </>
    );
}
