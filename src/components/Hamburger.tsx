import { motion } from 'framer-motion';

interface HamburgerProps {
    isOpen: boolean;
    onClick: () => void;
    color?: string;
}

export const Hamburger = ({ isOpen, onClick, color = 'currentColor' }: HamburgerProps) => {
    return (
        <div
            className={`hamburger ${isOpen ? 'active' : ''}`}
            onClick={onClick}
            style={{ color }}
        >
            <motion.div
                className="hamburger-line"
                animate={{
                    rotate: isOpen ? 45 : 0,
                    y: isOpen ? 7 : 0
                }}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            />
            <motion.div
                className="hamburger-line"
                animate={{
                    opacity: isOpen ? 0 : 1,
                    scaleX: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            />
            <motion.div
                className="hamburger-line"
                animate={{
                    rotate: isOpen ? -45 : 0,
                    y: isOpen ? -7 : 0
                }}
                transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            />
        </div>
    );
};
