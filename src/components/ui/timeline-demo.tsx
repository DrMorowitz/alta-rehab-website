import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Recuperación Post-Quirúrgica",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            María, de 45 años, logró una recuperación completa tras su cirugía de rodilla gracias a nuestro programa de fisioterapia especializada y seguimiento personalizado. Su dedicación y nuestro enfoque integral la llevaron a superar todas las expectativas médicas.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Reducción del dolor en 85% en 8 semanas
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Recuperación total de movilidad articular
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Regreso a actividades deportivas recreativas
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Tiempo de recuperación reducido en 40%
            </div>
          </div>
          <div className="bg-[#ECE6D8] p-4 rounded-lg mb-6">
            <p className="text-[#751541] text-sm font-archivo font-medium italic">
              "Nunca pensé que volvería a caminar sin dolor. El equipo de Alta Rehab no solo me devolvió la movilidad, sino también la confianza en mi cuerpo." - María C.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Sesión de fisioterapia para rodilla"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Ejercicios de rehabilitación"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Evaluación médica profesional"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Recuperación exitosa"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Salud Femenina",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            Ana superó sus problemas de incontinencia y dolor pélvico mediante nuestro programa especializado en salud femenina, recuperando su confianza y bienestar. Nuestro enfoque integral y discreto la ayudó a retomar el control de su vida.
          </p>
          <p className="text-black text-xs md:text-sm font-normal mb-8">
            El tratamiento incluyó ejercicios específicos del suelo pélvico, técnicas de reeducación postural y un plan de fortalecimiento progresivo adaptado a sus necesidades específicas como madre de familia trabajadora.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Eliminación completa de incontinencia urinaria
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Reducción significativa del dolor pélvico
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Mejora en la función sexual
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Fortalecimiento del core y suelo pélvico
            </div>
          </div>
          <div className="bg-[#ECE6D8] p-4 rounded-lg mb-6">
            <p className="text-[#751541] text-sm font-archivo font-medium italic">
              "El equipo de Alta Rehab me brindó un ambiente seguro y profesional. Recuperé no solo mi salud física, sino también mi autoestima." - Ana M., 38 años
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Consulta de salud femenina"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Ejercicios especializados para mujeres"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Ambiente profesional y discreto"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1594824804732-ca8db7df1f28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Bienestar femenino integral"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Acondicionamiento Físico",
      content: (
        <div>
          <p className="text-black text-xs md:text-sm font-normal mb-4">
            Carlos transformó completamente su condición física después de una lesión laboral que lo mantuvo inactivo por meses. Nuestro programa de acondicionamiento físico personalizado lo llevó desde la inactividad total hasta un estado físico superior al que tenía antes de la lesión.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Fortalecimiento muscular progresivo y seguro
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Mejora en resistencia cardiovascular del 150%
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Prevención de futuras lesiones laborales
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Regreso seguro y exitoso al trabajo
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Mejora significativa en calidad de vida
            </div>
            <div className="flex gap-2 items-center text-[#751541] text-xs md:text-sm font-archivo font-medium mb-2">
              ✅ Pérdida de 15kg de peso y ganancia muscular
            </div>
          </div>
          <div className="bg-[#ECE6D8] p-4 rounded-lg mb-6">
            <p className="text-[#751541] text-sm font-archivo font-medium italic">
              "Alta Rehab no solo me ayudó a recuperarme, sino que me puso en la mejor forma física de mi vida. Ahora tengo más energía que nunca." - Carlos R., 42 años
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Programa de acondicionamiento físico"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Entrenamiento personalizado"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Progreso y evaluación"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              alt="Resultado exitoso"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-screen w-full">
      <Timeline data={data} />
    </div>
  );
} 