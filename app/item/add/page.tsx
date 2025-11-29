'use client'
// import ItemAddress from "@/components/itemForm/ItemAddress";
import UploadForm from "@/components/itemForm/UploadForm";
import ReportType from "@/components/itemForm/ReportType";
import ItemDetails from "@/components/itemForm/ItemDetails";
import ItemMap from "@/components/ItemMap";
import { useState } from "react";

export default function page() {
    const [step, setStep] = useState(1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return <ReportType setStep={setStep} />
            case 2:
                return (
                    <ItemDetails
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                );
            case 3:
                return <ItemMap />;
            case 4:
                return <UploadForm />;
            default:
                return (
                    <ItemDetails
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    />
                );
        }
    };

    const [formData, setFormData] = useState({
        itemName: "",
        category: "",
        phoneNumber: "",
        dateLost: "",
        description: "",
        howLost: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        // You can send this data to your backend here
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white">
            {renderStep()}

            {/* Next Button */}
            {step >= 2 && <div className="mt-6 w-full max-w-md">
                <div className="flex justify-between w-full">
                    <button
                        onClick={() => setStep((prev) => prev - 1)} // Back should decrement
                        className="px-6 py-2 rounded-lg text-white bg-fuchsia-500 hover:bg-fuchsia-600 transition"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => setStep((prev) => prev + 1)}
                        className="px-6 py-2 rounded-lg text-white bg-fuchsia-500 hover:bg-fuchsia-600 transition"
                    >
                        Next
                    </button>
                </div>
            </div>}

        </div>
    );
}
