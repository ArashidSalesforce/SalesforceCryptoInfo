import { LightningElement } from 'lwc';
import saveEmailToContact from '@salesforce/apex/Contact.saveEmailToContact'; // Ensure the Apex method is correctly imported

export default class SubscribeForm extends LightningElement {
    isSubmitted = false; // Tracks whether the form has been successfully submitted

    handleSubmit(event) {
        event.preventDefault(); // Prevent the default form submission

        let allGood = true;
        
        const emailField = this.template.querySelector('input[name="email"]');
        if (emailField.value.length === 0) {
            allGood = false; // If the email field is empty, set the flag to false
            console.error('Email field is empty');
        }

        // If everything is valid, call the Apex method
        if (allGood) {
            saveEmailToContact({ email: emailField.value })
                .then(() => {
                    // On success, show the success screen
                    this.isSubmitted = true;
                })
                .catch((error) => {
                    // Handle any error (optional)
                    console.error('Error:', error);
                });
        }
    }
}

