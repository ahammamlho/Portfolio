'use client'
import React, { useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { GiCancel } from "react-icons/gi";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

const AboutEducation = () => {


    const hadnleSubmit = async (event: any) => {

    }
    const [education, setEducation] = useState<string[]>(["1337 School"]);
    const [element, setElement] = useState<string>("");
    const [openAlert, setOpenAlert] = useState(false);

    return (
        <section className='flex justify-center mt-4'>
            <div className='w-1/2 max-w-xl'>
                <div >
                    <div className='flex items-center pb-2'>
                        <label htmlFor="message"
                            className='text-white block text-sm font-medium mr-2'
                        >Education</label>
                        <IoIosAddCircle size={20} className='cursor-pointer' onClick={() => { setOpenAlert(true) }} />
                    </div>
                    <div className='flex flex-wrap  gap-2'>
                        {education.map((elm, index) =>
                            <div key={index} className='text-sm bg-yellow-500 px-1 py-0.5 rounded-md flex items-center gap-1  group'>
                                <p>{elm}</p>
                                <GiCancel size={16} className='hidden group-hover:block cursor-pointer text-red-600'
                                    onClick={() => {
                                        setEducation((prevEduc) => {
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
                    <DialogContent className="flex flex-col px-3">
                        <div
                            className="flex bg-[#f1f3f8] text-black border border-[#1f3175]
      placeholder-gray-300 text-sm focus:border-white
      rounded-lg  w-full p-1.5 outline-none">
                            <input
                                type={"text"}
                                className="bg-[#f1f3f8] text-black placeholder-gray-300 text-sm outline-none"
                                value={element}
                                onChange={(e) => {
                                    setElement(e.target.value);
                                }}
                            ></input>

                        </div>
                    </DialogContent>
                    <DialogActions>
                        <button
                            onClick={async () => {
                                if (element.trim() !== "" && !education.includes(element.trim())) {
                                    setEducation((prev) => [...prev, element.trim()])
                                    setOpenAlert(false);
                                    setElement("")
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

export default AboutEducation
