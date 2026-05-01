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

/* NAVBAR */
function Navbar() {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    const fn = () => setBg(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 80,
      background: bg ? 'rgba(8,12,8,0.96)' : 'transparent',
      backdropFilter: bg ? 'blur(20px)' : 'none',
      borderBottom: bg ? '1px solid rgba(255,255,255,0.06)' : 'none'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', maxWidth: 1200, margin: '0 auto', height: '100%' }}>
        <img src={LOGO_URL} style={{ height: 80 }} />
        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f', color: '#000',
          padding: '10px 20px', borderRadius: 10,
          fontWeight: 700, textDecoration: 'none'
        }}>
          COMEÇAR AGORA
        </a>
      </div>
    </header>
  );
}

/* HERO */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '190px 24px 60px',
      textAlign: 'center',
      position: 'relative'
    }}>

      <motion.h1 {...fw()} style={{
        fontSize: 'clamp(32px,6vw,64px)',
        fontWeight: 800,
        lineHeight: 1.1
      }}>
        Pare de perder <span style={{ color: '#00ff7f' }}>dinheiro</span><br />
        investindo no escuro.
      </motion.h1>

      <motion.p {...fw(0.1)} style={{
        color: 'rgba(255,255,255,0.6)',
        marginTop: 20,
        maxWidth: 500,
        marginInline: 'auto'
      }}>
        Descubra exatamente onde alocar seu dinheiro e construa patrimônio com segurança.
      </motion.p>

      {/* CTA */}
      <motion.a {...fw(0.2)}
        href={CHECKOUT_URL}
        style={{
          display: 'inline-block',
          marginTop: 30,
          background: '#00ff7f',
          color: '#000',
          padding: '16px 28px',
          borderRadius: 12,
          fontWeight: 800,
          textDecoration: 'none'
        }}>
        QUERO ENTRAR AGORA <ArrowRight size={16} />
      </motion.a>

      {/* MOCKUP */}
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        style={{
          width: '100%',
          maxWidth: 880,
          margin: '60px auto 0',
          borderRadius: 18,
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#0d120d',
          overflow: 'hidden',
          boxShadow: '0 48px 96px rgba(0,0,0,0.65)'
        }}
      >
        {/* top bar */}
        <div style={{
          height: 38,
          display: 'flex',
          gap: 6,
          padding: 16
        }}>
          {['red', 'yellow', 'green'].map((c, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
          ))}
        </div>

        {/* conteúdo */}
        <div style={{ padding: 20 }}>
          <div style={{
            height: 120,
            borderRadius: 10,
            background: 'linear-gradient(to top, rgba(0,255,127,0.1), rgba(0,255,127,0.6))'
          }} />
        </div>
      </motion.div>

    </section>
  );
}

/* APP */
export default function App() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: '#080c08',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Hero />
    </div>
  );
}
