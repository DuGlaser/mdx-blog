import Link from 'next/link';

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <header className="w-full text-gray-100 bg-gray-900 shadow body-font">
        <div className="container flex flex-col flex-wrap items-center justify-between p-5 mx-auto md:flex-row">
          <h1 className="text-xl font-black text-white">
            <Link href="/">
              <a>永遠にWIP</a>
            </Link>
          </h1>
          <nav className="flex mt-3 md:mt-0">
            <Link href="/about">
              <a className="mr-10">ABOUT</a>
            </Link>
            <Link href="/">
              <a>BLOG</a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex justify-center my-5 md:mt-10">
        <div className="w-full px-4 md:px-0 md:w-3/5">{children}</div>
      </main>
      <footer className="w-full p-4 mt-auto text-center text-gray-100 bg-gray-900 shadow ">
        <small>© 2020 DuGlaser</small>
      </footer>
    </div>
  );
};

export default Layout;
