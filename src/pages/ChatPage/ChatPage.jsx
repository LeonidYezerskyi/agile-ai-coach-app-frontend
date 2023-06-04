import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Button } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import { v4 as uuidv4 } from 'uuid';
import css from "./ChatPage.module.css";
import { addMessage } from '../../redux/slices/messagesSlice';


const ChatPage = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.messages);

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        dispatch(addMessage({ id, text: inputValue }));
        setInputValue('');
    };

    return (
        <Box className={css.container}>
            <Box className={css.content}>
                <Box className={css.dialogWrapper}>
                    <Box className={css.contentWrapper1}>
                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
                    </Box>
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