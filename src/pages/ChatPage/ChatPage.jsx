import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import { v4 as uuidv4 } from 'uuid';
import io from 'socket.io-client';

import css from "./ChatPage.module.css";
import { addMessage, addReceivedMessage } from '../../redux/slices/messagesSlice';

const socket = io('http://localhost:3000');

const ChatPage = () => {
    const dispatch = useDispatch();
    const { messages, receivedMessages } = useSelector((state) => state.messages);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        const message = { id, text: inputValue };
        dispatch(addMessage(message));
        socket.emit('message', message);
        setInputValue('');
    };

    useEffect(() => {
        socket.on('message', (receivedMessage) => {
            dispatch(addReceivedMessage(receivedMessage));
        });

        return () => {
            socket.disconnect();
        };
    }, [dispatch]);

    return (
        <Box className={css.container}>
            <Box className={css.content}>
                <Box className={css.dialogWrapper}>
                    {receivedMessages.map((message) => (
                        <Box className={css.contentWrapper1} key={message.id}>
                            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>{message.text}</Typography>
                        </Box>
                    ))}
                    {messages.map((message) => (
                        <Box className={css.contentWrapper2} key={message.id}>
                            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>{message.text}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box className={css.inputWrapper}>
                    <form onSubmit={handleFormSubmit}>

                        <input type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Ask me anything that I can help you or your team.."
                            className={css.input} />
                        <Button type="submit" variant="contained" sx={{
                            background: "transparent", boxShadow: "none", '&:hover': {
                                background: 'transparent', boxShadow: "none",
                            },
                        }}>
                            <TelegramIcon sx={{
                                fill: "#000A10", width: 32, height: 32, '&:hover': {
                                    opacity: 0.8
                                },
                            }} />
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    )
}

export default ChatPage