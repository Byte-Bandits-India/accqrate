import CTASection from "../../resources/announcement/sections/CTASection";
import Home from "./sections/home"
import Section1 from "./sections/section1"
import Section2 from "./sections/section2";

const software = () => {
    return (
        <section className="overflow-x-hidden overflow-y-hidden">
            <Home />
            <Section1 />
            <Section2 />
            <CTASection />
        </section>
    );
};

export default software;
