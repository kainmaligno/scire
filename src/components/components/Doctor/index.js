import React         from "react";
import CircleImage   from '../CircleImage';
import SideBarDoctor from '../SideBarDoctor';
import { Container, Info, Name, PF  } from './styles';


const Doctor = ( props ) => {
    let { name, srcLink, cedula, info, titleDoctor, Salle, logos  } = props;
    return(
        <Container>
            <Info>
                <CircleImage
                    src = { srcLink }
                    width = { "150px" }
                />
                <Name>{ name }</Name>
                <PF>{ titleDoctor }</PF>
                <PF>{ cedula }</PF>
                <p>info</p>
                {/* {
                    info.map( phar => {
                        return <p>{ phar }</p>
                    })
                } */}
            </Info>
            <SideBarDoctor
                logos = { logos }
            />
        </Container>
    )
}


export default Doctor;