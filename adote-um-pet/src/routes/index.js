import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage } from '../pages/home'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} exact />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes