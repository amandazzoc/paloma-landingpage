'use client'
import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="header flex md:flex-row flex-col justify-between items-center md:px-48 px-4 py-14">
      <div className="flex flex-col md:gap-8 gap-3.5">
        <div className="flex flex-col gap-2.5 md:max-w-[686px]">
          <p className="md:text-[2.5rem] text-3xl font-baloo text-[var(--primary)] font-extrabold">
            Tudo o que você precisa para mandar bem em{" "}
            <span className="text-[var(--green)]">Redação</span>,{" "}
            <span className="text-[var(--yellow)]">Literatura</span> e{" "}
            <span className="text-[var(--marine)]">Gramática</span>.
          </p>
          <p className="md:text-2xl text-lg md:max-w-[680px]">
            A Profª Paloma te guia na jornada até a aprovação com aulas
            completas, correções reais e um plano que funciona para você.
          </p>
        </div>
        <Button text="QUERO SER APROVADO!" onClick={() => {}} />
      </div>
      <Image
        width={521}
        height={471}
        alt="Figure que representa a professora Paloma"
        src="/images/paloma-fig.svg"
        className="w-[250px] md:w-[521px] h-auto"
      />
    </div>
  );
}
