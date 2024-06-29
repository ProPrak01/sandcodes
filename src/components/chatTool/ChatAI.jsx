import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const steps = [
    {
        id: '0',
        message: 'Hey Geek!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
    
    },
];
 
// Creating our own theme
const theme = {
    background: '#ddd',
    headerBgColor: 'rgb(255, 83, 83)',
    headerFontSize: '20px',
    botBubbleColor: '#333',
    headerFontColor: 'black',
    botFontColor: 'white',
    userBubbleColor: 'rgb(255, 83, 83)',
    userFontColor: 'white',
};
const config = {
 //   botAvatar: "img.png",
    floating: true,
};
const ChatAI = () => {


    


  return (
    <ThemeProvider theme={theme}>
    <ChatBot

        // This appears as the header
        // text for the chat bot
        headerTitle="SpaceTec AI"
        steps={steps}
        {...config}

    />
</ThemeProvider>
  );
};

export default ChatAI;
