import React from "react"
import styled from "styled-components"
import Button from "../../styledComponents/DocButton"
import doctoralia from "../../../images/doctoralia.png"
import doctoraliaTurquesa from "../../../images/doctoralia-turquoise.png"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  margin: -5em 4em 4em 4em;
`
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: 50px;
  height: 55vh;
  img {
    height: 50px;
  }
`
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 70vw;
  span.name {
    font-family: "Gotham Condensed";
    font-size: 24px;
    color: #6d6d6d;
    line-height: 50px;
  }
  span {
    font-family: "Gotham Condensed";
    font-size: 18px;
    color: #aa5397;
    line-height: 18px;
  }
  p {
    text-align: justify;
    margin-bottom: 0;
    font-size: 18px;
  }
  img {
    height: 120px;
    border: 3px solid #aa5397;
    border-radius: 500px;
    -webkit-border-radius: 500px;
    -moz-border-radius: 500px;
  }
`

const Doctor = ({ profile_img, name, especialidad, cedula, info, logos }) => {
  return (
    <Container>
      <Profile>
        <img src={profile_img} alt="profile_img" />
        <span className="name">{name}</span>
        <span>{especialidad}</span>
        <span>{cedula}</span>
        {info.map((data, i) => (
          <p key={i}> {data}</p>
        ))}
      </Profile>
      <SideBar>
        <Button style={{ marginBottom: "30px" }}>
          <span>ver perfil en doctoralia</span>
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
        {logos.map((data, i) => (
          <img key={i} src={data} alt={data} />
        ))}
      </SideBar>
    </Container>
  )
}

export default Doctor
