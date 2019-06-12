import React from 'react';
import axios from 'axios';
import { UV_UDP_REUSEADDR } from 'constants';

class Users extends React.Component {

    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.getUsers();
    }







}

export defaults Users;
