import {
  Container,
  Paper,
  Image,
  Flex,
  Title,
  Anchor,
  Box,
  Stack,
  TextInput,
  Group,
  Checkbox,
  Button,
} from '@mantine/core'
import Logo from '../../../assets/logo.svg'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import { useForm } from '@mantine/form'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Please enter valid password' }),
})

export default function Login() {
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

  return (
    <Container size="sm">
      <Flex justify="center" align="center" mt={100} w="100%">
        <Paper shadow="md" w="60%" px="lg" py="xl" radius="md" withBorder>
          <Flex align="center" justify="center" gap={5} mb={10}>
            <Image src={Logo} h={30} w="auto" />
            <Title order={2} c="fresh.8">
              Seller Login
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
              <TextInput
                type="password"
                label="Password"
                placeholder="Secure password"
                key={form.key('password')}
                {...form.getInputProps('password')}
              />

              <Group justify="space-between" mt="md">
                <Checkbox label="Remember me" />
                <Anchor href='/seller/forgot-password' size="sm">
                  Forgot password?
                </Anchor>
              </Group>
              <Button fullWidth mt="md">
                Login
              </Button>
            </Stack>
          </Box>
        </Paper>
      </Flex>
    </Container>
  )
}
