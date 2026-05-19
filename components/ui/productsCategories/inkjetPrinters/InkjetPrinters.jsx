'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import InkjetPrintersProductList from './InkjetPrintersProductList'
import FeaturesSection from '../FeaturesSection'
import ProductsBanner from '../ProductsBanner'

function InkjetPrinters() {
    return (
        <>

            <ProductsBanner desktopImage="/inkjetBanner.webp" mobileImage="/inkjetBannerMobile.webp" />
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Inkjet Printers" },
                ]}
                title="Inkjet Printers"
                description="Ideal in quality color photographs and general printing of documents."
            />
            <CategoryScrollSection />
            <InkjetPrintersProductList />
            <FeaturesSection />
        </>
    )
}

export default InkjetPrinters