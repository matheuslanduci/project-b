import logoAsset from '@/assets/logo.png'
import links from '@/constants/links'

import { FaGithub } from 'react-icons/fa'

function Header() {
  return (
    <header className="w-full">
      <div className="container mx-auto">
        <div className="w-full py-6 flex items-center justify-between">
          <img
            src={logoAsset}
            alt="Project.B"
          />

          <a
            href={links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="px-[18px] h-[34px] flex items-center justify-center rounded-[4px] border-dark-100 border-[1px] font-semibold active:translate-y-1"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
