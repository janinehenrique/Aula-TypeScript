import React from 'react';

export default function formulario() {
  return (
    <div>
      <form>
        <div>
          <label htmlFor="tarefa"> Tarefa </label>
        </div>

        <div>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Informe tarefa"
            required
          />
        </div>

        <div>
          <label htmlFor="tempo"> Tempo </label>
        </div>

        <div>
          <input
            type="time"
            step={1}
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="00:00:00"
          />
        </div>
      </form>
    </div>
  );
}
