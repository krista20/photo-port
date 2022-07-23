import React from 'react';
import PhotoList from '../PhotoList';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Gallery(props) {
    // declaring a new object-->currentCategory, & setting its name & description to values for the Commericail pg.
    const { currentCategory } = props;

    return (
        <section>
            <h1 data-testid="h1tag">{ capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{ currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;