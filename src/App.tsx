import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, ArrowRight, CheckCircle2, Star, BarChart2, Globe, DollarSign, PieChart, ShieldCheck, Zap, Play, AlertTriangle, Target, Brain, TrendingDown, Clock } from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';

// ⚠️ Faça upload da logo em imgbb.com e cole a URL direta aqui:
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

const fw = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

function Navbar() {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const fn = () => setBg(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 100, background: bg ? 'rgba(8,12,8,0.95)' : 'transparent', backdropFilter: bg ? 'blur(16px)' : 'none', borderBottom: bg ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'all 0.3s' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 40px', maxWidth: 1152, margin: '0 auto', height: '100%' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img src={LOGO_URL} alt="Invista+ Capital Club" style={{ height: 110, objectFit: 'contain', marginTop: 8 }}
            onError={(e: any) => { e.currentTarget.style.display='none'; (e.currentTarget.nextSibling as HTMLElement).style.display='flex'; }} />
          <div style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, background: '#00ff7f', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={16} color="#000" strokeWidth={3} />
            </div>
            <span style={{ fontWeight: 900, fontSize: 16, color: '#fff' }}>Invista<span style={{ color: '#00ff7f' }}>+</span><span style={{ color: 'rgba(255,255,255,0.2)', fontWeight: 500, fontSize: 11, marginLeft: 4 }}>Capital Club</span></span>
          </div>
        </a>
        <nav style={{ display: 'flex', gap: 28 }}>
          {[['#conteudo','Conteúdo'],['#como-funciona','Como funciona'],['#precos','Planos']].map(([h,l],i) => (
            <a key={`nav-${i}`} href={h} style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, fontFamily: 'DM Sans', fontWeight: 500, textDecoration: 'none' }}>{l}</a>
          ))}
        </nav>
        <a href={CHECKOUT_URL} style={{ background: '#00ff7f', color: '#000', fontSize: 12, fontWeight: 900, padding: '10px 20px', borderRadius: 8, textDecoration: 'none', letterSpacing: '0.05em' }}>COMEÇAR AGORA</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '120px 32px 60px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
      <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 700, height: 500, background: 'rgba(0,255,127,0.06)', borderRadius: '50%', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, opacity: 0.025, backgroundImage: 'linear-gradient(rgba(0,255,127,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,255,127,1) 1px,transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 800, position: 'relative', zIndex: 1 }}>
        <motion.div {...fw(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(0,255,127,0.25)', background: 'rgba(0,255,127,0.06)', padding: '7px 16px', borderRadius: 99, fontSize: 11, fontWeight: 700, color: '#00ff7f', marginBottom: 28, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          <span className="blk" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff7f' }} />+1.200 investidores já estão no Club
        </motion.div>
        <motion.h1 {...fw(0.07)} style={{ fontSize: 40, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20 }}>
          Pare de perder <em style={{ color: '#00ff7f', fontStyle: 'italic' }}>dinheiro</em><br />investindo no escuro.
        </motion.h1>
        <motion.p {...fw(0.12)} style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto 32px', lineHeight: 1.7, fontFamily: 'DM Sans' }}>
          Descubra exatamente onde alocar seu dinheiro e construa patrimônio com segurança, método e resultado comprovado.
        </motion.p>
        <motion.div {...fw(0.17)} style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#00ff7f', color: '#000', fontWeight: 900, fontSize: 14, padding: '14px 28px', borderRadius: 12, textDecoration: 'none', letterSpacing: '0.05em', boxShadow: '0 0 30px rgba(0,255,127,0.25)' }}>
            QUERO ENTRAR PARA O CLUB <ArrowRight size={16} strokeWidth={3} />
          </a>
          <a href="#conteudo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontWeight: 600, fontSize: 14, padding: '14px 24px', borderRadius: 12, textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', fontFamily: 'DM Sans' }}>
            <Play size={14} /> Ver o que está incluso
          </a>
        </motion.div>
        <motion.div {...fw(0.2)} style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {([['Garantia de 7 dias', ShieldCheck],['Acesso imediato', Zap],['Cancele quando quiser', CheckCircle2]] as const).map(([text, Icon], i) => (
            <span key={`seal-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'rgba(255,255,255,0.25)', fontFamily: 'DM Sans' }}>
              <Icon size={13} color="rgba(0,255,127,0.5)" /> {text}
            </span>
          ))}
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ width: '100%', maxWidth: 860, margin: '0 auto', borderRadius: 16, border: '1px solid rgba(255,255,255,0.08)', background: '#0d120d', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,127,0.04)' }}
        >
          {/* Browser bar */}
          <div style={{ height: 36, background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,80,80,0.5)' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(255,200,0,0.5)' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'rgba(0,255,127,0.5)' }} />
            <div style={{ flex: 1, margin: '0 12px', height: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.2)', fontFamily: 'DM Sans' }}>app.invistacapital.com.br/dashboard</span>
            </div>
          </div>
          {/* Dashboard content */}
          <div style={{ padding: 20, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12 }}>
            {[
              { l: 'Rentabilidade', v: '+24.8%', c: '#00ff7f', s: 'últimos 12 meses' },
              { l: 'Dividend Yield', v: '8.4%',   c: '#00ff7f', s: 'carteira atual' },
              { l: 'Patrimônio',    v: 'R$48.3k', c: '#fff',    s: '+12% no mês' },
              { l: 'Próx. aporte',  v: 'IPCA+',   c: '#fff',    s: 'Tesouro Direto' },
            ].map((k, i) => (
              <div key={`kpi-${i}`} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, padding: 14 }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 6, fontFamily: 'DM Sans' }}>{k.l}</span>
                <div style={{ fontSize: 20, fontWeight: 900, color: k.c, lineHeight: 1 }}>{k.v}</div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.2)', marginTop: 4, display: 'block', fontFamily: 'DM Sans' }}>{k.s}</span>
              </div>
            ))}
            {/* Gráfico */}
            <div style={{ gridColumn: 'span 3', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans' }}>Performance</span>
                <span style={{ fontSize: 10, color: '#00ff7f', fontWeight: 700 }}>12 meses</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 64 }}>
                {[28,35,42,38,55,48,68,62,75,70,88,100].map((h, i) => (
                  <motion.div key={`bar-${i}`}
                    style={{ flex: 1, borderRadius: '3px 3px 0 0', background: 'linear-gradient(to top,rgba(0,255,127,0.15),rgba(0,255,127,0.4))', borderTop: '1.5px solid rgba(0,255,127,0.5)' }}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, delay: 0.5 + i * 0.04 }}
                  />
                ))}
              </div>
              <div style={{ display: 'flex', marginTop: 6 }}>
                {['J','F','M','A','M','J','J','A','S','O','N','D'].map((m, i) => (
                  <span key={`m-${i}`} style={{ flex: 1, textAlign: 'center', fontSize: 8, color: 'rgba(255,255,255,0.15)', fontFamily: 'DM Sans' }}>{m}</span>
                ))}
              </div>
            </div>
            {/* Top picks */}
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, padding: 14 }}>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: 10, fontFamily: 'DM Sans' }}>Top picks</span>
              {[['PETR4','+18%'],['HGLG11','+12%'],['BTC','+31%']].map(([t,v], i) => (
                <div key={`pick-${i}`} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)' }}>{t}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, color: '#00ff7f' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ['B3','·','Tesouro Direto','·','FIIs','·','ETFs','·','Criptoativos','·','Renda Fixa','·','Dividendos','·','Ações','·'];
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '14px 0', overflow: 'hidden', background: 'rgba(255,255,255,0.01)' }}>
      <div className="run" style={{ display: 'flex', gap: 32, whiteSpace: 'nowrap' }}>
        {[...items,...items,...items].map((it,i) => (
          <span key={`tk-${i}`} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.13)', textTransform: 'uppercase', letterSpacing: '0.15em', flexShrink: 0, fontFamily: 'DM Sans' }}>{it}</span>
        ))}
      </div>
    </div>
  );
}

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
    <section style={{ padding: '60px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 16 }}>Você se identifica?</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 28, fontWeight: 900, lineHeight: 1.1, marginBottom: 16, letterSpacing: '-0.02em' }}>
            Se você está assim,<br /><span style={{ color: 'rgba(255,255,255,0.2)' }}>você não está sozinho.</span>
          </motion.h2>
          <motion.p {...fw(0.1)} style={{ fontSize: 15, color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: 24, fontFamily: 'DM Sans' }}>
            95% dos brasileiros perdem para a inflação por falta de método. A solução não é trabalhar mais — é investir certo.
          </motion.p>
          <motion.a {...fw(0.13)} href="#conteudo" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#00ff7f', fontWeight: 700, fontSize: 13, border: '1px solid rgba(0,255,127,0.25)', padding: '10px 20px', borderRadius: 8, textDecoration: 'none', fontFamily: 'DM Sans' }}>
            Ver a solução <ArrowRight size={14} />
          </motion.a>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {pains.map(([Icon, text], i) => (
            <motion.div key={`pain-${i}`} {...fw(0.05 + i * 0.05)} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 16px', borderRadius: 12, background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(220,50,50,0.1)', border: '1px solid rgba(220,50,50,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={15} color="#f87171" />
              </div>
              <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', fontFamily: 'DM Sans', fontWeight: 500 }}>{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    ['01','Acesse o Club','Em segundos você já tem acesso a todo o conteúdo, comunidade e carteiras recomendadas.'],
    ['02','Siga o método','Módulos organizados do básico ao avançado. Sem enrolação, direto ao ponto.'],
    ['03','Monte sua carteira','Use as carteiras recomendadas ou personalize com base nos seus objetivos.'],
    ['04','Acompanhe e evolua','Relatórios semanais, análises e suporte da comunidade para te manter no rumo.'],
  ];
  return (
    <section id="como-funciona" style={{ padding: '60px 32px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>Como funciona</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em' }}>Simples do início ao fim.</motion.h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 26, left: '12%', right: '12%', height: 1, background: 'linear-gradient(90deg,transparent,rgba(0,255,127,0.2),transparent)' }} />
          {steps.map(([n,title,desc], i) => (
            <motion.div key={`step-${i}`} {...fw(0.07 * i)} style={{ textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, border: '1px solid rgba(0,255,127,0.3)', background: 'rgba(0,255,127,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: '#00ff7f' }}>{n}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>{title}</h3>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.38)', lineHeight: 1.6, fontFamily: 'DM Sans' }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MODS = [
  { img: 'https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=600&q=80', Icon: BarChart2,   title: 'Fundamentos da Renda Fixa',   desc: 'Aprenda a investir com segurança nos melhores ativos de renda fixa.' },
  { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80', Icon: TrendingDown, title: 'Dominando Ações e FIIs',        desc: 'Estratégias para investir em ações e fundos imobiliários com confiança.' },
  { img: 'https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&q=80', Icon: PieChart,     title: 'Ciclos de Mercado e Macro',    desc: 'Entenda os ciclos econômicos e fatores que movem os mercados.' },
  { img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80', Icon: Globe,        title: 'Investimentos no Exterior',    desc: 'Diversifique no exterior e proteja seu patrimônio globalmente.' },
  { img: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&q=80', Icon: DollarSign,   title: 'Poder dos Dividendos',         desc: 'Construa renda passiva com ações pagadoras de dividendos.' },
];

function ContentGrid() {
  return (
    <section id="conteudo" style={{ padding: '60px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 10 }}>Conteúdo exclusivo</motion.span>
            <motion.h2 {...fw(0.06)} style={{ fontSize: 30, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              O que tem no <em style={{ color: '#00ff7f' }}>club</em>
            </motion.h2>
            <motion.p {...fw(0.1)} style={{ fontSize: 14, color: 'rgba(255,255,255,0.38)', marginTop: 10, maxWidth: 400, lineHeight: 1.6, fontFamily: 'DM Sans' }}>
              Tudo o que você precisa para investir com segurança, clareza e consistência.
            </motion.p>
          </div>
          <motion.div {...fw(0.1)}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid rgba(0,255,127,0.3)', color: '#00ff7f', fontSize: 11, fontWeight: 800, padding: '8px 16px', borderRadius: 8, background: 'rgba(0,255,127,0.05)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'DM Sans' }}>
              <span className="blk" style={{ width: 6, height: 6, borderRadius: '50%', background: '#00ff7f' }} /> Acesso Total
            </span>
          </motion.div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14, marginBottom: 36 }}>
          {MODS.map(({ img, Icon, title, desc }, i) => (
            <motion.div key={`mod-${i}`} {...fw(0.05 * i)}
              style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#0d120d', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s' }}
              whileHover={{ y: -6, borderColor: 'rgba(0,255,127,0.3)', boxShadow: '0 16px 40px rgba(0,0,0,0.4),0 0 0 1px rgba(0,255,127,0.1)' }}>
              <div style={{ position: 'relative', height: 150, overflow: 'hidden' }}>
                <img src={img} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}
                  onError={(e: any) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80'; }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,#0d120d,transparent)' }} />
                <div style={{ position: 'absolute', bottom: 12, left: 12, width: 36, height: 36, background: '#00ff7f', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,255,127,0.4)' }}>
                  <Icon size={17} color="#000" strokeWidth={2.5} />
                </div>
              </div>
              <div style={{ padding: '14px 14px 16px' }}>
                <h3 style={{ fontSize: 12, fontWeight: 800, marginBottom: 6, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.32)', lineHeight: 1.5, fontFamily: 'DM Sans' }}>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div {...fw(0.25)} style={{ display: 'flex', justifyContent: 'center' }}>
          <a href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#00ff7f', color: '#000', fontWeight: 900, fontSize: 13, padding: '14px 32px', borderRadius: 12, textDecoration: 'none', letterSpacing: '0.06em', boxShadow: '0 0 28px rgba(0,255,127,0.2)' }}>
            QUERO ENTRAR PARA O INVISTA+ CAPITAL CLUB <ArrowRight size={16} strokeWidth={3} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref as any, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const inc = to / 50;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= to) { setVal(to); clearInterval(t); }
      else setVal(Math.floor(cur));
    }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString('pt-BR')}{suffix}</span>;
}

function Stats() {
  const items = [
    { to: 1200, suffix: '+',     label: 'membros ativos\nna comunidade' },
    { to: 24,   suffix: '%+',    label: 'de rentabilidade\nmédia da carteira' },
    { to: 48,   suffix: '★',     label: 'avaliação média\ndos membros' },
    { to: 7,    suffix: ' dias', label: 'de garantia total\nsem perguntas' },
  ];
  return (
    <section style={{ padding: '48px 32px', background: 'rgba(0,255,127,0.025)', borderTop: '1px solid rgba(0,255,127,0.08)', borderBottom: '1px solid rgba(0,255,127,0.08)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {items.map(({ to, suffix, label }, i) => (
          <motion.div key={`stat-${i}`} {...fw(0.06 * i)} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28, fontWeight: 900, color: '#00ff7f', lineHeight: 1, marginBottom: 8 }}>
              <Counter to={to} suffix={suffix} />
            </div>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.32)', lineHeight: 1.6, whiteSpace: 'pre-line', fontFamily: 'DM Sans' }}>{label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    { photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80', name: 'Carlos Mendes', role: 'Empresário', text: 'Antes eu não sabia por onde começar. Hoje invisto com método e segurança todos os meses.' },
    { photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80', name: 'Marina Silva',  role: 'Médica',     text: 'As carteiras recomendadas me deram uma clareza que não tive em 5 anos de banco.' },
    { photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80', name: 'João Pedro',    role: 'Engenheiro', text: 'O melhor investimento do último ano foi o acesso ao Club. Resultado real, sem enrolação.' },
  ];
  return (
    <section style={{ padding: '60px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>Prova real</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 28, fontWeight: 900, letterSpacing: '-0.02em' }}>Quem está dentro fala por si.</motion.h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {list.map((t, i) => (
            <motion.div key={`test-${i}`} {...fw(0.07 * i)} style={{ borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)', background: '#0d120d', padding: 28, display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', gap: 4, marginBottom: 18 }}>
                {[0,1,2,3,4].map(j => <Star key={`star-${i}-${j}`} size={13} fill="#00ff7f" color="#00ff7f" />)}
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, flex: 1, marginBottom: 20, fontFamily: 'DM Sans', fontStyle: 'italic' }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={t.photo} alt={t.name} style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(0,255,127,0.3)' }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'rgba(0,255,127,0.5)', marginTop: 2, fontFamily: 'DM Sans' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const benefits = ['Todos os módulos de investimento','Carteiras recomendadas atualizadas','Análises semanais de mercado','Comunidade exclusiva de membros','Planilha de controle financeiro','Suporte com especialistas','Acesso pelo app mobile','Novos conteúdos toda semana'];
  return (
    <section id="precos" style={{ padding: '60px 32px', background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ maxWidth: 460, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 12 }}>Planos</motion.span>
          <motion.h2 {...fw(0.06)} style={{ fontSize: 26, fontWeight: 900, letterSpacing: '-0.02em' }}>Simples. Sem surpresas.</motion.h2>
        </div>
        <motion.div {...fw(0.1)} style={{ position: 'relative', borderRadius: 24, border: '1px solid rgba(0,255,127,0.2)', background: '#0d120d', padding: '36px 32px', boxShadow: '0 0 60px rgba(0,255,127,0.06)' }}>
          <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: '#00ff7f', color: '#000', fontSize: 11, fontWeight: 900, padding: '5px 20px', borderRadius: 99, textTransform: 'uppercase', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>OFERTA EXCLUSIVA</div>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', marginBottom: 12, fontFamily: 'DM Sans' }}>Invista+ Capital Club — Mensal</p>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 4 }}>
              <span style={{ fontSize: 16, color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans' }}>R$</span>
              <span style={{ fontSize: 44, fontWeight: 900, color: '#00ff7f', lineHeight: 1 }}>47</span>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 20, fontWeight: 900, color: '#00ff7f' }}>,90</span>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Sans' }}>/mês</span>
              </div>
            </div>
            <p style={{ fontSize: 10, color: 'rgba(0,255,127,0.5)', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, marginTop: 8, fontFamily: 'DM Sans' }}>ACESSO TOTAL E IMEDIATO</p>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '20px 0', marginBottom: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {benefits.map((b, i) => (
              <div key={`ben-${i}`} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <CheckCircle2 size={14} color="#00ff7f" />
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.62)', fontFamily: 'DM Sans', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
          <a href={CHECKOUT_URL} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, width: '100%', background: '#00ff7f', color: '#000', fontWeight: 900, fontSize: 14, padding: '15px', borderRadius: 12, textDecoration: 'none', letterSpacing: '0.06em', boxShadow: '0 0 28px rgba(0,255,127,0.22)', marginBottom: 14 }}>
            QUERO ENTRAR AGORA <ArrowRight size={17} strokeWidth={3} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 11, color: 'rgba(255,255,255,0.22)', fontFamily: 'DM Sans' }}>
            <ShieldCheck size={12} color="rgba(0,255,127,0.35)" /> Garantia de 7 dias · Cancele quando quiser
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ padding: '60px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 350, background: 'rgba(0,255,127,0.05)', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none' }} />
      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
        <motion.span {...fw(0)} style={{ fontSize: 11, fontWeight: 700, color: '#00ff7f', textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: 20 }}>Última chamada</motion.span>
        <motion.h2 {...fw(0.06)} style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 16 }}>
          Você pode continuar perdido...<br /><span style={{ color: 'rgba(255,255,255,0.18)' }}>ou começar hoje.</span>
        </motion.h2>
        <motion.p {...fw(0.1)} style={{ fontSize: 16, color: 'rgba(255,255,255,0.38)', marginBottom: 32, lineHeight: 1.6, fontFamily: 'DM Sans' }}>
          Cada dia sem método é um passo mais longe da sua liberdade financeira.
        </motion.p>
        <motion.a {...fw(0.14)} href={CHECKOUT_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#00ff7f', color: '#000', fontWeight: 900, fontSize: 14, padding: '16px 36px', borderRadius: 12, textDecoration: 'none', letterSpacing: '0.06em', boxShadow: '0 0 40px rgba(0,255,127,0.25)' }}>
          QUERO ENTRAR PARA O INVISTA+ CAPITAL CLUB <ArrowRight size={17} strokeWidth={3} />
        </motion.a>
        <motion.p {...fw(0.18)} style={{ marginTop: 16, fontSize: 11, color: 'rgba(255,255,255,0.18)', fontFamily: 'DM Sans' }}>
          Garantia de 7 dias · Sem fidelidade · Cancele quando quiser
        </motion.p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '40px 24px', background: '#060906' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={LOGO_URL} alt="Invista+ Capital Club" style={{ height: 80, objectFit: 'contain' }}
              onError={(e: any) => { e.currentTarget.style.display='none'; (e.currentTarget.nextSibling as HTMLElement).style.display='flex'; }} />
            <div style={{ display: 'none', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 28, height: 28, background: '#00ff7f', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <TrendingUp size={13} color="#000" strokeWidth={3} />
              </div>
              <span style={{ fontWeight: 900, fontSize: 14, color: '#fff' }}>Invista<span style={{ color: '#00ff7f' }}>+</span> <span style={{ color: 'rgba(255,255,255,0.18)', fontWeight: 500, fontSize: 11 }}>Capital Club</span></span>
            </div>
          </a>
          <div style={{ display: 'flex', gap: 24 }}>
            {[['#conteudo','Conteúdo'],['#como-funciona','Como funciona'],['#precos','Planos']].map(([h,l],i) => (
              <a key={`fl-${i}`} href={h} style={{ fontSize: 11, color: 'rgba(255,255,255,0.22)', fontFamily: 'DM Sans', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.18)', fontFamily: 'DM Sans' }}>© 2026 Invista+ Capital Club. Todos os direitos reservados.</span>
          <span style={{ fontSize: 11, color: 'rgba(255,80,80,0.8)', fontFamily: 'DM Sans', fontStyle: 'italic', padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(255,80,80,0.2)', background: 'rgba(255,80,80,0.06)' }}>
            ⚠️ Investimentos envolvem risco. Resultados passados não garantem retornos futuros.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: 'Syne, sans-serif', background: '#080c08', color: '#fff', overflowX: 'hidden', minHeight: '100vh', minWidth: 960 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { overflow-x: hidden; background: #080c08; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #00ff7f44; border-radius: 4px; }
        @keyframes mq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes blk { 0%,100% { opacity: 1; } 50% { opacity: 0.25; } }
        .run { animation: mq 24s linear infinite; }
        .blk { animation: blk 2s ease-in-out infinite; }
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
