import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase()
    return (
        <div>
            <div className="container mx-auto py-8 px-5 lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="logo text-center md:text-left">
                        <Link to='/'>
                            <h2 className='text-green-400 text-3xl font-medium'>Travel<span className='text-red-400'>Guide+</span></h2>
                        </Link>
                    </div>
                    <div className="menu-bar text-center lg:text-right mr-0 lg:mr-10 col-span-2">
                        <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' exact to='/'>
                            Home
                        </NavLink>
                        <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' to='/myOrders'>
                            My Orders
                        </NavLink>
                        <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' to='/about'>
                            About Us
                        </NavLink>
                        {
                            user.displayName ? <div className='inline-block'>
                                <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' to='/manageOrders'>
                                    Manage Orders
                                </NavLink>
                                <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' to='/addTours'>
                                    Add Tours
                                </NavLink>
                                <Link to='/'>
                                    <button onClick={logOut} className='border-2 rounded-full border-green-400 font-semibold p-1 text-green-400'>Log Out</button>
                                </Link>
                            </div> :
                                <NavLink activeClassName='active' style={{ transition: '.3s all' }} className='text-xl mr-5 border-b-2 border-transparent pb-1 hover:border-green-400' to='/login'>
                                    Login
                                </NavLink>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;