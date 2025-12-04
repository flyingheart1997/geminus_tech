import { CompanyDetails } from "../utils"


export const Vision = () => {
    const content = CompanyDetails.vision
    return (
        <section
            id={content.id}
            className='w-full flex-grow flex flex-col p-5 pb-0 sm:p-10 sm:pb-0 gap-4'>
            <span className='text-[clamp(18px,3vw,30px)] text-white underline decoration-2 underline-offset-8 font-bold font-chakra'>
                {content.title}
            </span>
            <div className='bg-[#0F0F0F] rounded-md border border-[#1F1F1F] flex flex-col gap-3 p-5'>
                <span className='text-[clamp(14px,2vw,18px)] font-light text-wrap text-white/80'>{content.description}</span>
            </div>
        </section>
    )
}
