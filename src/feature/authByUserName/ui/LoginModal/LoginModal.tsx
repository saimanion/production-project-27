import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginForm } from 'feature/authByUserName/ui/LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

export const LoginModal:FC<LoginModalProps> = ({
    className, isOpen, onClose, lazy,
}) => (
    <Modal className={classNames(cls.LoginModal, {}, [className])} onClose={onClose} isOpen={isOpen} lazy>
        <LoginForm />
    </Modal>
);
