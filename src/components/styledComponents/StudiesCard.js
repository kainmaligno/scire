import React from "react"
import styled from "styled-components"
import Button from "../styledComponents/HeaderButton"
import { Link } from 'gatsby'
import electro from '../../images/estudios/ELECTROENCEFALOGRAMA.svg'
import mio from '../../images/estudios/ELECTROMIOGRAFÍA.svg'
import nerv from '../../images/estudios/VELOCIDADES DE CONDUCCIÓN NERVIOSA.svg'
import oi from '../../images/estudios/POTENCIALES EVOCADOS.svg'
import tami from '../../images/estudios/TAMIZ NEONATAL.svg'
import pol from '../../images/estudios/POLISOMNOGRAFÍA (ESTUDIOS DEL SUEÑO).svg'
import fib from '../../images/estudios/FIBRA ÚNICA.svg'
import sisNerv from '../../images/estudios/SISTEMA NERVIOSO AUTÓNOMO.svg'
import moni from '../../images/estudios/MONITOREO INTRAOPERATORIO.svg'  
const CardStudio = styled.div`
  height: 200px;
  width: 325px;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px 0 rgba(176, 176, 176, 0.3);
  img {
    margin-right: 20px;
  }
 
`
const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width:100%;
  span {
    color: #6d6d6d;
    font-family: "Gotham Condensed";
    font-size: 20px;
    font-weight: 300;
    line-height: 21px;
  }
`


const StudiesCard = ({title,slug,image }) => { 
  return(
    <>
<CardStudio>
    <CardInfo>
      <img src={image} alt="studios" />
      <span>{title}</span>
    </CardInfo>
    <div>
      <Link to={`/estudios/${slug}`} style={{textDecorationLine:"none"}}>
      <Button>
        <span>VER DETALLES</span>
      </Button>
      </Link>  
    </div>
  </CardStudio>
  
    {/* <CardStudio>
    <CardInfo>
      <img src={electro} alt="studios" />
      <span>ELECTROENCEFALOGRAMA</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={mio} alt="studios" />
      <span>ELECTROMIOGRAFÍA</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={nerv} alt="studios" />
      <span>VELOCIDADES DE CONDUCCIÓN NERVIOSA</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={oi} alt="studios" />
      <span>POTENCIALES EVOCADOS</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={tami} alt="studios" />
      <span>TAMIZ NEONATAL</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={pol} alt="studios" />
      <span>POLISOMNOGRAFÍA (ESTUDIOS DEL SUEÑO)</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={fib} alt="studios" />
      <span>FIBRA ÚNICA</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={sisNerv} alt="studios" />
      <span>SISTEMA NERVIOSO AUTÓNOMO</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio>
  <CardStudio>
    <CardInfo>
      <img src={moni} alt="studios" />
      <span>MONITOREO INTRAOPERATORIO</span>
    </CardInfo>
    <div>
      <Button>
        <span>VER DETALLES</span>
      </Button>
    </div>
  </CardStudio> */}
  </>
  )
}

export default StudiesCard
