import { useAuth } from "@/_core/hooks/useAuth";
import DashboardLayout from "@/components/DashboardLayout";
import { trpc } from "@/lib/trpc";
import { AlertCircle, CalendarDays, CheckCircle2, Clock3, Loader2, LockKeyhole, Plus, UserRound } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const dateLabel = (value: Date) => new Intl.DateTimeFormat("pt-BR", { weekday: "short", day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }).format(new Date(value));

const statusStyle = {
  available: "bg-[#DCE6D8] text-[#1F4D3A]",
  booked: "bg-[#E6D400] text-[#1F4D3A]",
  blocked: "bg-[#E7E4DD] text-[#645B51]",
  completed: "bg-[#1F4D3A] text-[#F8F4E8]",
} as const;

const statusLabel = { available: "Disponível", booked: "Reservada", blocked: "Bloqueada", completed: "Concluída" } as const;

export default function AdminSchedule() {
  const { user, loading, isAuthenticated } = useAuth();
  const utils = trpc.useUtils();
  const [startsAt, setStartsAt] = useState("");
  const [duration, setDuration] = useState("60");
  const [notes, setNotes] = useState("");
  const isAdmin = user?.role === "admin";
  const agenda = trpc.schedule.adminAgenda.useQuery(undefined, { enabled: isAuthenticated && isAdmin });
  const createSlot = trpc.schedule.createSlot.useMutation({
    onSuccess: () => {
      toast.success("Horário publicado na agenda.");
      setStartsAt("");
      setNotes("");
      void utils.schedule.adminAgenda.invalidate();
      void utils.schedule.available.invalidate();
    },
    onError: error => toast.error(error.message || "Não foi possível criar este horário."),
  });
  const setStatus = trpc.schedule.setSlotStatus.useMutation({
    onSuccess: () => { toast.success("Status da aula atualizado."); void utils.schedule.adminAgenda.invalidate(); void utils.schedule.available.invalidate(); },
    onError: error => toast.error(error.message || "Não foi possível atualizar este status."),
  });

  function submitSlot(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!startsAt) { toast.error("Escolha data e horário antes de publicar."); return; }
    const parsedDate = new Date(startsAt);
    if (Number.isNaN(parsedDate.valueOf()) || parsedDate <= new Date()) { toast.error("Escolha um horário futuro."); return; }
    createSlot.mutate({ startsAt: parsedDate, durationMinutes: Number(duration), notes: notes.trim() || undefined });
  }

  return <DashboardLayout><div className="mx-auto max-w-6xl space-y-8 p-2 sm:p-5"><section className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Painel do professor</p><h1 className="font-editorial mt-4 text-5xl leading-none text-[#1F4D3A]">Agenda de Douglas</h1><p className="mt-3 max-w-xl text-sm leading-6 text-[#557060]">Publique horários, acompanhe as reservas e encerre aulas concluídas.</p></div><div className="rounded-2xl bg-[#E6D400] px-5 py-4 text-[#1F4D3A]"><p className="text-xs font-bold uppercase tracking-[.13em]">Próximos horários</p><p className="font-editorial mt-1 text-3xl">{agenda.data?.filter(item => item.status === "available").length ?? 0}</p></div></section>

    {loading ? <div className="grid min-h-60 place-items-center"><Loader2 className="animate-spin text-[#1F4D3A]" /></div> : !isAdmin ? <section className="rounded-[2rem] border border-[#D7DDCF] bg-[#FFFDF6] p-10 text-center"><LockKeyhole className="mx-auto text-[#1F4D3A]" size={32}/><h2 className="font-editorial mt-5 text-4xl text-[#1F4D3A]">Área exclusiva do professor.</h2><p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#557060]">Entre com a conta administrativa de Douglas para publicar e acompanhar os horários.</p></section> : <><section className="rounded-[2rem] border border-[#D7DDCF] bg-[#FFFDF6] p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#DCE6D8] text-[#1F4D3A]"><Plus size={20}/></span><div><h2 className="font-editorial text-3xl text-[#1F4D3A]">Abrir um horário</h2><p className="text-sm text-[#557060]">Este horário será disponibilizado para reserva na página dos alunos.</p></div></div><form onSubmit={submitSlot} className="mt-7 grid gap-4 md:grid-cols-[1.2fr_.55fr_1.1fr_auto]"><label className="text-sm font-semibold text-[#1F4D3A]"><span className="mb-2 block">Data e horário</span><input aria-label="Data e horário" type="datetime-local" value={startsAt} onChange={event => setStartsAt(event.target.value)} className="h-11 w-full rounded-xl border border-[#D7DDCF] bg-[#F8F4E8] px-3 text-sm outline-none ring-[#1F4D3A] focus:ring-2" /></label><label className="text-sm font-semibold text-[#1F4D3A]"><span className="mb-2 block">Duração</span><select value={duration} onChange={event => setDuration(event.target.value)} className="h-11 w-full rounded-xl border border-[#D7DDCF] bg-[#F8F4E8] px-3 text-sm outline-none focus:ring-2 focus:ring-[#1F4D3A]"><option value="30">30 min</option><option value="45">45 min</option><option value="60">60 min</option><option value="90">90 min</option></select></label><label className="text-sm font-semibold text-[#1F4D3A]"><span className="mb-2 block">Nota opcional</span><input value={notes} onChange={event => setNotes(event.target.value)} placeholder="Ex.: Aula de conversação" className="h-11 w-full rounded-xl border border-[#D7DDCF] bg-[#F8F4E8] px-3 text-sm outline-none focus:ring-2 focus:ring-[#1F4D3A]" /></label><button disabled={createSlot.isPending} className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1F4D3A] px-5 text-sm font-bold text-[#F8F4E8] transition hover:bg-[#2E5E4E] disabled:opacity-50"><Plus size={16}/>{createSlot.isPending ? "Publicando" : "Publicar"}</button></form></section>

    <section><div className="mb-5 flex items-center justify-between"><div><h2 className="font-editorial text-4xl text-[#1F4D3A]">Agenda completa</h2><p className="mt-1 text-sm text-[#557060]">Todos os horários publicados, com aluno e status atual.</p></div></div>{agenda.isLoading ? <div className="grid min-h-48 place-items-center rounded-3xl bg-[#FFFDF6]"><Loader2 className="animate-spin text-[#1F4D3A]"/></div> : agenda.error ? <div className="rounded-3xl bg-red-50 p-6 text-red-800"><AlertCircle className="inline mr-2" size={17}/>Não foi possível carregar a agenda.</div> : !agenda.data?.length ? <div className="rounded-[2rem] border border-dashed border-[#A8B89F] bg-[#FFFDF6] p-12 text-center"><CalendarDays className="mx-auto text-[#1F4D3A]" size={32}/><h3 className="font-editorial mt-5 text-3xl text-[#1F4D3A]">A agenda começa com o primeiro horário.</h3><p className="mt-3 text-sm text-[#557060]">Use o formulário acima para publicar disponibilidade para seus alunos.</p></div> : <div className="overflow-hidden rounded-[1.5rem] border border-[#D7DDCF] bg-[#FFFDF6]"><div className="hidden grid-cols-[1.2fr_.85fr_1fr_.72fr] gap-4 border-b border-[#D7DDCF] bg-[#EEF1E8] px-6 py-4 text-xs font-bold uppercase tracking-[.12em] text-[#557060] md:grid"><span>Horário</span><span>Status</span><span>Aluno</span><span>Ação</span></div>{agenda.data.map(item => <div key={item.slotId} className="grid gap-3 border-b border-[#E6EADD] px-6 py-5 last:border-0 md:grid-cols-[1.2fr_.85fr_1fr_.72fr] md:items-center"><div className="flex items-center gap-3"><Clock3 size={17} className="text-[#1F4D3A]"/><div><p className="text-sm font-semibold capitalize text-[#1F4D3A]">{dateLabel(item.startsAt)}</p><p className="mt-1 text-xs text-[#557060]">{item.durationMinutes} min{item.notes ? ` · ${item.notes}` : ""}</p></div></div><span className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${statusStyle[item.status]}`}>{statusLabel[item.status]}</span><div className="flex items-center gap-2 text-sm text-[#557060]">{item.studentName ? <><UserRound size={15} className="text-[#1F4D3A]"/><span>{item.studentName}</span></> : <span>—</span>}</div><div>{item.status === "available" && <button onClick={() => setStatus.mutate({ slotId: item.slotId, status: "blocked" })} className="rounded-full border border-[#7A8660] px-3 py-2 text-xs font-bold text-[#557060]">Bloquear</button>}{item.status === "blocked" && <button onClick={() => setStatus.mutate({ slotId: item.slotId, status: "available" })} className="rounded-full border border-[#1F4D3A] px-3 py-2 text-xs font-bold text-[#1F4D3A]">Liberar</button>}{item.status === "booked" && <button onClick={() => setStatus.mutate({ slotId: item.slotId, status: "completed" })} className="inline-flex items-center gap-1 rounded-full bg-[#1F4D3A] px-3 py-2 text-xs font-bold text-[#F8F4E8]"><CheckCircle2 size={14}/>Concluir</button>}{item.status === "completed" && <span className="text-xs font-semibold text-[#557060]">Encerrada</span>}</div></div>)}</div>}</section></>}</div></DashboardLayout>;
}
