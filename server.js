const express = require('express');
const path = require('path');
const request = require('request');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// env varibles
//
// const baseUrl = 'https://sandbox.vend2earn.com/api/v1';
const baseUrl = 'https://app.vend2earn.com/api/v1';

// Setup for deploy to herouku
app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

// Account
app.post('/api/accNew', (req, res) => makeRequest(req, res, 'post', '/accNew'));
app.post('/api/login', (req, res) => makeRequest(req, res, 'post', '/login'));
app.post('/api/accPinReset', (req, res) => makeRequest(req, res, 'post', '/accPinReset'));
app.get('/api/accInfo', (req, res) => makeRequest(req, res, 'get', '/accInfo'));
app.get('/api/accList', (req, res) => makeRequest(req, res, 'get', '/accList'));
app.put('/api/accDeviceId', (req, res) => makeRequest(req, res, 'put', '/accDeviceId'));
app.put('/api/accPinUpdate', (req, res) => makeRequest(req, res, 'put', '/accPinUpdate'));

// Payment
app.post('/api/payCardDel', (req, res) => makeRequest(req, res, 'post', '/payCardDel'));
app.post('/api/payCardVal', (req, res) => makeRequest(req, res, 'post', '/payCardVal'));
app.post('/api/paystack_test', (req, res) => makeRequest(req, res, 'post', '/paystack_test'));
app.post('/api/payCard', (req, res) => makeRequest(req, res, 'post', '/payCard'));
app.post('/api/payCardOld', (req, res) => makeRequest(req, res, 'post', '/payCardOld'));
app.get('/api/payCardList', (req, res) => makeRequest(req, res, 'get', '/payCardList'));
app.get('/api/payBank', (req, res) => makeRequest(req, res, 'get', '/payBank'));
app.get('/api/paystackResp', (req, res) => makeRequest(req, res, 'get', `/paystackResp?trx_ref=${req.query.trx_ref}`));
app.get('/api/paystackFees', (req, res) => makeRequest(req, res, 'get', `/paystackFees?amount=${req.query.amount}`));
app.get('/api/paystack', (req, res) => makeRequest(req, res, 'get', '/paystack'));

// Wallets
app.post('/api/agentTopup', (req, res) => makeRequest(req, res, 'post', '/agentTopup'));
app.post('/api/verifyAgent', (req, res) => makeRequest(req, res, 'post', '/verifyAgent'));
app.get('/api/walletBal', (req, res) => makeRequest(req, res, 'get', '/walletBal'));
app.get('/api/vendTrxHistory', (req, res) =>
  makeRequest(req, res, 'get', `/vendTrxHistory?start=${req.query.start}&end=${req.query.end}`)
);
app.get('/api/prodPoints', (req, res) =>
  makeRequest(req, res, 'get', `/prodPoints?start=${req.query.start}&end=${req.query.end}`)
);
app.get('/api/walletTrxHistory', (req, res) =>
  makeRequest(req, res, 'get', `/walletTrxHistory?start=${req.query.start}&end=${req.query.end}`)
);
app.get('/api/walletReport', (req, res) => makeRequest(req, res, 'get', '/walletReport'));
app.post('/api/walletTopup', (req, res) => makeRequest(req, res, 'post', '/walletTopup'));

//Vending
app.post('/api/supportNew', (req, res) => makeRequest(req, res, 'post', '/supportNew'));
app.post('/api/vendValidate', (req, res) => makeRequest(req, res, 'post', '/vendValidate'));
app.post('/api/vendVerify', (req, res) => makeRequest(req, res, 'post', '/vendVerify'));
app.post('/api/vend', (req, res) => makeRequest(req, res, 'post', '/vend'));
app.post('/api/vendReplay', (req, res) => makeRequest(req, res, 'post', '/vendReplay'));
app.get('/api/vendLastReq', (req, res) => makeRequest(req, res, 'get', '/vendLastReq'));
app.get('/api/salesReport', (req, res) => makeRequest(req, res, 'get', '/salesReport'));

// Tickets
app.get('/api/notifications', (req, res) => makeRequest(req, res, 'get', '/notifications'));
app.get('/api/supportList', (req, res) => makeRequest(req, res, 'get', '/supportList'));
app.get('/api/supportView', (req, res) => makeRequest(req, res, 'get', `/supportView?${req.query.ticketID}`));
app.get('/api/supportFaq', (req, res) => makeRequest(req, res, 'get', `/supportFaq?limit=${req.query.limit}`));

// Products
app.get('/api/categories', (req, res) => makeRequest(req, res, 'get', '/categories'));
app.get('/api/categoriesBrand', (req, res) =>
  makeRequest(req, res, 'get', `/categoriesBrand?catId=${req.query.catId}`)
);
app.get('/api/products', (req, res) =>
  makeRequest(req, res, 'get', `/products?brandId=${req.query.brandId}&catID=${req.query.catID}`)
);
app.get('/api/suggest', (req, res) =>
  makeRequest(req, res, 'get', `/suggest?brandId=${req.query.brandId}&catId=${req.query.catId}`)
);

function makeRequest(req, res, method, url) {
  console.log('\n\nrequest url >>> ', baseUrl, url);
  console.log('\n\nrequest body >>> ', req.body);
  console.log('\n\nrequest params >>> ', req.query);
  console.log('\n\nrequest headers >>> ', req.headers.authorization);

  const opts = {};

  let token = '';

  if (req.headers && req.headers.authorization) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (req.body) {
    opts.json = req.body;
  }

  if (token) {
    opts.auth = { bearer: token };
  }

  console.log('\n\nrequest opts >>> ', opts);

  request[method](`${baseUrl}${url}`, opts, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
      console.log('success >>> ', error, response ? response.body : '', body);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    } else {
      res.status(400).send(error);
      console.log('success >>> ', error, response ? response.body : '', body);
      console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
    }
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
