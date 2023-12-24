// pages/index.tsx or any other Next.js component file

import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

interface MyComponentProps {
  name: String;
  myFunction: (elm: dataElmentDto) => void;
  openAlert: boolean;
  setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertAddElment: React.FC<MyComponentProps> = ({
  name,
  myFunction,
  openAlert,
  setOpenAlert,
}) => {
  const [element, setElement] = useState<dataElmentDto>({ title: '', url: '' });

  return (
    <div>
      <Dialog
        open={openAlert}
        onClose={() => {
          setOpenAlert(false);
        }}
      >
        <DialogTitle className="px-3 pt-1 w-4xl">Add {name}</DialogTitle>
        <DialogContent className="flex flex-col px-3 gap-2 md:w-[28rem] w-[20rem]">
          <div
            className="flex bg-[#f1f3f8] text-black border border-[#1f3175] text-sm focus:border-white
      rounded-lg  w-full p-1.5 outline-none"
          >
            <input
              placeholder="Title"
              type={'text'}
              className="bg-[#f1f3f8] text-black placeholder-gray-500 text-sm outline-none"
              value={element.title}
              onChange={(e) => {
                setElement((pre: dataElmentDto) => {
                  return { title: e.target.value, url: pre.url };
                });
              }}
            ></input>
          </div>

          <div
            className="flex bg-[#f1f3f8] text-black border border-[#1f3175] text-sm focus:border-white
      rounded-lg  w-full p-1.5 outline-none"
          >
            <input
              placeholder="url"
              type={'text'}
              className="bg-[#f1f3f8] text-black placeholder-gray-500 text-sm outline-none"
              value={element.url}
              onChange={(e) => {
                setElement((pre: dataElmentDto) => {
                  return { title: pre.title, url: e.target.value };
                });
              }}
            ></input>
          </div>
        </DialogContent>
        <DialogActions>
          <button
            disabled={element.title.trim() === ''}
            onClick={async () => {
              if (element.title.trim() !== '') {
                myFunction(element);
                setElement({ title: '', url: '' });
                setOpenAlert(false);
              }
            }}
            className="w-fit font-meduim  py-1 rounded-md   text-white bg-yellow-500
            text-xs px-2 md:text-sm lg:text-md lg:px-4"
          >
            Add
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertAddElment;
