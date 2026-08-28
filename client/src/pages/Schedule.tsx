import { useAuth } from "@/_core/hooks/useAuth";
import { PublicLayout } from "@/components/PublicLayout";
import { startLogin } from "@/const";
import { trpc } from "@/lib/trpc";
import { CalendarDays, CheckCircle2, Clock3, Loader2, LogIn, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";

function formatDay(value: Date) {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long", day: "numeric", month: "long" }).format(new Date(value));
}

function formatHour(value: Date) {
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

export default function Schedule() {
  const { isAuthenticated, loading } = useAuth();
  const utils = trpc.useUtils();
  const slots = trpc.schedule.available.useQuery();
  const reserve = trpc.schedule.reserve.useMutation({
    onSuccess: () => {
      toast.success("Aula agendada. Seu horário já aparece em Minhas aulas.");
      void utils.schedule.available.invalidate();
      void utils.schedule.mine.invalidate();
    },
    onError: error => toast.error(error.message || "Não foi possível reservar este horário."),
  });

  const groupedSlots = (slots.data ?? []).reduce<Record<string, NonNullable<typeof slots.data>>>((groups, slot) => {
    const key = new Date(slot.startsAt).toDateString();
    groups[key] ??= [];
    groups[key].push(slot);
    return groups;
  }, {});

  return <PublicLayout><main className="min-h-[68vh]"><section className="mx-auto max-w-[1280px] px-5 pb-10 pt-16 lg:px-8 lg:pt-20"><p className="eyebrow">Agendamento</p><div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><h1 className="font-editorial max-w-3xl text-6xl leading-[.94] text-[#1F4D3A] lg:text-7xl">Escolha um horário para <span className="text-marker">começar.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#557060]">Encontre um encontro que caiba na sua semana. A confirmação fica disponível imediatamente na sua área.</p></div>{isAuthenticated && <Link href="/minhas-aulas" className="inline-flex items-center gap-2 self-start rounded-full border border-[#1F4D3A] px-5 py-3 text-sm font-bold text-[#1F4D3A] transition hover:bg-[#DCE6D8]">Minhas aulas <CalendarDays size={16} /></Link>}</div></section>

    {!loading && !isAuthenticated && <section className="mx-auto max-w-[1280px] px-5 pb-8 lg:px-8"><div className="flex flex-col gap-5 rounded-[1.5rem] border border-[#D7DDCF] bg-[#EEF1E8] p-6 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E6D400] text-[#1F4D3A]"><Sparkles size={19}/></span><div><p className="font-semibold text-[#1F4D3A]">Entre para reservar seu horário.</p><p className="mt-1 text-sm text-[#557060]">Você pode consultar a agenda agora; a reserva exige uma conta de aluno.</p></div></div><button onClick={() => startLogin()} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-bold text-[#F8F4E8] transition hover:bg-[#2E5E4E]"><LogIn size={16} />Entrar</button></div></section>}

    <section className="mx-auto max-w-[1280px] px-5 pb-24 lg:px-8">{slots.isLoading ? <div className="grid min-h-64 place-items-center"><Loader2 className="animate-spin text-[#1F4D3A]" /></div> : slots.error ? <div className="rounded-3xl border border-red-200 bg-red-50 p-7 text-red-800">Não foi possível carregar os horários. Tente novamente em instantes.</div> : Object.keys(groupedSlots).length === 0 ? <div className="rounded-[2rem] border border-dashed border-[#A8B89F] bg-[#FFFDF6] px-6 py-16 text-center"><Clock3 className="mx-auto text-[#1F4D3A]" size={32}/><h2 className="font-editorial mt-5 text-4xl text-[#1F4D3A]">Novos horários em breve.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#557060]">A agenda de Douglas será publicada aqui. Enquanto isso, você pode conhecer o método e se preparar para o primeiro encontro.</p><Link href="/metodo" className="mt-7 inline-flex rounded-full bg-[#1F4D3A] px-5 py-3 text-sm font-bold text-[#F8F4E8]">Conhecer o método</Link></div> : <div className="grid gap-6 xl:grid-cols-2">{Object.entries(groupedSlots).map(([day, daySlots]) => <article key={day} className="rounded-[1.6rem] border border-[#D7DDCF] bg-[#FFFDF6] p-6"><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#DCE6D8] text-[#1F4D3A]"><CalendarDays size={18}/></span><h2 className="font-editorial text-2xl capitalize text-[#1F4D3A]">{formatDay(daySlots[0].startsAt)}</h2></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{daySlots.map(slot => <div key={slot.id} className="flex items-center justify-between gap-4 rounded-2xl border border-[#D7DDCF] p-4"><div><p className="font-semibold text-[#1F4D3A]">{formatHour(slot.startsAt)}</p><p className="mt-1 text-xs text-[#557060]">{slot.durationMinutes} minutos</p></div><button disabled={!isAuthenticated || reserve.isPending} onClick={() => reserve.mutate({ slotId: slot.id })} className="rounded-full bg-[#1F4D3A] px-4 py-2 text-xs font-bold text-[#F8F4E8] transition hover:bg-[#2E5E4E] disabled:cursor-not-allowed disabled:opacity-50">{reserve.isPending ? "Reservando..." : isAuthenticated ? "Reservar" : "Entrar"}</button></div>)}</div></article>)}</div>}</section>
  </main></PublicLayout>;
}
