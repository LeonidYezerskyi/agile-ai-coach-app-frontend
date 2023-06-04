import { Box, Typography, Button } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import css from "./ChatPage.module.css";

const ChatPage = () => {
    return (
        <Box className={css.container}>
            <Box className={css.content}>
                <Box className={css.dialogWrapper}>
                    <Box className={css.contentWrapper1}>
                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
                    </Box>
                    <Box className={css.contentWrapper2}>
                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
                    </Box>
                    {/* <Box className={css.contentWrapper2}>
                        <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#000a10", p: "25px 43px 25px 44px" }}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</Typography>
                    </Box> */}
                </Box>
                <Box className={css.inputWrapper}>
                    <input type="text" placeholder="Ask me anything that I can help you or your team.." className={css.input} />
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
                </Box>
            </Box>
        </Box>
    )
}

export default ChatPage