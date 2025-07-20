import {
  Box,
  Switch,
  GridCol,
  Stack,
  Text,
  TextInput,
  Grid,
  Select,
  Flex,
  FileInput,
  Paper,
} from '@mantine/core'
import Breadcrumbs from '../../components/ui/Breadcrumbs'
import { zod4Resolver } from 'mantine-form-zod-resolver'
import { z } from 'zod/v4'
import { useForm } from '@mantine/form'
import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { RichTextEditor } from '@mantine/tiptap'
import Icon from '../../components/shared/Icon'

const validationSchema = z.object({
  email: z.email({ message: 'Please enter valid email' }),
  password: z.string().min(8, { message: 'Please enter valid password' }),
})

const breadcrumbItems = [
  { label: 'Dashboard', link: '/' },
  { label: 'Add products', link: '/add-products' },
]

type ProductProps = {
  name: string
  category: string
  weight: number
  weightUnit: 'kg' | 'g'
  price: number
  discountType: 'value' | 'percentage'
  discount: number
  description: string
  thumbnail: File | null
  previews: File[]
  freeDelivery: boolean
  returnPolicy: boolean
  showSeller: boolean
}

const initialValues: ProductProps = {
  name: '',
  category: '',
  weight: 0,
  weightUnit: 'g',
  price: 0,
  discountType: 'percentage',
  discount: 0,
  description: '<p>Product specifications</p>',
  thumbnail: null,
  previews: [],
  freeDelivery: false,
  returnPolicy: false,
  showSeller: false,
}

const AddProduct = () => {
  const form = useForm({
    initialValues,
    validate: zod4Resolver(validationSchema),
  })

  const editor = useEditor({
    extensions: [StarterKit],
    content: form.values.description,
    onUpdate({ editor }) {
      form.setFieldValue('description', editor.getHTML())
    },
  })

  const handleSubmit = (values: ProductProps) => {
    console.log('Submitted', values)
  }

  return (
    <Stack>
      <Stack gap={5}>
        <Text fz="lg" fw={500}>
          Add Product
        </Text>
        <Breadcrumbs fontSize={13} iconSize={18} items={breadcrumbItems} />
      </Stack>
      <Box component="form" onSubmit={form.onSubmit(handleSubmit)}>
        <Paper withBorder shadow="none" p={20} mb={20}>
          <Grid mb={10}>
            <GridCol span={6}>
              <Grid>
                <GridCol span={6}>
                  <Select
                    required
                    withAsterisk
                    label="Category"
                    placeholder="Select Category?"
                    checkIconPosition="right"
                    data={[{ value: 'vegetables', label: 'Vegetables' }]}
                    key={form.key('category')}
                    {...form.getInputProps('category')}
                  />
                </GridCol>
                <GridCol span={6}>
                  <TextInput
                    required
                    withAsterisk
                    label="Name"
                    placeholder="Short and crisp"
                    key={form.key('name')}
                    {...form.getInputProps('name')}
                  />
                </GridCol>
                <GridCol span={4}>
                  <TextInput
                    required
                    withAsterisk
                    label="Price"
                    placeholder="Preferred round values"
                    key={form.key('price')}
                    {...form.getInputProps('price')}
                  />
                </GridCol>
                <GridCol span={4}>
                  <Select
                    label="Discount type"
                    placeholder="Discount type"
                    checkIconPosition="right"
                    data={[
                      { value: 'value', label: 'Value' },
                      { value: 'percentage', label: 'Percentage' },
                    ]}
                    key={form.key('discountType')}
                    {...form.getInputProps('discountType')}
                  />
                </GridCol>
                <GridCol span={4}>
                  <TextInput
                    label="Discount"
                    placeholder="Discount Value"
                    key={form.key('discount')}
                    {...form.getInputProps('discount')}
                  />
                </GridCol>
              </Grid>
            </GridCol>
            <GridCol span={6} nonce="">
              <Text fz="sm" fw={500} mb={2}>
                Description <span style={{ color: '#ff6467' }}>*</span>
              </Text>
              <RichTextEditor editor={editor} mih={120}>
                <RichTextEditor.Toolbar>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Bold />
                    <RichTextEditor.Italic />
                    <RichTextEditor.Strikethrough />
                  </RichTextEditor.ControlsGroup>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.H3 />
                    <RichTextEditor.H4 />
                    <RichTextEditor.H5 />
                  </RichTextEditor.ControlsGroup>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.BulletList />
                    <RichTextEditor.OrderedList />
                  </RichTextEditor.ControlsGroup>
                  <RichTextEditor.ControlsGroup>
                    <RichTextEditor.Undo />
                    <RichTextEditor.Redo />
                  </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>
                <RichTextEditor.Content fz="sm" />
              </RichTextEditor>
            </GridCol>
          </Grid>
        </Paper>

        <Paper withBorder shadow="none" p={20} mb={20}>
          <Grid align="center">
            <GridCol span={2}>
              <Switch
                label="Free delivery"
                key={form.key('freeDelivery')}
                {...form.getInputProps('freeDelivery')}
              />
            </GridCol>
            <GridCol span={2}>
              <Switch
                label="Return policy"
                key={form.key('returnPolicy')}
                {...form.getInputProps('returnPolicy')}
              />
            </GridCol>
            <GridCol span={2}>
              <Switch
                label="Show seller"
                key={form.key('showSeller')}
                {...form.getInputProps('showSeller')}
              />
            </GridCol>
          </Grid>
        </Paper>

        <Paper withBorder shadow="none" p={20}>
          <Grid>
            <GridCol span={3}>
              <FileInput
                required
                withAsterisk
                clearable
                label="Thumbnail"
                accept="image/png"
                placeholder="Click to upload"
                description="Accept only .png images"
                leftSection={<Icon name="upload" size={18} />}
                key={form.key('thumbnail')}
                {...form.getInputProps('thumbnail')}
              />
            </GridCol>
            <GridCol span={3}>
              <FileInput
                required
                withAsterisk
                multiple
                clearable
                label="Previews"
                accept="image/png, image/jpeg"
                placeholder="Click to upload (Up to 9)"
                description="Accept .png .jpg .jpeg images"
                leftSection={<Icon name="upload" size={18} />}
                key={form.key('thumbnail')}
                {...form.getInputProps('thumbnail')}
              />
            </GridCol>
          </Grid>
        </Paper>
      </Box>
    </Stack>
  )
}

export default AddProduct
