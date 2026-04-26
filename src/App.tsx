/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  TrendingUp, ArrowRight, CheckCircle2, Star, BarChart2,
  Globe, DollarSign, PieChart, ShieldCheck, Zap, Play,
  AlertTriangle, Target, Brain, TrendingDown, Clock
} from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
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
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      height: 80,
      background: bg ? 'rgba(8,12,8,0.95)' : 'transparent',
      backdropFilter: bg ? 'blur(16px)' : 'none',
      borderBottom: bg ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        maxWidth: 1152,
        margin: '0 auto',
        height: '100%'
      }}>
        <img src={LOGO_URL} style={{ height: 90 }} />
        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f',
          color: '#000',
          fontWeight: 900,
          padding: '10px 16px',
          borderRadius: 8,
          textDecoration: 'none'
        }}>
          COMEÇAR
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 700 }}>
        <motion.h1 {...fw(0.1)} style={{
          fontSize: 'clamp(28px,6vw,42px)',
          fontWeight: 900,
          lineHeight: 1.1
        }}>
          Pare de perder dinheiro investindo no escuro
        </motion.h1>

        <motion.p {...fw(0.2)} style={{
          marginTop: 20,
          color: 'rgba(255,255,255,0.5)'
        }}>
          Tenha clareza total sobre onde investir e construa patrimônio com método.
        </motion.p>

        <motion.a {...fw(0.3)} href={CHECKOUT_URL} style={{
          marginTop: 30,
          display: 'inline-flex',
          background: '#00ff7f',
          color: '#000',
          padding: '14px 24px',
          borderRadius: 12,
          fontWeight: 900,
          textDecoration: 'none'
        }}>
          QUERO ENTRAR <ArrowRight />
        </motion.a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{
      padding: 40,
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.3)' }}>
        © 2026 Invista+ Capital Club
      </p>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{
      fontFamily: '"Plus Jakarta Sans", sans-serif',
      background: '#080c08',
      color: '#fff',
      minHeight: '100vh'
    }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: #080c08;
        }
      `}</style>

      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
