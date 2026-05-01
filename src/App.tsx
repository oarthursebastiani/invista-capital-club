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

/* ─── TRADINGVIEW WIDGET ─────────────────── */
function TradingViewWidget() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;

    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "BINANCE:BTCUSDT",
      interval: "60",
      timezone: "America/Sao_Paulo",
      theme: "dark",
      style: "1",
      locale: "br",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "tradingview_chart"
    });

    container.current.appendChild(script);
  }, []);

  return (
    <div style={{
      width: '100%',
      height: 500,
      borderRadius: 18,
      overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div ref={container} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}

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

/* ─── HERO ───────────────────────────────── */
function Hero() {
  return (
    <section style={{
      padding: '120px 24px',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: 48,
        fontWeight: 800,
        marginBottom: 20
      }}>
        Invista com clareza.
      </h1>

      <p style={{
        color: 'rgba(255,255,255,0.6)',
        marginBottom: 40
      }}>
        Veja o mercado em tempo real:
      </p>

      {/* 🔥 TRADINGVIEW AQUI */}
      <TradingViewWidget />
    </section>
  );
}

/* ─── APP ROOT ───────────────────────────── */
export default function App() {
  return (
    <div style={{
      fontFamily: 'Inter, sans-serif',
      background: '#080c08',
      color: '#fff',
      minHeight: '100vh'
    }}>
      <Navbar />
      <Hero />
    </div>
  );
}
