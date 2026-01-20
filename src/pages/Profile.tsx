import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Package, MapPin, Settings, Edit2, Mail, Phone, Calendar, Truck } from 'lucide-react';

type TabType = 'profile' | 'orders' | 'addresses' | 'settings';

const demoUser = {
    name: 'Shantanu Kale',
    email: 'shantanu@example.com',
    phone: '+91 98765 43210',
    joinDate: 'January 2024',
    totalOrders: 12,
    totalSpent: 24580
};

const demoOrders = [
    {
        id: 'ORD-2024-001',
        date: '15 Jan 2024',
        status: 'Delivered',
        total: 1518,
        items: [
            { name: 'Deep Brown Kurta', qty: 1, price: 859 },
            { name: 'Solid Camel Shirt', qty: 1, price: 659 }
        ]
    },
    {
        id: 'ORD-2024-002',
        date: '8 Jan 2024',
        status: 'In Transit',
        total: 2048,
        items: [
            { name: 'Stone Beige Trousers', qty: 2, price: 949 },
            { name: 'Navy Kurta', qty: 1, price: 699 }
        ]
    },
    {
        id: 'ORD-2023-045',
        date: '28 Dec 2023',
        status: 'Delivered',
        total: 1658,
        items: [
            { name: 'Ink Black Floral Shirt', qty: 1, price: 799 },
            { name: 'Deep Brown Kurta', qty: 1, price: 859 }
        ]
    }
];

const demoAddresses = [
    {
        id: 1,
        type: 'Home',
        isDefault: true,
        name: 'Shantanu Kale',
        street: '123 Marine Drive',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400002',
        phone: '+91 98765 43210'
    },
    {
        id: 2,
        type: 'Work',
        isDefault: false,
        name: 'Shantanu Kale',
        street: '456 BKC Road',
        city: 'Mumbai',
        state: 'Maharashtra',
        pincode: '400051',
        phone: '+91 98765 43210'
    }
];

export const Profile = () => {
    const [activeTab, setActiveTab] = useState<TabType>('profile');

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'orders', label: 'Orders', icon: Package },
        { id: 'addresses', label: 'Addresses', icon: MapPin },
        { id: 'settings', label: 'Settings', icon: Settings }
    ];

    return (
        <section style={{
            paddingTop: '120px',
            paddingBottom: '80px',
            background: '#F5F2EB',
            minHeight: '100vh'
        }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    style={{ marginBottom: '3rem' }}
                >
                    <h1 className="text-serif" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        fontWeight: 400,
                        color: '#3E3B36',
                        marginBottom: '0.5rem'
                    }}>
                        My Account
                    </h1>
                    <p className="text-sans" style={{ fontSize: '1rem', color: '#7A7670', letterSpacing: '0.05em' }}>
                        Manage your profile, orders, and preferences
                    </p>
                </motion.div>

                {/* Tabs Navigation */}
                <div className="profile-tabs" style={{
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '2rem',
                    borderBottom: '1px solid #D9D5CA',
                    overflowX: 'auto',
                    paddingBottom: '0'
                }}>
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as TabType)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '1rem 1.5rem',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: activeTab === tab.id ? '2px solid #3E3B36' : '2px solid transparent',
                                    color: activeTab === tab.id ? '#3E3B36' : '#7A7670',
                                    cursor: 'pointer',
                                    fontSize: '0.95rem',
                                    fontWeight: activeTab === tab.id ? 500 : 400,
                                    transition: 'all 0.3s',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <Icon size={18} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    {activeTab === 'profile' && <ProfileSection user={demoUser} />}
                    {activeTab === 'orders' && <OrdersSection orders={demoOrders} />}
                    {activeTab === 'addresses' && <AddressesSection addresses={demoAddresses} />}
                    {activeTab === 'settings' && <SettingsSection />}
                </motion.div>
            </div>
        </section>
    );
};

