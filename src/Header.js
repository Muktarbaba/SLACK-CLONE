import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./StateProvider";

function Header() {
    const [{user}] =useStateValue();

    return <div className ="header">
        <div className="header_left">
        <Avatar
            className="header_avatar"
            alt={user?.displayname}
            src={user?.photoURL}
            />
    {/* avatar for logged in user */}
    <AccessTimeIcon/>
    {/* Time icon */}

        </div>
        <div className="header_search">
            <SearchIcon/>
    {/* search icon */}
    <input placeholder = "search Slack Clone"/>
    {/* input */}

        </div>
        <div className="header_right">
    <HelpOutlineIcon/>

        </div>
    </div>
}

export default Header;