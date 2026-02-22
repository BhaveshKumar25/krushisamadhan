import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';

const stagger = {
    animate: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Landing() {
    return (
        <PageTransition>
            {/* Hero */}
            <section className="hero">
                <AnimatedBackground />
                <motion.div
                    className="hero-content"
                    variants={stagger}
                    initial="initial"
                    animate="animate"
                >
                    <motion.div className="hero-badge" variants={fadeUp}>
                        <span className="hero-badge-dot" />
                        Circular Sustainability Platform
                    </motion.div>
                    <motion.h1 variants={fadeUp}>
                        Turning Imperfect Harvests into ​{' '}
                        <span className="highlight">Sustainable Profits​
                    </span>
                    </motion.h1>

                    <motion.p className="hero-sub" variants={fadeUp}>
                        Transforming Grade B &amp; C Harvests into Sustainable Value —
                        connecting farmers with commercial buyers, animal care centers,
                        and composting partners across regions.
                    </motion.p>

                    <motion.div className="hero-buttons" variants={fadeUp}>
                        <Link to="/farmer" className="btn-primary">
                            🌾 Join as Farmer
                        </Link>
                        <Link to="/buyer" className="btn-secondary">
                            🏢 Join as Buyer
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats */}
            <section className="section stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <GlassCard className="stat-card" delay={0}>
                            <span className="stat-icon">🌍</span>
                            <div className="stat-number glow-text">
                                <AnimatedCounter end={30} suffix="%" />
                            </div>
                            <p className="stat-label">
                                Of all food produced globally is wasted — we&apos;re here to change that narrative
                            </p>
                        </GlassCard>

                        <GlassCard className="stat-card" delay={0.15}>
                            <span className="stat-icon">📍</span>
                            <div className="stat-number glow-text">
                                <AnimatedCounter end={40} suffix="% ↓" />
                            </div>
                            <p className="stat-label">
                                Systemic redistribution model — reducing transport-related carbon emissions while maximizing freshness
                            </p>
                        </GlassCard>

                        <GlassCard className="stat-card" delay={0.3}>
                            <span className="stat-icon">♻️</span>
                            <div className="stat-number glow-text">
                                <AnimatedCounter end={360} suffix="°" />
                            </div>
                            <p className="stat-label">
                                Circular sustainability network — every harvest finds its purpose, nothing goes to waste
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* Features Preview */}
            <section className="section">
                <div className="container">
                    <motion.div
                        style={{ textAlign: 'center', marginBottom: 50 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', marginBottom: 12 }}>
                            A Smarter Way to <span className="glow-text">Redistribute Harvests</span>
                        </h2>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto' }}>
                            Our platform uses intelligent categorization and area-based matching
                            to ensure every harvest grade reaches the right destination.
                        </p>
                    </motion.div>

                    <div className="stats-grid">
                        <GlassCard className="stat-card" delay={0}>
                            <span className="stat-icon">🥬</span>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Grade B → Commercial</h3>
                            <p className="stat-label">
                                Hotels, mess halls, food processing factories, and vendors receive quality produce
                                at sustainable prices.
                            </p>
                        </GlassCard>

                        <GlassCard className="stat-card" delay={0.12}>
                            <span className="stat-icon">🐄</span>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Grade C → Animal Care</h3>
                            <p className="stat-label">
                                Animal care centers and shelters get reliable, affordable feed sourced directly
                                from local farms.
                            </p>
                        </GlassCard>

                        <GlassCard className="stat-card" delay={0.24}>
                            <span className="stat-icon">🌱</span>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Rotten → Compost</h3>
                            <p className="stat-label">
                                Composting companies convert unusable produce into nutrient-rich soil amendments,
                                completing the loop.
                            </p>
                        </GlassCard>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="section">
                <div className="container">
                    <GlassCard
                        className="stat-card"
                        style={{ textAlign: 'center', padding: '60px 30px' }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: 16 }}>
                                Ready to Join the <span className="glow-text">Circular Revolution</span>?
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 30px', fontSize: '1.02rem' }}>
                                Whether you&apos;re a farmer looking to reduce waste or a buyer seeking sustainable supply —
                                there&apos;s a place for you here.
                            </p>
                            <div className="hero-buttons">
                                <Link to="/flow" className="btn-primary">
                                    See How It Works →
                                </Link>
                                <Link to="/impact" className="btn-secondary">
                                    View Our Impact
                                </Link>
                            </div>
                        </motion.div>
                    </GlassCard>
                </div>
            </section>
        </PageTransition>
    );
}
