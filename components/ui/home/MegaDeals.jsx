'use client';
import React, { useEffect } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { useRouter as useNavigate } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '@/store/actions/productActions';
const printerImg = "/assets/printer.webp";


const MegaDeals = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);
    const { loading, products } = productList;

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    // Filter products that have a discount (oldPrice > price) and take top 8
    const deals = products
        ? products
            .filter(p => p.oldPrice > p.price)
            .sort((a, b) => (b.oldPrice - b.price) - (a.oldPrice - a.price))
            .slice(0, 8)
        : [];

    const handleCardClick = (slug, id) => {
        navigate.push(`/product/${slug || id}`);
    };

    if (loading && (!products || products.length === 0)) return null;
    if (!loading && deals.length === 0) return null; // Don't show section if no deals

    return (
        <section className="py-12 bg-white">
            <div className="mb-8">
                <h2 className="text-3xl md:text-left text-center font-black text-slate-900 mb-2 uppercase tracking-tight">Print Power with Mega Deals</h2>
                <p className="text-slate-400 md:text-left text-center font-bold text-xs uppercase tracking-widest">Shop smart and print best with our special printer deals.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {deals.map((deal) => (
                    <div
                        key={deal._id}
                        onClick={() => handleCardClick(deal.slug, deal._id)}
                        className="group border border-slate-100 rounded-3xl p-6 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 bg-white relative cursor-pointer overflow-hidden"
                    >
                        {/* Image */}
                        <div className="h-44 flex items-center justify-center mb-6 relative overflow-hidden bg-slate-50/50 rounded-2xl">
                            <img
                                src={deal.image ? (deal.image.startsWith('http') ? deal.image : `http://localhost:5000${deal.image}`) : printerImg}
                                alt={deal.title}
                                className="h-32 object-contain transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => e.target.src = printerImg}
                            />

                            {/* Action Icons */}
                            <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-white/10">
                                <button className="p-3 bg-slate-900 hover:bg-black text-white rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ShoppingCart size={18} />
                                </button>
                                <button className="p-3 bg-pink-500 hover:bg-pink-600 text-white rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                    <Heart size={18} />
                                </button>
                                <button className="p-3 bg-white hover:bg-slate-50 text-slate-900 rounded-xl shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-150">
                                    <Eye size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-[13px] font-black text-slate-900 line-clamp-2 min-h-[40px] leading-tight uppercase tracking-tight">
                                    {deal.title}
                                </h3>
                                <div className="bg-emerald-100 text-emerald-600 text-[10px] font-black px-2 py-1 rounded-lg">
                                    -{Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100)}%
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <span className="text-xl font-black text-slate-900 tracking-tighter">${deal.price.toFixed(2)}</span>
                                <span className="text-sm text-slate-300 line-through font-bold">${deal.oldPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MegaDeals;
