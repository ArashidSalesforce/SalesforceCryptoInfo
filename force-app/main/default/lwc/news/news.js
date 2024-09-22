import { LightningElement } from 'lwc';

export default class NewsFeed extends LightningElement {
    newsWebsites = [
        {
            id: '1',
            name: 'CoinDesk',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IHTF', // Replace with actual logo URL
            url: 'https://www.coindesk.com/',
        },
        {
            id: '2',
            name: 'CoinTelegraph',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IHR9', // Replace with actual logo URL
            url: 'https://cointelegraph.com/',
        },
        {
            id: '3',
            name: 'The Block',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IHUr', // Replace with actual logo URL
            url: 'https://www.theblock.co/',
        },
        {
            id: '4',
            name: 'CryptoSlate',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IHWT', // Replace with actual logo URL
            url: 'https://cryptoslate.com/',
        },
        {
            id: '5',
            name: 'Decrypt',
            logo: 'https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.salesforce.com/servlet/servlet.FileDownload?file=015ak000001IHY5', // Replace with actual logo URL
            url: 'https://decrypt.co/',
        }
    ];
}


