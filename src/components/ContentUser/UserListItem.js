import styled from "styled-components";

import { TextComponent } from "../Text/Text";
import { Button } from "../Button/Button";

const UserListItem = ({name, description, visibility, svn_url}) => {
  return (
    <>
      <Item>
        <Content>
          <TextComponent as="h3" variant="medium">{name}</TextComponent>
          <TextComponent as="h4" variant="small">{description}</TextComponent>
          
          <Status>{visibility} </Status>

          <Link>
            <a href={svn_url} target="_blank" rel="noreferrer">Access Project</a>
          </Link>
        </Content>
      </Item>
    </>
  )
}

const Item = styled.div`
  background: #f4f4f4;
  display: flex;
  margin-top: 24px;
  border-radius: 4px;
  padding: 8px 16px;
`

const Content = styled.div`
  width:70%;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  & h2 {
    margin-bottom: 8px;
  }

  & p {
    margin: 0 0 4px 0;
  }
`

const Status = styled.span`
  background:#333333;
  border-radius:4px;
  padding: 2px 8px;
  color: #ffffff;
  font-size:12px;
  margin-top:4px;
`

const Link = styled(Button)`
  margin-top: 8px;
  height: 25px;
  min-width: auto;

  & a {
    font-size: 12px;
    color:#ffffff;
    text-decoration: none;
  }
`

export { UserListItem }
