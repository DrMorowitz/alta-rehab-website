"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-lg md:text-4xl mb-4 text-[#751541] max-w-4xl font-extrabold">
              Casos de Éxito en Alta Rehab
            </h2>
            <p className="text-black text-sm md:text-base max-w-sm font-light">
              Descubre cómo hemos ayudado a nuestros pacientes a recuperar su bienestar y calidad de vida a través de tratamientos personalizados.
            </p>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80"
              alt="Fisioterapia en acción"
              className="rounded-lg object-cover w-full max-w-xs md:max-w-sm h-40 md:h-56 shadow-lg"
            />
          </div>
        </div>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-[#ECE6D8] border border-[#751541] p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-extrabold text-[#751541] font-archivo">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-extrabold text-[#751541] font-archivo">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-[#ECE6D8] to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#AE4E00] via-[#751541] to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="text-center mt-16 pb-20">
        <h3 className="text-2xl md:text-3xl font-extrabold text-[#751541] mb-4 font-archivo">
          ¿Listo para ser nuestro próximo caso de éxito?
        </h3>
        <p className="text-black mb-8 font-light font-archivo max-w-2xl mx-auto">
          Cada paciente es único, y nuestro enfoque personalizado garantiza los mejores resultados para tu recuperación.
        </p>
        <button className="bg-[#AE4E00] text-white px-8 py-4 rounded-lg font-archivo font-medium hover:bg-[#8A3A00] transition-all duration-300 transform hover:translateY(-2px)">
          Agenda tu evaluación inicial
        </button>
      </div>
    </div>
  );
}; 