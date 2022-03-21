import { Box } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
    © 2022 MetaNests, Inc.
  </Box>
);

export default Footer;





// import { FiGithub, AiFillIdcard, AiOutlineLinkedin, AiOutlineGitlab  } from 'react-icons/fa'
// import { Link } from '@chakra-ui/react'

// const Footer = () => (
//   <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
//    <Link href="https://github.com/VicThorMetaNode" isExternal paddingLeft='2' passHref> <FiGithub /> </Link>
//    <Link href="https://welovedevs.com/app/developer/victor-php-and-react-developer-passionne-de-web-dev" isExternal paddingLeft='2' passHref><AiFillIdcard /> </Link>
//    <Link href="https://www.linkedin.com/in/vic-thor-6aa023100/" isExternal paddingLeft='2' passHref><AiOutlineLinkedin /></Link>
//    <Link href="https://gitlab.com/tecnam" isExternal paddingLeft='2' passHref><AiOutlineGitlab /> </Link>
//   </Box>
// );