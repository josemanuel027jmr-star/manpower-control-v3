import Sidebar from '../components/Sidebar';

export default function Dashboard() {

  return (

    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-black mb-10">
          Dashboard
        </h1>

        <div className="grid grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">
              Horas trabajadas
            </p>

            <h2 className="text-5xl font-black mt-4">
              324h
            </h2>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">
              Productividad
            </p>

            <h2 className="text-5xl font-black mt-4 text-green-400">
              92%
            </h2>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">
              Empleados activos
            </p>

            <h2 className="text-5xl font-black mt-4 text-blue-400">
              18
            </h2>
          </div>

          <div className="bg-zinc-900 p-8 rounded-3xl">
            <p className="text-zinc-400">
              Tardanzas
            </p>

            <h2 className="text-5xl font-black mt-4 text-red-400">
              4
            </h2>
          </div>

        </div>

      </div>

    </main>

  );

}