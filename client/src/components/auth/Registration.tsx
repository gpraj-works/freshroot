import { Anchor, Box, Button, Flex, Modal, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import useUser from '../../hooks/useUser'

const validationSchema = z.object({
  name: z.string().min(3, { message: 'Minimum 3 characters required' }),
  email: z.email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Please enter valid password' }),
})

const Register = () => {
  const { states, handlers } = useUser()

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: { name: string; email: string; password: string }) => {
    console.log('Submitted', values)
  }

  const closeModal = () => handlers.toggleAuth('register', false)

  return (
    <Modal
      opened={states.showRegister}
      onClose={closeModal}
      size="xs"
      centered
      withCloseButton={false}
      transitionProps={{ transition: 'pop' }}
      overlayProps={{
        backgroundOpacity: 0.55,
        blur: 3,
      }}
    >
      <Box component="form" onSubmit={form.onSubmit(handleSubmit)} p={10}>
        <Title order={3} ta="center" pb={10}>
          <span style={{ color: '#357237' }}>User</span> Register
        </Title>
        <Stack gap={12}>
          <TextInput
            label="Name"
            placeholder="Your sweet name"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <TextInput
            label="Email"
            placeholder="Valid email id"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <TextInput
            type="password"
            label="Password"
            placeholder="Secure password"
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <Text size="sm" my={5}>
            Already have account? &nbsp;
            <Anchor onClick={() => handlers.toggleAuth('login', true)}>click here</Anchor>
          </Text>
          <Flex gap={10}>
            <Button fullWidth type="submit">
              Register
            </Button>
            <Button w={140} variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Modal>
  )
}

export default Register
