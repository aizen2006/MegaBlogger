import React, { useCallback, useState } from 'react';
import {useForm} from 'react-hook-form';
import { Btn, Input, Select , RTE } from '../index.js';
import service from '../../appwrite/config.js';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm({ post }) {
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, watch, control , getValues     } = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'draft',
        }
    });

    const [error, setError] = useState('');
    const userData = useSelector((state) => state.user.userData);

    const onSubmit = async (data) => {
        setError('');
        if (post){
            data.image[0] ?  await service.uploadFile(data.image[0]) : null;
            if(file){
                await service.deleteFile(post.featureImage);
            }
            const dbpost = await service.updatePost(post.$id, {...data , featureImage: file ? file.$id : undefined }); 
            if (dbpost) {
                navigate(`/post/${dbpost.$id}`);
            }

        }else{
            const file = data.image ? await service.uploadFile(data.image[0]) : null;

            if(file){
                const fileId = file.$id;
                const dbpost = await service.createPost({...data , featureImage: fileId , userId: userData.$id }); 
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`);
                }
            }
        }
        
    }
    const slugTransform = useCallback((value) =>{
        if (value && typeof(value) === 'string'){
            return value
            .trim()
            .toLowerCase()
            .replace(/^[a-zA-Z\d\s]+/g, '-')
            .replace(/\s/g, '-');
        return ''
        }
    }, [setValue]);

    React.useEffect(() => {
        const subscription = watch((value, { name}) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title, {shouldValidate: true}));
            }
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [slugTransform, watch, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Btn type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Btn>
            </div>
        </form>
    )

}
