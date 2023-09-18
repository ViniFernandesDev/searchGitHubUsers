import { useEffect, useState } from 'react';
import styled from "styled-components";

import { useSearch } from '../../features/SearchContext';
import { useNavigate } from 'react-router-dom';

import { TextComponent } from "../../components/Text/Text";
import { Button } from "../../components/Button/Button";

export default function Historic() {
  const { setSearchValue } = useSearch();
  const [searches, setSearches] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('searches')) || [];
    setSearches(storedSearches.reverse());
  }, []);

  const handleSearchAgainAndNavigate = (value) => {
    setSearchValue(value);
    navigate('/');
  };

  const handleClearHistory = () => {
    localStorage.removeItem('searches');
    setSearches([]);
    navigate('/');
  };

  return (
    <Container>
      <Infos>
        <Title as='h1' variant='big'>
          Historic Searches
        </Title>

        {searches.length > 0 ? (
          <Clear onClick={handleClearHistory}>
            Clear Historic
          </Clear>
        ) : (
          <TextComponent>No recorded history.</TextComponent>
        )}

      </Infos>

      <ListHistoric>
        {searches?.map((searchValue, index) => (
          <Item key={index}>
            {searchValue}
            <SearchAgain onClick={() => handleSearchAgainAndNavigate(searchValue)}>
              Search again
            </SearchAgain>
          </Item>
        ))}
      </ListHistoric>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin:0 auto;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom:24px;
`;

const Title = styled(TextComponent)`
  color: ${({ theme }) => theme.primary};
  text-align:center;
`

const ListHistoric = styled.div`
  display:flex;
  flex-direction: column;
  list-style:none;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 12px 16px;
  margin-bottom: 12px;
}
`

const SearchAgain = styled(Button)`
  font-size: 12px;
  height: auto;
  padding: 4px 8px;
  min-width: auto;
  background:#333;
`

const Clear = styled(Button)`
  font-size: 12px;
  height: auto;
  padding: 4px 8px;
  min-width: auto;
  margin-right: 16px;

`

