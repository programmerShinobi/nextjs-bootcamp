import Head from 'next/head';
import { Box, InputLabel, Link } from "@mui/material";
import { useRouter } from 'next/router';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Home() {
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>
      <section className='w-3/4 mx-auto my-auto flex flex-col gap-3 rounded-xl' >
        <div className="title">
          <h1 className='text-orange-600 text-3xl font-bold pb-2 '>SHINOBI</h1>
          <p className='w-3/4  mx-auto my-auto text-gray-400 text-sm pb-3 '>HOME</p>
        </div>
        <Link
          href='#'
          className="flex bg-orange-100 hover:bg-orange-500 justify-center hover:text-white text-gray-700 rounded p-2 text-sm text-center group transition-colors items-center"
        >
          <LogoutIcon className="h-4 w-4 mr-2" />
          <button onClick={handleLogout}>
            Logout
          </button>
        </Link>
        
      </section>
    </Box>
  );
}