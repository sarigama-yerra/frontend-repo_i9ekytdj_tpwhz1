import React from 'react'
import Spline from '@splinetool/react-spline'

function GlowParticle({ style, delay = 0, size = 3 }) {
  return (
    <span
      className="absolute rounded-full bg-cyan-300/60 mix-blend-screen shadow-[0_0_12px_2px_rgba(34,211,238,0.65)] animate-plankton"
      style={{
        width: size,
        height: size,
        animationDelay: `${delay}s`,
        ...style,
      }}
    />
  )
}

function Fish({ delay = 0, scale = 1, y = 0 }) {
  return (
    <div
      className="absolute pointer-events-none animate-fish"
      style={{ animationDelay: `${delay}s`, top: y }}
    >
      <div
        className="relative"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="w-8 h-4 bg-cyan-200/70 rounded-full blur-[0.3px] shadow-[0_0_12px_2px_rgba(103,232,249,0.5)]" />
        <div className="absolute -right-2 top-1.5 w-3 h-1.5 bg-cyan-300/70 rotate-12 origin-left rounded-[2px] animate-tail" />
        <div className="absolute -right-2 top-1.5 w-3 h-1.5 bg-cyan-300/70 -rotate-12 origin-left rounded-[2px] animate-tail" />
        <div className="absolute left-1 top-0.5 w-1 h-1 bg-cyan-50/80 rounded-full" />
      </div>
    </div>
  )
}

function Seaweed({ left = '10%', height = 220, delay = 0 }) {
  return (
    <svg
      className="absolute bottom-0 opacity-40 text-emerald-300/50 animate-sway"
      style={{ left, animationDelay: `${delay}s` }}
      width="120"
      height={height}
      viewBox={`0 0 120 ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={`M20 ${height} C 10 ${height - 60}, 40 ${height - 120}, 20 40`} stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <path d={`M60 ${height} C 50 ${height - 70}, 80 ${height - 140}, 60 20`} stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      <path d={`M100 ${height} C 90 ${height - 80}, 120 ${height - 160}, 100 30`} stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

export default function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#021024] via-[#031a33] to-[#010a16] text-white">
      {/* Bioluminescent gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] bg-[radial-gradient(circle,_rgba(34,211,238,0.18)_0%,_rgba(3,26,51,0)_60%)] blur-2xl" />
        <div className="absolute -bottom-40 -right-40 w-[55vw] h-[55vw] bg-[radial-gradient(circle,_rgba(16,185,129,0.18)_0%,_rgba(1,10,22,0)_60%)] blur-2xl" />
      </div>

      {/* Spline 3D scene as living hero background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft water caustics overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center animate-caustics" />

      {/* Drifting plankton microparticles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <GlowParticle
            key={i}
            size={Math.random() * 3 + 1}
            delay={Math.random() * 10}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(0.4px)'
            }}
          />
        ))}
      </div>

      {/* Gentle glowing fish */}
      <Fish delay={0} scale={1} y={"20%"} />
      <Fish delay={3} scale={0.9} y={"45%"} />
      <Fish delay={6.5} scale={1.2} y={"65%"} />

      {/* Sea plants swaying at the seabed */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56">
        <Seaweed left="8%" height={220} delay={0} />
        <Seaweed left="24%" height={260} delay={1.2} />
        <Seaweed left="46%" height={210} delay={0.6} />
        <Seaweed left="68%" height={250} delay={1.8} />
        <Seaweed left="84%" height={230} delay={0.9} />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#00060e]/70 via-[#000a18]/20 to-transparent" />
      </div>

      {/* Content layer */}
      <div className="relative z-10">
        <header className="flex items-center justify-between px-6 sm:px-10 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-400/20 border border-cyan-300/20 backdrop-blur-md shadow-[0_0_30px_6px_rgba(34,211,238,0.25)] flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.9)]" />
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-wide">AquaVision AI</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#showcase" className="hover:text-white transition-colors">Showcase</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
        </header>

        <main className="px-6 sm:px-10 pt-16 pb-24 sm:pt-24 sm:pb-32">
          <section className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <h1 className="text-4xl sm:text-6xl leading-tight font-extrabold tracking-tight">
                Dive into an intelligent, living ocean of insight
              </h1>
              <p className="mt-4 text-white/80 text-base sm:text-lg max-w-xl">
                Meet AquaVision AI — real-time perception and analytics that flow like water. Immerse yourself in responsive visuals, fluid interactions, and glowing clarity.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a href="#get-started" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-cyan-400/20 hover:bg-cyan-400/30 border border-cyan-300/30 text-cyan-100 backdrop-blur-md shadow-[0_0_24px_4px_rgba(34,211,238,0.2)] transition-colors">
                  Get started
                </a>
                <a href="/test" className="inline-flex justify-center items-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white backdrop-blur-md transition-colors">
                  System check
                </a>
              </div>

              {/* Glassmorphic stat cards */}
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-xl">
                {[
                  { label: 'Latency', value: '12 ms' },
                  { label: 'Streams', value: '48+' },
                  { label: 'Insights', value: 'Realtime' },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl p-4 bg-white/6 border border-white/10 backdrop-blur-xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04),0_8px_30px_rgba(0,0,0,0.25)]">
                    <div className="text-sm text-white/70">{item.label}</div>
                    <div className="mt-1 text-xl font-semibold text-cyan-100">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white/8 border border-white/10 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-emerald-300/10 to-transparent blur-xl" />
                <div className="relative">
                  <h3 className="text-2xl font-semibold">Fluid Perception Engine</h3>
                  <p className="mt-2 text-white/80">
                    Adaptive inference that flows around complexity, with neon-clear outputs and ocean-deep context.
                  </p>
                  <ul className="mt-6 space-y-3 text-white/80">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 shadow-[0_0_12px_2px_rgba(110,231,183,0.75)]" />
                      Multi-modal stream fusion
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_2px_rgba(34,211,238,0.75)]" />
                      Real-time anomaly glow maps
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-300 shadow-[0_0_12px_2px_rgba(165,180,252,0.75)]" />
                      Self-calibrating signal flow
                    </li>
                  </ul>

                  {backendUrl && (
                    <div className="mt-6 text-xs text-white/60">
                      API connected at: <span className="font-mono text-white/80">{backendUrl}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="px-6 sm:px-10 pb-10 text-sm text-white/60">
          © {new Date().getFullYear()} AquaVision AI — Crafted beneath the waves
        </footer>
      </div>
    </div>
  )
}
