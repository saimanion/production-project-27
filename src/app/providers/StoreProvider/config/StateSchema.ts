import { CounterSchema } from 'entities/Counter';
import { DeepPartial } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: DeepPartial<CounterSchema>
}
