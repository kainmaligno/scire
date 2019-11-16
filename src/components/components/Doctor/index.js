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
  @media (max-width: 680px) {
    margin: -4em 2em 8em 2em;
  }
`
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 50vh;
  width: 25vw;
  img {
    width:140px;
  }
  @media (max-width: 680px) {
    margin-top: 20px;
    height: 15vh;
    width: 90vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    img {
        width: 100px;
    }
  }
`
const Name = styled.p`
  font-family: "Gotham Condensed";
  font-size: 24px;
  color: #6d6d6d;
  line-height: 50px;
  margin-bottom: 0;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  span {
    font-family: "Gotham Condensed";
    font-size: 18px;
    color: #aa5397;
    line-height: 25px;
  }
`
const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  @media (max-width: 680px) {
    flex-direction:column;
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
  width: 85vw;
`
const Content = styled.div`
  width:100%;
  display: flex;
  justify-content:space-between;
  align-items: space-between;
  @media (max-width: 680px) {
  flex-direction:column;
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
  @media (max-width: 900px) {
    width: 60vw;
  }
  @media (max-width: 680px) {
    width: 85vw;
    p {
        font-size: 15px;
    }
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
          <Title>
            <span>{especialidad}</span>
            <span>{cedula}</span>
          </Title>
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
        <Content>
          <Parragraph>
            {info.map((data, i) => (
              <p key={i}> {data}</p>
            ))}
          </Parragraph>
          <SideBar>
            {logos.map((data, i) => (
              <img key={i} src={data} alt={data} />
            ))}
          </SideBar>
        </Content>
      </Profile>
    </Container>
  )
}

export default Doctor
