import React from 'react';
import { YtdHeader, YtdNavbar } from './styled';
import logo from '../../assets/youtube-logo.png';

export default function Header() {
  return (
    <YtdHeader>
      <YtdNavbar>
        <img style={{ maxWidth: '130px' }} src={logo} alt="image youtube" />
      </YtdNavbar>
    </YtdHeader>
  );
}
