import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
    const { t } = useTranslation();
    const [value, setValue] = useState('');

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            <Input onChange={setValue} value={value} placeholder="Имя пользователя" />
        </div>
    );
};

export default MainPage;
