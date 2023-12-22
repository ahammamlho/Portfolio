"use client"
import React, { useState } from 'react'
import { MdDelete } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";


type emailDto = {
    _id: string;
    email: string,
    subject: string,
    message: string,
    createdAt: string
};

interface MyComponentProps {
    email: emailDto;

}
const EmailCards: React.FC<MyComponentProps> = ({ email }) => {
    const [show, setShow] = useState(false);
    const deleteItem = async (id: string) => {
        const res = await fetch(`http://localhost:3000/api/email?id=${id}`, {
            method: "DELETE"
        })

        console.log(res)
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        } else { window.location.reload() }
    }

    const getHours = (dateString: string) => {
        const dateObject = new Date(dateString);
        const hours = dateObject.getHours();
        const minutes = dateObject.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedTime
    }
    const getTime = (dateTimeString: string) => {
        const dateObject = new Date(dateTimeString);
        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
        const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
        return formattedDate
    }

    return (
        <div className='mt-2 border-[0.1px] rounded-md hover:bg-gray-900'>
            <div className='flex items-center justify-between p-1  rounded-md'>
                <div className='flex items-center cursor-pointer'
                    onClick={() => {
                        console.log("clicked"), setShow((pre) => !pre)
                    }}>
                    <div className='bg-white p-1.5 rounded-full'>
                        <MdMarkEmailUnread className='text-black ' size={30} />
                    </div>
                    <div className='flex flex-col p-2 '>
                        <div className='text-md'>{email.email}</div>
                        <div className='text-sm'>{email.subject}</div>
                    </div>
                </div>
                <div className='flex flex-col p-2 items-end'>
                    <div className='text-sm'>{getHours(email.createdAt)}</div>
                    <MdDelete className='text-md hover:text-red-700 cursor-pointer'
                        onClick={async () => {
                            await deleteItem(email._id)
                        }}
                    />
                </div>
            </div>
            {
                show &&
                <div className='mt-1 p-1.5 '>
                    <div >{email.message}</div>
                    <div className='text-sm flex items-end justify-end mt-2 mr-2'>{getTime(email.createdAt)}</div>
                </div>
            }
        </div >
    )
}

export default EmailCards
