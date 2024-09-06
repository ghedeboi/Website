import React from 'react';

function LinkIcon({ src, alt, id }) {

  return (
    <li className="list" >
      <a href="#" className="link_icon" target="_blank" rel="noopener noreferrer">
        <img src={src} alt={alt} id={id} />
      </a>
    </li>
  );
}

export default LinkIcon;