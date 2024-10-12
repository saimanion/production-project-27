import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Burger } from 'shared/ui/Burger/Burger';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main_dark.svg';
import AboutIcon from 'shared/assets/icons/about_dark.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onToggle}
                className={classNames(cls.btn)}
            >
                <Burger isCollapsed={collapsed} />
            </Button>

            <div className={cls.items}>

                <div>
                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.main}
                        className={cls.item}
                    >
                        <MainIcon
                            className={cls.icon}
                        />
                        <span className={cls.link}>
                            {t('Главная')}
                        </span>
                    </AppLink>
                </div>

                <div className={cls.item}>

                    <AppLink
                        theme={AppLinkTheme.SECONDARY}
                        to={RoutePath.about}
                        className={cls.wrapper}
                    >
                        <AboutIcon
                            className={cls.icon}
                        />
                        <span
                            className={cls.link}
                        >
                            {t('О сайте')}
                        </span>

                    </AppLink>
                </div>

            </div>
            <div
                className={classNames(cls.switchers, { [cls.hidden]: collapsed }, [])}
            >
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
