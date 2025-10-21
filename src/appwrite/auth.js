import conf from '../conf/conf.js';
import { Client, Account ,ID } from 'appwrite';

export class AuthService {
    client= new Client();
    account;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.account = new Account(this.client)
    }

    async createAccount({email, password , name}){
        try {
            const userAccount = await this.account.createAccount(ID.unique() , email , password , name);
            if (userAccount) {
                // call another method
                return 
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }

    }
    async login({email, password}) {
        try {
                const userLogin = await this.account.createEmailPasswordSession(email,password)
                return result
        } catch (error) {
            throw error;
        }
    }
    async logout(){
        try {
            const userLogout = await this.account.deleteSessions()
            return userLogout
        } catch (error) {
            throw error;
        }

    }
    async getCurrentUser(){
        try {
            const Status = await this.account.get()
            return Status
        } catch (error) {
            throw error;
        }
        return null;
    }
}

const authService = new AuthService();

export default AuthService