'use client';
import React from 'react';
import PropTypes from 'prop-types';

function ProductsBanner({ desktopImage, mobileImage, altText = "Products Banner" }) {
    return (
        <div className="w-full relative mb-8">
            {/* Desktop Image: Hidden on mobile, block on md and up */}
            <img
                src={desktopImage || "/assets/printerforsmallbusiness.webp"}
                alt={altText}
                width="1200"
                height="450"
                className="hidden md:block w-full h-auto"
                fetchPriority="high"
            />

            {/* Mobile Image: Block on mobile, hidden on md and up */}
            <img
                src={mobileImage || "/assets/printer.webp"}
                alt={altText}
                width="721"
                height="1262"
                className="block md:hidden w-full h-auto"
                fetchPriority="high"
            />
        </div>
    );
}

ProductsBanner.propTypes = {
    desktopImage: PropTypes.string,
    mobileImage: PropTypes.string,
    altText: PropTypes.string,
};

export default ProductsBanner;
