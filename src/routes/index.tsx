import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Snowflake, Sun, ShieldCheck, Hand, Car, Layers, Briefcase, Dumbbell, Plane, GraduationCap, Home, Trees, ChevronDown, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo-mr-garrafas.png";
import hero from "@/assets/copo_6246.jpeg.asset.json";
import info from "@/assets/copo_6247.jpeg.asset.json";
import leak from "@/assets/copo_6249.jpeg.asset.json";
import creme from "@/assets/copo_6253.jpeg.asset.json";
import azul from "@/assets/copo_6255.jpeg.asset.json";
import g1 from "@/assets/copo_6248.jpeg.asset.json";
import g2 from "@/assets/copo_6251.jpeg.asset.json";
import g3 from "@/assets/copo_6252.jpeg.asset.json";
import g4 from "@/assets/copo_6254.jpeg.asset.json";
import { AFFILIATE_LINKS } from "@/config/links";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mr Garrafas Térmica — Copos térmicos com estilo" },
      { name: "description", content: "Copo térmico Romantic Crown 1200ml: 30h frio, 8h quente, à prova de vazamentos. Veja os modelos na Shopee." },
      { property: "og:title", content: "Mr Garrafas Térmica — Copos térmicos com estilo" },
      { property: "og:description", content: "Praticidade e estilo para acompanhar você todos os dias. Confira os modelos na Shopee." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const benefits = [
  { icon: Snowflake, t: "Conservação da temperatura", d: "Bebidas quentes ou frias por mais tempo, conforme cada modelo." },
  { icon: Briefcase, t: "Praticidade", d: "Ideal para trabalho, academia, faculdade e viagens." },
  { icon: Layers, t: "Design moderno", d: "Modelos bonitos e elegantes." },
  { icon: ShoppingBag, t: "Variedade", d: "Diferentes cores, tamanhos e estilos." },
  { icon: Hand, t: "Fácil de levar", d: "Opções com alça, tampa e canudo." },
];

const specs = [
  { icon: Snowflake, t: "30h frio" },
  { icon: Sun, t: "8h quente" },
  { icon: ShieldCheck, t: "À prova de vazamento" },
  { icon: Layers, t: "Parede dupla" },
  { icon: Hand, t: "Alça ergonômica" },
  { icon: Car, t: "Cabe no porta-copos" },
];

const moments = [
  { icon: Briefcase, t: "No trabalho" }, { icon: Dumbbell, t: "Na academia" }, { icon: Plane, t: "Em viagens" },
  { icon: GraduationCap, t: "Na faculdade" }, { icon: Home, t: "Em casa" }, { icon: Trees, t: "Em passeios" },
];

const faq = [
  ["Onde posso comprar os produtos?", "Você pode conferir os modelos e realizar sua compra diretamente pela Shopee."],
  ["Existem diferentes cores?", "Consulte as opções de cores disponíveis na página de cada produto."],
  ["Como saber as características de cada modelo?", "Clique em ver produto para conferir as informações completas disponibilizadas pelo vendedor."],
  ["Como finalizar minha compra?", "Basta acessar o produto na Shopee e seguir as instruções da plataforma."],
];

function BuyButton({ href, label = "VER NA SHOPEE" }: { href: string; label?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer sponsored" className="btn-gold flex w-full items-center justify-center gap-2 px-6 py-4 text-base">
      <ShoppingBag className="h-5 w-5" /> {label}
    </a>
  );
}

function Index() {
  const gallery = [hero, info, leak, creme, azul, g1, g2, g3, g4];
  const [img, setImg] = useState(0);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <img src={logo} alt="Mr Garrafas Térmica" width={1536} height={512} className="h-12 w-auto" />
          <a href="#produtos" className="btn-gold px-4 py-2 text-xs">VER MODELOS</a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Copos térmicos premium</span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              Mais praticidade e <span className="text-gold-gradient">estilo</span> para acompanhar você todos os dias!
            </h1>
            <p className="mt-4 text-ink-foreground/75">Descubra copos e garrafas térmicas que combinam com sua rotina. Escolha seu modelo favorito e aproveite!</p>
            <div className="mt-6"><a href="#produtos" className="btn-gold flex w-full items-center justify-center px-6 py-4 md:w-auto md:inline-flex">CONFERIR MODELOS</a></div>
            <p className="mt-3 text-sm text-ink-foreground/60">● 7 cores disponíveis · 1200ml</p>
          </div>
          <img src={hero.url} alt="Copos térmicos Romantic Crown em 7 cores" className="w-full rounded-3xl shadow-card" />
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold md:text-4xl">Por que escolher um copo térmico?</h2>
        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-5">
          {benefits.map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="grid h-11 w-11 place-items-center rounded-full bg-ink text-gold"><b.icon className="h-5 w-5" /></div>
              <h3 className="mt-3 text-sm font-bold">{b.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product */}
      <section id="produtos" className="scroll-mt-20 bg-muted py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl font-extrabold md:text-4xl">Encontre seu modelo favorito!</h2>
          <article className="mt-8 grid gap-6 rounded-3xl bg-card p-4 shadow-card md:grid-cols-2 md:p-8">
            <div>
              <img src={gallery[img].url} alt="Copo Térmico Romantic Crown" className="aspect-square w-full rounded-2xl object-cover" />
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {gallery.map((g, i) => (
                  <button key={i} onClick={() => setImg(i)} className={`h-16 w-16 shrink-0 overflow-hidden rounded-xl border-2 ${i === img ? "border-gold" : "border-transparent"}`}>
                    <img src={g.url} alt="" loading="lazy" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="w-fit rounded-full bg-ink px-3 py-1 text-xs font-bold text-gold">MAIS ESCOLHIDO</span>
              <h3 className="mt-3 text-2xl font-extrabold">Copo Térmico Romantic Crown 1200ml</h3>
              <p className="mt-2 text-muted-foreground">Design elegante em 7 cores, com alça, tampa e canudo de aço inoxidável. Perfeito para levar sua bebida para qualquer lugar.</p>
              <ul className="mt-5 grid grid-cols-2 gap-2">
                {specs.map((s) => (
                  <li key={s.t} className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-sm font-semibold"><s.icon className="h-4 w-4 text-gold" /> {s.t}</li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-border p-4 text-sm">
                <p className="font-bold">Na embalagem:</p>
                <p className="mt-1 text-muted-foreground">Copo 1200ml · Tampa · Canudo de aço inox · Silicone para canudo · Escova</p>
              </div>
              <div className="mt-6"><BuyButton href={AFFILIATE_LINKS.romanticCrown} /></div>
            </div>
          </article>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold md:text-4xl">Seu companheiro para todos os momentos!</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 md:items-center">
          <img src={leak.url} alt="Copo térmico à prova de vazamentos" loading="lazy" className="w-full rounded-3xl shadow-card" />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {moments.map((m) => (
              <div key={m.t} className="flex flex-col items-center gap-2 rounded-2xl bg-ink p-5 text-center text-ink-foreground">
                <m.icon className="h-7 w-7 text-gold" /><span className="text-sm font-semibold">{m.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      <section className="bg-ink px-4 py-16 text-center text-ink-foreground">
        <h2 className="mx-auto max-w-2xl text-2xl font-extrabold md:text-4xl">Praticidade que faz a <span className="text-gold-gradient">diferença</span> na sua rotina!</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink-foreground/75">Escolha um modelo que combina com você e tenha mais praticidade para aproveitar suas bebidas favoritas onde estiver.</p>
        <a href="#produtos" className="btn-gold mx-auto mt-7 flex max-w-sm items-center justify-center px-6 py-4">ESCOLHER MEU COPO</a>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-14">
        <h2 className="text-center text-2xl font-extrabold md:text-4xl">Perguntas frequentes</h2>
        <div className="mt-8 space-y-3">
          {faq.map(([q, a], i) => (
            <div key={q} className="rounded-2xl border border-border bg-card">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-4 text-left font-bold">
                {q}<ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && <p className="px-4 pb-4 text-sm text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
        <div className="mt-8"><BuyButton href={AFFILIATE_LINKS.romanticCrown} label="QUERO O MEU NA SHOPEE" /></div>
      </section>

      <footer className="bg-ink px-4 py-10 text-center text-xs text-ink-foreground/60">
        <p className="mx-auto max-w-2xl">Os produtos apresentados são comercializados na Shopee. Ao clicar nos links de compra, você será direcionado para a plataforma.</p>
        <p className="mx-auto mt-3 max-w-2xl">Esta página participa de programas de afiliados. Podemos receber uma comissão por compras realizadas através dos nossos links, sem custo adicional para você.</p>
        <p className="mt-4 text-gold">© Mr Garrafas Térmica</p>
      </footer>
    </div>
  );
}
