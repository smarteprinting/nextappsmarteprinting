'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import LargeFormatProductList from './LargeFormatProductList'
import FeaturesSection from '../FeaturesSection'

function LargeFormat() {
    return (
        <>
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Large Format Printers" },
                ]}
                title="Large Format Printers"
                description="The best printers are used in posters, banners, and technical drawings with a wide format and precision."
            />
            <CategoryScrollSection />
            <LargeFormatProductList />
            <FeaturesSection />
        </>
    )
}

export default LargeFormat