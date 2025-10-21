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
            const post = await this.databases.createRow(
                conf.databaseId,
                conf.collectionId,
                slug,
                {title , content, featureImage , status , userId }
            );
        }catch (error) {
            console.log("AppwriteServive  :: createPost :: error    ",error);
        }
    }
    async getPosts(){
        try {
            const posts = await this.databases.listRows(
                conf.databaseId,
                conf.collectionId,
                Query.equal( title , slug)
            );
            return posts;
        } catch (error) {
            
        }

    }

    async updatePost( slug ,{title, content, featureImage , status  }){
        try {
            if(slug){
                return await this.databases.updateRow(
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
        }
    }
    async deletePost( slug ){
        try {
            if(slug){
                await this.databases.deleteRow(
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
        }
    }
    async getPosts(query= [Query.equal("status", "active")] ){
        try {
            const posts = await this.databases.listRows(
                conf.databaseId,
                conf.collectionId,
                ...query
            );
            return posts;
        } catch (error) {
            console.log("AppwriteService  :: getPosts :: error    ",error);
        }
    }
    /// File upload services
    async uploadFile(file) {
        try {
            const response = await this.bucket.uploadFile(
                conf.bucketId,
                ID.unique(),
                file,
            );
            return response;
        } catch (error) {
            console.log("AppwriteService  :: uploadFile :: error    ", error);
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
            return false;
        }
    }
    getFilePreview(fileId) {
        try {
            const response = this.bucket.getFilePreview(
                conf.bucketId,
                fileId,
            );
            return response;
        } catch (error) {
            console.log("AppwriteService  :: getFilePreview :: error    ", error);
        }
        }
}

const service = new Service();
export default service
