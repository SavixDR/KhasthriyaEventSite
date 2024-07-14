import OrderContextProvider from "../context/orderContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <OrderContextProvider>
      <div>
      <main>{children}</main>
    </div>
    </OrderContextProvider>
    
  );
}
