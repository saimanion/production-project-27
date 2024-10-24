import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import { CounterSchema } from 'entities/Counter';
import { CounterReducer, CounterActions } from './counterSlice';

describe('counterSlice', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.increment())).toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(CounterReducer(state as CounterSchema, CounterActions.decrement())).toEqual({ value: 9 });
    });
    test('decrement undefined state', () => {
        expect(CounterReducer(
            undefined,
            CounterActions.decrement(),
        )).toEqual({ value: -1 });
    });
});
