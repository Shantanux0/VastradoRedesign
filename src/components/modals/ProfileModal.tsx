import { motion, AnimatePresence } from 'framer-motion';
import { X, User as UserIcon, Mail, Phone, MapPin } from 'lucide-react';

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const demoUser = {
    name: 'Shantanu Kale',
    email: 'shantanu@example.com',
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra'
};

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 200,
                            backdropFilter: 'blur(4px)'
                        }}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%',
                            maxWidth: '500px',
                            background: '#F5F2EB',
                            borderRadius: '12px',
                            padding: '2rem',
                            zIndex: 201,
                            boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                        }}
                    >
                        {/* Header */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <h3 className="text-serif" style={{ fontSize: '1.5rem', color: '#3E3B36' }}>My Account</h3>
                            <X size={24} onClick={onClose} style={{ cursor: 'pointer', color: '#3E3B36' }} />
                        </div>

                        {/* Profile Icon */}
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <div style={{
                                width: '80px',
                                height: '80px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, #6B4E3D, #C9A96E)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto',
                                marginBottom: '1rem'
                            }}>
                                <UserIcon size={36} color="#fff" />
                            </div>
                            <h4 className="text-serif" style={{ fontSize: '1.3rem', color: '#3E3B36', marginBottom: '0.25rem' }}>
                                {demoUser.name}
                            </h4>
                            <span style={{ fontSize: '0.85rem', color: '#7A7670', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Premium Member
                            </span>
                        </div>

                        {/* User Details */}
                        <div style={{ marginBottom: '2rem' }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                background: '#EFEAE0',
                                borderRadius: '8px',
                                marginBottom: '0.75rem'
                            }}>
                                <Mail size={20} color="#6B4E3D" />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#7A7670', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Email
                                    </p>
                                    <p style={{ fontSize: '0.95rem', color: '#3E3B36' }}>{demoUser.email}</p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                background: '#EFEAE0',
                                borderRadius: '8px',
                                marginBottom: '0.75rem'
                            }}>
                                <Phone size={20} color="#6B4E3D" />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#7A7670', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Phone
                                    </p>
                                    <p style={{ fontSize: '0.95rem', color: '#3E3B36' }}>{demoUser.phone}</p>
                                </div>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                background: '#EFEAE0',
                                borderRadius: '8px'
                            }}>
                                <MapPin size={20} color="#6B4E3D" />
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: '#7A7670', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        Location
                                    </p>
                                    <p style={{ fontSize: '0.95rem', color: '#3E3B36' }}>{demoUser.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <button
                                style={{
                                    flex: 1,
                                    padding: '0.9rem',
                                    background: '#3E3B36',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.background = '#2D2A26'}
                                onMouseLeave={(e) => e.currentTarget.style.background = '#3E3B36'}
                            >
                                Edit Profile
                            </button>
                            <button
                                style={{
                                    flex: 1,
                                    padding: '0.9rem',
                                    background: 'transparent',
                                    color: '#3E3B36',
                                    border: '1px solid #3E3B36',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#3E3B36';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                    e.currentTarget.style.color = '#3E3B36';
                                }}
                            >
                                Sign Out
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
