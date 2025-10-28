import conf from '../conf/conf.js';
import { Client, Account ,ID } from 'appwrite';

export class AuthService {
    client= new Client();
    account ;
    
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password , name}){
        try {
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            return userAccount;
        } catch (error) {
            throw error;
        }

    }
    async login({email, password}) {
        try {
                const userLogin = await this.account.createEmailPasswordSession(email,password)
                return userLogin;
        } catch (error) {
            // Handle existing session edge-case
            const message = (error && (error.message || error.toString())) || '';
            const code = error && (error.code || error.status || error.responseCode);
            const isActiveSession = code === 409 || /session is active/i.test(message);
            if (isActiveSession) {
                try {
                    // If a session is already valid, return current user as success signal
                    const existing = await this.account.get();
                    return existing;
                } catch (_) {
                    // Clear stale sessions and retry once
                    try {
                        await this.account.deleteSessions();
                        const retry = await this.account.createEmailPasswordSession(email, password);
                        return retry;
                    } catch (e) {
                        throw e;
                    }
                }
            }
            throw error;
        }
    }
    async logout(){
        try {
            const userLogout = await this.account.deleteSessions()
            return userLogout;
        } catch (error) {
            throw error;
        }

    }
    async getCurrentUser(){
        try {
            const Status = await this.account.get()
            return Status
        } catch (error) {
            const code = error && (error.code || error.status || error.responseCode);
            if (code === 401 || code === 403) {
                return null;
            }
            return null;
        }
        
    }
}

const authService = new AuthService();

export default authService;