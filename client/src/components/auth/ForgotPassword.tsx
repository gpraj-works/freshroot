import { Anchor, Box, Button, Flex, Modal, Stack, Text, TextInput, Title } from '@mantine/core'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import useUser from '../../hooks/useUser'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
})

const ForgotPassword = () => {
  const { states, handlers } = useUser()

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: { email: string }) => {
    console.log('Submitted', values)
  }

  const closeModal = () => handlers.toggleAuth('login', false)

  return (
    <Modal
      opened={states.showForgot}
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
          <span style={{ color: '#357237' }}>Forgot</span> Password
        </Title>
        <Stack gap={12}>
          <TextInput
            label="Email"
            placeholder="Registered email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <Text size="sm" my={5}>
            Back to login?
            <Anchor onClick={() => handlers.toggleAuth('login', true)}> click here</Anchor>
          </Text>
          <Flex gap={10}>
            <Button fullWidth type="submit">
              Forgot
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

export default ForgotPassword
