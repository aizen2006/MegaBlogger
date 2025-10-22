import { Client, Account, ID } from "appwrite";
import conf from '../conf/conf.js';

const client = new Client()
    .setProject(conf.projectId)
    .setEndpoint(conf.appwriteUrl);

const account = new Account(client);

// Function to ping Appwrite and verify connection
export const pingAppwrite = async () => {
    try {
        // Try to get account info - this will work even without authentication
        // and will verify that the connection is working
        const response = await account.get();
        console.log('✅ Appwrite connection successful!');
        return { success: true, message: 'Appwrite connection verified' };
    } catch (error) {
        // If we get a 401, it means the connection is working but we're not authenticated
        // This is actually a good sign for the ping test
        if (error.code === 401) {
            console.log('✅ Appwrite connection successful! (401 is expected without authentication)');
            return { success: true, message: 'Appwrite connection verified (authentication required for account access)' };
        }
        
        // Other errors indicate connection issues
        console.error('❌ Appwrite connection failed:', error);
        return { success: false, message: error.message };
    }
};

export { client, account };