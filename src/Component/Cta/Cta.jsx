
import React from 'react';
import image from '../../images/car.jpg';

function Cta() {
const sectionStyle = {
backgroundImage: `url(${image})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
backgroundRepeat: 'no-repeat',
width: '100%',
height: '392px',
borderRadius: '50px',
};

return (
<section className="bg-gray-100 container flex items-center justify-center py-20">
<div style={sectionStyle} className=" mx-auto pt-12 px-12 md:px-24 lg:px-48">
<h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-6">
Simply Buy Your Favorite Product Online
</h1>
<p className="text-lg md:text-xl font-normal text-gray-900 mb-6">
You Can Order Your Car Completely Online.
</p>
<button className="mt-6 py-3 px-6 text-white font-semibold bg-blue-500 rounded hover:bg-blue-600">
PLACE BID
</button>
</div>
</section>
);
}

export default Cta;