import conf from '../conf/conf.js';
import { Client, Databases , ID , Storage , Query} from 'appwrite';

export class Service{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.projectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug , content, featureImage , status , userId }){
        try {
            return  await this.databases.createDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title , content, featureImage , status , userId }
            )
        }catch (error) {
            console.log("AppwriteServive  :: createPost :: error    ",error);
            throw error;
        }
    }
    async getPost(){
        try {
            const posts = await this.databases.getDocument(
                conf.databaseId,
                conf.collectionId,
                slug
            );
            return posts;
        } catch (error) {
            console.log("AppwriteService  :: getPost :: error    ",error);
            throw error;
        }

    }

    async updatePost( slug ,{title, content, featureImage , status  }){
        try {
            if(slug){
                return await this.databases.updateDocument(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title , content, featureImage , status }
            );
            }else{
                console.log("AppwriteService  :: updatePost :: Row Not Found    ");
            }
        } catch (error) {
            console.log("AppwriteService  :: updatePost :: error    ",error);
            throw error;
        }
    }
    async deletePost( slug ){
        try {
            if(slug){
                await this.databases.deleteDocument(
                    conf.databaseId,
                    conf.collectionId,
                    slug
                );
                return true
            }else{
                console.log("AppwriteService  :: deletePost :: Row Not Found    ");
                return false
            }
        } catch (error) {
            console.log("AppwriteService  :: deletePost :: error    ",error);
            throw error;
        }
    }
    async getPosts(query= [Query.equal("status", "active")] ){
        try {
            const posts = await this.databases.listDocuments(
                conf.databaseId,
                conf.collectionId,
                query
            );
            return posts;
        } catch (error) {
            console.log("AppwriteService  :: getPosts :: error    ",error);
            throw error;
        }
    }
    /// File upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.bucketId,
                ID.unique(),
                file,
            );
        } catch (error) {
            console.log("AppwriteService  :: uploadFile :: error    ", error);
            throw error;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.bucketId, fileId
            );
            return true;
        } catch (error) {
            console.log("AppwriteService  :: deleteFile :: error    ", error);
            throw error;
        }
    }
    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.bucketId,
            fileId
        )
        }
}

const service = new Service();
export default service