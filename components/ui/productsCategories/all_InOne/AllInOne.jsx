'use client';
import React from 'react'
import ProductRouteHeading from '../ProductRouteHeading'
import CategoryScrollSection from '../CategoryScrollSection'
import AllInOneProductList from './AllInOneProductList'
import FeaturesSection from '../FeaturesSection'
import ProductsBanner from '../ProductsBanner'

function AllInOne() {
    return (
        <>

            <ProductsBanner desktopImage="/all_in_one_chatgpt.webp" mobileImage="/all_in_one_mobile.webp" />
            <ProductRouteHeading
                breadcrumbs={[
                    { label: "Home", link: "/" },
                    { label: "Products", link: "/products" },
                    { label: "All In One Printers" },
                ]}
                title="All In One Printers"
                description="Print, scan, copy and fax all in one convenient portable device."
            />
            <CategoryScrollSection />
            <AllInOneProductList />
            <FeaturesSection />
        </>
    )
}

export default AllInOne