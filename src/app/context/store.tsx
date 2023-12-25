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
    aboutme: 'I am a full stack web developer',
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
        urlGithub: 'www.google.com',
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
      </GlobalContext.Provider>
    </ThemeProvider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
