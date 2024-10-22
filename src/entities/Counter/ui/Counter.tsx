import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const value = useSelector(getCounterValue);
    const dispatch = useDispatch();
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {value}
            </h1>
            <Button data-testid="increment-btn" onClick={increment}>increment</Button>
            <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
        </div>
    );
};
