import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import AnimatedBackground from '../components/AnimatedBackground';

const grades = [
    {
        id: 'B',
        icon: '🥬',
        label: 'Grade B',
        desc: 'Suitable for commercial buyers',
        color: 'var(--green-glow)',
    },
    {
        id: 'C',
        icon: '🐄',
        label: 'Grade C',
        desc: 'Suitable for animal feed',
        color: 'var(--gold-accent)',
    },
    {
        id: 'R',
        icon: '🌱',
        label: 'Rotten',
        desc: 'Suitable for composting',
        color: 'var(--compost-brown)',
    },
];

const radiusOptions = [25, 50, 75, 100];

export default function FarmerPortal() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        harvestName: '',
        quantity: '',
        grade: '',
        description: '',
        radius: 50,
        image: null,
        imagePreview: null,
    });
    const [submitted, setSubmitted] = useState(false);

    const updateForm = (key, value) =>
        setForm((prev) => ({ ...prev, [key]: value }));

    const handleImageChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            updateForm('image', file);
            updateForm('imagePreview', URL.createObjectURL(file));
        }
    };

    const removeImage = () => {
        updateForm('image', null);
        updateForm('imagePreview', null);
    };

    const handleSubmit = () => {
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setStep(1);
            setForm({
                harvestName: '',
                quantity: '',
                grade: '',
                description: '',
                radius: 50,
                image: null,
                imagePreview: null,
            });
        }, 3000);
    };

    const canAdvance =
        step === 1
            ? form.harvestName && form.quantity
            : step === 2
                ? form.grade
                : true;

    return (
        <PageTransition>
            <section className="portal-page section">
                <AnimatedBackground />
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <motion.div
                        className="portal-header"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1>
                            🌾 <span className="glow-text">Farmer Portal</span>
                        </h1>
                        <p>
                            Upload your harvest details and let our platform connect you
                            with the right buyers in your area.
                        </p>
                    </motion.div>

                    {/* Progress */}
                    <div className="farmer-dashboard">
                        <motion.div
                            className="glass"
                            style={{
                                display: 'flex',
                                gap: 4,
                                padding: 6,
                                borderRadius: 40,
                                marginBottom: 30,
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {[1, 2, 3].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStep(s)}
                                    style={{
                                        flex: 1,
                                        padding: '10px 0',
                                        borderRadius: 30,
                                        background:
                                            step === s
                                                ? 'linear-gradient(135deg, var(--green-glow), #16a34a)'
                                                : 'transparent',
                                        color: step === s ? '#fff' : 'var(--text-muted)',
                                        fontWeight: step === s ? 600 : 400,
                                        fontSize: '0.85rem',
                                        transition: 'all 0.4s',
                                        border: 'none',
                                        cursor: 'pointer',
                                    }}
                                >
                                    {s === 1 ? '① Details' : s === 2 ? '② Grade' : '③ Preview'}
                                </button>
                            ))}
                        </motion.div>

                        <AnimatePresence mode="wait">
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    className="form-card glass"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <h3>📋 Harvest Details</h3>
                                    <div className="form-group">
                                        <label>Harvest Name</label>
                                        <input
                                            className="form-input"
                                            placeholder="e.g. Tomatoes, Rice, Wheat..."
                                            value={form.harvestName}
                                            onChange={(e) => updateForm('harvestName', e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Quantity (kg)</label>
                                        <input
                                            className="form-input"
                                            type="number"
                                            min="0"
                                            step="1"
                                            placeholder="e.g. 500"
                                            value={form.quantity}
                                            onChange={(e) => {
                                                const value = e.target.value;

                                                if (value === '') {
                                                    updateForm('quantity', '');
                                                    return;
                                                }

                                                const number = Math.max(0, Number(value));
                                                updateForm('quantity', number);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description (Optional)</label>
                                        <textarea
                                            className="form-input"
                                            placeholder="Describe the harvest condition, freshness, etc."
                                            value={form.description}
                                            onChange={(e) => updateForm('description', e.target.value)}
                                        />
                                    </div>

                                    {/* Image Upload */}
                                    <div className="form-group">
                                        <label>Upload Image</label>
                                        {!form.imagePreview ? (
                                            <label className="image-upload-area">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    style={{ display: 'none' }}
                                                    onChange={handleImageChange}
                                                />
                                                <div className="upload-icon">📷</div>
                                                <div className="upload-text">
                                                    Click to upload a photo of your harvest
                                                </div>
                                                <div className="upload-hint">
                                                    JPG, PNG up to 10MB
                                                </div>
                                            </label>
                                        ) : (
                                            <div className="image-preview">
                                                <img src={form.imagePreview} alt="Harvest preview" />
                                                <button
                                                    className="image-preview-remove"
                                                    onClick={removeImage}
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            )}

                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    className="form-card glass"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <h3>🏷️ Select Grade</h3>
                                    <div className="grade-selector">
                                        {grades.map((g) => (
                                            <motion.div
                                                key={g.id}
                                                className={`grade-option ${form.grade === g.id ? 'selected' : ''
                                                    }`}
                                                onClick={() => updateForm('grade', g.id)}
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                style={
                                                    form.grade === g.id
                                                        ? { borderColor: g.color }
                                                        : {}
                                                }
                                            >
                                                <div className="grade-option-icon">{g.icon}</div>
                                                <div className="grade-option-label">{g.label}</div>
                                                <div className="grade-option-desc">{g.desc}</div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="form-group" style={{ marginTop: 30 }}>
                                        <label>Distribution Radius</label>
                                        <div className="radius-selector">
                                            <div className="radius-display">
                                                {form.radius}
                                                <span> km</span>
                                            </div>
                                            <div className="radius-options">
                                                {radiusOptions.map((r) => (
                                                    <motion.button
                                                        key={r}
                                                        className={`radius-option ${form.radius === r ? 'selected' : ''
                                                            }`}
                                                        onClick={() => updateForm('radius', r)}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        {r}km
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    className="form-card glass"
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    <h3>👁️ Review &amp; Submit</h3>
                                    <div
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: '1fr 1fr',
                                            gap: 16,
                                            marginBottom: 24,
                                        }}
                                    >
                                        <div className="glass-subtle" style={{ padding: 18 }}>
                                            <div
                                                style={{
                                                    fontSize: '0.78rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Harvest
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                                                {form.harvestName || '—'}
                                            </div>
                                        </div>
                                        <div className="glass-subtle" style={{ padding: 18 }}>
                                            <div
                                                style={{
                                                    fontSize: '0.78rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Quantity
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                                                {form.quantity ? `${form.quantity} kg` : '—'}
                                            </div>
                                        </div>
                                        <div className="glass-subtle" style={{ padding: 18 }}>
                                            <div
                                                style={{
                                                    fontSize: '0.78rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Grade
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                                                {grades.find((g) => g.id === form.grade)?.label || '—'}
                                            </div>
                                        </div>
                                        <div className="glass-subtle" style={{ padding: 18 }}>
                                            <div
                                                style={{
                                                    fontSize: '0.78rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Radius
                                            </div>
                                            <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                                                {form.radius} km
                                            </div>
                                        </div>
                                    </div>
                                    {form.description && (
                                        <div
                                            className="glass-subtle"
                                            style={{ padding: 18, marginBottom: 24 }}
                                        >
                                            <div
                                                style={{
                                                    fontSize: '0.78rem',
                                                    color: 'var(--text-muted)',
                                                    marginBottom: 4,
                                                }}
                                            >
                                                Description
                                            </div>
                                            <div style={{ fontSize: '0.92rem' }}>
                                                {form.description}
                                            </div>
                                        </div>
                                    )}
                                    {form.imagePreview && (
                                        <div style={{ marginBottom: 24 }}>
                                            <img
                                                src={form.imagePreview}
                                                alt="Harvest"
                                                style={{
                                                    maxHeight: 180,
                                                    borderRadius: 'var(--radius-md)',
                                                    objectFit: 'cover',
                                                    width: '100%',
                                                }}
                                            />
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Navigation buttons */}
                        <motion.div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 20,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <button
                                className="btn-secondary"
                                onClick={() => setStep(Math.max(1, step - 1))}
                                style={{ opacity: step === 1 ? 0.3 : 1, pointerEvents: step === 1 ? 'none' : 'auto' }}
                            >
                                ← Back
                            </button>
                            {step < 3 ? (
                                <button
                                    className="btn-primary"
                                    onClick={() => setStep(step + 1)}
                                    disabled={!canAdvance}
                                    style={{ opacity: canAdvance ? 1 : 0.5 }}
                                >
                                    Next →
                                </button>
                            ) : (
                                <button className="btn-primary" onClick={handleSubmit}>
                                    🌿 Submit Harvest
                                </button>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Success Modal */}
            <AnimatePresence>
                {submitted && (
                    <motion.div
                        className="success-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="success-modal glass"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', damping: 20 }}
                        >
                            <span className="success-icon">✅</span>
                            <h2>Harvest Submitted!</h2>
                            <p>
                                Your listing is now being matched with buyers within a{' '}
                                {form.radius}km radius. You&apos;ll be notified when a match is found.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
}
