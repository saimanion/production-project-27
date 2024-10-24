import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal', // Обновил название на 'Modal', так как идет работа с этим компонентом
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>; // Используем 'typeof Modal'

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Text 12121212 1222222222 12222222',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Text 12121212 1222222222 12222222',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
