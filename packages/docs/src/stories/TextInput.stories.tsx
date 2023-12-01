import type { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Text,
  TextInput,
  TextInputProps,
} from '@thasmorato-ignite-ui/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">TextInput</Text>
          {Story()}
        </Box>
      )
    },
  ],
  args: {
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: 'inline-radio',
    },
    prefix: {
      control: 'text',
    },
  },
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Small: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    size: 'sm',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Disabled',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
