import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Navbar/>
             <main >{children}</main>
        </div>
      
       
      
    );
  }
  