import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LoginModal } from 'feature/authByUserName/ui';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <LoginModal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); }} />
                <Button
                    theme={ThemeButton.CLEAR_INVERTED}
                    onClick={() => { setIsModalOpen((prev) => !prev); }}
                >
                    Войти
                </Button>
            </div>
        </div>
    );
};
