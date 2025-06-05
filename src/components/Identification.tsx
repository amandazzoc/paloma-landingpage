'use client'
import { Check } from "lucide-react";
import Image from "next/image";
import { situations } from "@/data/data";

export default function Identification() {
  return (
    <div className="identification flex items-center justify-center md:px-4 px-4 py-14 relative ">
      <div className="papel1 md:visible invisible" />
      <div className="papel2 md:visible invisible" />
      <div className="papel3 md:visible invisible" />
      <div className="bg-white rounded-[50px] md:py-14 py-11 md:px-[85px] px-4 flex md:flex-row flex-col-reverse md:max-w-[880px] justify-center items-center identification-card relative overflow-hidden gap-3 mb-6">
        <div className="absolute top-0 h-[6px] md:w-[85%] w-[60%] bg-[var(--primary)] rounded-full" />
        <div className="flex md:gap-3 gap-4 flex-col">
          <p className="md:text-2xl text-xl font-baloo text-[var(--primary)] font-extrabold text-center md:text-start">
            Você se identifica com alguma dessas situações?
          </p>
          <div className="flex flex-col md:gap-2 gap-4">
            {situations.map((situation) => (
              <div
                key={situation.id}
                className="flex flex-row md:gap-4 items-start md:min-h-[62px] min-h-[40px] "
              >
                <Check className="text-[var(--primary)] md:w-5 md:h-5 w-6 h-6 shrink-0" />
                <p className="md:text-md text-sm">{situation.text}</p>
              </div>
            ))}
          </div>

          <p className="md:text-md text-[16px]">
            Se você disse “sim” para qualquer uma dessas perguntas, você está no
            lugar certo!
          </p>
        </div>
        <Image
          width={408}
          height={516}
          alt="Imagem que representa aluno preocupado com a redação"
          src="/images/aluno.png"
          className="w-[218px] md:w-[408px] h-auto"
        />
      </div>
    </div>
  );
}
