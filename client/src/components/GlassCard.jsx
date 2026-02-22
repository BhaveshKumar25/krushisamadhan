import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, hover = true, ...props }) {
    return (
        <motion.div
            className={`glass ${className}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
            whileHover={hover ? { y: -4, transition: { duration: 0.3 } } : undefined}
            {...props}
        >
            {children}
        </motion.div>
    );
}