// Profile Section Component
const ProfileSection = ({ user }: { user: typeof demoUser }) => {
    return (
        <div className="profile-grid-2" style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {/* Profile Card */}
            <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #6B4E3D, #C9A96E)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <User size={40} color="#fff" />
                    </div>
                    <h3 className="text-serif" style={{ fontSize: '1.5rem', color: '#3E3B36', marginBottom: '0.25rem' }}>
                        {user.name}
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: '#7A7670', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Premium Member
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <InfoRow icon={Mail} label="Email" value={user.email} />
                    <InfoRow icon={Phone} label="Phone" value={user.phone} />
                    <InfoRow icon={Calendar} label="Member Since" value={user.joinDate} />
                </div>

                <button style={{
                    width: '100%',
                    marginTop: '1.5rem',
                    padding: '0.9rem',
                    background: '#3E3B36',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}>
                    <Edit2 size={16} />
                    Edit Profile
                </button>
            </div>

            {/* Stats Card */}
            <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
                <h4 className="text-serif" style={{ fontSize: '1.3rem', color: '#3E3B36', marginBottom: '1.5rem' }}>
                    Account Overview
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <StatItem label="Total Orders" value={user.totalOrders.toString()} />
                    <StatItem label="Total Spent" value={`₹ ${user.totalSpent.toLocaleString()}`} />
                    <StatItem label="Loyalty Points" value="2,450" />
                    <StatItem label="Saved Items" value="8" />
                </div>
            </div>
        </div>
    );
};

// Orders Section Component
const OrdersSection = ({ orders }: { orders: typeof demoOrders }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {orders.map((order) => (
                <div key={order.id} className="profile-order-card" style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                }}>
                    <div className="profile-order-header" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '1rem',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div>
                            <h4 className="text-sans" style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                color: '#3E3B36',
                                marginBottom: '0.25rem'
                            }}>
                                Order {order.id}
                            </h4>
                            <p style={{ fontSize: '0.85rem', color: '#7A7670' }}>
                                Placed on {order.date}
                            </p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.4rem 1rem',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                background: order.status === 'Delivered' ? '#D4EDDA' : '#FFF3CD',
                                color: order.status === 'Delivered' ? '#155724' : '#856404',
                                marginBottom: '0.5rem'
                            }}>
                                {order.status === 'Delivered' ? '✓ ' : '🚚 '}{order.status}
                            </span>
                            <p className="text-serif" style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: '#3E3B36'
                            }}>
                                ₹ {order.total.toLocaleString()}
                            </p>
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid #E5E1D8',
                        paddingTop: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}>
                        {order.items.map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                fontSize: '0.9rem',
                                color: '#5A564C'
                            }}>
                                <span>{item.name} × {item.qty}</span>
                                <span>₹ {(item.price * item.qty).toLocaleString()}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                        <button style={{
                            flex: 1,
                            padding: '0.7rem',
                            background: 'transparent',
                            border: '1px solid #3E3B36',
                            borderRadius: '6px',
                            color: '#3E3B36',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}>
                            <Truck size={16} />
                            Track Order
                        </button>
                        <button style={{
                            flex: 1,
                            padding: '0.7rem',
                            background: '#3E3B36',
                            border: 'none',
                            borderRadius: '6px',
                            color: '#fff',
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                        }}>
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Addresses Section Component
const AddressesSection = ({ addresses }: { addresses: typeof demoAddresses }) => {
    return (
        <div className="profile-grid-2" style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
            {addresses.map((address) => (
                <div key={address.id} style={{
                    background: '#fff',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    position: 'relative'
                }}>
                    {address.isDefault && (
                        <span style={{
                            position: 'absolute',
                            top: '1rem',
                            right: '1rem',
                            padding: '0.3rem 0.8rem',
                            borderRadius: '12px',
                            fontSize: '0.7rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            background: '#C9A96E',
                            color: '#fff'
                        }}>
                            Default
                        </span>
                    )}
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        background: '#EFEAE0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem'
                    }}>
                        <MapPin size={20} color="#6B4E3D" />
                    </div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: '#3E3B36', marginBottom: '0.25rem' }}>
                        {address.type}
                    </h4>
                    <p style={{ fontSize: '0.9rem', color: '#5A564C', lineHeight: 1.6, marginBottom: '1rem' }}>
                        {address.name}<br />
                        {address.street}<br />
                        {address.city}, {address.state} - {address.pincode}<br />
                        {address.phone}
                    </p>
                    <button style={{
                        width: '100%',
                        padding: '0.7rem',
                        background: 'transparent',
                        border: '1px solid #3E3B36',
                        borderRadius: '6px',
                        color: '#3E3B36',
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}>
                        <Edit2 size={14} />
                        Edit Address
                    </button>
                </div>
            ))}

            {/* Add New Address Card */}
            <div style={{
                background: '#EFEAE0',
                borderRadius: '12px',
                padding: '1.5rem',
                border: '2px dashed #C9C5BA',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '250px',
                cursor: 'pointer',
                transition: 'all 0.3s'
            }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#6B4E3D'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#C9C5BA'}
            >
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem'
                }}>
                    <span style={{ fontSize: '2rem', color: '#6B4E3D' }}>+</span>
                </div>
                <p style={{ fontSize: '0.95rem', color: '#5A564C', fontWeight: 500 }}>
                    Add New Address
                </p>
            </div>
        </div>
    );
};

