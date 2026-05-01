import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  TrendingUp, ArrowRight, CheckCircle2, Star,
  BarChart2, Globe, DollarSign, PieChart,
  ShieldCheck, Zap, Play, AlertTriangle,
  Target, Brain, TrendingDown, Clock
} from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

const fw = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay }
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
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: 80,
      background: bg ? 'rgba(8,12,8,0.96)' : 'transparent',
      backdropFilter: 'blur(20px)'
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
        <img src={LOGO_URL} style={{ height: 80 }} />
        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f',
          padding: '10px 20px',
          borderRadius: 10,
          color: '#000',
          fontWeight: 700,
          textDecoration: 'none'
        }}>
          COMEÇAR
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
        fontWeight: 800
      }}>
        Pare de perder dinheiro
      </motion.h1>

      <motion.p {...fw(0.1)} style={{
        color: 'rgba(255,255,255,0.6)',
        marginTop: 20
      }}>
        Invista com método e clareza
      </motion.p>

      {/* MOCKUP CORRIGIDO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          marginTop: 60,
          maxWidth: 800,
          marginInline: 'auto',
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.1)'
        }}
      >

        {/* top bar */}
        <div style={{
          height: 30,
          display: 'flex',
          gap: 6,
          padding: 10
        }}>
          <div style={{ width: 10, height: 10, background: 'red', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: 'yellow', borderRadius: '50%' }} />
          <div style={{ width: 10, height: 10, background: 'green', borderRadius: '50%' }} />
        </div>

        {/* conteúdo */}
        <div style={{ padding: 20 }}>
          <div style={{
            height: 120,
            background: 'linear-gradient(to top, #00ff7f22, #00ff7f)',
            borderRadius: 10
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
      fontFamily: 'sans-serif',
      background: '#080c08',
      color: '#fff'
    }}>
      <Navbar />
      <Hero />
    </div>
  );
}
