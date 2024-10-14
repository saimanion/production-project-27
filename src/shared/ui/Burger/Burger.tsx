import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './Burger.module.scss';

interface BurgerProps {
    className?: string;
    isCollapsed: boolean;
}

export const Burger:FC<BurgerProps> = ({ className, isCollapsed }) => (
    <div className={classNames(cls.burger, { [cls.collapsed]: !isCollapsed }, [className])}>
        <span />
        <span />
    </div>
);
