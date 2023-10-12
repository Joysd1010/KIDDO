import React from 'react';
import useSeller from '../../hooks/useSeller';
import useAdmin from '../../hooks/useAdmin';

const DashboardNav = () => {
    // const [isSeller]=useSeller()
    const [isAdmin]=useAdmin()
    const isSeller=true
    // const isAdmin=true

    return (
        <div className='pt-36'>
            {
                isSeller&&<h1>this is seller </h1>
                
            }
            {
                isAdmin&&<h1>this is Admin </h1>
                
            }
            <h1>this page is active</h1>
        </div>
    );
};

export default DashboardNav;