import React, { useState, useEffect } from 'react';
import { Plus, Trash2, ExternalLink, MessageCircle, LayoutGrid, Package, Settings, X } from 'lucide-react';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categories, setCategories] = useState(['Personalized', 'Corporate', 'Luxury']);
  const [newCategory, setNewCategory] = useState('');
  
  const [formData, setFormData] = useState({
    name: '', desc: '', price: '', whatsapp: '', external: '', category: 'Personalized'
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('g4u_products')) || [];
    setProducts(saved);
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    const updated = [...products, { ...formData, id: Date.now() }];
    setProducts(updated);
    localStorage.setItem('g4u_products', JSON.stringify(updated));
    setFormData({ name: '', desc: '', price: '', whatsapp: '', external: '', category: 'Personalized' });
    setIsModalOpen(false);
  };

  const deleteProduct = (id) => {
    const filtered = products.filter(p => p.id !== id);
    setProducts(filtered);
    localStorage.setItem('g4u_products', JSON.stringify(filtered));
  };

  return (
    <div className="flex min-h-screen bg-[#F8F9FA] font-sans">
      
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-[#1A1A1A] text-white hidden md:flex flex-col p-6 fixed h-full">
        <div className="mb-10">
          <h1 className="text-2xl font-serif italic text-[#C5A059]">Gift 4 U</h1>
          <p className="text-[10px] tracking-[3px] uppercase opacity-50">Admin Panel</p>
        </div>
        
        <nav className="space-y-4 flex-1">
          <div className="flex items-center gap-3 text-[#C5A059] bg-white/5 p-3 rounded-lg cursor-pointer">
            <LayoutGrid size={20} /> <span className="font-medium">Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white p-3 transition cursor-pointer">
            <Package size={20} /> <span>All Products</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400 hover:text-white p-3 transition cursor-pointer">
            <Settings size={20} /> <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 md:ml-64 p-4 md:p-10">
        
        {/* Top Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Inventory Overview</h2>
            <p className="text-gray-500 text-sm">Manage your curated collection</p>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-[#C5A059] hover:bg-[#A68648] text-white px-5 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-[#C5A059]/20"
          >
            <Plus size={18} /> Add Product
          </button>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-sm font-medium">Total Products</p>
            <h3 className="text-3xl font-bold mt-1">{products.length}</h3>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-gray-400 text-sm font-medium">Active Categories</p>
            <h3 className="text-3xl font-bold mt-1 text-[#C5A059]">{categories.length}</h3>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-[#F5F5F0] text-[#C5A059] text-[10px] font-bold uppercase rounded-full">
                    {product.category}
                  </span>
                  <button onClick={() => deleteProduct(product.id)} className="text-gray-300 hover:text-red-500 transition">
                    <Trash2 size={18} />
                  </button>
                </div>
                
                <h4 className="text-lg font-bold text-gray-800 mb-1">{product.name}</h4>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.desc}</p>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                  <div className="flex gap-2">
                    <a href={product.whatsapp} target="_blank" className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition">
                      <MessageCircle size={16} />
                    </a>
                    <a href={product.external} target="_blank" className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* --- ADD PRODUCT MODAL --- */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="bg-[#1A1A1A] p-6 text-white flex justify-between items-center">
              <h3 className="text-xl font-semibold">New Product Details</h3>
              <button onClick={() => setIsModalOpen(false)} className="hover:rotate-90 transition-transform">
                <X size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSave} className="p-8 space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Product Title</label>
                  <input required className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none" 
                    value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>
                
                <div className="col-span-1">
                  <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Price Tag</label>
                  <input placeholder="₹ 0.00" className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none" 
                    value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} />
                </div>

                <div className="col-span-1">
                  <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Category</label>
                  <select className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                    value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})}>
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase text-gray-400 mb-1 block">Description</label>
                <textarea rows="2" className="w-full bg-gray-50 border-none p-3 rounded-xl focus:ring-2 focus:ring-[#C5A059] outline-none"
                  value={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input placeholder="WhatsApp URL" className="bg-gray-50 p-3 rounded-xl text-sm outline-none border-l-4 border-green-400"
                  value={formData.whatsapp} onChange={(e) => setFormData({...formData, whatsapp: e.target.value})} />
                <input placeholder="YouTube URL" className="bg-gray-50 p-3 rounded-xl text-sm outline-none border-l-4 border-red-400"
                  value={formData.external} onChange={(e) => setFormData({...formData, external: e.target.value})} />
              </div>

              <button type="submit" className="w-full bg-[#C5A059] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#C5A059]/30 hover:brightness-110 transition">
                CONFIRM & ADD TO SHOP
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;