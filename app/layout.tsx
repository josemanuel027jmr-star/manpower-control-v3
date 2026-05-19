import './globals.css';

export const metadata = {
  title: 'MANPOWER CONTROL',
  description: 'Sistema empresarial',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="es">

      <body className="bg-black text-white">

        {children}

      </body>

    </html>

  );

}