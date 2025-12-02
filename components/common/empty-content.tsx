import React from 'react'

export const Emptycontent = () => {
    return (
        <div className='flex w-full h-full items-center justify-center'>
            <video src="/EmptyDocument.mp4" autoPlay loop muted className='w-full h-full object-contain' />
        </div>
    )
}
