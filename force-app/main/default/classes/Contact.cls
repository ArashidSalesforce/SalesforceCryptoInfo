public with sharing class Contact {
    
    @AuraEnabled
    public static void saveEmailToContact(String email) {

        /*// Check if the current user has permission to read and create Account
        if (!Schema.sObjectType.Contact.isAccessible()) {
            throw new CustomException('Insufficient permissions to access Account records.');
        }
        
        if (!Schema.sObjectType.Contact.isCreateable()) {
            throw new CustomException('Insufficient permissions to create Account records.');
        }

        // Ensure the user has permission to query the Contact object
        //List<Contact> existingContacts = new List<Contact>();
        id existingContacts = null;
        if (Schema.sObjectType.Contact.fields.Email.isAccessible()) {
            existingContacts = [SELECT Id FROM Account WHERE Email__c = :email LIMIT 1].id;
        } else {
            throw new CustomException('Insufficient permissions to query the Account object.');
        }

        if (existingContacts != null) {*/
            // Ensure the user has permission to insert new Contact records
            if (Schema.sObjectType.Contact.isCreateable()) {
                Account[] accts = new List<Account>();
                Account newAcc = new Account(name = email, email__c = email);
                insert newAcc;
            } else {
                throw new CustomException('Insufficient permissions to create Contact records.');
            }
        /*} else {
            throw new CustomException('A contact with this email already exists.');
        }*/
    }

    public class CustomException extends Exception {}
}