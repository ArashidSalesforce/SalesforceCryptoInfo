
# Crypto Subscription and Reserve Tracking Project

https://mindful-wolf-nyxz84-dev-ed.trailblaze.my.site.com/

![image](https://github.com/user-attachments/assets/b6d026a3-9769-448c-9c66-bc16d741d4f9)


This project is a Lightning Web Component (LWC) application that allows users to subscribe to a crypto newsletter and track reserve percentages for major cryptocurrency exchanges using the Nansen API (Future Scope). The project integrates both client-side and server-side logic using LWC and Salesforce Apex.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [LWC Components](#lwc-components)
- [Nansen API Integration](#nansen-api-integration)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Subscription Form**: A simple subscription form where users can enter their email and subscribe to crypto updates.
- **Proof of Reserves Tracking**: Has the latest reserve percentages of major crypto exchanges (Binance, Kraken, Coinbase, etc.).
- **Dynamic Success Screen**: Displays a confirmation screen after successful subscription.
- **Responsive Design**: Uses Salesforce Lightning Design System (SLDS) for a clean and responsive user interface.

## Installation

### Prerequisites
- Salesforce Developer Org
- Salesforce CLI

### Steps
1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/your-username/crypto-subscription-reserve-tracker.git
    cd crypto-subscription-reserve-tracker
    ```
2. Authenticate into your Salesforce org:
    ```bash
    sfdx auth:web:login
    ```
3. Push the code to your org:
    ```bash
    sfdx force:source:push
    ```
4. Assign the appropriate permission set (if applicable):
    ```bash
    sfdx force:user:permset:assign -n YourPermissionSet
    ```
5. Test the app by navigating to the corresponding Lightning App.

## Usage

### Subscription Form
Users can enter their email and subscribe to the latest crypto updates. The subscription form checks for valid input before submitting.

### Tracking Exchange Reserves
The project fetches exchange reserves from the Nansen API and displays reserve percentages for major exchanges such as:
- Binance
- Kraken
- Coinbase
- Gemini

## Apex Controller

Future Scope - The project uses an Apex controller to handle backend logic:
- `CryptoSubscriptionController`: Manages the subscription form logic, saving user emails.
- `CryptoReserveController`: Fetches reserve data from the Nansen API and returns it to the LWC.

## LWC Components

### `subscribeForm`
This component handles user subscription:
- Displays an email input form
- Shows a success message upon successful submission

### `exchangeReserves`
This displays reserve percentages for major exchanges using data fetched from the backend.

### Example Code for `subscribeForm.js`:
```javascript
import { LightningElement } from 'lwc';
import saveEmailToContact from '@salesforce/apex/CryptoSubscriptionController.saveEmailToContact';

export default class SubscribeForm extends LightningElement {
    handleSubmit(event) {
        event.preventDefault();
        const email = this.template.querySelector('input').value;
        saveEmailToContact({ email })
            .then(() => this.isSubmitted = true)
            .catch(error => console.error(error));
    }
}
```

## Future Scope - Nansen API Integration

To track reserve percentages of major crypto exchanges, we integrate with the Nansen API. The API is used to fetch data such as reserve percentages and asset holdings for exchanges like Binance, Kraken, and more.

### Setup
1. Obtain a Nansen API key by signing up [here](https://www.nansen.ai).
2. Store the API key securely in Salesforce or use a secure method to access it in your Apex controller.
3. Modify `CryptoReserveController` to include the Nansen API integration.

## Contributing
If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
