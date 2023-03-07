import React from 'react';
import Car from './Car';
import Card from './Card';
import './Modal.scss'

const Iqbal = () => {
    const CARDS = 10;

    return (
        <div className='carousal-body'>
            <Car>
                {[...new Array(CARDS)].map((_, i) => (
                    <Card
                        title={"Card " + (i + 1)}
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    />
                ))}
            </Car>
        </div>
    )
};

export default Iqbal;