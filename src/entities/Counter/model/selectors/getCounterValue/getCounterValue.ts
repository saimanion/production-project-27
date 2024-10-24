import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { CounterSchema } from 'entities/Counter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
