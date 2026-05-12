'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://bcbaohmsagxbsmcivevg.supabase.co',
  'sb_publishable_UyZZDd6lU9_ZAGEbEW5RtA_h3crJ-FF'
);

export default function Home() {
  const [empleados, setEmpleados] = useState<any[]>([]);
  const [asistencias, setAsistencias] = useState<any[]>([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    obtenerEmpleados();
    obtenerAsistencias();
  }, []);

  async function obtenerEmpleados() {
    const { data } = await supabase.from('empleados').select('*');

    if (data) {
      setEmpleados(data);
    }
  }

  async function obtenerAsistencias() {
    const { data } = await supabase
      .from('asistencias')
      .select('*')
      .order('id', { ascending: false });

    if (data) {
      setAsistencias(data);
    }
  }

  async function ficharEntrada(empleado: any) {
    const ahora = new Date();

    const hora = ahora.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const fecha = ahora.toISOString().split('T')[0];

    const horaOficial = 8 * 60;

    const horaActual = ahora.getHours() * 60 + ahora.getMinutes();

    const minutosTarde =
      horaActual > horaOficial ? horaActual - horaOficial : 0;

    const observacion = minutosTarde >= 5 ? 'TARDANZA' : 'OK';

    const { error } = await supabase.from('asistencias').insert([
      {
        empleado_id: empleado.id,
        fecha,
        hora_entrada: hora,
        minutos_tarde: minutosTarde,
        observacion,
      },
    ]);

    if (!error) {
      alert(`Entrada registrada para ${empleado.nombre}`);

      obtenerAsistencias();
    }
  }

  async function ficharSalida(empleado: any) {
    const ahora = new Date();

    const horaSalida = ahora.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
    });

    const { data } = await supabase
      .from('asistencias')
      .select('*')
      .eq('empleado_id', empleado.id)
      .is('hora_salida', null)
      .order('id', { ascending: false })
      .limit(1)
      .single();

    if (!data) {
      alert('No hay entrada registrada');
      return;
    }

    const { error } = await supabase
      .from('asistencias')
      .update({
        hora_salida: horaSalida,
      })
      .eq('id', data.id);

    if (!error) {
      alert(`Salida registrada para ${empleado.nombre}`);

      obtenerAsistencias();
    }
  }

  const empleadosFiltrados = empleados.filter((emp) =>
    `${emp.nombre} ${emp.apellido1} ${emp.apellido2} ${emp.nif}`
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  function obtenerNombreEmpleado(id: number) {
    const empleado = empleados.find((emp) => emp.id === id);

    if (!empleado) return 'Empleado';

    return `${empleado.nombre} ${empleado.apellido1}`;
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">MANPOWER CONTROL</h1>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Empleados</h2>

          <p className="text-5xl font-bold">{empleados.length}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Asistencias</h2>

          <p className="text-5xl font-bold">{asistencias.length}</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl mb-2">Tardanzas</h2>

          <p className="text-5xl font-bold text-red-500">
            {asistencias.filter((a) => a.minutos_tarde >= 5).length}
          </p>
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl mb-10">
        <input
          type="text"
          placeholder="Buscar empleado..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full mb-6 p-4 rounded-xl bg-zinc-800 border border-zinc-700 text-white"
        />

        <h2 className="text-2xl mb-6">Trabajadores registrados</h2>

        <div className="space-y-3">
          {empleadosFiltrados.map((emp) => (
            <div
              key={emp.id}
              className="border border-zinc-700 p-4 rounded-lg flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-bold text-xl">{emp.nombre}</p>

                <p>
                  {emp.apellido1} {emp.apellido2}
                </p>

                <p className="text-zinc-400">{emp.nif}</p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => ficharEntrada(emp)}
                  className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl font-bold"
                >
                  Entrada
                </button>

                <button
                  onClick={() => ficharSalida(emp)}
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-bold"
                >
                  Salida
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-3xl mb-6">Historial de Asistencias</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-800">
              <tr>
                <th className="text-left p-4">Empleado</th>

                <th className="text-left p-4">Fecha</th>

                <th className="text-left p-4">Entrada</th>

                <th className="text-left p-4">Salida</th>

                <th className="text-left p-4">Tardanza</th>

                <th className="text-left p-4">Estado</th>
              </tr>
            </thead>

            <tbody>
              {asistencias.map((asis) => (
                <tr key={asis.id} className="border-b border-zinc-800">
                  <td className="p-4 font-bold">
                    {obtenerNombreEmpleado(asis.empleado_id)}
                  </td>

                  <td className="p-4">{asis.fecha}</td>

                  <td className="p-4 text-green-400">{asis.hora_entrada}</td>

                  <td className="p-4 text-red-400">
                    {asis.hora_salida || '-'}
                  </td>

                  <td className="p-4">{asis.minutos_tarde} min</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        asis.observacion === 'TARDANZA'
                          ? 'bg-red-600'
                          : 'bg-green-600'
                      }`}
                    >
                      {asis.observacion}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
