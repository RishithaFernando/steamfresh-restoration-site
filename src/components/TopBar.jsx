import { MapPin, Mail } from 'lucide-react';
import './TopBar.css';

export default function TopBar() {
    return (
        <div className="top-bar bg-ink text-white">
            <div className="container top-bar-flex">
                <div className="tb-left">
                    <MapPin size={14} className="text-red-lt" />
                    <span>Noble Park, Melbourne</span>
                </div>
                <div className="tb-right">
                    <Mail size={14} className="text-red-lt" />
                    <a href="mailto:info@steamfreshcarpetcleaning.com.au">info@steamfreshcarpetcleaning.com.au</a>
                </div>
            </div>
        </div>
    );
}

