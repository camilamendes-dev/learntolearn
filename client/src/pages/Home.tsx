import { ArrowRight, BookOpen, Check, CirclePlay, MessageCircle, Search, Target } from "lucide-react";
import { Link } from "wouter";
import { PublicLayout } from "@/components/PublicLayout";

const principles = [
  { icon: BookOpen, title: "Exposição com contexto" },
  { icon: Target, title: "Prática possível" },
  { icon: MessageCircle, title: "Autonomia real" },
];

const steps = [
  { index: "01", icon: Search, title: "Observe", text: "Perceba os padrões que fazem o inglês funcionar em situações reais." },
  { index: "02", icon: Target, title: "Pratique", text: "Transforme o que encontrou em uma rotina pequena e consistente." },
  { index: "03", icon: MessageCircle, title: "Use", text: "Comunique antes de estar pronto e aprenda no processo." },
];

export default function Home() {
  return <PublicLayout>
    <main>
      <section className="mx-auto grid max-w-[1280px] items-center gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1fr_.94fr] lg:px-8 lg:pb-24 lg:pt-24">
        <div className="soft-reveal max-w-2xl">
          <p className="eyebrow">Inglês para a vida real</p>
          <h1 className="font-editorial mt-6 text-[3.5rem] leading-[0.93] tracking-[-0.035em] text-[#1F4D3A] sm:text-7xl lg:text-[5.35rem]">Você não precisa decorar inglês. <span className="text-marker">Precisa aprender</span> a aprender.</h1>
          <p className="mt-7 max-w-xl text-lg leading-8 text-[#415847]">Construa autonomia, confiança e repertório para usar o idioma no mundo real — no seu ritmo e com método.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/agendar" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F4D3A] px-6 py-4 text-sm font-semibold text-[#F8F4E8] transition hover:bg-[#2E5E4E] active:scale-[0.97]">Começar minha jornada <ArrowRight size={17} /></Link>
            <Link href="/metodo" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F4D3A] px-6 py-4 text-sm font-semibold text-[#1F4D3A] transition hover:bg-[#DCE6D8] active:scale-[0.97]">Conhecer o método</Link>
          </div>
        </div>
        <div className="soft-reveal-delay relative min-h-[420px] sm:min-h-[500px]">
          <div className="absolute inset-y-4 left-5 right-0 rounded-[3rem] bg-[#1F4D3A]" />
          <div className="absolute -right-4 top-0 h-20 w-20 rounded-full bg-[#E6D400]" />
          <img src="/manus-storage/ltl-hero-study_10bfc723.jpg" alt="Pessoa estudando com caderno em uma mesa" className="absolute inset-x-0 top-8 h-[390px] w-[92%] rounded-[2.5rem] object-cover shadow-[0_28px_70px_rgba(31,77,58,0.22)] sm:h-[460px]" />
          <div className="absolute bottom-0 left-0 max-w-[260px] rounded-3xl border border-[#DCE6D8] bg-[#FFFDF6] p-5 shadow-xl shadow-[#1F4D3A]/10">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#557060]">Seu próximo passo</p>
            <p className="font-editorial mt-2 text-2xl leading-tight text-[#1F4D3A]">Comece simples.</p>
            <div className="mt-4 flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-[#DCE6D8]"><div className="h-full w-2/5 rounded-full bg-[#E6D400]" /></div><span className="text-xs text-[#557060]">2 de 5</span></div>
          </div>
          <span className="leaf-orbit absolute bottom-10 right-3 h-24 w-28" />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 lg:px-8"><div className="rounded-[2rem] bg-[#DCE6D8] p-7 lg:grid lg:grid-cols-[1.15fr_1.85fr] lg:items-center lg:p-9"><h2 className="font-editorial text-3xl leading-tight text-[#1F4D3A]">Fluência não é perfeição. <span className="text-marker">É funcionalidade.</span></h2><div className="mt-7 grid grid-cols-1 gap-5 border-[#A8B89F] lg:mt-0 lg:grid-cols-3 lg:border-l lg:pl-8">{principles.map(({ icon: Icon, title }) => <div key={title} className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#F8F4E8] text-[#1F4D3A]"><Icon size={19} /></span><span className="text-sm font-semibold text-[#1F4D3A]">{title}</span></div>)}</div></div></section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8"><div className="text-center"><p className="eyebrow">O método</p><h2 className="font-editorial mx-auto mt-5 max-w-3xl text-5xl leading-none text-[#1F4D3A]">Aprender muda quando o método faz sentido.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{steps.map(({ index, icon: Icon, title, text }) => <article key={index} className="group rounded-[1.5rem] border border-[#C9D4C4] bg-[#FFFDF6] p-7 transition duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1F4D3A]/8"><div className="flex items-start justify-between"><span className="font-editorial text-xl text-[#1F4D3A]">{index}</span><span className="grid h-12 w-12 place-items-center rounded-full bg-[#DCE6D8] text-[#1F4D3A] group-hover:bg-[#E6D400]"><Icon size={21} /></span></div><h3 className="font-editorial mt-10 text-3xl text-[#1F4D3A]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#557060]">{text}</p></article>)}</div></section>

      <section className="grid lg:grid-cols-2"><div className="relative overflow-hidden bg-[#1F4D3A] px-8 py-16 lg:px-[max(2rem,calc((100vw-1280px)/2+2rem))]"><span className="absolute left-10 top-8 text-7xl text-[#E6D400]/75">“</span><p className="font-editorial relative max-w-lg text-5xl leading-[1.04] text-[#F8F4E8]">Confiança não vem antes da prática. Ela é consequência da prática.</p><span className="absolute bottom-9 right-14 h-3 w-3 rounded-full bg-[#E6D400]" /></div><div className="bg-[#EEF1E8] px-8 py-16 lg:px-16"><p className="eyebrow">Manifesto</p><h2 className="font-editorial mt-5 max-w-md text-4xl leading-tight text-[#1F4D3A]">A ideia não é depender de um professor para sempre.</h2><p className="mt-5 max-w-lg leading-7 text-[#557060]">Nosso propósito é oferecer ferramentas, clareza e prática para que você siga aprendendo por conta própria, com autonomia e direção.</p><Link href="/sobre" className="mt-7 inline-flex items-center gap-2 border-b border-[#1F4D3A] pb-1 text-sm font-bold text-[#1F4D3A]">Ler o manifesto <ArrowRight size={15} /></Link></div></section>

      <section className="mx-auto max-w-[1280px] px-5 py-24 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">Conteúdos</p><h2 className="font-editorial mt-5 text-5xl leading-none text-[#1F4D3A]">Inglês que conversa<br />com a sua vida.</h2></div><Link href="/conteudos" className="inline-flex items-center gap-2 text-sm font-bold text-[#1F4D3A]">Ver todos os conteúdos <ArrowRight size={16} /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[{ label: "Comece aqui", title: "O mapa da sua jornada", icon: CirclePlay, tone: "bg-[#A8B89F]" }, { label: "Aulas", title: "Contexto antes da regra", icon: BookOpen, tone: "bg-[#7A8660]" }, { label: "Ferramentas", title: "Crie uma rotina possível", icon: Check, tone: "bg-[#2E5E4E]" }].map(({ label, title, icon: Icon, tone }) => <Link href="/conteudos" key={title} className="group overflow-hidden rounded-3xl border border-[#D7DDCF] bg-[#FFFDF6]"><div className={`relative grid h-40 place-items-center ${tone}`}><span className="grid h-16 w-16 place-items-center rounded-full bg-[#F8F4E8]/90 text-[#1F4D3A]"><Icon size={27} /></span><span className="absolute right-5 top-5 h-3 w-3 rounded-full bg-[#E6D400]" /></div><div className="flex items-end justify-between gap-4 p-6"><div><p className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#557060]">{label}</p><h3 className="font-editorial mt-2 text-2xl text-[#1F4D3A]">{title}</h3></div><span className="grid h-9 w-9 place-items-center rounded-full border border-[#1F4D3A] text-[#1F4D3A] transition group-hover:bg-[#E6D400]"><ArrowRight size={15} /></span></div></Link>)}</div></section>

      <section className="mx-5 mb-16 rounded-[2rem] bg-[#5C7A5D] px-6 py-16 text-center lg:mx-8"><p className="eyebrow justify-center text-[#F8F4E8] before:bg-[#E6D400]">Uma prática de cada vez</p><h2 className="font-editorial mx-auto mt-5 max-w-2xl text-5xl leading-none text-[#F8F4E8]">Seu inglês não começa quando você estiver pronto.</h2><p className="mx-auto mt-4 max-w-md text-[#EEF1E8]">Ele começa quando você decide dar o próximo passo.</p><Link href="/agendar" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#F8F4E8] px-6 py-4 text-sm font-bold text-[#1F4D3A] transition hover:bg-[#E6D400] active:scale-[0.97]">Quero aprender a aprender <ArrowRight size={17} /></Link></section>
    </main>
  </PublicLayout>;
}
