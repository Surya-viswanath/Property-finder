import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logo from './download.png';
import './Menu.css';
import { IoIosArrowDown } from "react-icons/io";


import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



import Modal from './Login';


export default function Mmenu() {
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <header className=''>
      <div className='flex   items-center max-w-5xl mx-auto p-3'>
       <img src={logo} width={'120px'}></img>
        <ul className='flex'>
          <Link to='/'>
            <li className=''>
              Buy
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline'>
              Rent
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline '>
              Commercial
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline '>
              New projects
            </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline '>
              Find agent
            </li>
          </Link>
          <li>
          <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex">
          Explore <IoIosArrowDown className="icondown" aria-hidden="true"/>
         
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm inline-flex'
                  )}
                >
                  Explore with DataGuru  <span style={{marginLeft:'5px',padding:'0px 5px',backgroundColor:'#5745A0',color:'white',borderRadius:'5px',fontSize:'10px'}}>  NEW</span>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Mo'asher:Dubai Price Index
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Property Blog
                </a>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>

            </li>
          <Link to='/about'>
            <li className='hidden sm:inline '>
              Mortgages
            </li>
          </Link>
          
        </ul>
         <ul className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
          <Link to='/'>
            <li className=''>
              Buy
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline'>
              Rent
            </li>
          </Link>
         
          {/* <Link to='/about'>
            <li className='hidden sm:inline'>
              Log in
            </li>
          </Link> */}
          {/* <button onClick={openModal} className="bg-blue-500 text-white p-2">
        Log in
      </button> */}
      <div style={{alignItems:'center',marginLeft:'10px'}}>
      <button onClick={openModal}>Log in</button>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
            
        </ul>


        
            
      


        
       


 

      </div>
    </header>
  );
}