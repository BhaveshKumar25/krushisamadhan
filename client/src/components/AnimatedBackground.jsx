import { useMemo } from 'react';

export default function AnimatedBackground() {
    const particles = useMemo(() => {
        const dots = Array.from({ length: 18 }, (_, i) => ({
            id: `dot-${i}`,
            type: 'dot',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 10}s`,
            duration: `${10 + Math.random() * 12}s`,
        }));
        const leaves = Array.from({ length: 8 }, (_, i) => ({
            id: `leaf-${i}`,
            type: 'leaf',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * 8}s`,
            duration: `${14 + Math.random() * 10}s`,
            emoji: ['🍃', '🌿', '🍂', '☘️'][i % 4],
        }));
        return [...dots, ...leaves];
    }, []);

    return (
        <div className="animated-bg">
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="orb orb-3" />
            {particles.map((p) =>
                p.type === 'dot' ? (
                    <div
                        key={p.id}
                        className="particle particle-dot"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ) : (
                    <div
                        key={p.id}
                        className="particle particle-leaf"
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    >
                        {p.emoji}
                    </div>
                )
            )}
        </div>
    );
}
