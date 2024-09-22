import { LightningElement } from 'lwc';

export default class CryptoReserve extends LightningElement {
    cryptoBrokers = [
        {
            id: 'Binance',
            name: 'Binance',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGFR',
            reserve: '100%',  // Placeholder for dynamic data
            signUpLink: 'https://www.binance.com/sign-up',
        },
        {
            id: 'Coinbase',
            name: 'Coinbase',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGH3',
            reserve: 'Unverified ',
            signUpLink: 'https://www.coinbase.com/sign-up',
        },
        {
            id: 'Kraken',
            name: 'Kraken',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGIf',
            reserve: '100%',  // Placeholder for dynamic data
            signUpLink: 'https://www.Kraken.com/sign-up',
        },
        {
            id: 'Bitfinex',
            name: 'Bitfinex',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGLt',
            reserve: 'Unverified ',
            signUpLink: 'https://www.Bitfinex.com/sign-up',
        },
        {
            id: 'Gemini',
            name: 'Gemini',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGKH',
            reserve: 'Unverified ',
            signUpLink: 'https://www.Gemini.com/sign-up',
        },
        {
            id: 'Houbi',
            name: 'Houbi',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IGNV',
            reserve: '100%',
            signUpLink: 'https://www.Houbi.com/sign-up',
        }
    ];
}
