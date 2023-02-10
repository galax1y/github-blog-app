import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Index } from './pages/Index'
import { Issue } from './pages/Issue'


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/:username/:repo" element={<Home />} />
        <Route path="/:username/:repo/issues/:issueNumber" element={<Issue />} />
      </Route>
    </Routes>
  )
}
