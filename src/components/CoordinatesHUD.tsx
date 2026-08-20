interface CoordinatesHUDProps {
  x: number
  y: number
  z: number
}

function CoordinatesHUD({
  x,
  y,
  z,
}: CoordinatesHUDProps) {
  return (
    <div className="coordinates-hud">

      <span>
        XYZ
      </span>

      <strong>
        {x} / {y} / {z}
      </strong>

    </div>
  )
}

export default CoordinatesHUD