import { Avatar, Box, Drawer, List, ListItem, Typography } from '@mui/material';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';
import heartHands from "../../assets/heartHands.svg";
import ChatPage from '../../pages/ChatPage/ChatPage';
import css from "./Sidebar.module.css"

const Sidebar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/chat');
    };

    return (
        <Box >
            <Drawer variant="permanent" PaperProps={{
                sx: {
                    bgcolor: "#d8e1ed",
                    border: "none",
                    width: 270,
                }
            }}>
                <List className={css.barContainer}>
                    <Box className={css.logo}>
                        <ListItem>
                            <Link to='/' >
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: 24,
                                    color: "#000a10",
                                    ml: 2
                                }}>Agile</Typography>
                            </Link>
                        </ListItem>
                    </Box>
                    <Box>
                        <Link to='/chat'>
                            <ListItem onClick={handleButtonClick} >
                                <Avatar className={css.img} src={heartHands} sx={{ width: 24, height: 24 }} alt="Hands Heart" />
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: 18,
                                    color: "#000a10",
                                    mr: 0
                                }}>AI Agile Coach</Typography>
                            </ListItem>
                        </Link>
                    </Box>
                </List>
            </Drawer>

            <Routes>
                <Route path='chat' element={<ChatPage />} />
            </Routes>
        </Box>
    );
};

export default Sidebar;