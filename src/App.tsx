import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Star,
  BarChart2,
  Globe,
  DollarSign,
  PieChart,
  ShieldCheck,
  Zap,
  Play,
  AlertTriangle,
  Target,
  Brain,
  TrendingDown,
  Clock
} from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

const fw = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: {
    duration: 0.55,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }
});

/* ─── NAVBAR ───────────────────────────── */
function Navbar() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    const fn = () => setBg(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: 80,
      background: bg ? 'rgba(8,12,8,0.96)' : 'transparent',
      backdropFilter: bg ? 'blur(20px)' : 'none',
      borderBottom: bg ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        maxWidth: 1200,
        margin: '0 auto',
        height: '100%'
      }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={LOGO_URL}
            alt="Invista+ Capital Club"
            style={{ height: 90, objectFit: 'contain', marginTop: 8 }}
            onError={(e: any) => {
              e.currentTarget.style.display = 'none';
              (e.currentTarget.nextSibling as HTMLElement).style.display = 'flex';
            }}
          />

          <div style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 34,
              height: 34,
              background: '#00ff7f',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <TrendingUp size={18} color="#000" strokeWidth={3} />
            </div>

            <span style={{
              fontWeight: 800,
              fontSize: 18,
              color: '#fff',
              letterSpacing: '-0.03em'
            }}>
              Invista<span style={{ color: '#00ff7f' }}>+</span>
            </span>
          </div>
        </a>

        <nav className="nav-links" style={{
          display: 'flex',
          gap: 32,
          alignItems: 'center'
        }}>
          {[
            ['#conteudo', 'Conteúdo'],
            ['#como-funciona', 'Como funciona'],
            ['#precos', 'Planos']
          ].map(([h, l], i) => (
            <a key={i} href={h} style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none'
            }}>
              {l}
            </a>
          ))}
        </nav>

        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f',
          color: '#000',
          fontSize: 13,
          fontWeight: 800,
          padding: '11px 22px',
          borderRadius: 10,
          textDecoration: 'none'
        }}>
          COMEÇAR AGORA
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ───────────────────────────── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '110px 24px 60px',
      textAlign: 'center'
    }}>
      <motion.h1 {...fw(0.07)} style={{
        fontSize: 'clamp(32px,6vw,64px)',
        fontWeight: 800
      }}>
        Pare de perder <span style={{ color: '#00ff7f' }}>dinheiro</span>
        <br />
        investindo no escuro.
      </motion.h1>
    </section>
  );
}

/* ─── TICKER ─────────────────────────── */
function Ticker() {
  const items = [
    'B3','·','Tesouro Direto','·','FIIs','·','ETFs','·',
    'Criptoativos','·','Renda Fixa','·','Dividendos','·','Ações','·'
  ];

  return (
    <div style={{
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
      padding: '13px 0',
      overflow: 'hidden'
    }}>
      <div className="run" style={{
        display: 'flex',
        gap: 36,
        whiteSpace: 'nowrap'
      }}>
        {[...items, ...items, ...items].map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── COUNTER ───────────────────────── */
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
      if (cur >= to) {
        setVal(to);
        clearInterval(t);
      } else {
        setVal(Math.floor(cur));
      }
    }, 18);

    return () => clearInterval(t);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString('pt-BR')}{suffix}</span>;
}

/* ─── STATS ───────────────────────── */
function Stats() {
  return (
    <section style={{ padding: '56px 24px' }}>
      <div style={{ textAlign: 'center' }}>
        <Counter to={1200} suffix="+" />
      </div>
    </section>
  );
}

/* ─── APP ROOT ───────────────────────── */
export default function App() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      background: '#080c08',
      color: '#fff',
      overflowX: 'hidden',
      minHeight: '100vh'
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          overflow-x: hidden;
          background: #080c08;
        }

        ::-webkit-scrollbar {
          width: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: #00ff7f44;
          border-radius: 4px;
        }

        @keyframes mq {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .run {
          animation: mq 24s linear infinite;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
    </div>
  );
}
