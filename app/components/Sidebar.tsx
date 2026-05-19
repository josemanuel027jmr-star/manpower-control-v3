'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {

  const pathname = usePathname();

  const menu = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Asistencias',
      path: '/asistencias',
    },
    {
      name: 'RRHH',
      path: '/rrhh',
    },
    {
      name: 'Producción',
      path: '/produccion',
    },
    {
      name: 'Admin',
      path: '/admin',
    },
  ];

  return (

    <aside className="w-72 bg-zinc-950 min-h-screen border-r border-zinc-800 p-6">

      <h1 className="text-4xl font-black mb-12">
        MANPOWER
      </h1>

      <nav className="flex flex-col gap-4">

        {menu.map((item) => (

          <Link
            key={item.path}
            href={item.path}
            className={`
              p-5
              rounded-2xl
              transition-all
              font-semibold
              text-lg

              ${
                pathname === item.path
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-900 hover:bg-zinc-800'
              }
            `}
          >
            {item.name}
          </Link>

        ))}

      </nav>

    </aside>

  );

}