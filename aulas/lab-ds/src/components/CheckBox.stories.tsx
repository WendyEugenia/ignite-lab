import { Meta, StoryObj } from '@storybook/react'
import { CheckBoxProps, CheckBox } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Remember me for 30 days</Text>
        </div>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}