'use client'
import Image from "next/image";

type ButtonProps = {
    text: string;
}

export default function Button({text}: ButtonProps) {
    return (
      <button
      className="bg-gradient-to-r from-[#25D366] to-[#128C41] text-white py-3 px-7 md:p2-4 md:px-8 rounded-2xl duration-300 cta-button cursor-pointer font-extrabold flex flex-row items-center gap-2.5 w-fit"
      onClick={() => window.open('https://encurtador.com.br/bvE04', '_blank')}
      >
      <Image width={18} height={18} alt="Whatsapp logo" src="/images/icons/whatsapp.svg"/> <p className="font-baloo text-md">{text}</p>
      </button>
    );

}