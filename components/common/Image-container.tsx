import React from 'react'

export const ImageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-gradient-to-b border-transparent border-t-[#333] border-t-[1.5px] relative rounded-full flex items-center justify-center from-[rgb(26,26,26)] to-black via-[rgba(26, 26, 26, 0.00)] p-[2px]'>
            <div className='p-5 rounded-full flex items-center justify-center'>
                <div className='bg-gradient-to-b border-transparent border-t-[#333] border-t-[1.5px] flex items-center justify-center rounded-full from-[rgb(26,26,26)] to-black via-[rgba(26, 26, 26, 0.00)] p-[2px]'>
                    <div className='p-5 rounded-full flex items-center justify-center'>
                        <div className='bg-gradient-to-b border-transparent border-t-[#333] border-t-[1.5px] flex items-center justify-center rounded-full from-[rgb(26,26,26)] to-black via-[rgba(26, 26, 26, 0.00)] p-[2px]'>
                            <div className='p-5 rounded-full flex items-center justify-center'>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
