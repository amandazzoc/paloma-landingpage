'use client'
import Image from "next/image";

type ButtonProps = {
    text: string;
    onClick: () => void;
}

export default function Button({text, onClick}: ButtonProps) {
    return (
      <button
        className="bg-gradient-to-r from-[#25D366] to-[#128C41] text-white text-lg md:text-2xl font-baloo py-3 px-7 md:py-4 md:px-11 rounded-2xl duration-300 cta-button cursor-pointer font-extrabold flex flex-row items-center gap-2.5 w-fit"
        onClick={onClick}
      >
        <Image width={28} height={28} alt="Whatsapp logo" src="/images/icons/whatsapp.svg"/> {text}
      </button>
    );

}