import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { userEvent } from '@storybook/testing-library';
import { findByTestId, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter.test', () => {
    test('value on screen', () => {
        componentRender(<Counter />);
        expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    });
    test('increment value', () => {
        componentRender(<Counter />);
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('1');
    });
    test('decrement value', () => {
        componentRender(<Counter />);
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('-1');
    });
});
