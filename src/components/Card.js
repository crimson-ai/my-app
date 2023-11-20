import React from 'react';

const Card = ({ name, email, id }) => {
    // const { name, email, id } = props; // destructuring to use only property names instead of props.propName; this works if the function parameter is props
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robot' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};
// ?200x200 in the URL is to set the width and height of the image
// use curly brackets when introducing JS variables

export default Card;