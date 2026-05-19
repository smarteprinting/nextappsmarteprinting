'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import LedPrintersProductList from './LedPrintersProductList'
import FeaturesSection from '../FeaturesSection'

function LedPrinters() {
    return (
        <>
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "LED Printers" },
                ]}
                title="LED Printers"
                description="Trustworthy energy efficient printers with LED technology to achieve sharp images."
            />
            <CategoryScrollSection />
            <LedPrintersProductList />
            <FeaturesSection />
        </>
    )
}

export default LedPrinters