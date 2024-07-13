'use client'

import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    return pathname === path ? 'text-black ' : 'text-gray-500 hover:text-black';
  };

  return (
    <div className="flex flex-col md:flex-row md:gap-2 justify-between items-center">
      <a className="text-3xl" href="/">Kyle Mori</a>
      <nav className="flex space-x-4 text-xl items-center">
          <a href="/projects" className={getLinkClass('/projects')}>projects</a>
          <a href="/resume" className={getLinkClass('/resume')}>resume</a>
          <a href="/music" className={getLinkClass('/music')}>music</a>
      </nav>
    </div>
  )
}


export default Header