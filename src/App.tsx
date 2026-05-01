import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, ArrowRight, CheckCircle2, Star, BarChart2, Globe, DollarSign, PieChart, ShieldCheck, Zap, Play, AlertTriangle, Target, Brain, TrendingDown, Clock } from 'lucide-react';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

/* ─── TRADINGVIEW TICKER ───────────────── */
function MarketTicker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    ref.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BMFBOVESPA:PETR4", title: "PETR4" },
        { proName: "BMFBOVESPA:VALE3", title: "VALE3" },
        { proName: "BMFBOVESPA:ITUB4", title: "ITUB4" },
        { proName: "BINANCE:BTCUSDT", title: "BTC" },
        { proName: "FX_IDC:USDBRL", title: "USD/BRL" },
        { proName: "SP:SPX", title: "S&P 500" }
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "br"
    });

    ref.current.appendChild(script);
  }, []);

  return (
    <div style={{
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(0,0,0,0.3)'
    }}>
      <div ref={ref} />
    </div>
  );
}

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
        <img src={LOGO_URL} style={{ height: 70 }} />
        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f',
          color: '#000',
          padding: '10px 20px',
          borderRadius: 10,
          fontWeight: 700,
          textDecoration: 'none'
        }}>
          COMEÇAR
        </a>
      </div>
    </header>
  );
}

/* ─── HERO ───────────────── */
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      padding: '140px 24px 60px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 48,
        fontWeight: 800,
        marginBottom: 20
      }}>
        Pare de investir no escuro.
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.6)',
        marginBottom: 40
      }}>
        Dados em tempo real para decisões melhores
      </p>
    </section>
  );
}

/* ─── APP ROOT ───────────────────────────── */
export default function App() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
      background: '#080c08',
      color: '#fff',
      overflowX: 'hidden',
      minHeight: '100vh'
    }}>
      <Navbar />

      {/* 🔥 AQUI ESTÁ O TICKER ABAIXO DO HEADER */}
      <div style={{ marginTop: 80 }}>
        <MarketTicker />
      </div>

      <Hero />
    </div>
  );
}
