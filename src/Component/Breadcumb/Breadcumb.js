import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Breadcumb() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (name) => {
    setSelectedItem(name);
  };

  return (
    <div className='w-full bg-gray-100 flex justify-center'>
      <div className='w-[80%]'>
        <div className='relative'>
          <button
            className='p-2 outline-none bg-gray-100'
            onClick={toggleDropdown}
          >
            Home
          </button>
          {isOpen && (
            <ul className='absolute left-0 w-full mt-2 bg-white shadow-md rounded-md'>
              <li>
                <Link
                  to='/HomePageV2'
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                    selectedItem === 'Homepage-v2' ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleItemClick('Homepage-v2')}
                >
                  Homepage-v2
                </Link>
              </li>
              <li>
                <Link
                  to='/ActionListing'
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                    selectedItem === 'Action Listing' ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleItemClick('Action Listing')}
                >
                  Action Listing
                </Link>
              </li>
              <li>
                <Link
                  to='/ActionDetails'
                  className={`block px-4 py-2 text-gray-800 hover:bg-gray-200 ${
                    selectedItem === 'Action Details' ? 'bg-gray-200' : ''
                  }`}
                  onClick={() => handleItemClick('Action Details')}
                >
                  Action Details
                </Link>
              </li>
            </ul>
          )}
          {selectedItem ? (
            <button className='hover:text-blue-600 pl-10'>{selectedItem}</button>
          ) : (
            <Link to='/about' className='hover:text-blue-600 pl-10'>
              About
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Breadcumb;
