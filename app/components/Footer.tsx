
        import Link from 'next/link'
import React from 'react'
        
        const Footer = () => {
          return (
            <footer className="flex w-full px-8 md:px-4  justify-center items-center ">
            <div className="flex w-full  justify-between py-4 text-xs md:text-sm items-center border-t border-neutral-700/30">
              <Link href="https://leonelyimga.com" className="text-neutral-600"><span className="text-neutral-700">Build By</span> <b>Leonel Yimga</b> </Link>
              <Link href="https://obsidiantemplate.framer.website/" className="text-neutral-600"><span className="text-neutral-700/30">Inspired By</span> <b>This design </b> </Link>
            </div>
            </footer>
          )
        }
        
        export default Footer
        