import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';

const steps = [
    {
        icon: '🌾',
        title: 'Farmer Uploads Harvest',
        desc: 'Farmers list their Grade B, Grade C, or rotten harvests with images, quantity, and location data through our intuitive portal.',
        tag: 'Upload',
        tagClass: 'tag-green',
    },
    {
        icon: '🤖',
        title: 'AI-Assisted Categorization',
        desc: 'Our intelligent system verifies and categorizes the harvest grade, ensuring accurate classification for optimal redistribution.',
        tag: 'Classify',
        tagClass: 'tag-blue',
    },
    {
        icon: '📍',
        title: 'Area-wise Matching',
        desc: 'The platform matches listings with buyers within a 100km radius, minimizing transportation emissions and ensuring freshness.',
        tag: 'Within 100km',
        tagClass: 'tag-green',
    },
    {
        icon: '🏨',
        title: 'Grade B → Commercial Buyers',
        desc: 'Hotels, mess halls, food processing factories, and wholesale vendors receive quality Grade B produce for commercial use.',
        tag: 'Grade B',
        tagClass: 'tag-green',
    },
    {
        icon: '🐄',
        title: 'Grade C → Animal Care Centers',
        desc: 'Animal shelters and care centers receive Grade C harvests as affordable, reliable feed supply from local farms.',
        tag: 'Grade C',
        tagClass: 'tag-gold',
    },
    {
        icon: '🌱',
        title: 'Rotten → Compost Production',
        desc: 'Composting companies convert unusable produce into nutrient-rich soil amendments, returning value to the earth.',
        tag: 'Compost',
        tagClass: 'tag-brown',
    },
    {
        icon: '♻️',
        title: 'Circular Sustainability Loop',
        desc: 'Compost enriches soil for new harvests. The cycle continues — zero waste, maximum value, sustainable agriculture.',
        tag: 'Full Circle',
        tagClass: 'tag-blue',
    },
];

const loopNodes = ['Farm', 'Harvest', 'Categorize', 'Redistribute', 'Utilize', 'Compost', 'Soil'];

export default function HowItWorks() {
    return (
        <PageTransition>
            <section className="flow-page section">
                <AnimatedBackground />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        className="flow-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            How <span className="glow-text">It Works</span>
                        </h1>
                        <p>
                            From farm to sustainable redistribution — every step is designed
                            to maximize value and minimize waste.
                        </p>
                    </motion.div>

                    <div className="flow-timeline">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                className="flow-step"
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.08,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                            >
                                <div className="flow-step-icon">{step.icon}</div>
                                <div className="flow-step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                    <span className={`flow-step-tag ${step.tagClass}`}>
                                        {step.tag}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        className="flow-loop-card glass"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3>
                            🔄 The <span className="glow-text">Circular Loop</span>
                        </h3>
                        <p>
                            Every stage feeds back into the ecosystem — creating a
                            self-sustaining cycle of agricultural sustainability.
                        </p>
                        <div className="loop-visual">
                            {loopNodes.map((node, i) => (
                                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                    <motion.span
                                        className="loop-node"
                                        whileHover={{ scale: 1.08, borderColor: 'rgba(34,197,94,0.4)' }}
                                    >
                                        {node}
                                    </motion.span>
                                    {i < loopNodes.length - 1 && <span className="loop-arrow">→</span>}
                                </span>
                            ))}
                            <span className="loop-arrow">↻</span>
                        </div>
                    </motion.div>
                </div>
            </section>
        </PageTransition>
    );
}
