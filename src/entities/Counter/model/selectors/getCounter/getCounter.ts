import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { CounterSchema } from 'entities/Counter';

export const getCounter = (state: StateSchema) => state.counter;
