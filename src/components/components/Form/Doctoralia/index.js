import React from "react"
import { DoctoraliaBtn } from "./styles"
import Button from "../../../styledComponents/DocButton"
import doctoralia from "../../../../images/doctoralia.png"
import doctoraliaTurquesa from "../../../../images/doctoralia-turquoise.png"

function Doctoralia(props) {
  return (
    <DoctoraliaBtn>
      <a
        style={{ textDecorationLine: "none" }}
        href="https://www.doctoralia.com.mx/yokary-mellado-ortiz/neurofisiologo-neurologo/san-andres-cholula"
        target="__blank"
      >
        <Button type="link">
          <span>AGENDAR EN</span>
          <img
            src={doctoralia}
            alt="doctoralia"
            style={{ height: "25px" }}
            className="img-1"
          />
          <img
            src={doctoraliaTurquesa}
            alt="doctoralia"
            style={{ height: "25px" }}
            className="img-none"
          />
        </Button>
      </a>
    </DoctoraliaBtn>
  )
}

export default Doctoralia
