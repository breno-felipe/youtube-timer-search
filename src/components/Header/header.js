import React from 'react';
import { Youtube } from 'styled-icons/fa-brands';
import { YtdHeader, YtdTextHeader, YtdNavbar } from './styled';

export default function Header() {
  return (
    <YtdHeader>
      <YtdNavbar>
        <Youtube color="#e12" size={50} />
        <YtdTextHeader>Youtube Timer Search</YtdTextHeader>
      </YtdNavbar>
    </YtdHeader>
  );
}
