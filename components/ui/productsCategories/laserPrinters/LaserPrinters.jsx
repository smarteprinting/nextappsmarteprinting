'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import LaserPrintersProductList from './LaserPrintersProductList'
import FeaturesSection from '../FeaturesSection'
import ProductsBanner from '../ProductsBanner'

function LaserPrinters() {
    return (
        <>
            <ProductsBanner desktopImage="/laserBanner.webp" mobileImage="/laserBannerMobile.webp" />
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Laser Printers" },
                ]}
                title="Laser Printers"
                description="High speed printers designed with crisp text and bulk office printing."
            />
            <CategoryScrollSection />
            <LaserPrintersProductList />
            <FeaturesSection />
        </>
    )
}

export default LaserPrinters