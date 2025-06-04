'use client'
import { Check } from "lucide-react";
import Image from "next/image";

const situations = [
  {
    id: 1,
    text: "Vai prestar ENEM ou algum vestibular e sente que sua redação ainda não está no nível ideal?",
  },
  {
    id: 2,
    text: "Quer gabaritar as questões de literatura, incluindo as obras obrigatórias da Fuvest, Unicamp, UFPR e outros?",
  },
  {
    id: 3,
    text: "️Precisa dominar a gramática para passar em concursos públicos?"
  },
];

export default function Identification() {
  return (
    <div className="identification flex items-center justify-center md:px-48 px-4 py-14 ">
      <div className="bg-white rounded-[50px] md:py-[90px] py-11 md:px-[85px] px-4 flex md:flex-row flex-col-reverse md:max-w-[1280px] justify-center items-center identification-card relative overflow-hidden gap-3">
        <div className="absolute top-0 h-[6px] md:w-[85%] w-[60%] bg-[var(--primary)] rounded-full" />
        <div className="flex md:gap-6 gap-4 flex-col">
          <p className="md:text-4xl text-xl font-baloo text-[var(--primary)] font-extrabold text-center md:text-start">
            Você se identifica com alguma dessas situações?
          </p>
          <div className="flex flex-col md:gap-6 gap-4">
            {situations.map((situation) => (
              <div
                key={situation.id}
                className="flex flex-row md:gap-4 items-start md:min-h-[62px] min-h-[40px]"
              >
                <Check className="text-[var(--primary)] md:w-9 md:h-9 w-6 h-6 shrink-0" />
                <p className="md:text-xl text-sm">{situation.text}</p>
              </div>
            ))}
          </div>

          <p className="md:text-2xl text-[16px]">
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
