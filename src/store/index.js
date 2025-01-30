import { configureStore } from '@reduxjs/toolkit';
import destinationsSlice from './destinationsSlice/destinationsSlice';
import CrewSlice from './crewSlice/CrewSlice';
import technologySlice from './TechnologySlice/technologySlice';

export const store = configureStore({
  reducer: {
    destinations: destinationsSlice,
    crew: CrewSlice,
    technology: technologySlice,
  },
});
