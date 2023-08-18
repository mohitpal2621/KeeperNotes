import React from "react";

const footer = () => {
    const currYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright ⓒ {currYear}</p>
        </footer>
    );
};

export default footer;