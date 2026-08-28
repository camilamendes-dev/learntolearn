import { startLogin } from "@/const";
import { useAuth } from "@/_core/hooks/useAuth";
import { ArrowUpRight, Instagram, Menu, Play, Sparkles, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { label: "Método", href: "/metodo" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Sobre", href: "/sobre" },
];

export function PublicLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="site-shell min-h-screen">
      <header className="sticky top-0 z-50 border-b border-[#d7ddcf]/80 bg-[#F8F4E8]/92 backdrop-blur-lg">
        <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-5 lg:px-8">
          <Link href="/" className="font-editorial text-[1.58rem] leading-none text-[#1F4D3A]">Learn to Learn</Link>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className={`text-sm font-medium transition-colors hover:text-[#1F4D3A] ${location === item.href ? "text-[#1F4D3A]" : "text-[#557060]"}`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            {isAuthenticated ? (
              <Link href={user?.role === "admin" ? "/admin/agenda" : "/minhas-aulas"} className="text-sm font-semibold text-[#1F4D3A]">Minha área</Link>
            ) : (
              <button onClick={() => startLogin()} className="text-sm font-semibold text-[#1F4D3A]">Entrar</button>
            )}
            <Link href="/agendar" className="inline-flex items-center gap-2 rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-semibold text-[#F8F4E8] transition hover:bg-[#2E5E4E] active:scale-[0.97]">
              Agendar aula <ArrowUpRight size={15} />
            </Link>
          </div>
          <button onClick={() => setMobileOpen(value => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-[#d7ddcf] text-[#1F4D3A] lg:hidden" aria-label="Abrir menu">
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="border-t border-[#d7ddcf] bg-[#F8F4E8] px-5 py-5 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
              {navItems.map(item => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-[#1F4D3A] hover:bg-[#DCE6D8]">{item.label}</Link>)}
              <Link href="/agendar" onClick={() => setMobileOpen(false)} className="mt-2 rounded-xl bg-[#1F4D3A] px-3 py-3 text-center text-sm font-semibold text-[#F8F4E8]">Agendar aula</Link>
            </nav>
          </div>
        )}
      </header>
      {children}
      <footer className="border-t border-[#d7ddcf] bg-[#F8F4E8]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-8">
          <div>
            <p className="font-editorial text-2xl text-[#1F4D3A]">Learn to Learn</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#557060]">Aprender inglês é transformar a forma como você interage com o mundo.</p>
            <div className="mt-5 flex gap-3 text-[#1F4D3A]"><Instagram size={18} /><Play size={18} /><Sparkles size={18} /></div>
          </div>
          <FooterGroup title="Navegação" links={navItems} />
          <FooterGroup title="Recursos" links={[{ label: "Comece aqui", href: "/agendar" }, { label: "Aulas", href: "/conteudos" }, { label: "Ferramentas", href: "/conteudos" }]} />
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1F4D3A]">Institucional</p><p className="mt-4 text-sm leading-6 text-[#557060]">Learn to Learn, earthling.</p><span className="mt-5 inline-block h-2 w-2 rounded-full bg-[#E6D400]" /></div>
        </div>
      </footer>
    </div>
  );
}

function FooterGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1F4D3A]">{title}</p><div className="mt-4 flex flex-col gap-3">{links.map(link => <Link key={link.href + link.label} href={link.href} className="text-sm text-[#557060] transition hover:text-[#1F4D3A]">{link.label}</Link>)}</div></div>;
}
