import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <h3>🌿 KrishiSamadhan</h3>
                        <p>
                            Transforming agricultural waste into sustainable value through
                            a circular economy model that connects farmers, buyers, and
                            composting partners.
                        </p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-col">
                            <h4>Platform</h4>
                            <Link to="/flow">How It Works</Link>
                            <Link to="/impact">Our Impact</Link>
                            <Link to="/farmer">Farmer Portal</Link>
                            <Link to="/buyer">Buyer Portal</Link>
                        </div>
                        <div className="footer-col">
                            <h4>Resources</h4>
                            <a href="#sustainability">Sustainability</a>
                            <a href="#community">Community</a>
                            <a href="#research">Research</a>
                            <a href="#partners">Partners</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 KrishiSamadhan. Building a zero-waste future.</span>
                    <span>🌱 Every harvest matters</span>
                </div>
            </div>
        </footer>
    );
}
