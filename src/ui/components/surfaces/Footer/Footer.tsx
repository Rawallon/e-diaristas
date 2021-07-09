import React from 'react';
import {
  AppList,
  FooterContainer,
  FooterStyled,
  FooterTitle,
} from './Footer.style';
import { Box, Typography } from '@material-ui/core';

export const Footer = () => {
  return (
    <FooterStyled>
      <FooterContainer>
        <Box sx={{ maxWidth: '400px' }}>
          <FooterTitle>Quem somos</FooterTitle>
          <Typography variant={'body2'} sx={{ mt: 2 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
            consequuntur accusamus, harum error ad cupiditate nulla similique
            sit laboriosam quasi maxime reprehenderit dignissimos, iusto
            impedit, ipsam illo excepturi nostrum sequi!
          </Typography>
        </Box>
        <div>
          <FooterTitle>Baixe nossos aplicativos </FooterTitle>
          <AppList>
            <li>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="img/logos/app-store.png" alt="App-store" />
              </a>
            </li>
            <li>
              <a
                href="https://google.com/"
                target="_blank"
                rel="noopener noreferrer">
                <img src="img/logos/google-play.png" alt="Google play" />
              </a>
            </li>
          </AppList>
        </div>
      </FooterContainer>
    </FooterStyled>
  );
};
