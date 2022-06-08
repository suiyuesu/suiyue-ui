/*
 * @Descripttion: 
 * @version: 
 * @Author: 苏
 * @email: 1373842098@qq.com
 * @Date: 2022-06-07 16:40:36
 * @LastEditors: sj
 * @LastEditTime: 2022-06-07 17:00:58
 */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Cell } from '../component/Cell/Cell';

export default {
  title: 'Example/Cell',
  component: Cell,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell {...args} />;

export const Right = Template.bind({});
Right.args = {
  right: false,
  label: '无箭头',
  centerLabel: '中间'
};

export const Center = Template.bind({});
Center.args = {
  centerLabel: '中间内容'
};

