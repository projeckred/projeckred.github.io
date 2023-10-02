import './Components.css'
import React from 'react';

interface DonateButtonProps {
    text?: string;  // The '?' means that the prop is optional
}

export const DonateButton: React.FC<DonateButtonProps> = ({ text = "Donate Now" }) => {
    return (
        <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNdxpuKbsNqgBAx_to1Sgkl4q_n4wdlErPjVWPHsC-w4n_qQ/viewform?usp=sf_link"
            target="_blank"
            className="donate-button"
            rel="noreferrer">
            {text}
        </a>
    );
}
