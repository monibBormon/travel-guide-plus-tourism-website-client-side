import React from 'react';
import Counter from '../../SharedPage/Counter/Counter';

const HomeCounter = () => {
    return (
        <div>
            <div className="container mx-auto py-10 px-5 lg:px-0">
                <Counter></Counter>
            </div>
        </div>
    );
};

export default HomeCounter;