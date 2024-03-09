'use client';
import React from 'react'

//Using this containerprops, we can recieve and display anything that we pass inside container tag that we have created like in navbar
interface ContainerProps {
    children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>{children}</div>
    )
}

export default Container;
