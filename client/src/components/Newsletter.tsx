import { Stack, Title, Text, Group, TextInput, Button } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useForm } from '@mantine/form'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import { toastify } from './shared/Toastify'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
})

const Newsletter = () => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const form = useForm({
    mode: 'controlled',
    initialValues: { email: '' },
    validate: zod4Resolver(validationSchema),
  })

  const handleSubmit = (values: { email: string }) => {
    toastify('Subscribed successfully!', {
      icon: {
        name: 'success',
        color: 'green',
      },
    })
    console.log('Submitted:', values)
    form.reset()
  }

  return (
    <Stack
      {...(isMobile ? { align: 'flex-start' } : { align: 'center' })}
      ta={{ base: 'left', lg: 'center' }}
      py={10}
      gap={10}
    >
      <Title order={1}>Get connected always!</Title>
      <Text>Subscribe to get the latest updates, offers, and news delivered to your inbox.</Text>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Group gap="sm" my={{ base: 10, lg: 26 }}>
          <TextInput
            size="md"
            w={300}
            style={{ textAlign: 'left' }}
            placeholder="Enter your email"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <Button size="md" type="submit">
            Subscribe
          </Button>
        </Group>
      </form>
    </Stack>
  )
}

export default Newsletter
