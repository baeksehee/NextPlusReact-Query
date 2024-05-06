export default async function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}

//  RootLayout -> HomeLayout -> Home
