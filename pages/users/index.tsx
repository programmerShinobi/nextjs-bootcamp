import Head from 'next/head';
import { Box, InputLabel, Link } from "@mui/material";
import { useRouter } from 'next/router';


export default function Home() {
const router = useRouter();
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
        <InputLabel
                  className='text-center text-gray-400 text-sm'
                  sx={{ gridColumn: "span 4" }}
                >
          <Link href={'/auth/login'} className='text-orange-500'>Login</Link> | <Link href={'/auth/register'} className='text-orange-500'> Register</Link>
        </InputLabel>
        
      </section>
    </Box>
  );
}