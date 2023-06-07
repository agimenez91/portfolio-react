import React from 'react';
import "./Icon.scss";
import { IconMap } from './IconMap';

export default function Icon (props) {

  return (
    <>
      {props.name ? (
        <>{IconMap[props.name]}</>
      ) : ("")}
    </>
  );
};


