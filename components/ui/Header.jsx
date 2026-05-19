'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search, User, Check, Phone, Mail, ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useRouter as useNavigate } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '@/store/actions/userActions';
import AuthDrawer from './AuthDrawer';
import axios from 'axios';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;
    const cartItems = useSelector((state) => state.cart.cartItems);

    const logoutHandler = () => {
        dispatch(logout());
        setIsUserMenuOpen(false);
    };

    // const handleSearchChange = async (e) => {
    //     const query = e.target.value;
    //     setSearchQuery(query);

    //     if (query.length >= 2) {
    //         try {
    //             const { data } = await axios.get(`https://printersbackend.onrender.com/api/products/search/suggestions?q=${query}`);
    //             setSuggestions(data);
    //             setShowSuggestions(true);
    //         } catch (error) {
    //             console.error('Error fetching suggestions:', error);
    //             setSuggestions([]);
    //         }
    //     } else {
    //         setSuggestions([]);
    //         setShowSuggestions(false);
    //     }
    // };


    const handleSearchChange = async (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length >= 2) {
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_API_URL}/products/search/suggestions`,
                    {
                        params: { q: query },
                    }
                );

                setSuggestions(data);
                setShowSuggestions(true);
            } catch (error) {
                setSuggestions([]);
                setShowSuggestions(false);
            }
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate.push(`/?search=${encodeURIComponent(searchQuery)}`);
            setIsSearchOpen(false);
            setShowSuggestions(false);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setIsSearchOpen(false);
        setShowSuggestions(false);

        if (suggestion.slug) {
            navigate.push(`/product/${suggestion.slug}`);
        } else {
            navigate.push(`/?search=${encodeURIComponent(suggestion.title)}`);
        }
    };

    // Lock body scroll when search or menu is open
    useEffect(() => {
        if (isSearchOpen || isMenuOpen || isAuthOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isSearchOpen, isMenuOpen, isAuthOpen]);

    return (
        <>
            <header className="w-full font-sans relative z-40">
                {/* Top Bar - Hidden on Mobile */}
                <div className="hidden md:block bg-slate-50 text-slate-600 text-xs py-3 px-8 md:px-16 lg:px-32 xl:px-64 border-b border-slate-200">
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
                        {/* Left: Contact */}
                        <div className="flex items-center gap-4">
                            <a href="mailto:support@smarteprinting.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                <Mail size={14} />
                                <span>support@smarteprinting.com</span>
                            </a>
                        </div>

                        {/* Center: Privacy */}
                        <div>
                            <span className="text-slate-600">Your privacy matters to us. </span>
                            <Link href="/privacy-policy" className="underline hover:text-blue-600 transition-colors">Read our Privacy Policy.</Link>
                        </div>

                        {/* Right: USPs */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1 text-emerald-500">
                                <Check size={14} />
                                <span>Fast shipping on all orders</span>
                            </div>
                            <div className="flex items-center gap-1 text-emerald-500">
                                <Check size={14} />
                                <span>30-day returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="bg-white shadow-sm sticky top-0">
                    <div className="w-full px-4 md:px-8 py-4 lg:px-32 lg:py-6 xl:px-64">
                        <div className="flex items-center justify-between lg:justify-start gap-4">

                            {/* Mobile Menu Button - Left */}
                            <button
                                className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-800"
                                onClick={() => setIsMenuOpen(true)}
                                aria-label="Open menu"
                            >
                                <Menu size={24} />
                            </button>

                            {/* Branding / Logo - Centered on Mobile, Left on Desktop */}
                            <Link
                                href="/"
                                className="cursor-pointer shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
                            >
                                <img
                                    src="/smartEprintingLogo.webp"
                                    alt="Smart ePrinting"
                                    className="h-12 md:h-16 w-auto object-contain"
                                    width="177"
                                    height="112"

                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center justify-center flex-1 px-2 lg:px-8 gap-2 lg:gap-6 text-slate-600 text-[10px] lg:text-sm font-bold whitespace-nowrap">
                                <Link href="/" className="hover:text-blue-600 transition-colors uppercase tracking-wide">Home</Link>
                                <Link href="/product-category/all-in-one-printers" className="hover:text-blue-600 transition-colors uppercase tracking-wide">All In One</Link>
                                <Link href="/product-category/inkjet-printers" className="hidden 2xl:block hover:text-blue-600 transition-colors uppercase tracking-wide">Inkjet</Link>
                                <Link href="/product-category/laser-printers" className="hidden 2xl:block hover:text-blue-600 transition-colors uppercase tracking-wide">Laser</Link>
                                <Link href="/product-category/ink-toner" className="hover:text-blue-600 transition-colors uppercase tracking-wide">Ink & Toner</Link>
                                <Link href="/blogs" className="hover:text-blue-600 transition-colors uppercase tracking-wide">Blogs</Link>
                                <Link href="/customer-service" className="hover:text-blue-600 transition-colors uppercase tracking-wide">Customer Support</Link>

                            </nav>

                            {/* Right: Actions */}
                            <div className="flex items-center gap-2 md:gap-4 shrink-0 ml-auto lg:ml-0">
                                <button
                                    onClick={() => setIsSearchOpen(true)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 group"
                                    aria-label="Search"
                                >
                                    <Search size={22} className="group-hover:scale-110 transition-transform" />
                                </button>
                                {mounted && userInfo ? (
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                            className="hidden md:flex items-center gap-2 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 group"
                                            aria-label="User menu"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm uppercase">
                                                {userInfo.firstName?.charAt(0) || userInfo.name?.charAt(0)}
                                            </div>
                                            <span className="hidden md:block text-sm font-medium text-slate-700">{userInfo.firstName || userInfo.name}</span>
                                        </button>

                                        {isUserMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in zoom-in-95 duration-200">
                                                <div className="px-4 py-2 border-b border-slate-50 mb-1">
                                                    <p className="text-xs text-slate-400">Signed in as</p>
                                                    <p className="text-sm font-semibold text-slate-700 truncate">{userInfo.email}</p>
                                                </div>
                                                {userInfo.isAdmin ? (
                                                    <Link
                                                        href="/admin/dashboard"
                                                        className="block px-4 py-2 text-sm text-blue-600 font-bold hover:bg-slate-50 transition-colors"
                                                        onClick={() => setIsUserMenuOpen(false)}
                                                    >
                                                        Admin Dashboard
                                                    </Link>
                                                ) : (
                                                    <>
                                                        <Link
                                                            href="/profile"
                                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                                            onClick={() => setIsUserMenuOpen(false)}
                                                        >
                                                            My Profile
                                                        </Link>
                                                        {/* <Link
                                                            href="/my-orders"
                                                            className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors"
                                                            onClick={() => setIsUserMenuOpen(false)}
                                                        >
                                                            My Orders
                                                        </Link> */}
                                                    </>
                                                )}
                                                <button
                                                    onClick={logoutHandler}
                                                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-slate-50 mt-1"
                                                >
                                                    Logout
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => setIsAuthOpen(true)}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 hidden sm:block group"
                                        aria-label="Sign in"
                                    >
                                        <User size={22} className="group-hover:scale-110 transition-transform" />
                                    </button>
                                )}
                                <Link href="/cart" className="relative p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-600 group" aria-label="Shopping cart">
                                    <ShoppingCart size={22} className="group-hover:scale-110 transition-transform" />
                                    <span className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold" aria-hidden="true">
                                        {mounted ? cartItems.reduce((acc, item) => acc + item.qty, 0) : 0}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation Sidebar (Drawer) */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-50 md:hidden">
                            {/* Backdrop */}
                            <div
                                className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-in fade-in duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            />

                            {/* Sidebar Panel */}
                            <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-2xl animate-in slide-in-from-left duration-300 flex flex-col">
                                <div className="p-4 border-b border-slate-100 flex items-center justify-between sticky top-0 bg-white z-10 shrink-0">
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                        MENU
                                    </span>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 hover:bg-slate-50 rounded-full text-slate-500"
                                        aria-label="Close menu"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>


                                {/* Links - Pushed to top */}
                                <div className="flex-1 overflow-y-auto p-4">
                                    <div className="flex flex-col space-y-1">
                                        {[
                                            { name: 'Home', path: '/' },
                                            { name: 'All In One', path: '/product-category/all-in-one-printers' },
                                            { name: 'Inkjet', path: '/product-category/inkjet-printers' },
                                            { name: 'Laser', path: '/product-category/laser-printers' },
                                            { name: 'Ink & Toner', path: '/product-category/ink-toner' },
                                            { name: 'Blogs', path: '/blogs' },
                                            { name: 'Customer Support', path: '/customer-service' },
                                            { name: 'Track Your Order', path: '/track-order' },
                                        ].map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.path}
                                                className="py-3 px-2 text-slate-700 font-medium hover:text-blue-600 hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.name}
                                                <ArrowRight size={16} className="text-slate-300" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Bottom Section: Auth & Contact */}
                                <div className="p-4 border-t border-slate-100 bg-slate-50 shrink-0 space-y-6">
                                    {/* Auth Buttons for Guests */}
                                    {/* User Profile Section - Pushed to Bottom */}
                                    {mounted && userInfo && (
                                        <div className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg uppercase shadow-lg shadow-blue-100">
                                                    {userInfo.firstName?.charAt(0) || userInfo.name?.charAt(0)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-bold text-slate-800 truncate">{userInfo.firstName || userInfo.name}</p>
                                                    <p className="text-xs text-slate-500 truncate">{userInfo.email}</p>
                                                    {userInfo.isAdmin && (
                                                        <span className="inline-block mt-0.5 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase">Admin</span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 gap-2">
                                                {userInfo.isAdmin ? (
                                                    <Link
                                                        href="/admin/dashboard"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="flex items-center justify-center gap-2 py-2.5 px-3 bg-blue-600 rounded-xl text-xs font-bold text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-100"
                                                    >
                                                        Admin Dashboard
                                                        <ArrowRight size={14} />
                                                    </Link>
                                                ) : (
                                                    <Link
                                                        href="/profile"
                                                        onClick={() => setIsMenuOpen(false)}
                                                        className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-900 rounded-xl text-xs font-bold text-white hover:bg-slate-800 transition-all shadow-md shadow-slate-200"
                                                    >
                                                        <User size={14} />
                                                        Manage Profile
                                                    </Link>
                                                )}
                                                <button
                                                    onClick={logoutHandler}
                                                    className="flex items-center justify-center gap-2 py-2.5 px-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-red-600 hover:bg-red-50 transition-all"
                                                >
                                                    Sign Out
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                    {(!mounted || !userInfo) && (
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                onClick={() => { setIsMenuOpen(false); setIsAuthOpen(true); }}
                                                className="px-4 py-2.5 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-white transition-colors text-sm text-center"
                                            >
                                                Login
                                            </button>
                                            <button
                                                onClick={() => { setIsMenuOpen(false); setIsAuthOpen(true); }}
                                                className="px-4 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 text-sm text-center shadow-lg shadow-blue-200"
                                            >
                                                Signup
                                            </button>
                                        </div>
                                    )}

                                    {/* Contact Info */}
                                    <div className="space-y-3 pt-2">
                                        <div className="flex items-start gap-3">
                                            <MapPin size={16} className="text-blue-500 mt-0.5 shrink-0" />
                                            <p className="text-sm text-slate-500 leading-snug">17807 Lakecrest View Drive, #1205<br />Cypress, TX 77433</p>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail size={16} className="text-blue-500 shrink-0" />
                                            <a href="mailto:support@smarteprinting.com" className="text-sm text-blue-600 hover:underline font-medium">support@smarteprinting.com</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300 flex items-start justify-center pt-24 md:pt-32">
                    {/* Close area equivalent */}
                    <div
                        className="absolute inset-0 z-0"
                        onClick={() => setIsSearchOpen(false)}
                        aria-label="Close search"
                    />

                    <div className="relative z-10 w-full max-w-4xl mx-4 bg-white shadow-2xl rounded-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-top-4 duration-300">
                        {/* Header of Search Modal */}
                        <div className="p-4 flex justify-end border-b border-slate-50">
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-700"
                                aria-label="Close search"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="px-8 pb-12 pt-4">
                            <h2 className="text-center text-slate-400 font-medium text-sm md:text-base mb-8 uppercase tracking-widest">What are you looking for?</h2>

                            <div className="relative group max-w-2xl mx-auto mb-12">
                                <form onSubmit={handleSearchSubmit}>
                                    <input
                                        type="text"
                                        placeholder="Search for printers, ink, etc..."
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        className="w-full text-2xl md:text-3xl font-semibold bg-slate-50 border-transparent rounded-xl py-4 px-6 md:px-12 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-slate-800 placeholder:text-slate-300 text-center shadow-inner"
                                        autoFocus
                                    />
                                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" size={28} />
                                </form>
                                {showSuggestions && suggestions.length > 0 && (
                                    <div className="absolute top-full left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-lg mt-2 z-20 max-h-96 overflow-y-auto">
                                        {suggestions.map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className="flex items-center gap-4 px-6 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-b-0 transition-colors"
                                                onClick={() => handleSuggestionClick(suggestion)}
                                            >
                                                <div className="w-12 h-12 bg-white rounded-lg overflow-hidden shrink-0 border border-slate-200 p-1">
                                                    <img
                                                        src={suggestion.images && suggestion.images[0] ? (suggestion.images[0].startsWith('http') ? suggestion.images[0] : `${process.env.NEXT_PUBLIC_API_URL.replace('/api', '')}${suggestion.images[0]}`) : '/assets/printer.webp'}
                                                        alt={suggestion.title}
                                                        className="w-full h-full object-contain"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-slate-800 text-sm line-clamp-1">{suggestion.title}</div>
                                                    <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                                                        <span>{suggestion.brand}</span>
                                                        {suggestion.price > 0 && <span className="text-blue-600 font-bold">${suggestion.price}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="text-center">
                                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Popular searches</h3>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['HP Printers', 'Canon Ink', 'Wireless', 'LaserJet', 'Scanner', 'Color Ink'].map((term) => (
                                        <button
                                            key={term}
                                            className="px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all duration-200"
                                        >
                                            {term}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <AuthDrawer isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
};

export default Header;
