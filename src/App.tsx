import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, ArrowRight, CheckCircle2, Star, BarChart2, Globe, DollarSign, PieChart, ShieldCheck, Zap, Play, AlertTriangle, Target, Brain, TrendingDown, Clock } from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

const fw = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── NAVBAR ─────────────────────────────── */
function Navbar() {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const fn = () => setBg(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 80, background: bg ? 'rgba(8,12,8,0.96)' : 'transparent', backdropFilter: bg ? 'blur(20px)' : 'none', borderBottom: bg ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'all 0.3s' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', maxWidth: 1200, margin: '0 auto', height: '100%' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={LOGO_URL} alt="Invista+ Capital Club" style={{ height: 90, objectFit: 'contain', marginTop: 8 }}
            onError={(e: any) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex'; }} />
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 34, height: 34, background: '#00ff7f', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={18} color="#000" strokeWidth={3} />
            </div>
            <span style={{ fontWeight: 800, fontSize: 18, color: '#fff', letterSpacing: '-0.03em' }}>Invista<span style={{ color: '#00ff7f' }}>+</span></span>
          </div>
        </a>
        <nav className="nav-links" style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {[['#conteudo','Conteúdo'],['#como-funciona','Como funciona'],['#precos','Planos']].map(([h,l],i) => (
            <a key={i} href={h} style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>{l}</a>
          ))}
        </nav>
        <a href={CHECKOUT_URL} style={{ background: '#00ff7f', color: '#000', fontSize: 13, fontWeight: 800, padding: '11px 22px', borderRadius: 10, textDecoration: 'none', letterSpacing: '0.04em', whiteSpace: 'nowrap', boxShadow: '0 0 20px rgba(0,255,127,0.25)' }}>
          ENTRAR PARA O CLUB
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ───────────────────────────────── */
function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '160px 24px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 500, background: 'rgba(0,255,127,0.055)', borderRadius: '50%', filter: 'blur(130px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'linear-gradient(rgba(0,255,127,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,127,1) 1px,transparent 1px)', backgroundSize: '64px 64px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 820, position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div {...fw(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(0,255,127,0.3)', background: 'rgba(0,255,127,0.07)', padding: '7px 18px', borderRadius: 99, fontSize: 11, fontWeight: 700, color: '#00ff7f', marginBottom: 32, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span className="blk" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff7f', flexShrink: 0 }} />
          +1.200 membros ativos construindo patrimônio com o Club
        </motion.div>

        <motion.h1 {...fw(0.07)} style={{ fontSize: 'clamp(32px,6vw,64px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 22 }}>
          Construa uma{' '}
          <span style={{ color: '#00ff7f', fontStyle: 'italic' }}>carteira que realmente dá resultado.</span>
          <br />
        </motion.h1>

        <motion.p {...fw(0.13)} style={{ fontSize: 'clamp(15px,2.5vw,18px)', color: 'rgba(255,255,255,0.5)', maxWidth: 540, margin: '0 auto 36px', lineHeight: 1.75, fontWeight: 400 }}>
          Descubra exatamente onde alocar seu dinheiro e construa patrimônio com segurança, método e resultado comprovado.
        </motion.p>

        <motion.div {...fw(0.18)} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#00ff7f', color: '#000', fontWeight: 800, fontSize: 14, padding: '15px 28px', borderRadius: 12, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 0 32px rgba(0,255,127,0.3)', width: '100%', maxWidth: 340 }}>
            QUERO COMEÇAR A INVESTIR <ArrowRight size={17} strokeWidth={2.5} />
          </a>
          <a href="#conteudo" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'rgba(255,255,255,0.5)', fontWeight: 500, fontSize: 14, padding: '15px 24px', borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.12)', width: '100%', maxWidth: 340 }}>
            <Play size={15} /> Ver o que está incluso
          </a>
        </motion.div>

        <motion.div {...fw(0.22)} style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 52 }}>
          {([['Garantia de 7 dias', ShieldCheck], ['Acesso imediato', Zap], ['Cancele quando quiser', CheckCircle2]] as const).map(([text, Icon], i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'rgba(255,255,255,0.28)', fontWeight: 500 }}>
              <Icon size={14} color="rgba(0,255,127,0.6)" /> {text}
            </span>
          ))}
        </motion.div>

        {/* Mockup */}
        <motion.div className="mockup-hide"
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          style={{ width: '100%', maxWidth: 880, margin: '0 auto', borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: '#0d120d', overflow: 'hidden', boxShadow: '0 48px 96px rgba(0,0,0,0.65)' }}>
          <div style={{ height: 38, background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 6 }}>
            {['rgba(255,80,80,0.6)','rgba(255,200,0,0.6)','rgba(0,255,127,0.6)'].map((c,i) => <div key={i} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />)}
            <div style={{ flex: 1, margin: '0 14px', height: 22, background: 'rgba(255,255,255,0.05)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>app.invistacapital.com.br/dashboard</span>
            </div>
          </div>
          <div style={{ padding: 20, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {[{l:'Rentabilidade',v:'+24.8%',c:'#00ff7f',s:'últimos 12 meses'},{l:'Dividend Yield',v:'8.4%',c:'#00ff7f',s:'carteira atual'},{l:'Patrimônio',v:'R$48.3k',c:'#fff',s:'+12% no mês'},{l:'Próx. aporte',v:'IPCA+',c:'#fff',s:'Tesouro Direto'}].map((k,i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px 14px' }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6, fontWeight: 600 }}>{k.l}</span>
                <div style={{ fontSize: 22, fontWeight: 800, color: k.c, lineHeight: 1, letterSpacing: '-0.02em' }}>{k.v}</div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.22)', marginTop: 4, display: 'block' }}>{k.s}</span>
              </div>
            ))}
            <div style={{ gridColumn: 'span 3', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Performance</span>
                <span style={{ fontSize: 10, color: '#00ff7f', fontWeight: 700 }}>12 meses</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 68 }}>
                {[28,35,42,38,55,48,68,62,75,70,88,100].map((h,i) => (
                  <motion.div key={i} style={{ flex: 1, borderRadius: '3px 3px 0 0', background: 'linear-gradient(to top,rgba(0,255,127,0.12),rgba(0,255,127,0.45))', borderTop: '2px solid rgba(0,255,127,0.6)' }}
                    initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.7, delay: 0.5 + i * 0.04 }} />
                ))}
              </div>
              <div style={{ display: 'flex', marginTop: 6 }}>
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m,i) => (
                  <span key={i} style={{ flex: 1, textAlign: 'center', fontSize: 8, color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>{m}</span>
                ))}
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 10, padding: '12px 14px' }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 12, fontWeight: 600 }}>Top picks</span>
              {[['PETR4','+18%'],['HGLG11','+12%'],['BTC','+31%']].map(([t,v],i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '-0.01em' }}>{t}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── TICKER ─────────────────────────────── */
function Ticker() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Evita duplicar script
    if (containerRef.current.childElementCount > 0) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "FX_IDC:USDBRL", title: "Dólar" },
        { proName: "BINANCE:BTCUSDT", title: "Bitcoin" },
        { proName: "BMFBOVESPA:IFIX", title: "IFIX" },
        { proName: "BMFBOVESPA:MGLU3", title: "MGLU3" },
        { proName: "BMFBOVESPA:PETR4", title: "PETR4" },
        { proName: "BMFBOVESPA:VALE3", title: "VALE3" },
        { proName: "BMFBOVESPA:ITUB4", title: "ITUB4" },
        { proName: "BMFBOVESPA:ABEV3", title: "ABEV3" },
        { proName: "BMFBOVESPA:IBOV", title: "IBOVESPA" },
        { proName: "BMFBOVESPA:GGBR4", title: "GGBR4" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "br"
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 80,
        left: 0,
        width: "100%",
        zIndex: 40,
        height: 46, // 👈 evita layout jumping
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        background:
          "linear-gradient(180deg, rgba(8,12,8,0.98), rgba(8,12,8,0.92))",
        backdropFilter: "blur(8px)"
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
}
/* ─── PAIN POINTS ────────────────────────── */
function PainPoints() {
  const pains: [any, string][] = [
    [TrendingDown,'Não sabe onde investir com segurança hoje'],
    [AlertTriangle,'Tem medo de perder o dinheiro que juntou'],
    [Target,'Já tentou investir mas não viu resultado real'],
    [Brain,'Fica paralisado com excesso de informação'],
    [Clock,'Não tem tempo para pesquisar ativos sozinho'],
    [TrendingDown,'Está perdendo para a inflação sem perceber'],
  ];
  return (
    <section style={{ padding: '80px 24px' }}>
      <div className="grid-2col" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 18 }}>Você se identifica?</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, lineHeight: 1.12, marginBottom: 18, letterSpacing: '-0.03em' }}>
            Se você está perdido perdido sem saber onde investir e está com medo de errar, você não está sozinho.<br /><span style={{ color: 'rgba(255,255,255,0.22)' }}></span>
          </motion.h2>
          <motion.p {...fw(0.1)} style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, marginBottom: 28, fontWeight: 400 }}>
            95% dos brasileiros perdem para a inflação por falta de método. A solução não é trabalhar mais — é investir certo.
          </motion.p>
          <motion.a {...fw(0.13)} href="#conteudo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#00ff7f', fontWeight: 700, fontSize: 14, border: '1px solid rgba(0,255,127,0.3)', padding: '11px 22px', borderRadius: 10, textDecoration: 'none', letterSpacing: '0.02em' }}>
            Ver a solução <ArrowRight size={15} />
          </motion.a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pains.map(([Icon, text], i) => (
            <motion.div key={i} {...fw(0.05 + i * 0.05)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderRadius: 14, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div style={{ width: 34, height: 34, borderRadius: 9, background: 'rgba(220,50,50,0.1)', border: '1px solid rgba(220,50,50,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} color="#f87171" />
              </div>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ───────────────────────── */
function HowItWorks() {
  const steps = [
    ['01','Acesse o Club','Em segundos você já tem acesso a todo o conteúdo, comunidade e carteiras recomendadas.'],
    ['02','Siga o método','Módulos organizados do básico ao avançado. Sem enrolação, direto ao ponto.'],
    ['03','Monte sua carteira','Use as carteiras recomendadas ou personalize com base nos seus objetivos.'],
    ['04','Acompanhe e evolua','Relatórios semanais, análises e suporte da comunidade para te manter no rumo.'],
  ];
  return (
    <section id="como-funciona" style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 14 }}>Como funciona</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Simples do início ao fim.</motion.h2>
        </div>
        <div className="grid-4col" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28, position: 'relative' }}>
          <div className="connector-line" style={{ position: 'absolute', top: 27, left: '12%', right: '12%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,255,127,0.25),transparent)' }} />
          {steps.map(([n,title,desc], i) => (
            <motion.div key={i} {...fw(0.07 * i)} style={{ textAlign: 'center' }}>
              <div style={{ width: 54, height: 54, borderRadius: 16, border: '1px solid rgba(0,255,127,0.35)', background: 'rgba(0,255,127,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: '#00ff7f', letterSpacing: '-0.02em' }}>{n}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, letterSpacing: '-0.01em' }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, fontWeight: 400 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTENT GRID ───────────────────────── */
const MODS = [
  { img: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&q=80', Icon: BarChart2,   title: 'Fundamentos da Renda Fixa',   desc: 'Aprenda a investir com segurança nos melhores ativos de renda fixa.' },
  { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', Icon: TrendingDown, title: 'Dominando Ações e FIIs',        desc: 'Estratégias para investir em ações e FIIs com confiança.' },
  { img: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80', Icon: PieChart,     title: 'Ciclos de Mercado e Macro',    desc: 'Entenda os ciclos econômicos e fatores que movem os mercados.' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', Icon: Globe,        title: 'Investimentos no Exterior',    desc: 'Diversifique no exterior e proteja seu patrimônio.' },
  { img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80',   Icon: DollarSign,   title: 'Poder dos Dividendos',         desc: 'Construa renda passiva com ações pagadoras de dividendos.' },
];

function ContentGrid() {
  return (
    <section id="conteudo" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 44, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>Conteúdo exclusivo</motion.span>
            <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(24px,3.5vw,40px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              O que tem no <em style={{ color: '#00ff7f' }}>club</em>
            </motion.h2>
            <motion.p {...fw(0.1)} style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 12, maxWidth: 420, lineHeight: 1.7, fontWeight: 400 }}>
              Tudo o que você precisa para investir com segurança, clareza e consistência.
            </motion.p>
          </div>
          <motion.div {...fw(0.1)}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(0,255,127,0.35)', color: '#00ff7f', fontSize: 11, fontWeight: 700, padding: '9px 18px', borderRadius: 10, background: 'rgba(0,255,127,0.06)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              <span className="blk" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff7f' }} /> Acesso Total
            </span>
          </motion.div>
        </div>
        <div className="grid-mods" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 16, marginBottom: 40 }}>
          {MODS.map(({ img, Icon, title, desc }, i) => (
            <motion.div key={i} {...fw(0.05 * i)}
              style={{ borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: '#0d120d', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s' }}
              whileHover={{ y: -7, borderColor: 'rgba(0,255,127,0.35)', boxShadow: '0 20px 48px rgba(0,0,0,0.45)' }}>
              <div style={{ position: 'relative', height: 155, overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.58, transition: 'transform 0.5s', display: 'block' }}
                  onError={(e: any) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'; }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d120d 10%,transparent)' }} />
                <div style={{ position: 'absolute', bottom: 12, left: 12, width: 38, height: 38, background: '#00ff7f', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,255,127,0.45)' }}>
                  <Icon size={18} color="#000" strokeWidth={2.5} />
                </div>
              </div>
              <div style={{ padding: '14px 16px 18px' }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, marginBottom: 7, lineHeight: 1.35, letterSpacing: '-0.01em' }}>{title}</h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.55, fontWeight: 400 }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fw(0.25)} style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#00ff7f', color: '#000', fontWeight: 800, fontSize: 13, padding: '15px 32px', borderRadius: 14, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 0 28px rgba(0,255,127,0.22)', width: '100%', maxWidth: 500 }}>
            QUERO ENTRAR PARA O INVISTA+ CAPITAL CLUB <ArrowRight size={17} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── COUNTER ────────────────────────────── */
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as any, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const inc = to / 52;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 18);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString('pt-BR')}{suffix}</span>;
}

/* ─── STATS ──────────────────────────────── */
function Stats() {
  const items = [
    { to: 1200, suffix: '+',     label: 'membros ativos\nna comunidade' },
    { to: 24,   suffix: '%+',    label: 'de rentabilidade\nmédia da carteira' },
    { to: 48,   suffix: '★',     label: 'avaliação média\ndos membros' },
    { to: 7,    suffix: ' dias', label: 'de garantia total\nsem perguntas' },
  ];
  return (
    <section style={{ padding: '56px 24px', background: 'rgba(0,255,127,0.025)', borderTop: '1px solid rgba(0,255,127,0.08)', borderBottom: '1px solid rgba(0,255,127,0.08)' }}>
      <div className="grid-stats" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {items.map(({ to, suffix, label }, i) => (
          <motion.div key={i} {...fw(0.06 * i)} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(28px,4vw,40px)', fontWeight: 800, color: '#00ff7f', lineHeight: 1, marginBottom: 10, letterSpacing: '-0.03em' }}>
              <Counter to={to} suffix={suffix} />
            </div>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, whiteSpace: 'pre-line', fontWeight: 400 }}>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ───────────────────────── */
function Testimonials() {
  const list = [
    { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80', name: 'Carlos Mendes', role: 'Empresário', text: 'Antes eu não sabia por onde começar. Hoje invisto com método e segurança todos os meses.' },
    { photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80', name: 'Marina Silva',  role: 'Médica',     text: 'As carteiras recomendadas me deram uma clareza que não tive em 5 anos de banco.' },
    { photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80', name: 'João Pedro',    role: 'Engenheiro', text: 'O melhor investimento do último ano foi o acesso ao Club. Resultado real, sem enrolação.' },
  ];
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 14 }}>Prova real</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Quem está dentro fala por si.</motion.h2>
        </div>
        <div className="grid-testi" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {list.map((t, i) => (
            <motion.div key={i} {...fw(0.07 * i)} style={{ borderRadius: 18, border: '1px solid rgba(255,255,255,0.08)', background: '#0d120d', padding: '28px 26px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {[0,1,2,3,4].map(j => <Star key={j} size={14} fill="#00ff7f" color="#00ff7f" />)}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, flex: 1, marginBottom: 22, fontStyle: 'italic', fontWeight: 400 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={t.photo} alt={t.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,255,127,0.35)' }} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(0,255,127,0.55)', marginTop: 2, fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRICING ────────────────────────────── */
function Pricing() {
  const benefits = ['Todos os módulos de investimento','Carteiras recomendadas atualizadas','Análises semanais de mercado','Comunidade exclusiva de membros','Planilha de controle financeiro','Suporte com especialistas','Acesso pelo app mobile','Novos conteúdos toda semana'];
  return (
    <section id="precos" style={{ padding: '80px 24px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 480, margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 14 }}>Planos</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(22px,3.5vw,34px)', fontWeight: 800, letterSpacing: '-0.03em' }}>Simples. Sem surpresas.</motion.h2>
        </div>
        <motion.div {...fw(0.1)} style={{ position: 'relative', borderRadius: 24, border: '1px solid rgba(0,255,127,0.22)', background: '#0d120d', padding: '40px 28px 32px', boxShadow: '0 0 64px rgba(0,255,127,0.07)' }}>
          <div style={{ position: 'absolute', top: -15, left: '50%', transform: 'translateX(-50%)', background: '#00ff7f', color: '#000', fontSize: 11, fontWeight: 800, padding: '6px 22px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>OFERTA EXCLUSIVA</div>
          <div style={{ textAlign: 'center', marginBottom: 30 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.32)', marginBottom: 14, fontWeight: 500 }}>Invista+ Capital Club — Mensal</p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
              <span style={{ fontSize: 17, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>R$</span>
              <span style={{ fontSize: 56, fontWeight: 800, color: '#00ff7f', lineHeight: 1, letterSpacing: '-0.04em' }}>47</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: '#00ff7f', letterSpacing: '-0.02em' }}>,90</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', fontWeight: 500 }}>/mês</span>
              </div>
            </div>
            <p style={{ fontSize: 10, color: 'rgba(0,255,127,0.55)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginTop: 10 }}>ACESSO TOTAL E IMEDIATO</p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '22px 0', marginBottom: 26, display: 'flex', flexDirection: 'column', gap: 13 }}>
            {benefits.map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <CheckCircle2 size={15} color="#00ff7f" strokeWidth={2.5} />
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
          <a href={CHECKOUT_URL} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', background: '#00ff7f', color: '#000', fontWeight: 800, fontSize: 14, padding: '16px', borderRadius: 14, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 0 28px rgba(0,255,127,0.25)', marginBottom: 16 }}>
            QUERO ENTRAR AGORA <ArrowRight size={18} strokeWidth={2.5} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, fontSize: 12, color: 'rgba(255,255,255,0.25)', fontWeight: 500 }}>
            <ShieldCheck size={13} color="rgba(0,255,127,0.4)" /> Garantia de 7 dias · Cancele quando quiser
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ──────────────────────────── */
function FinalCTA() {
  return (
    <section style={{ padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 650, height: 380, background: 'rgba(0,255,127,0.05)', borderRadius: '50%', filter: 'blur(110px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
        <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 22 }}>Última chamada</motion.span>
        <motion.h2 {...fw(0.06)} style={{ fontSize: 'clamp(26px,5vw,44px)', fontWeight: 800, lineHeight: 1.07, letterSpacing: '-0.03em', marginBottom: 18 }}>
          Você pode continuar perdido...<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>ou começar hoje.</span>
        </motion.h2>
        <motion.p {...fw(0.1)} style={{ fontSize: 16, color: 'rgba(255,255,255,0.42)', marginBottom: 36, lineHeight: 1.7, fontWeight: 400 }}>
          Cada dia sem método é um passo mais longe da sua liberdade financeira.
        </motion.p>
        <motion.a {...fw(0.14)} href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#00ff7f', color: '#000', fontWeight: 800, fontSize: 14, padding: '17px 32px', borderRadius: 14, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 0 44px rgba(0,255,127,0.28)', width: '100%', maxWidth: 500 }}>
          QUERO ENTRAR PARA O INVISTA+ CAPITAL CLUB <ArrowRight size={18} strokeWidth={2.5} />
        </motion.a>
        <motion.p {...fw(0.18)} style={{ marginTop: 18, fontSize: 12, color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
          Garantia de 7 dias · Sem fidelidade · Cancele quando quiser
        </motion.p>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '44px 24px', background: '#060906' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={LOGO_URL} alt="Invista+ Capital Club" style={{ height: 72, objectFit: 'contain' }}
              onError={(e: any) => { e.currentTarget.style.display='none'; (e.currentTarget.nextSibling as HTMLElement).style.display='flex'; }} />
            <div style={{ display: 'none', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 30, height: 30, background: '#00ff7f', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={15} color="#000" strokeWidth={3} />
              </div>
              <span style={{ fontWeight: 800, fontSize: 16, color: '#fff', letterSpacing: '-0.03em' }}>Invista<span style={{ color: '#00ff7f' }}>+</span></span>
            </div>
          </a>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {[['#conteudo','Conteúdo'],['#como-funciona','Como funciona'],['#precos','Planos']].map(([h,l],i) => (
              <a key={i} href={h} style={{ fontSize: 12, color: 'rgba(255,255,255,0.28)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', fontWeight: 400 }}>© 2026 Invista+ Capital Club. Todos os direitos reservados.</span>
          <span style={{ fontSize: 11, color: 'rgba(255,80,80,0.75)', fontStyle: 'italic', padding: '5px 13px', borderRadius: 7, border: '1px solid rgba(255,80,80,0.2)', background: 'rgba(255,80,80,0.06)', fontWeight: 500 }}>
            ⚠️ Investimentos envolvem risco. Resultados passados não garantem retornos futuros.
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ─── APP ROOT ───────────────────────────── */
export default function App() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif", background: '#080c08', color: '#fff', overflowX: 'hidden', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700;1,800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: #080c08; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #00ff7f44; border-radius: 4px; }
       @keyframes mq {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
       
        @keyframes blk { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
        
        .run {animation: mq 18s linear infinite; }
        .blk { animation: blk 2s ease-in-out infinite; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .grid-2col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .grid-4col { grid-template-columns: repeat(2,1fr) !important; }
          .connector-line { display: none !important; }
          .grid-mods { grid-template-columns: repeat(2,1fr) !important; }
          .grid-stats { grid-template-columns: repeat(2,1fr) !important; gap: 24px !important; }
          .grid-testi { grid-template-columns: 1fr !important; }
          .mockup-hide { display: none !important; }
        }
        @media (max-width: 480px) {
          .grid-4col { grid-template-columns: 1fr !important; }
          .grid-mods { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <Navbar />
      <Hero />
      <Ticker />
      <PainPoints />
      <HowItWorks />
      <ContentGrid />
      <Stats />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
