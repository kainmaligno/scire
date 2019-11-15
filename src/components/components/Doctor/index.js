import React from "react"
import styled from "styled-components"
import Button from "../../styledComponents/DocButton"
import doctoralia from "../../../images/doctoralia.png"
import doctoraliaTurquesa from "../../../images/doctoralia-turquoise.png"
import avatar from "../../../images/doctor-icon.png"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: -5em 4em 10em 4em;
`
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 50vh;
  width: 25vw;
`
const Name = styled.p`
  font-family: "Gotham Condensed";
  font-size: 24px;
  color: #6d6d6d;
  line-height: 50px;
  margin-bottom: 0;
`
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  span {
    font-family: "Gotham Condensed";
    font-size: 18px;
    color: #aa5397;
    line-height: 18px;
  }
`
const Avatar = styled.img`
  height: 120px;
  border: 3px solid #aa5397;
  border-radius: 500px;
  -webkit-border-radius: 500px;
  -moz-border-radius: 500px;
`
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 90vw;
  div {
    display: flex;
  }
`
const Parragraph = styled.div`
  flex-direction: column;
  width: 70vw;
  p {
    text-align: justify;
    margin-bottom: 0;
    font-size: 18px;
  }
`

const Doctor = ({
  profile_img,
  name,
  especialidad,
  cedula,
  info,
  doc_link,
  logos,
}) => {
  return (
    <Container>
      <Profile>
        <Avatar src={profile_img ? profile_img : avatar} alt="profile_img" />
        <Name>{name}</Name>
        <Header>
          <div>
            <span>{especialidad}</span>
            <span>{cedula}</span>
          </div>
          {doc_link ? (
            <Button>
              <a
                style={{ textDecorationLine: "none" }}
                href={doc_link}
                target="__blank"
              >
                ver perfil en doctoralia
              </a>
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
          ) : (
            ""
          )}
        </Header>
        <div>
          <Parragraph>
            {info.map((data, i) => (
              <p key={i}> {data}</p>
            ))}
          </Parragraph>
          <SideBar>
            {logos.map((data, i) => (
              <img key={i} src={data} alt={data} style={{ width: "140px" }} />
            ))}
          </SideBar>
        </div>
      </Profile>
    </Container>
  )
}

export default Doctor
