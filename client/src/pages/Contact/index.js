import React from 'react'
import InnerHTML from 'dangerously-set-html-content'

const Contact = () => {
    const contactForm = `
    <script>hbspt.forms.create({region: "na1",portalId: "20208899",formId: "ab9ccda4-040c-4a15-b52f-14b7303718c5"});</script>
    `
    return (
        <div className='bg-gradient-to-r from-lightblue to-darkblue lg:px-4 py-10'>
            <div className='text-center font-bold text-3xl text-white'>Contact Us</div>
            <div className='lg:w-1/2 m-auto mb-10 text-center text-xl text-white'>Please reach out to us with any questions or concerns. We appreciate all feedback and look forward to doing business with you!</div>
            <div className='bg-white p-10 rounded-lg w-100 md:w-1/2 m-auto'>
                <InnerHTML html={contactForm} className="w-full" />
            </div>
        </div>
    )
}


export default Contact
