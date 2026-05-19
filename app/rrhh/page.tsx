import Sidebar from '../components/Sidebar';

export default function RRHH() {

  return (

    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-black mb-10">
          RRHH
        </h1>

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-2xl mb-6">
            Gestión de empleados
          </h2>

          <div className="grid grid-cols-3 gap-4">

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Juan Eduardo
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Carlos
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Alejandra
            </div>

          </div>

        </div>

      </div>

    </main>

  );

}