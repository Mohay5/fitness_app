import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../Componts/Exercises';
import SearchExercises from '../Componts/SearchExercises';
import HeroBanner from '../Componts/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
