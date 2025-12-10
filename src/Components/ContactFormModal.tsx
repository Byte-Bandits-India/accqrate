// components/ContactFormModal.tsx
"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import apiClient from "@/Util/apiClient";
import { CustomSelect } from "./CustomSelect";
import { X } from "lucide-react";

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    countryCode?: string;
    modules?: Array<{ value: string; label: string }>;
    initialModule?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
    isOpen,
    onClose,
    countryCode = "",
    modules = [
        { value: "E-invoicing Standalone Software", label: "E-invoicing Standalone Software" },
        { value: "E-invoicing API Integration Software", label: "E-invoicing API Integration Software" },
        { value: "ERP Software", label: "ERP Software" },
        { value: "Partner with Us", label: "Partner with Us" },
    ],
    initialModule = "",
}) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            companyName: "",
            module: initialModule || "",
            message: "",
            agree: false,
            countryCode,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            phone: Yup.string().required("Phone is required"),
            companyName: Yup.string().required("Company name is required"),
            module: Yup.string().required("Module selection is required"),
            message: Yup.string().required("Message is required"),
            agree: Yup.boolean().oneOf([true], "You must accept the privacy policy"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                await apiClient.post("contact-us/add", values);
                alert("Form submitted successfully!");
                resetForm();
                onClose();
            } catch (error) {
                console.error("Form submission failed:", error);
                alert("Submission failed. Please try again.");
            }
        },
    });

    // Don't render if not open
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Contact Us</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="p-6">
                    <form onSubmit={formik.handleSubmit} className="space-y-5">
                        {/* Name & Email */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("name")}
                                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                                    placeholder="Enter your name"
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    {...formik.getFieldProps("email")}
                                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                                    placeholder="Enter your email"
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Phone & Company */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">Phone</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("phone")}
                                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                                    placeholder="Enter your phone number"
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <p className="text-red-500 text-sm">{formik.errors.phone}</p>
                                )}
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Company Name</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps("companyName")}
                                    className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69]"
                                    placeholder="Enter your company name"
                                />
                                {formik.touched.companyName && formik.errors.companyName && (
                                    <p className="text-red-500 text-sm">{formik.errors.companyName}</p>
                                )}
                            </div>
                        </div>

                        {/* Module Dropdown */}
                        <div className="w-full">
                            <CustomSelect
                                label="Module"
                                options={modules}
                                value={formik.values.module}
                                onChange={(val) => formik.setFieldValue("module", val)}
                                error={formik.touched.module ? formik.errors.module : ""}
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium mb-1">Message</label>
                            <textarea
                                {...formik.getFieldProps("message")}
                                rows={4}
                                placeholder="Type your message here..."
                                className="w-full border border-gray-300 rounded-md p-2.5 focus:ring-[#F48B69] focus:border-[#F48B69] resize-y"
                            />
                            {formik.touched.message && formik.errors.message && (
                                <p className="text-red-500 text-sm">{formik.errors.message}</p>
                            )}
                        </div>

                        {/* Consent */}
                        <div className="flex items-start gap-2">
                            <input
                                id="agree"
                                type="checkbox"
                                {...formik.getFieldProps("agree")}
                                checked={formik.values.agree}
                                className="mt-1 accent-[#194BED]"
                            />
                            <label htmlFor="agree" className="text-sm text-[#333333] leading-snug">
                                I consent to the collection and use of my personal information for responding to my
                                inquiry and related communication. My information will be handled in accordance with our{" "}
                                <a
                                    href="/privacy-policy"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#333333] underline"
                                >
                                    privacy policy
                                </a>.
                            </label>
                        </div>
                        {formik.touched.agree && formik.errors.agree && (
                            <p className="text-red-500 text-sm">{formik.errors.agree}</p>
                        )}

                        {/* Submit & Cancel Buttons */}
                        <div className="flex gap-4">
                            <button
                                type="submit"
                                className="flex-1 bg-gradient-to-r from-[#B4441E] via-[#F05A28] to-[#F48B69] text-white py-3 rounded-[10px] font-semibold hover:opacity-90 transition-all"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormModal;