import { Box } from "@mui/material";
import css from "./ChatPage.module.css";

const ChatPage = () => {
    return (
        <div className={css.container}>
            <div className={css.content}>
                <div className={css.dialogWrapper}>
                    <div className={css.contentWrapper1}>
                        <p className={css.txt}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                    </div>
                    <div className={css.contentWrapper2}>
                        <p className={css.txt}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                    </div>
                    <div className={css.contentWrapper1}>
                        <p className={css.txt}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                    </div>
                    <div className={css.contentWrapper1}>
                        <p className={css.txt}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos</p>
                    </div>
                </div>
                <div className={css.inputWrapper}>
                    <input type="text" placeholder="Type your message..." className={css.input} />
                    <button className={css.btn}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage