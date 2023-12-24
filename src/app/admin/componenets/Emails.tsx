'use client';

import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { MdMarkEmailUnread } from 'react-icons/md';
import EmailCards from './EmailCards';

type emailDto = {
  _id: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
};
const Emails = () => {
  // const tmp: emailDto = { email: "ahmmam", subject: "djahsf", message: "sjhkj", date: 44 }

  const [emails, setEmails] = useState<emailDto[] | undefined>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/email`);
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: emailDto[] = await res.json();
      setEmails(data);
    };
    try {
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="flex justify-center mt-12">
      <div className="w-1/2 max-w-xl">
        <div className="flex items-center justify-between pb-2">
          <div className="text-white block text-md font-medium mr-2">
            ALL INBOXES
          </div>
          <div
            className="text-white block text-sm font-medium mr-2 cursor-pointer hover:underline"
            onClick={() => {}}
          >
            clear all
          </div>
        </div>

        {emails &&
          emails.map((email: emailDto, index: number) => (
            <EmailCards key={index} email={email} />
          ))}
      </div>
    </section>
  );
};

export default Emails;
