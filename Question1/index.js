const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;


const companyName = 'KIIT';
const ownerName = 'Nitya Singh';
const rollNo = '1';
const ownerEmail = '2005317@kiit.ac.in';
const accessCode = 'FKDLjg';

let token;

async function getToken() {
    try {
      const response = await axios.post('http://20.244.56.144/train/auth', {
        companyName,
        ownerName,
        rollNo,
        ownerEmail,
        accessCode,
      });
      token = response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  }