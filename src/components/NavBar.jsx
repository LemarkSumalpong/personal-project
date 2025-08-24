import { cn } from '@/lib/utils';
import { useEffect } from 'react';
import { useState } from 'react';

const NavItems =[
    {name: 'Home', href: "#home"},
    {name: 'About', href: "#about"},
    {name: 'Skills', href: "#skills"},
    {name: 'Projects', href: "#projects"},
    {name: 'Contact', href: "#contact"},
    
    
]

export const NavBar = () => {
    const [IsScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        };

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

  return (
    <nav className= {cn("fixed w-full z-40 transition-all duration-300",
        IsScrolled ? "py-3 background/80 backdrop-blur-md shadow-sx": "py-5"
    )}>

        <div className="container flex items-center justify-between">
            <a className= "text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className= "text-glow text-foreground">
                        Lemark 
                    </span>
                    Portfolio
                </span>
            </a>
        </div>
    </nav>
  );
};