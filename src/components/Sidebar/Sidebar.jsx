import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import heartHands from "../../assets/heartHands.svg";
import { Link } from 'react-router-dom';
import ChatPage from '../../pages/ChatPage/ChatPage';
import css from "./Sidebar.module.css"

const Sidebar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/chat');
    };

    return (
        < >
            <Drawer variant="permanent" PaperProps={{
                sx: {
                    backgroundColor: "#d8e1ed",
                    border: "none",
                    width: "270px",
                }
            }}>
                <List className={css.barContainer}>
                    <div className={css.logo}>
                        <ListItem>
                            <Link to='/' >
                                <p className={css.logoText}>Agile</p>
                            </Link>
                        </ListItem>
                    </div>
                    <div>
                        <Link to='/chat'>
                            <ListItem onClick={handleButtonClick} >
                                <img className={css.img} src={heartHands} width="24" height="24" alt="Hands Heart" />
                                <p className={css.btnText}>AI Agile Coach</p>
                            </ListItem>
                        </Link>
                    </div>
                </List>
            </Drawer>
            <Routes>
                <Route path='chat' element={<ChatPage />} />
            </Routes>
        </>
    );
};

export default Sidebar;