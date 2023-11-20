import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid black', height: '700px' }}>
            {props.children}
        </div>
    );
}; // scroll isn't a self-closing component; it just wraps another component inside it (child), which it renders
// to use style in JSX, you use double curly brackets, first one is usual, second one is for creating an object
// you must camelCase for JSX: overflowY instead of overflow-y for CSS

export default Scroll; 