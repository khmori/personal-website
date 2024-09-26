import {MarkGithubIcon} from '@primer/octicons-react'
import EmailIcon from '@mui/icons-material/Email';
import { sizing } from '@mui/system';

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row text-xl gap-2 items-center justify-center text-gray-500 mt-auto">
        {/* <a className="hover:text-black" href="mailto:khmori@protonmail.com">email</a> */}
        <a className="hover:text-black" href="mailto:khmori@protonmail.com">
          <EmailIcon style={{minWidth: '40px', minHeight: '40px'}}/></a>
        {/* <a className="hover:text-black" href="https://github.com/khmori">github</a> */}
        <a className="hover:text-black" href="https://github.com/khmori">
          <MarkGithubIcon size={40} aria-label="GitHub" /></a>
    </div>
  )
}

export default Footer