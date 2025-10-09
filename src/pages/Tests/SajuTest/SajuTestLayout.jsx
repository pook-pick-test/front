import { Outlet } from 'react-router-dom';
import Header from '../../../components/Header';
import { useState } from 'react';

const SajuTestLayout = () => {

    return(
        <div>
            <Header />
            <Outlet />
        </div>
    );
}

export default SajuTestLayout;