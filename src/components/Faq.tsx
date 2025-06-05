import Image from "next/image";
import FaqContent from "./FaqContent";
import Button from "./Button";
export default function Faq() {
  return (
    <div className="flex flex-col justify-between items-center gap-2.5 lg:py-32 py-8 lg:px-14">
      <div className="flex md:flex-row flex-col justify-between items-center md:gap-16 gap-11 px-4">
        <div className="flex flex-col items-center justify-center md:w-1/2 md:gap-6 gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image
              width={270}
              height={270}
              src="/images/faq.svg"
              alt="FAQ Illustration"
            />
            <div className="flex flex-col gap-3 text-center">
              <p className="font-baloo text-[var(--primary)] md:text-2xl text-xl">
                Ainda com dúvidas?
              </p>
              <p className=" md:text-lg text-[16px]">
                É normal se sentir inseguro na hora de escolher um curso.
              </p>
              <p className=" md:text-lg text-[16px]">
                Mas aqui, você não está sozinha: centenas de alunos já confiaram
                na Profª Paloma — e deram o primeiro passo para a aprovação.
              </p>
            </div>
          </div>

          <Button text="QUERO TIRAR AS MINHAS DÚVIDAS!"  />
        </div>

        <div className="flex flex-col md:w-1/2 gap-5">
          <p className="md:text-2xl text-xl md:text-start text-center">
            <span className="font-baloo text-[var(--primary)]">FAQ</span> -
            Perguntas frequentes
          </p>
          <FaqContent />
        </div>
      </div>
    </div>
  );
}