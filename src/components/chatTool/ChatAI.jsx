import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

const OpenAIChat = ({ steps, triggerNextStep }) => {
  const userMessage = steps['4'].value;
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
            max_tokens: 150
          },
          {
            headers: {
              'Authorization': `Bearer sk-proj-bAJp4gajUP3pi64uSy2HT3BlbkFJvk3rZaooeUcNG1RfEXNU`,
              'Content-Type': 'application/json'
            }
          }
        );

        const botMessage = response.data.choices[0].message.content.trim();
        triggerNextStep({ value: botMessage, trigger: '6' });
      } catch (error) {
        if (error.response && error.response.status === 429 && retryCount < 3) {
          // Rate limit error, retry after a delay
          setTimeout(() => {
            setRetryCount(retryCount + 1);
            fetchResponse();
          }, 50000); // Retry after 5 seconds
        } else {
          console.error('Error fetching OpenAI response:', error);
          triggerNextStep({ value: 'Sorry, I encountered an error.', trigger: '6' });
        }
      }
    };

    fetchResponse();
  }, [userMessage, triggerNextStep, retryCount]);

  return <div>Loading...</div>;
};

const steps = [
  {
    id: '0',
    message: 'Hey Geek!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Please write your username',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'Hi {previousValue}, how can I help you?',
    trigger: '4',
  },
  {
    id: '4',
    user: true,
    trigger: '5',
  },
  {
    id: '5',
    component: <OpenAIChat />,
    waitAction: true,
    trigger: '6',
  },
  {
    id: '6',
    message: '{previousValue}',
    trigger: '4',
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
  floating: true,
};

const ChatAI = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        headerTitle="SpaceTec AI"
        steps={steps}
        {...config}
      />
    </ThemeProvider>
  );
};

export default ChatAI;
