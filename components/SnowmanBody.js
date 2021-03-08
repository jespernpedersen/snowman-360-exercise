import React from 'react';
import {
  Sphere
} from 'react-360';

export default class SnowmanBody extends React.Component {
    render() {
      return (
        <Sphere radius={0.5} widthSegments={360} heightSegments={360} 
            style={{color: 'white', transform: 
                [
                    {
                        translate: [0, 0, 0]
                    },
            ]}}
        ></Sphere>        
      );
    }
  };