import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '7227187273mshe3714d4cd468ec0p117c7ejsn137a9ebf9256'
};
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

const baseUrl = 'https://coinranking1.p.rapidapi.com';


export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (uuid) => createRequest(`/coin/${uuid}`)
        }),
        getCryptoHistory: builder.query({
            query: ({uuid, timePeriod}) => createRequest(`/coin/${uuid}/history?timePeriod=${timePeriod}`)
        }),

    })
});

export const { useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;


/*
 'x-rapidapi-host':'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '7007350e0dmshf6462f4834bad5dp11c0a3jsnb20f1265ad9d'
*/


 /* const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'bcc8b2315cmsh32fcd67b040a74cp1c0d3ajsn9fb6e40bfca3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};
  */


/* 
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/simple/price',
  params: {
    ids: '<REQUIRED>',
    vs_currencies: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': 'bcc8b2315cmsh32fcd67b040a74cp1c0d3ajsn9fb6e40bfca3',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};
*/

/* 
const options = {
  method: 'GET',
  url: 'https://datacoints.p.rapidapi.com/bitcoin-blockchain/',
  params: {limit: '2'},
  headers: {
    'X-RapidAPI-Key': 'bcc8b2315cmsh32fcd67b040a74cp1c0d3ajsn9fb6e40bfca3',
    'X-RapidAPI-Host': 'datacoints.p.rapidapi.com'
  }
};
*/

/*
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://coinranking1.p.rapidapi.com/coins',
  params: {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    'tiers[0]': '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  },
  headers: {
    'X-RapidAPI-Key': 'bcc8b2315cmsh32fcd67b040a74cp1c0d3ajsn9fb6e40bfca3',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
*/


/*
'https://coinbasestefan-skliarovv1.p.rapidapi.com/getCheckoutOrders'
*/


/*
{
  "cache-control": "max-age=60",
  "content-length": "51869",
  "content-type": "application/json; charset=utf-8"
}
*/