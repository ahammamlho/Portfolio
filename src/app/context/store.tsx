'use client';
import * as React from 'react';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContextProps {
  portfolioData: dataPortfolioDto | null;
  setPortfolioData: Dispatch<SetStateAction<dataPortfolioDto>>;
}

const GlobalContext = createContext<ContextProps>({
  portfolioData: null,
  setPortfolioData: () => {},
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [portfolioData, setPortfolioData] = useState<dataPortfolioDto>({
    _id: '-1',
    aboutme: 'Hello there! 👋 I\'m LHOUSSAINE, a student at 1337 School, currently honing my skills in FullStack development with a focus on JavaScript, Nest.js, Express.js, Next.js and PostgreSQL. I am always eager to learn new technologies and techniques to enhance my skills and stay up-to-date.',
    skills: [
      { title: 'NodeJs', url: 'www.google.com' },
      { title: 'ExpressJs', url: 'www.google.com' },
    ],
    education: [{ title: '1337 School', url: 'www.google.com' }],
    certifications: [
      { title: 'Fullsatck Academy of code', url: 'www.google.com' },
    ],
    projects: [
      {
        title: 'React Portfolio Website',
        urlImg:
          'https://t3.ftcdn.net/jpg/02/88/80/38/240_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg',
        gitUrl: 'www.google.com',
        description: 'Project 1 description',
        tags: ['all', 'c++'],
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/data`, {
        // cache: "force-cache"
      });
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      const data: dataPortfolioDto[] = await res.json();
      setPortfolioData(data[0]);
    };
    try {
      if (portfolioData._id === '-1') getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <GlobalContext.Provider
        value={{
          portfolioData,
          setPortfolioData,
        }}
      >
        {children}
        <ToastContainer />
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
