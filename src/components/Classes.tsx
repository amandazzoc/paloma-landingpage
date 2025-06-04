'use client'
import Button from "@/components/Button";
import { classes } from "@/data/data";
import { Check } from "lucide-react";
import Image from "next/image";

export default function Classes() {
  return (
    <div className="classes flex flex-col justify-between items-center md:px-48 px-4 md:pt-48 pb-36 pt-46">
      <div className="flex flex-col gap-9 items-center">
        <div className="flex flex-col md:max-w-[1361px] items-center">
          <p className="md:text-4xl text-xl font-baloo text-[var(--primary)] font-extrabold text-center">
            Tudo que você vai dominar com a Profª Paloma
          </p>
          <p className="md:text-xl text-[16px] text-center md:max-w-[952px]">
            Redação nota 1000, interpretação literária afiada e gramática
            destrinchada — para brilhar no ENEM, vestibulares e concursos.
          </p>
        </div>
        <div className="flex md:flex-row flex-col md:gap-[90px] gap-8 items-center">
          {classes.map((item) => (
            <div
              className={`flex flex-col md:gap-8 gap-4 md:py-[47px] py-[22px] px-[22px] border-2 rounded-4xl ${
                item.menor ? "max-h-[483px]" : ""
              } md:max-w-[413px] shadow-xl`}
              key={item.title}
              style={{ borderColor: item.color }}
            >
              <div className="flex flex-col gap-1.5 items-center justify-center">
                <Image
                  width={66}
                  height={66}
                  alt={`Ícone de ${item.title}`}
                  src={item.icon}
                  className="md:w-[66px] w-[49px]"
                />
                <div className="flex flex-col gap-1">
                  <p
                    className="font-baloo font-extrabold text-center md:text-[32px] text-xl"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </p>
                  <p className="text-center md:text-xl text-[16px]">
                    {item.description}
                  </p>
                </div>
              </div>
              <div>
                <ul className="flex flex-col gap-3 md:gap-4">
                  {item.itens.map((subItem, index) => (
                    <li
                      key={index}
                      className="text-[16px] md:text-xl flex items-start gap-4"
                    >
                      <Check
                        color={item.color}
                        width={24}
                        height={24}
                        className="shrink-0 mt-1"
                      />
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <Button text=" QUERO DOMINAR TUDO ISSO!" onClick={() => {}} />
      </div>
    </div>
  );
}
