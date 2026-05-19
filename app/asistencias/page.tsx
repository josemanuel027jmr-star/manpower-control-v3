import Sidebar from '../components/Sidebar';

export default function Asistencias() {

  return (

    <main className="flex bg-black text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Asistencias
        </h1>

        <div className="bg-zinc-900 p-8 rounded-2xl">

          <h2 className="text-2xl mb-6">
            Registro de asistencia
          </h2>

          <div className="grid grid-cols-4 gap-4">

            <input
              placeholder="Empleado"
              className="bg-zinc-800 p-4 rounded-xl"
            />

            <input
              type="time"
              className="bg-zinc-800 p-4 rounded-xl"
            />

            <input
              type="time"
              className="bg-zinc-800 p-4 rounded-xl"
            />

            <button className="bg-green-500 rounded-xl font-bold">
              Guardar
            </button>

          </div>

        </div>

      </div>

    </main>

  );

}