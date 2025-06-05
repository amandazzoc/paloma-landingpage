import TestimonialsCarousel from "./FeedbackSlider";

export default function Feedback() {
  return (
    <>
      <div className="onda-top" />
      <div className="bg-[var(--primary)] flex flex-col justify-between items-center md:py-24 py-9 md:gap-9 gap-4">
        <div className="flex flex-col items-center text-center justify-center text-white max-w-[952px]">
          <p className="font-baloo md:text-2xl text-xl">
            Ainda acha que não consegue? Eles pensavam o mesmo.
          </p>
          <p className="md:text-md text-[16px]">
            Todos esses depoimentos são de pessoas que, assim como você, estavam
            perdidas com tanto conteúdo. Mas encontraram um plano, uma
            professora de verdade, e viram tudo mudar.
          </p>
        </div>
        <div className="relative w-full">
          <div className="pointer-events-none absolute left-0 top-0 h-full md:w-40 w-10 z-10 bg-gradient-to-r from-[var(--primary)] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full md:w-40 w-10 z-10 bg-gradient-to-l from-[var(--primary)] to-transparent" />
          <TestimonialsCarousel />
        </div>
      </div>
      <div className="onda-bottom" />
    </>
  );
}
