import {IconButton, Typography } from "@mui/material";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa"


function Footer() {
    return(
        <footer className="footer">
            <Typography variant="h4">Rateb Ajamieh</Typography>
            <Typography>Made with React</Typography>
            <div className="footer-links">
                <IconButton href="mailto:ratebajamieh@hotmail.com">
                    <FaEnvelope/>
                </IconButton>
                <IconButton href="https://linkedin.com/in/rateb-ajamieh">
                    <FaLinkedin/>
                </IconButton>
                <IconButton href="https://github.com/hi337">
                    <FaGithub/>
                </IconButton>
            </div>
        </footer>
    )
}

export default Footer;