import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import HomePage from './components/HomePage'
import Brands from './components/Brands'
import App from './App'
import ViewGun from './components/ViewGun'
import AddGun from './components/AddGun'

function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="/" element={<HomePage />} />
        <Route path="brands" element={<Brands />} />
        <Route path="view" element={<ViewGun />} />
        <Route path="addGun" element={<AddGun />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default Router
