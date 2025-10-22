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
            apiKey='zud8nxjpqml4cru6eqxt7t8el0luzbqip0dywwyk4qujpv8f'
            initialValue={defaultValue}
            init={{
                height: 500,
                menubar: false,
                plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code wordcount help'
                ],
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography uploadcare | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Sanjiuro',
                mergetags_list: [
                    { value: 'First.Name', title: 'First Name' },
                    { value: 'Email', title: 'Email' }],
                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
                uploadcare_public_key: '6f72e49dd2f30ee45f42',
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
