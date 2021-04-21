import React, {useEffect} from 'react';
import { render } from 'react-dom';
import * as ManiF from '../helpers.js';
import {Button} from 'react-bootstrap';
import './settings.css';

function refreshApp() {
    window.location.reload(false);
    window.alert("Updates applied!")
    
  }

const Settings = () => {
    return(
        <div className="settingsButtons">
            {/* *** Add words to explain functionality. Style the button too */}
            <Button onClick={refreshApp}>Check for updates</Button>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={ManiF.deleteCollection}>Erase All</Button>
        </div>
        
    )

}
export default Settings;