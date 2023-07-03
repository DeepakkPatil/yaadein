import React, { useEffect } from 'react';

const BotpressBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '755b7284-49b5-4563-b84d-35d3fd79fcbb',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '755b7284-49b5-4563-b84d-35d3fd79fcbb',
        botName: `Let's talk`,
        showPoweredBy: true,
      });
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (<div id="botpress-webchat"></div>);
};

export  {BotpressBot};