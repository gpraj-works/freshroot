import { Anchor, Box, Button, Flex, Modal, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import useUser from '../../hooks/useUser'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Please enter valid password' }),
})

const Login = () => {
  const { states, handlers } = useUser()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: { email: string; password: string }) => {
    console.log('Submitted', values)
  }

  const closeModal = () => handlers.toggleAuth('login', false)

  return (
    <Modal
      opened={states.showLogin}
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
          <span style={{ color: '#357237' }}>User</span> Login
        </Title>
        <Stack gap={12}>
          <TextInput
            label="Email"
            placeholder="Registered email"
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
            Create an account? <Anchor onClick={() => handlers.toggleAuth('register', true)}>click here</Anchor>
          </Text>
          <Flex gap={10}>
            <Button fullWidth type="submit">
              Login
            </Button>
            <Button w={140} variant="outline" onClick={closeModal}>
              Cancel
            </Button>
          </Flex>
        </Stack>
        <Text size="sm" ta="center" mt={17}>
          Forgot password? <Anchor onClick={() => handlers.toggleAuth('forgot', true)}>click here</Anchor>
        </Text>
      </Box>
    </Modal>
  )
}

export default Login
