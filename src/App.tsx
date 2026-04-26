import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CHECKOUT_URL = 'https://SEU-LINK-DA-TICTO.com.br';
const LOGO_URL = 'https://i.ibb.co/N2zxFMG5/Invista-capitalclub-removebg-preview.png';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay }
});

// ================= NAVBAR =================
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
      backdropFilter: bg ? 'blur(12px)' : 'none',
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
        <img
          src={LOGO_URL}
          alt="Invista+ Capital Club"
          style={{ height: 60 }}
        />

        <a href={CHECKOUT_URL} style={{
          background: '#00ff7f',
          color: '#000',
          fontWeight: 900,
          padding: '12px 18px',
          borderRadius: 8,
          fontSize: 12,
          textDecoration: 'none'
        }}>
          ENTRAR NO CLUB
        </a>
      </div>
    </header>
  );
}

// ================= HERO =================
function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 20px 60px',
      textAlign: 'center'
    }}>
      <motion.h1 {...fadeUp(0)} style={{
        fontSize: 'clamp(28px, 7vw, 44px)',
        fontWeight: 900,
        marginBottom: 20,
        lineHeight: 1.1
      }}>
        Pare de perder dinheiro<br />investindo no escuro
      </motion.h1>

      <motion.p {...fadeUp(0.1)} style={{
        fontSize: 'clamp(14px, 4vw, 16px)',
        maxWidth: 520,
        marginBottom: 30,
        color: 'rgba(255,255,255,0.6)'
      }}>
        Descubra exatamente onde investir e construa patrimônio com segurança e estratégia.
      </motion.p>

      <motion.div {...fadeUp(0.2)} style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '100%'
      }}>
        <a href={CHECKOUT_URL} style={{
          width: '100%',
          maxWidth: 360,
          background: '#00ff7f',
          padding: 16,
          borderRadius: 10,
          fontWeight: 900,
          textAlign: 'center',
          color: '#000',
          textDecoration: 'none',
          boxShadow: '0 0 30px rgba(0,255,127,0.2)'
        }}>
          QUERO ACESSO AO MÉTODO
        </a>
      </motion.div>
    </section>
  );
}

// ================= GRID =================
function GridSection() {
  return (
    <section style={{ padding: '60px 20px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: 20
      }}>
        {[1,2,3,4,5,6].map(i => (
          <div key={i} style={{
            height: 120,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 10
          }} />
        ))}
      </div>
    </section>
  );
}

// ================= STATS =================
function Stats() {
  return (
    <section style={{ padding: '60px 20px' }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 20
      }}>
        {[
          ['+1.200', 'membros'],
          ['+24%', 'rentabilidade'],
          ['7 dias', 'garantia'],
          ['100%', 'online']
        ].map(([value, label], i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <h2 style={{ color: '#00ff7f', fontSize: 26 }}>{value}</h2>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ================= FOOTER =================
function Footer() {
  return (
    <footer style={{
      padding: '40px 20px',
      borderTop: '1px solid rgba(255,255,255,0.1)'
    }}>
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }}>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)' }}>
          © 2026 Invista+ Capital Club
        </span>
      </div>
    </footer>
  );
}

// ================= APP =================
export default function App() {
  return (
    <div style={{
      background: '#080c08',
      color: '#fff',
      minHeight: '100vh',
      overflowX: 'hidden'
    }}>
      <Navbar />
      <Hero />
      <GridSection />
      <Stats />
      <Footer />
    </div>
  );
}
