'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import LinkedinIcon from '../../../public/socials/linkedin-icon.svg';
import GitHubIcon from '../../../public/socials/github-icon.svg';
import { ToastContainer, toast } from 'react-toastify';
const EmailSection = () => {
  const [data, setData] = useState({
    email: '',
    subject: '',
    message: '',
  });
  const [submit, setSubmit] = useState(false);
  const hadnleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      if (!submit) {
        setSubmit(true);
        const id = toast.loading('Please wait...');
        const res = await fetch(`/api/email`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },

          body: JSON.stringify(data),
        });
        console.log(res);
        if (res.ok) {
          toast.update(id, {
            autoClose: 2000,
            render: 'Something good happend!',
            type: 'success',
            isLoading: false,
          });
          setData({
            email: '',
            subject: '',
            message: '',
          });
          setSubmit(false);
        } else {
          toast.update(id, {
            autoClose: 3000,
            render: 'Something went wrong, Please contact me in Linkedin.',
            type: 'error',
            isLoading: false,
          });
          setSubmit(false);
        }
      }
    } catch (error) {
      setSubmit(false);
    }
  };

  return (
    <section id="contact">
      <div className="flex items-center justify-center gap-2 mb-6 mt-6">
        <h2 className="text-center text-4xl font-bold text-white">Conatct</h2>
      </div>

      <div className="grid md:grid-cols-2  gap-4">
        <div>
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I will try
            my best to get back to you!
          </p>
          <div className="socials flex gap-2">
            <Link
              href="https://ma.linkedin.com/in/lhoussaine-ahammam-966831182?trk=people_directory"
              target="_blank"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link href="https://github.com/ahammamlho" target="_blank">
              <Image src={GitHubIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>

        <div>
          <form className="flex flex-col" onSubmit={hadnleSubmit}>
            <div className="mb-4 flex flex-col">
              <label
                htmlFor="email"
                className="text-white block mb-1 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, email: e.target.value };
                  });
                }}
                required
                placeholder="name@company.com"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                        block p-2 outline-none"
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="text"
                className="text-white block mb-1 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={data.subject}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, subject: e.target.value };
                  });
                }}
                required
                placeholder="Just saying hi!"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                            block p-2 outline-none"
              />
            </div>

            <div className="mb-4 flex flex-col">
              <label
                htmlFor="message"
                className="text-white block mb-1 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={data.message}
                onChange={(e) => {
                  setData((pre) => {
                    return { ...pre, message: e.target.value };
                  });
                }}
                placeholder="Let's talk about..."
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg
                         block p-2 outline-none"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-500
                             text-white font-medium py-1.5 px-6 rounded-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
