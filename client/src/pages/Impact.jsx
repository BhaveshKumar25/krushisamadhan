import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';
import AnimatedCounter from '../components/AnimatedCounter';
import GlassCard from '../components/GlassCard';

const circularNodes = [
    { icon: '🌾', title: 'Farm', desc: 'Harvest produced' },
    { icon: '📦', title: 'Collect', desc: 'Grade & categorize' },
    { icon: '🚛', title: 'Redistribute', desc: 'Local matching' },
    { icon: '🏭', title: 'Utilize', desc: 'Commercial use' },
    { icon: '🌱', title: 'Compost', desc: 'Organic recycling' },
    { icon: '🌍', title: 'Soil', desc: 'Nutrient renewal' },
];

const stories = [
    {
        image: 'gajer.jpg',
        bg: 'linear-gradient(135deg, rgba(20,83,45,0.3), rgba(10,40,20,0.5))',
        title: 'From Farm to Purpose',
        text: 'Every harvest, regardless of grade, carries potential value. Our platform ensures that Grade B produce reaches commercial kitchens, Grade C feeds animal care centers, and even rotten produce becomes rich compost — nothing is left behind.',
        text2: 'By connecting farmers directly with the right channels within their local radius, we eliminate middlemen waste and transportation emissions.',
    },
    {
        image: 'promice.jpg',
        bg: 'linear-gradient(135deg, rgba(212,168,83,0.15), rgba(146,105,58,0.2))',
        title: 'The Circular Promise',
        text: 'The compost produced from rotten harvests returns to the soil, enriching farmland for the next growing season. This circular model transforms what was once waste into a valuable agricultural input.',
        text2: 'Our network of composting partners ensures that every kilogram of organic waste is processed efficiently and returned to the ecosystem.',
        reverse: true,
    },
    {
        image: 'local.jpg',
        bg: 'linear-gradient(135deg, rgba(56,189,248,0.1), rgba(20,83,45,0.2))',
        title: 'Local-First Impact',
        text: 'We prioritize the shortest  paths between farms, processors, and buyers to ensure fresher produce, reduced vehicle emissions, and stronger agricultural ecosystems.',
        text2: 'Every kilometer saved in transit is a step toward a more sustainable food system.',
    },
];

const metrics1 = [
    { value: 15000, suffix: '+', label: 'Tonnes Redistributed', color: 'var(--green-light)' },
    { value: 4200, suffix: '+', label: 'Farmers Connected', color: 'var(--gold-accent)' },
    { value: 89, suffix: '%', label: 'Waste Reduction Rate', color: 'var(--green-light)' },
    { value: 320, suffix: '+', label: 'Composting Partners', color: 'var(--earth-light)' },
];

const metrics2 = [
    { value: 68, suffix: '%', label: 'Food Waste Reduced', color: 'var(--gold-accent)' },
    { value: 450, suffix: 'Kg', label: 'CO2 Emission Reduction', color: 'var(--green-light)' },
    { value: 120, suffix: 'Kg', label: 'Methane Emission Reduction', color: 'var(--gold-accent)' },
    { value: 32, suffix: '%', label: 'Reduction In Agricultural Loss', color: 'var(--green-light)' },
];

export default function Impact() {
    return (
        <PageTransition>
            <section className="impact-page section">
                <AnimatedBackground />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                    {/* Header */}
                    <motion.div
                        className="impact-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            Our <span className="glow-text">Impact</span>
                        </h1>
                        <p>
                            Visualizing the circular economy — from harvest to soil renewal,
                            every step creates measurable environmental value.
                        </p>
                    </motion.div>

                    {/* Circular Diagram */}
                    <div className="circular-diagram">
                        <div className="circular-ring">
                            {circularNodes.map((node, i) => (
                                <motion.div
                                    key={i}
                                    className="circular-node glass"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{ scale: 1.06 }}
                                >
                                    <span className="circular-node-icon">{node.icon}</span>
                                    <h4>{node.title}</h4>
                                    <p>{node.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics Row 1 */}
                    <div className="impact-metrics">
                        {metrics1.map((m, i) => (
                            <GlassCard key={i} className="metric-card" delay={i * 0.1}>
                                <div className="metric-value" style={{ color: m.color }}>
                                    <AnimatedCounter end={m.value} suffix={m.suffix} />
                                </div>
                                <div className="metric-label">{m.label}</div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Metrics Row 2 */}
                    <div className="impact-metrics">
                        {metrics2.map((m, i) => (
                            <GlassCard key={i} className="metric-card" delay={i * 0.1}>
                                <div className="metric-value" style={{ color: m.color }}>
                                    <AnimatedCounter end={m.value} suffix={m.suffix} />
                                </div>
                                <div className="metric-label">{m.label}</div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* Story Section */}
                    <div className="story-section">
                        {stories.map((story, i) => (
                            <motion.div
                                key={i}
                                className={`story-block ${story.reverse ? 'reverse' : ''}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                            >
                                {/* Image Box */}
                                <div
                                    className="story-visual glass"
                                    style={{ background: story.bg }}
                                >
                                    <img
                                        src={story.image}
                                        alt={story.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '12px'
                                        }}
                                    />
                                </div>

                                {/* Text */}
                                <div className="story-text">
                                    <h2>{story.title}</h2>
                                    <p>{story.text}</p>
                                    <p>{story.text2}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </PageTransition>
    );
}