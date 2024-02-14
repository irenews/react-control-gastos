const ControlPresupuesto = ({ presupuesto }) => {

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
                <span>Disponible:&nbsp;&nbsp;</span>{formatearCantidad(0)}
            </p>
            <p>
                <span>Gastado:&nbsp;&nbsp;</span>{formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto