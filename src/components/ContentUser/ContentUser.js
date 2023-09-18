import styled from "styled-components";

import { TextComponent } from "../Text/Text";
import { Button } from "../Button/Button";
import { UserListItem } from "./UserListItem";

const ContentUser = ({userData, setViewProjects, viewProjects, error}) => {

if(error) {
    return <TextComponent as='h2' color='red' variant='small'>{error}</TextComponent>;
}

if (!userData) {
return <TextComponent as='h2' variant='medium'>Nothing here, search for a user</TextComponent>;
}

  return (
    <Content>
        <HeaderUser>
        <Avatar>
            <img src={userData?.user.avatar_url} alt='Foto usuário' />
        </Avatar>

        <ContentHeaderUser>
            <TextComponent color='#0240e2' as='h2' variant='big'>
            {userData?.user.login}
            </TextComponent>

            {userData?.user.bio && (
            <TextComponent color='#0240e2' as='h2' variant='big'>
                Bio: {userData.user.bio}
            </TextComponent>
            )}

            {userData?.user.public_repos && (
            <TextComponent color='#333' as='h2' variant='small'>
                Public Repos: {userData.user.public_repos}
            </TextComponent>
            )}

            {userData?.user.location && (
            <TextComponent color='#333' as='h2' variant='small'>
                Location: {userData.user.location}
            </TextComponent>
            )}

            {userData?.user.email && (
            <TextComponent color='#333' as='h2' variant='small'>
                E-mail: {userData.user.email}
            </TextComponent>
            )}

            <TextComponent color='#333' as='h2' variant='small'>
                Followers: {userData.user.followers}
            </TextComponent>

            {userData?.user.blog && (
            <LinkAvatar>
                <a href={userData?.user.blog} target="_blank" rel="noreferrer">More info</a>
            </LinkAvatar>
            )}
            
        </ContentHeaderUser>
        </HeaderUser>

        <Button onClick={() => setViewProjects(!viewProjects)}>
        {viewProjects ? 'Hidden' : 'View'} List Projects
        </Button>

        {viewProjects && userData?.repos.map((user, index) => (
        <div key={index}>
            <UserListItem {...user} />
        </div>
        ))}
    </Content>
  )
}

const Content = styled.section`
  display:flex;
  flex-direction: column;
  list-style:none;
  background:#ffffff;
  padding: 26px 24px;
  border-radius:4px;
  margin-top: 40px;

`

const Avatar = styled.div`
  width:40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:16px;

  & img {
    width: 100%;
    border-radius:4px;
  }
`

const ContentHeaderUser = styled.div`
  display:flex;
  flex-direction: column;
  gap:5px;
`

const LinkAvatar = styled(Button)`
  margin-top: 8px;
  height: 25px;
  min-width: auto;
  font-size: 12px;

  & a {
    color:#ffffff;
    text-decoration:none;
  }
`

const HeaderUser = styled.div`
  display:flex;
  gap:25px;
`


export { ContentUser }
