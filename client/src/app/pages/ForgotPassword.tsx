import {
  Anchor,
  Box,
  Button,
  Container,
  Flex,
  Image,
  Paper,
  Stack,
  Text,
  TextInput,
  Title
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import Logo from '../../assets/logo.svg'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
})

export default function ForgotPassword() {
  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: { email: string }) => {
    console.log('Submitted', values)
  }

  return (
    <Container size="sm">
      <Flex justify="center" align="center" mt={100} w="100%">
        <Paper shadow="md" w="60%" px="lg" py="xl" radius="md" withBorder>
          <Flex align="center" justify="center" gap={5} mb={10}>
            <Image src={Logo} h={30} w="auto" />
            <Title order={2} c="fresh.8">
              Forgot Password
            </Title>
          </Flex>
          <Box component="form" onSubmit={form.onSubmit(handleSubmit)} mt={10} p={10}>
            <Stack gap={12}>
              <TextInput
                label="Email"
                placeholder="Registered email"
                key={form.key('email')}
                {...form.getInputProps('email')}
              />
              <Button fullWidth>Submit</Button>
              <Text size="sm" ta="center" mt={5}>
                Back to login?
                <Anchor href='/seller/login'> click here</Anchor>
              </Text>
            </Stack>
          </Box>
        </Paper>
      </Flex>
    </Container>
  )
}
