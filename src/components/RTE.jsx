import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { Controller } from 'react-hook-form';

export default function RTE({name, control,label , defaultValue=''}) {
  return (
    // correct way to do this
    <div className='w-full'>
        {label && <label className='mb-2 inline-block font-medium'>{label}</label>}
        <Controller
        name={name || "content"}
        control={control}
        render={({field:{onChange}}) => (
            <Editor
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code wordcount help'
                ],
                toolbar: [
                    { name: 'document', items: ['undo', 'redo', 'print', 'preview'] },
                    { name: 'clipboard', items: ['cut', 'copy', 'paste', 'selectall'] },
                    { name: 'insert', items: ['link', 'image', 'table'] },
                    { name: 'format', items: ['bold', 'italic', 'underline'] },
                    { name: 'view', items: ['fullscreen', 'code'] }
                ],
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }} 
            onEditorChange={onChange}
            />
        )}

        />
    </div>
    // <Editor initialValue="<p>This is the initial content of the editor</p>"
    // init={
    //     {branding:false,
    //         height: 500,
    //         menubar:  true ,
    //         plugins : [
    //             'advlist  autolink lists link image charmap print preview anchor',
    //             'searchreplace visual blocks code fullscreen',
    //             'insertdatetime  media table paste code wordcount help '
    //         ],
    //         toolbar: [
    //             { name: 'document', items: ['undo', 'redo', 'print', 'preview'] },
    //             { name: 'clipboard', items: ['cut', 'copy', 'paste', 'selectall'] },
    //             { name: 'insert', items: ['link', 'image', 'table'] },
    //             { name: 'format', items: ['bold', 'italic', 'underline'] },
    //             { name: 'view', items: ['fullscreen', 'code'] }
    //         ]
    //     }
    // } />
  )
}