// Settings Section Component
const SettingsSection = () => {
    return (
        <div style={{ maxWidth: '800px' }}>
            <div style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
                <h4 className="text-serif" style={{ fontSize: '1.3rem', color: '#3E3B36', marginBottom: '1.5rem' }}>
                    Account Settings
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <SettingItem
                        title="Email Notifications"
                        description="Receive updates about orders and promotions"
                        defaultChecked={true}
                    />
                    <SettingItem
                        title="SMS Notifications"
                        description="Get order updates via SMS"
                        defaultChecked={true}
                    />
                    <SettingItem
                        title="Marketing Communications"
                        description="Receive newsletters and special offers"
                        defaultChecked={false}
                    />
                    <SettingItem
                        title="Two-Factor Authentication"
                        description="Add an extra layer of security"
                        defaultChecked={false}
                    />
                </div>

                <div style={{
                    marginTop: '2rem',
                    paddingTop: '2rem',
                    borderTop: '1px solid #E5E1D8'
                }}>
                    <button style={{
                        padding: '0.9rem 2rem',
                        background: '#D9534F',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        cursor: 'pointer'
                    }}>
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const InfoRow = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            background: '#EFEAE0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
        }}>
            <Icon size={18} color="#6B4E3D" />
        </div>
        <div style={{ flex: 1 }}>
            <p style={{ fontSize: '0.75rem', color: '#7A7670', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {label}
            </p>
            <p style={{ fontSize: '0.95rem', color: '#3E3B36' }}>{value}</p>
        </div>
    </div>
);

const StatItem = ({ label, value }: { label: string, value: string }) => (
    <div style={{
        padding: '1rem',
        background: '#EFEAE0',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }}>
        <span style={{ fontSize: '0.9rem', color: '#5A564C' }}>{label}</span>
        <span className="text-serif" style={{ fontSize: '1.2rem', fontWeight: 600, color: '#3E3B36' }}>{value}</span>
    </div>
);

const SettingItem = ({ title, description, defaultChecked }: { title: string, description: string, defaultChecked: boolean }) => {
    const [checked, setChecked] = useState(defaultChecked);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem',
            background: '#FAFAF8',
            borderRadius: '8px'
        }}>
            <div>
                <h5 style={{ fontSize: '0.95rem', fontWeight: 500, color: '#3E3B36', marginBottom: '0.25rem' }}>
                    {title}
                </h5>
                <p style={{ fontSize: '0.85rem', color: '#7A7670' }}>
                    {description}
                </p>
            </div>
            <label style={{ position: 'relative', display: 'inline-block', width: '50px', height: '26px', cursor: 'pointer' }}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                />
                <span style={{
                    position: 'absolute',
                    inset: 0,
                    background: checked ? '#6B4E3D' : '#ccc',
                    borderRadius: '26px',
                    transition: '0.3s'
                }}>
                    <span style={{
                        position: 'absolute',
                        left: checked ? '26px' : '4px',
                        top: '4px',
                        width: '18px',
                        height: '18px',
                        background: '#fff',
                        borderRadius: '50%',
                        transition: '0.3s'
                    }} />
                </span>
            </label>
        </div>
    );
};
