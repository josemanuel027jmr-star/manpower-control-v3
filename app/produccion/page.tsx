import Sidebar from '../components/Sidebar';

export default function Produccion() {

  return (

    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-black mb-10">
          Producción
        </h1>

        <div className="bg-zinc-900 p-8 rounded-3xl">

          <h2 className="text-2xl mb-6">
            Control de producción
          </h2>

          <div className="grid grid-cols-4 gap-4">

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Bultos: 240
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Productividad: 92%
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Mejor empleado
            </div>

            <div className="bg-zinc-800 p-6 rounded-2xl">
              Turno mañana
            </div>

          </div>

        </div>

      </div>

    </main>

  );

}