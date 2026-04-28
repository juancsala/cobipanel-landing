import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

export default function CEO() {
  const { ref, visible } = useInView()

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Photo placeholder */}
            <div className="aspect-[3/4] bg-navy-800 overflow-hidden relative max-w-sm mx-auto lg:mx-0">
              {/* Initials placeholder — replace with <img> when photo is available */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-krona text-white/10 text-9xl select-none">AV</span>
              </div>
              {/* Amber accent bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-amber-500" />
              {/* Name overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy-900/90 to-transparent">
                <p className="font-krona text-white text-lg leading-tight">Alejandro Vargas</p>
                <p className="text-amber-500 text-sm font-archivo mt-1">Director General</p>
              </div>
            </div>

            {/* Decorative amber line */}
            <div className="absolute top-0 left-0 w-1 h-24 bg-amber-500 hidden lg:block" />
          </motion.div>

          {/* Right: bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
          >
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-4 font-archivo">
              Liderazgo
            </p>
            <h2 className="font-krona text-navy-800 text-3xl md:text-4xl leading-tight mb-8 brand-underline">
              La visión detrás de cada proyecto
            </h2>

            {/* Quote */}
            <div className="relative pl-6 border-l-2 border-amber-500 mb-8">
              <Quote size={20} className="text-amber-500 mb-3" />
              <p className="font-krona text-navy-800 text-lg md:text-xl leading-snug italic">
                "La calidad no se negocia en la última etapa — se construye desde el primer día."
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-navy-800/70 font-archivo text-base leading-relaxed">
              <p>
                Alejandro Vargas cuenta con más de 20 años de experiencia en la industria
                de la construcción y los acabados arquitectónicos, liderando proyectos de
                alto impacto para empresas industriales, corporativas y de desarrollo en
                toda la República Mexicana.
              </p>
              <p>
                Su formación en ingeniería civil y su trayectoria en obra le dan una visión
                técnica que combina con una orientación clara al cliente: cumplir, superar
                expectativas y construir relaciones a largo plazo basadas en la confianza.
              </p>
              <p>
                Bajo su dirección, COBIPANEL ha consolidado su presencia en proyectos de
                alto estándar con clientes como Mercado Libre, Intermex y la
                Universidad de Monterrey.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: '+20', label: 'Años en el sector' },
                { value: '7+', label: 'Estados del país' },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-amber-500 pl-4">
                  <p className="font-krona text-2xl text-navy-800">{s.value}</p>
                  <p className="text-navy-800/60 text-sm font-archivo mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
