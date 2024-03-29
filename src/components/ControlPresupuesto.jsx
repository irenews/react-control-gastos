import { useState, useEffect } from "react"

const ControlPresupuesto = ({ gastos, presupuesto }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce( (total, gasto) => gasto.cantidad + total, 0);
    const totalDisponible = presupuesto - totalGastado;

    setDisponible(totalDisponible)
    setGastado(totalGastado)
    
  }, [gastos])

  const formatearCantidad = ( cantidad ) => {
    return Number(cantidad).toLocaleString('es-ES', {
      style: 'currency',
      currency: 'EUR'
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Gráfica aquí</p>
        </div>
        <div className="contenido-presupuesto">
            <p>
                <span>Presupuesto:&nbsp;&nbsp;</span>{formatearCantidad(presupuesto)}
            </p>
            <p>
                <span>Disponible:&nbsp;&nbsp;</span>{formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:&nbsp;&nbsp;</span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto