import ZatcaSection from "@/Components/ZatcaSection";
import Home from "./sections/home"
import Section1 from "./sections/section1"
import Section2 from "./sections/section2";

const software = () => {
    return (
        <section className="overflow-x-hidden overflow-y-hidden">
            <Home />
            <Section1 />
            <Section2 />
            <ZatcaSection />
        </section>
    );
};

export default software;
