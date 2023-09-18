import { useState } from "react";
import styled from "styled-components";

import { useGitHubAPI } from "../../hooks/useGitHubAPI";
import { useSearch } from '../../features/SearchContext';

import { Button } from '../../components/Button/Button';
import { ContentInput } from "../../components/Input/ContentInput";
import { Modal } from "../../components/Modal";
import { Loading } from "../../components/Loading/Loading";
import { ContentUser } from "../../components/ContentUser/ContentUser";
import { TextComponent } from "../../components/Text/Text";


export default function Home() {
  const { searchValue, setSearchValue } = useSearch('');
  const [viewProjects, setViewProjects] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { userData, loading, error, fetchData } = useGitHubAPI();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    updateSearchHistoryStorage(searchValue);
    fetchData(searchValue);
    setSearchValue('')
  }

  const updateSearchHistoryStorage = (searchValue) => {
    const previousSearches = JSON.parse(localStorage.getItem('searches')) || [];
    const existingSearchIndex = previousSearches.findIndex((item) => item === searchValue);
  
    if (existingSearchIndex !== -1) {
      previousSearches[existingSearchIndex] = searchValue;
    } else {
      previousSearches.push(searchValue);
    }
  
    localStorage.setItem('searches', JSON.stringify(previousSearches));
  }

  return (
    <>
      <Container>
          <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} selectedItem={selectedItem} />

          <Title as='h1' variant='big'>
            Search for user
          </Title>

          <form onSubmit={handleSubmit}>
            <ContentInput
              placeholder='Example: ViniFernandesDev'
              clearValue={() => setSearchValue('')}
              value={searchValue}
              type='text'
              inputProps={{
                name: 'searchValue',
                value: searchValue,
                onChange: (e) => setSearchValue(e.target.value)
              }}
            />

            <AlignButton>
                <Button disabled={!searchValue}>Search users</Button>
            </AlignButton>
          </form>
      </Container>

      <Container>

        {loading ? (
          <Loading />
          ) : (
          <ContentUser 
            userData={userData} 
            setViewProjects={setViewProjects}
            viewProjects={viewProjects}
            setSelectedItem={setSelectedItem}
            setModalIsOpen={setModalIsOpen}
            error={error}
          />
        )}
        
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin:14px auto;
`;

const Title = styled(TextComponent)`
  color: ${({ theme }) => theme.primary};
  margin-bottom:8px;
  text-align:left;
`

const AlignButton = styled.div`
  display:flex;
  justify-content: flex-end;
  margin-top: 12px;
`;


