import React, { useEffect } from 'react';
import { CheckCircle2, ExternalLink } from 'lucide-react';
import './SuccessModal.css';

export default function SuccessModal({ isOpen, onClose, message, submessage, redirectUrl }) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleAction = () => {
        if (redirectUrl) {
            window.open(redirectUrl, '_blank');
        }
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content reveal-modal" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="success-icon-wrapper">
                        <CheckCircle2 size={48} className="success-icon" />
                    </div>
                </div>
                <div className="modal-body">
                    <h2 className="modal-title">{message || "Request Sent Successfully!"}</h2>
                    <p className="modal-text">{submessage || "We are redirecting you to WhatsApp to complete your request."}</p>
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={handleAction}>
                        Continue to WhatsApp <ExternalLink size={18} style={{ marginLeft: '8px' }} />
                    </button>
                </div>
            </div>
        </div>
    );
}
