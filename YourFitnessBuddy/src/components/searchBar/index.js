import React, { useState } from 'react';

import { SearchContainer, SearchInput, SearchButton, Text } from './styles';
import { fetchExercises, fetchExercisesByMuscle } from "../../api/routes";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (text) => {
    setQuery(text);
  };

  const handleSearch = async () => {
    if (query) {
      const data = await fetchExercisesByMuscle(query);
      onSearch(data);
    } else {
      const data = await fetchExercises();
      console.log(data)
      onSearch(data);
    }
  };
  
  return (
    <SearchContainer>
      <Text>
        Choose your muscle group buddy!
      </Text>
      <SearchInput placeholder="example: 'biceps'" value={query} onChangeText={handleInputChange} />
      <SearchButton title="Yeah Buddy!" onPress={handleSearch} />
    </SearchContainer>
  );
}

export default SearchBar;
