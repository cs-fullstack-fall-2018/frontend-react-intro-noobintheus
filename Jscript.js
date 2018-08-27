import React, { Component } from 'react';
import AccountSetup from './AccountSetup'





class AccountSetup extends Component {
    render() {

        return (
            <div className="App2">
            <AccountSetup account={"100"}/>
        <h1>this is our new app</h1>
        <h3>AccountSetup account = {"100"}</h3>

            </div>
    );
    }
}

export default AccountSetup;