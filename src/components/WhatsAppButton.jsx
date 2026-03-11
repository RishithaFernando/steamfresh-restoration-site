import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/61413943154"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
            aria-label="Chat on WhatsApp"
        >
            <div className="wa-tooltip">Chat with us</div>
            <div className="wa-icon-wrap">
                <MessageCircle size={28} color="white" fill="white" />
            </div>
        </a>
    );
}
