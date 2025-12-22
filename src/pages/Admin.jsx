import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, MessageCircle, LayoutGrid, Package, Settings, X, Search, Image as ImageIcon, Filter } from 'lucide-react';

const AdminDashboard = () => {
    const [products, setProducts] = useState([]);
    const [activeView, setActiveView] = useState('dashboard');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = ['All', 'Ladies Purse', 'Combo Gifts', 'Luxury Items', 'Perfumes'];

    const [formData, setFormData] = useState({
        name: '', category: 'Ladies Purse', shortDescription: '', price: '',
        image: '', whatsapp: 'https://wa.me/91XXXXXXXXXX', external: ''
    });

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                if (data && data.products) setProducts(data.products);
            })
            .catch(err => console.error("Error loading JSON:", err));
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        const newProduct = { ...formData, id: `ID-${Date.now()}` };
        setProducts([newProduct, ...products]);
        setIsModalOpen(false);
        setFormData({ name: '', category: 'Ladies Purse', shortDescription: '', price: '', image: '', whatsapp: 'https://wa.me/91XXXXXXXXXX', external: '' });
    };

    const deleteProduct = (id) => setProducts(products.filter(p => p.id !== id));

    // Filter Logic
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="flex min-h-screen bg-[#FDFDFB] font-sans text-slate-900">

            {/* SIDEBAR */}
            <aside className="w-64 bg-[#121212] text-white hidden lg:flex flex-col p-6 fixed h-full z-20 shadow-2xl border-r border-[#C5A059]/10">
                <div className="mb-10 px-2">
                    <h1 className="text-2xl font-serif italic text-[#C5A059]">Gift 4 U</h1>
                    <p className="text-[9px] uppercase tracking-[3px] text-gray-500 mt-1 font-bold">Admin Suite</p>
                </div>

                <nav className="space-y-2 flex-1">
                    {[
                        { id: 'dashboard', icon: <LayoutGrid size={18} />, label: 'Dashboard' },
                        { id: 'all-products', icon: <Package size={18} />, label: 'Inventory' },
                        { id: 'settings', icon: <Settings size={18} />, label: 'Settings' }
                    ].map(item => (
                        <button key={item.id} onClick={() => setActiveView(item.id)}
                            className={`w-full flex items-center gap-3 p-3.5 rounded-xl transition-all ${activeView === item.id ? 'bg-[#C5A059] text-white shadow-lg shadow-[#C5A059]/20' : 'hover:bg-white/5 text-gray-400'}`}>
                            {item.icon} <span className="text-sm font-semibold">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main className="flex-1 lg:ml-64 p-4 md:p-8 lg:p-12">

                {/* VIEW: DASHBOARD */}
                {activeView === 'dashboard' && (
                    <div className="max-w-6xl mx-auto">
                        <header className="flex justify-between items-center mb-10">
                            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Overview</h2>
                            <button onClick={() => setIsModalOpen(true)} className="bg-[#1A1A1A] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-[#C5A059] transition-all shadow-xl">
                                <Plus size={18} /> <span className="font-bold text-xs uppercase tracking-widest">New Gift</span>
                            </button>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm border-t-4 border-t-[#C5A059]">
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Inventory Size</p>
                                <h3 className="text-4xl font-black mt-2">{products.length}</h3>
                            </div>
                        </div>
                    </div>
                )}

                {/* VIEW: INVENTORY (Small Cards + Filter) */}
                {activeView === 'all-products' && (
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col gap-6 mb-8">
                            <div className="flex justify-between items-center">
                                <h2 className="text-2xl font-black text-slate-900">Inventory Management</h2>
                            </div>

                            {/* FILTER BAR */}
                            <div className="flex flex-wrap items-center gap-2 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="px-3 text-slate-400"><Filter size={16} /></div>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${selectedCategory === cat ? 'bg-[#1A1A1A] text-[#C5A059]' : 'text-slate-500 hover:bg-slate-50'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* SMALLER COMPACT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filteredProducts.map((product) => (
                                <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                                    <div className="relative h-44 overflow-hidden bg-slate-50">
                                        <img
                                            src={'https://eroloc.com/cdn/shop/files/PlayfulPanda_02.jpg?v=1726440263'}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-2 left-2 bg-white/90 backdrop-blur text-[#C5A059] px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-tighter">
                                            {product.category}
                                        </span>
                                    </div>

                                    <div className="p-4">
                                        <h4 className="text-sm font-bold text-slate-900 mb-1 truncate">{product.name}</h4>
                                        <p className="text-slate-400 text-[10px] mb-3 line-clamp-1 font-medium">{product.shortDescription}</p>

                                        <div className="flex justify-between items-center pt-3 border-t border-slate-50">
                                            <span className="text-lg font-black text-slate-900">₹{product.price}</span>
                                            <div className="flex gap-1">
                                                <button onClick={() => deleteProduct(product.id)} className="p-2 text-slate-300 hover:text-red-500 transition-colors">
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* VIEW: SETTINGS */}
                {activeView === 'settings' && (
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                            <h2 className="text-xl font-bold mb-6">Store Configuration</h2>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Secret Access Key</p>
                                    <p className="text-xs font-mono">ankur-admin-9482</p>
                                </div>
                                <button className="w-full bg-[#1A1A1A] text-white py-3 rounded-xl text-sm font-bold uppercase tracking-widest shadow-lg">Save Settings</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            {/* MODAL: ADD PRODUCT */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                    <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">

                        {/* Modal Header */}
                        <div className="bg-[#1A1A1A] p-6 text-white flex justify-between items-center border-b border-[#C5A059]">
                            <div>
                                <h3 className="text-xl font-serif italic text-[#C5A059]">Curate New Item</h3>
                                <p className="text-[9px] uppercase tracking-widest text-gray-400">Add to Boutique Collection</p>
                            </div>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="hover:bg-white/10 p-2 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <form onSubmit={handleSave} className="p-8 space-y-5 max-h-[85vh] overflow-y-auto custom-scrollbar">

                            {/* LOCAL IMAGE UPLOAD SECTION */}
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-slate-400 ml-1 tracking-widest">Product Presentation</label>
                                <div className="relative group flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-slate-200 rounded-[2rem] bg-slate-50 hover:bg-slate-100 hover:border-[#C5A059] transition-all cursor-pointer overflow-hidden">

                                    {formData.image ? (
                                        <>
                                            <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                                <p className="text-white text-xs font-bold uppercase tracking-widest">Change Image</p>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex flex-col items-center text-slate-400">
                                            <ImageIcon size={32} className="mb-2 text-[#C5A059]" />
                                            <p className="text-[10px] font-bold uppercase">Click to upload from computer</p>
                                        </div>
                                    )}

                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        onChange={(e) => {
                                            const file = e.target.files[0];
                                            if (file) {
                                                const reader = new FileReader();
                                                reader.onloadend = () => {
                                                    setFormData({ ...formData, image: reader.result }); // Saves Base64 string to variable
                                                };
                                                reader.readAsDataURL(file);
                                            }
                                        }}
                                    />
                                </div>
                            </div>

                            {/* BASIC INFO */}
                            <div className="space-y-4">
                                <div className="group">
                                    <input
                                        required
                                        placeholder="Item Name"
                                        className="w-full p-4 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#C5A059] transition-all font-medium"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                                        <input
                                            placeholder="Price"
                                            className="w-full p-4 pl-8 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#C5A059] font-bold"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                        />
                                    </div>
                                    <select
                                        className="w-full p-4 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#C5A059] text-slate-500 font-bold appearance-none cursor-pointer"
                                        value={formData.category}
                                        onChange={e => setFormData({ ...formData, category: e.target.value })}
                                    >
                                        {categories.filter(c => c !== 'All').map(c => <option key={c}>{c}</option>)}
                                    </select>
                                </div>
                            </div>

                            {/* DESCRIPTION */}
                            <textarea
                                placeholder="Elegant Short Description..."
                                className="w-full p-4 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#C5A059] h-24 resize-none text-sm leading-relaxed"
                                value={formData.shortDescription}
                                onChange={e => setFormData({ ...formData, shortDescription: e.target.value })}
                            />

                            {/* EXTERNAL LINKS */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-2xl border border-red-100">
                                    <ExternalLink size={18} className="text-red-500" />
                                    <input
                                        placeholder="YouTube / Video Link"
                                        className="bg-transparent outline-none text-xs w-full text-red-700 font-medium"
                                        value={formData.external}
                                        onChange={e => setFormData({ ...formData, external: e.target.value })}
                                    />
                                </div>
                            </div>

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="w-full bg-[#1A1A1A] text-[#C5A059] py-5 rounded-[1.5rem] font-black uppercase tracking-[4px] shadow-2xl hover:bg-black transition-all active:scale-[0.98]"
                            >
                                Publish Product
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;