import React from 'react';
import './globals.scss';
import './guest.scss';

export const metadata = {
  title: 'Agorà',
  description: 'A HMI Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="agora-favicon.png"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
      </head>
      <body>
      {children}
      </body>
    </html>
  );
}
