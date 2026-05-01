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

/* ─── TRADINGVIEW TICKER FIXO ─── */
function TradingTicker() {
  useEffect(() => {
    const container = document.getElementById("tradingview-ticker");

    if (!container) return;

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "BMFBOVESPA:IFIX", title: "IFIX" },
        { proName: "FX_IDC:USDBRL", title: "DÓLAR" },
        { proName: "BMFBOVESPA:IBOV", title: "IBOVESPA" },
        { proName: "BMFBOVESPA:MGLU3", title: "MGLU3" },
        { proName: "BMFBOVESPA:ABEV3", title: "ABEV3" },
        { proName: "BMFBOVESPA:PETR4", title: "PETR4" },
        { proName: "BMFBOVESPA:VALE3", title: "VALE3" },
        { proName: "BMFBOVESPA:ITUB4", title: "ITUB4" },
        { proName: "BMFBOVESPA:GGBR4", title: "GGBR4" },
        { proName: "BITSTAMP:BTCUSD", title: "BITCOIN" }
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "br"
    });

    container.appendChild(script);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        zIndex: 49,
        borderTop: '1px solid rgba(255,255,255,0.05)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        background: '#0a0f0a'
      }}
    >
      <div id="tradingview-ticker" />
    </div>
  );
}

/* ─── NAVBAR ─── */
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
      backdropFilter: bg ? 'blur(20px)' : 'none'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 24px',
        maxWidth: 1200,
        margin: '0 auto',
        height: '100%'
      }}>
        <img src={LOGO_URL} style={{ height: 80 }} />

        <nav className="nav-links" style={{ display: 'flex', gap: 32 }}>
          <a href="#conteudo">Conteúdo</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#precos">Planos</a>
        </nav>

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

/* ─── HERO (mantive o seu) ─── */
function Hero() {
  return (
    <section style={{
      paddingTop: 180,
      textAlign: 'center'
    }}>
      <h1>Pare de perder dinheiro investindo no escuro.</h1>
    </section>
  );
}

/* ─── APP ─── */
export default function App() {
  return (
    <div style={{ background: '#080c08', color: '#fff' }}>
      <Navbar />
      <TradingTicker />
      <Hero />
    </div>
  );
}
