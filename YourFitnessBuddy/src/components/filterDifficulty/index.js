import React, { useState } from 'react';

import { SearchContainer, SearchInput, SearchButton, Text } from './styles';
import { fetchExercises, fetchExercisesByDifficulty } from "../../api/routes";

import { filterDifficulty } from '../../actions/search';
import { useDispatch } from 'react-redux';

const FilterDifficulty = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearch = async () => {
    let data;
    if(query) {
      data = await fetchExercisesByDifficulty(query);
    } else {
      data = await fetchExercises();
    }

    dispatch(filterDifficulty(data));
    onSearch(data);
  };
  
  return (
    <>
      <Text>
        Choose your difficulty !
      </Text>
      <SearchContainer>
      <SearchInput placeholder="Beginner, Intermediate or Expert" value={query} onChangeText={handleInputChange} />
      <SearchButton title="Yeah Buddy!" onPress={handleSearch} />
    </SearchContainer>
    </>
  );

}

export default FilterDifficulty;