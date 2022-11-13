import React from 'react';

const TestimonialsCard = ({tests}) => {
    const{authorName,descriprion,authorimg}=tests
    return (
        <div className="max-w-md p-6 overflow-hidden rounded-lg shadow dark:bg-gray-900 dark:text-gray-100">
        <article>
            <p className="mt-4 dark:text-gray-400">{descriprion}</p>
            <div className="flex items-center mt-8 space-x-4">
                <img  src={authorimg} alt="" className=" h-20 w-20 border border-2 border-purple-500 rounded-full dark:bg-gray-500" />
                <div>
                    <h3 className="text-lg font-medium">{authorName}</h3>
                    <time datetime="2021-02-18" className="text-base dark:text-gray-400">California</time>
                </div>
            </div>
        </article>
    </div>
    );
};

export default TestimonialsCard;