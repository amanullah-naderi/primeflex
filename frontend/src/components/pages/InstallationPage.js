// wa_ss24_primeflex/frontend/src/components/pages/InstallationPage.js
import React from 'react';
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import '../styles/DocIns.css';

const InstallationPage = () => {
    return (
        <div className="container">
            <header>
                <Link to="/" className="App-link">
                    <img src={logo} className="App-logos" alt="logo" />
                </Link>
            </header>
            <div className="content">
                <h1 style={{fontWeight: 'bold', textAlign: 'center', fontSize: '34px'}}>Installation Instruction of primeflex</h1>
                <p>To install and set up primeflex, follow these steps:</p>
                <ol>
                    <li>Download or clone the latest version of primeflex from our git repository
                        (https://git.ai.fh-erfurt.de/ma4163sp1/wa/ss24/wa_ss24_primeflex.git).
                    </li>
                    <li>Extract the downloaded file to a folder on your computer.</li>
                    <li>Install the Docker (https://docs.docker.com/get-docker/) if you don't already have it installed. You
                        can download the Docker from the Docker website.
                    </li>
                    <li>Install and configure an IDE, such as IntelliJ IDEA (https://www.jetbrains.com/idea).</li>
                    <li>Install MongoDB (mongosh) if you don't already have it installed. You can find instructions for
                        installing MongoDB (mongosh) on the Docker (https://www.mongodb.com/docs/mongodb-shell/install/)
                        websites, respectively.
                    </li>
                    <li>Install npm and other necessaries libraries, when you done, try to type (git checkout release) and after that try to type (docker compose up) and enjoy your React App.</li>
                </ol>
                <p>After completing these steps, you should be ready to run primeflex. If you have any issues or questions during the installation process, please consult the troubleshooting section of this documentation or contact us for assistance.</p>
            </div>
        </div>
    );
};

export default InstallationPage;