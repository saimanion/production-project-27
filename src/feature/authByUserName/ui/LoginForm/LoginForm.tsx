import { classNames } from 'shared/lib/classNames/classNames';
import { FC, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm:FC<LoginFormProps> = ({ className }) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input

                className={cls.input}
                type="text"
                placeholder={t('Введите имя')}
                autoFocus
            />
            <Input

                className={cls.input}
                type="text"
                placeholder={t('Введите пароль')}
            />
            <Button className={cls.LoginBtn}>Войти</Button>
        </div>
    );
};
