'use client'
import React, { useState } from 'react'
import { IoIosAddCircle, IoIosLink } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

interface CertifactDto {
    title: string;
    urlCertif: string
}
const AboutCertifactions = () => {


    const hadnleSubmit = async (event: any) => {

    }
    const [certifactions, setCertifactions] = useState<CertifactDto[]>([{
        title: "Fullsatck Academy of code",
        urlCertif: "https://www.npmjs.com/package/@mui/material"
    }]);

    const [element, setElement] = useState<CertifactDto>({ title: "", urlCertif: "" });
    const [openAlert, setOpenAlert] = useState(false);

    return (
        <section className='flex justify-center mt-4'>
            <div className='w-1/2 max-w-xl'>
                <div >
                    <div className='flex items-center pb-2'>
                        <label htmlFor="message"
                            className='text-white block text-sm font-medium mr-2'
                        >Certifactions</label>
                        <IoIosAddCircle size={20} className='cursor-pointer' onClick={() => { setOpenAlert(true) }} />
                    </div>
                    <div className='flex flex-wrap  gap-2'>
                        {certifactions.map((elm, index) =>
                            <div key={index} className='text-sm bg-yellow-500 px-1 py-0.5 rounded-md flex items-center gap-1  group'>
                                <p>{elm.title}</p>
                                <IoIosLink size={16} className='cursor-pointer '
                                    onClick={() => {
                                        window.open(certifactions[index].urlCertif, '_blank');


                                    }} />

                                <GiCancel size={16} className='hidden group-hover:block cursor-pointer text-red-600'
                                    onClick={() => {
                                        setCertifactions((prevEduc) => {
                                            const newSkills = [...prevEduc];
                                            newSkills.splice(index, 1);
                                            return newSkills;
                                        });

                                    }} />
                            </div>
                        )}

                    </div>
                </div>

            </div>


            <div>
                <Dialog
                    open={openAlert}
                    onClose={() => {
                        setOpenAlert(false);
                    }}>
                    <DialogTitle className='px-3 pt-1'>Add Education</DialogTitle>
                    <DialogContent className="flex flex-col px-3 gap-2">
                        <div
                            className="flex bg-[#f1f3f8] text-black border border-[#1f3175] text-sm focus:border-white
      rounded-lg  w-full p-1.5 outline-none">
                            <input
                                placeholder='title'
                                type={"text"}
                                className="bg-[#f1f3f8] text-black placeholder-gray-500 text-sm outline-none"
                                value={element.title}
                                onChange={(e) => {
                                    setElement((pre: CertifactDto) => { return { title: e.target.value, urlCertif: pre.urlCertif } });
                                }}
                            ></input>
                        </div>

                        <div
                            className="flex bg-[#f1f3f8] text-black border border-[#1f3175] text-sm focus:border-white
      rounded-lg  w-full p-1.5 outline-none">
                            <input
                                placeholder='url'
                                type={"text"}
                                className="bg-[#f1f3f8] text-black placeholder-gray-500 text-sm outline-none"
                                value={element.urlCertif}
                                onChange={(e) => {
                                    setElement((pre: CertifactDto) => { return { title: pre.title, urlCertif: e.target.value } });
                                }}
                            ></input>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <button
                            onClick={async () => {
                                if (element.title.trim() !== "") {
                                    setCertifactions((prev) => [...prev, element])
                                    setElement({ title: "", urlCertif: "" })
                                    setOpenAlert(false);
                                }
                            }}
                            className="w-fit font-meduim  py-1 rounded-md   text-white bg-yellow-500
            text-xs px-2 md:text-sm lg:text-md lg:px-4">
                            Add
                        </button>
                    </DialogActions>
                </Dialog>

            </div>


        </section >
    )
}

export default AboutCertifactions
