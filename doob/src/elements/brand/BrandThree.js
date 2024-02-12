import React from 'react';

const BrandList = [
    {
        image: './hype/cpa.png'
    },
    {
        image: './hype/tax.png'
    },
    {
        image: './hype/xero.png'
    }
]

const BrandThree = ({ brandStyle }) => {
    return (
        <ul className={`brand-list ${brandStyle}`}>
            {BrandList.map((data, index) => (
                <li key={index}>
                    <a href="#"><img src={`${data.image}`} alt="Brand Image" /></a>
                </li>
            ))}
        </ul>
    )
}

export default BrandThree;
