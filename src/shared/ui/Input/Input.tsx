import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent,
    FC, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

// InputProps extends Omit<InputProps, "value" | 'onChange'>
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;

}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder = '',
        autoFocus,
        ...otherProps
    } = props;
    const [focus, setFocus] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
        setCaretPosition(e.target.value.length);
    };

    const onFocus = () => {
        setFocus(true);
    };
    const onBlur = () => {
        setFocus(false);
    };

    const onSelect = (e: any) => {
        setCaretPosition(e.target.selectionStart || 0);
    };
    useEffect(() => {
        if (autoFocus) {
            setFocus(true);
            ref.current.focus();
        }
    }, []);
    const ref = useRef<HTMLInputElement>(null);
    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    className={cls.input}
                    onChange={onChangeHandler}
                    type={type}
                    value={value}
                    onClick={onFocus}
                    onBlur={onBlur}
                    onSelect={onSelect}
                    autoFocus
                    {...otherProps}

                />
                {
                    focus && (
                        <span

                            className={cls.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )
                }
            </div>

        </div>
    );
});
