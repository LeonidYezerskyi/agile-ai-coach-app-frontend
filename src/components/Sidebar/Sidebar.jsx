import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom';
import heartHands from "../../assets/heartHands.svg";
import { Link } from 'react-router-dom';
import ChatPage from '../../pages/ChatPage/ChatPage';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/chat');
    };

    return (
        <div>
            <Drawer variant="permanent">
                <List>
                    <Link to='/' state={{ from: location.state?.from }}>
                        <ListItemText primary="Agile" />
                    </Link>
                    <Link to='/chat' state={{ from: location.state?.from }}>
                        <ListItem onClick={handleButtonClick}>
                            <div>
                                <img src={heartHands} width="24" height="24" alt="Hands Heart" />
                            </div>
                            <ListItemText primary="AI Agile Coach" />
                        </ListItem>
                    </Link>

                </List>

            </Drawer>
            <Routes>
                <Route path='chat' element={<ChatPage />} />
            </Routes>
        </div>
    );
};

export default Sidebar;