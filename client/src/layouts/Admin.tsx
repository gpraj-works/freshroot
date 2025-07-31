import { Route, Routes } from 'react-router-dom'
import { Login, Layout, Dashboard } from '../app/admin'

export default function Admin() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-category" element={<Login />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
