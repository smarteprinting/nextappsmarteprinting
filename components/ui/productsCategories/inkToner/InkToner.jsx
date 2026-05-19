'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import InkTonerProductList from './InkTonerProductList'
import FeaturesSection from '../FeaturesSection'

function InkToner() {
    return (
        <>
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "Ink & Toner" },
                ]}
                title="Ink & Toner"
                description="Ink and toner supplies that are of high quality and consistent with the professional print quality."
            />
            <CategoryScrollSection />
            <InkTonerProductList />
            <FeaturesSection />
        </>
    )
}

export default InkToner