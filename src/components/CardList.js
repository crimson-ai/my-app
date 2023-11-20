import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => { // you have access to robots through the prop in index.js
    // if (true) {
    //     throw new Error('NOOOO!'); 
    // }
    // created an error to test the ErrorBoundary component

    const cardComponent = robots.map((robot, i) => {
        return (<Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email} />
        );
    });

    return (
        <div>{cardComponent}</div>
    );
};

// without the key prop, you get the following warning: "Warning: Each child in a list should have a unique "key" prop."
// the virtual DOM keeps track of what each of these cards are, so if a card gets deleted without a key prop, 
// React won't know which one is which, and it will have to change the entire DOM; we want to minimize the work done on the DOM

export default CardList;