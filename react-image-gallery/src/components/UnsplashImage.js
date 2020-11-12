import React from 'react'
import styled from 'styled-components';

const Imagediv = styled.div`
    height: auto;
    break-inside: avoid-column;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
`;

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const UnsplashImage = ({url, key}) => {
    
    return ( 
        <Imagediv>
          <Img src={url} key={key} alt=""/>
       </Imagediv>
    )
}
