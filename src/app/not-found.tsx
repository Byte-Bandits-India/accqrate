import Image from "next/image";
import AssetPath from "@/AssetPath/AssetPath";
import NotFoundButton from "@/Components/NotFoundButton";

export default function NotFound() {
  return (
    <main className="h-[70vh] bg-[#F7f7ff] flex items-center justify-center px-6">
      <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div className="text-left max-w-xl">
          <h1 className="text-[20px] md:text-[25px] font-bold text-[#1C2041] mb-4">
            Oops! The page you were looking for doesn&apos;t exist.
          </h1>

          <p className="text-[#5A6183] text-[16px] leading-relaxed mb-8">
            You may have mistyped the address or the page may have moved
          </p>

          <NotFoundButton />
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src={AssetPath["404"].pagenotfound} 
            alt="404 illustration"
            width={520}
            height={420}
            priority
            className="w-full max-w-[460px] h-auto"
          />
        </div>

      </div>
    </main>
  );
}
