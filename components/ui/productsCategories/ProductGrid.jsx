'use client';
import React, { useState } from "react";
import Link from 'next/link';
import { useRouter as useNavigate } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '@/store/actions/cartActions';
import { optimizeCloudinaryUrl } from '@/lib/utils';

const ProductGrid = ({ heading = "Products", products = [], onFilterChange, enableFlowLayout = false }) => {
    const [sort, setSort] = useState('');
    const [brand, setBrand] = useState('');
    // Structured attribute filters
    const [technology, setTechnology] = useState('');
    const [usageCategory, setUsageCategory] = useState([]);
    const [allInOneType, setAllInOneType] = useState('');
    const [wireless, setWireless] = useState('');
    const [mainFunction, setMainFunction] = useState([]);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleSortChange = (e) => {
        const value = e.target.value;
        setSort(value);
        if (onFilterChange) onFilterChange({ sort: value, brand, technology, usageCategory, allInOneType, wireless, mainFunction });
    };

    const handleBrandChange = (e) => {
        const value = e.target.value;
        setBrand(value);
        if (onFilterChange) onFilterChange({ sort, brand: value, technology, usageCategory, allInOneType, wireless, mainFunction });
    };
    // Structured attribute filter handlers
    const handleTechnologyChange = (e) => {
        setTechnology(e.target.value);
        if (onFilterChange) onFilterChange({ sort, brand, technology: e.target.value, usageCategory, allInOneType, wireless, mainFunction });
    };
    const handleUsageCategoryChange = (e) => {
        const values = Array.from(e.target.options).filter(o => o.selected).map(o => o.value);
        setUsageCategory(values);
        if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory: values, allInOneType, wireless, mainFunction });
    };
    const handleAllInOneTypeChange = (e) => {
        setAllInOneType(e.target.value);
        if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory, allInOneType: e.target.value, wireless, mainFunction });
    };
    const handleWirelessChange = (e) => {
        setWireless(e.target.value);
        if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory, allInOneType, wireless: e.target.value, mainFunction });
    };
    const handleMainFunctionChange = (e) => {
        const values = Array.from(e.target.options).filter(o => o.selected).map(o => o.value);
        setMainFunction(values);
        if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory, allInOneType, wireless, mainFunction: values });
    };

    const handleAddToCart = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        if (!userInfo) {
            alert("Please login to add to cart");
            return;
        }
        dispatch(addToCart(product.slug || product._id, 1));
        navigate('/cart');
    };

    const handleBuyNow = (e, product) => {
        e.preventDefault();
        e.stopPropagation();
        if (!userInfo) {
            alert("Please login to purchase");
            return;
        }
        dispatch(addToCart(product.slug || product._id, 1));
        navigate('/cart?redirect=shipping');
    };

    return (
        <div className={`max-w-7xl mx-auto px-4 py-12 ${enableFlowLayout ? '' : ''}`}>
            {/* Heading + optional dropdowns */}
            <div className="flex flex-col gap-4 mb-8">
                 <div className="flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                    <h2 className="text-3xl font-semibold text-gray-900">{heading}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Sort By Price</label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            value={sort}
                            onChange={handleSortChange}
                        >
                            <option value="">Select</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Brand</label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            value={brand}
                            onChange={handleBrandChange}
                        >
                            <option value="">Select</option>
                            <option value="HP">HP</option>
                            <option value="Canon">Canon</option>
                            <option value="Epson">Epson</option>
                            <option value="Brother">Brother</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Technology</label>
                        <div className="flex flex-wrap gap-3">
                            {['Inkjet', 'Laser', 'Laser (B/W)'].map(opt => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={technology === opt}
                                        onChange={() => handleTechnologyChange({ target: { value: opt } })}
                                    />
                                    <span className="text-xs font-bold text-blue-700">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Usage Category</label>
                        <div className="flex flex-wrap gap-3">
                            {['Home', 'Office', 'Mobile', 'Photo'].map(opt => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={usageCategory.includes(opt)}
                                        onChange={() => {
                                            const values = usageCategory.includes(opt)
                                                ? usageCategory.filter(v => v !== opt)
                                                : [...usageCategory, opt];
                                            setUsageCategory(values);
                                            if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory: values, allInOneType, wireless, mainFunction });
                                        }}
                                    />
                                    <span className="text-xs font-bold text-blue-700">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">All-in-One Type</label>
                        <div className="flex flex-wrap gap-3">
                            {['Multifunction', 'Single Function'].map(opt => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={allInOneType === opt}
                                        onChange={() => handleAllInOneTypeChange({ target: { value: opt } })}
                                    />
                                    <span className="text-xs font-bold text-purple-700">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Wireless</label>
                        <select
                            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            value={wireless}
                            onChange={handleWirelessChange}
                        >
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">Main Function</label>
                        <div className="flex flex-wrap gap-3">
                            {['Print', 'Scan', 'Copy', 'Fax', 'Print Only'].map(opt => (
                                <label key={opt} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={mainFunction.includes(opt)}
                                        onChange={() => {
                                            const values = mainFunction.includes(opt)
                                                ? mainFunction.filter(v => v !== opt)
                                                : [...mainFunction, opt];
                                            setMainFunction(values);
                                            if (onFilterChange) onFilterChange({ sort, brand, technology, usageCategory, allInOneType, wireless, mainFunction: values });
                                        }}
                                    />
                                    <span className="text-xs font-bold text-green-700">{opt}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className={enableFlowLayout 
                ? "block -mx-3 clearfix" 
                : "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            }>
                {products.map((product, index) => {
                    const inStock = product.countInStock > 0;
                    return (
                        <div 
                            key={index}
                            className={enableFlowLayout
                                ? "float-left w-1/2 md:w-1/3 lg:w-1/4 p-3 box-border"
                                : ""
                            }
                        >
                        <div
                            className={`bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition flex flex-col h-full group ${enableFlowLayout ? '' : ''}`}
                        >
                            <Link
                                href={product.link || `/product/${product.slug}`}
                                className="flex-1 flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative w-full aspect-square bg-gray-100 p-4">
                                    <img
                                        src={optimizeCloudinaryUrl(
                                            product.image || 
                                            (product.images && product.images.length > 0 
                                                ? (product.images[0].startsWith('http') 
                                                    ? product.images[0] 
                                                    : `${process.env.NEXT_PUBLIC_API_URL?.replace('/api', '') || ''}${product.images[0]}`)
                                                : '/assets/printer.webp')
                                        )}
                                        alt={product.title}
                                        className="w-full h-full object-contain mix-blend-multiply"
                                        onError={(e) => e.target.src = '/assets/printer.webp'}
                                    />
                                    {!inStock && (
                                        <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                                            Out of Stock
                                        </div>
                                    )}
                                </div>

                                {/* Info */}
                                <div className="p-4 flex flex-col flex-1">
                                    {product.category && (
                                        <p className="text-xs text-indigo-600 font-bold uppercase tracking-wider mb-1">
                                            {typeof product.category === 'object' ? product.category.name : product.category}
                                        </p>
                                    )}
                                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2 mb-2 leading-tight">
                                        {product.title}
                                    </h3>
                                    {product.description && (
                                        <p className="text-gray-500 text-xs line-clamp-2 mb-3 flex-1">{product.description}</p>
                                    )}
                                    <div className="mt-auto flex items-baseline gap-2">
                                        <span className="text-gray-900 font-black text-lg">${product.price}</span>
                                        {product.originalPrice && product.originalPrice > product.price && (
                                            <span className="text-gray-400 line-through text-xs font-medium">
                                                ${product.originalPrice}
                                            </span>
                                        )}
                                        {product.oldPrice && product.oldPrice > product.price && (
                                             <span className="text-gray-400 line-through text-xs font-medium">
                                                ${product.oldPrice}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                            
                            {/* Buttons */}
                            <div className="p-4 pt-0 flex flex-col gap-2 mt-auto">
                                <button
                                    onClick={() => navigate(product.link || `/product/${product.slug}`)}
                                    className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-black uppercase text-[10px] tracking-widest shadow-lg shadow-slate-200 hover:bg-black transition-all active:scale-95"
                                >
                                    See Details
                                </button>
                                {inStock && (
                                    <button
                                        onClick={(e) => handleBuyNow(e, product)}
                                        className="w-full py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all font-black uppercase text-[10px] tracking-widest shadow-lg shadow-indigo-100 active:scale-95"
                                    >
                                        Buy Now
                                    </button>
                                )}
                            </div>
                        </div>
                        </div>
                    );
                })}
            </div>
            
            {/* Clearfix for flow layout */}
            {enableFlowLayout && <div className="clear-both"></div>}
        </div>
    );
};

export default ProductGrid;
