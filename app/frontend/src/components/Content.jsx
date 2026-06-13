import {Route, Routes} from 'react-router-dom'
import Home from '../routes/Home'

export default function Content() {
    return(
        <Routes>
            <Route path="/" element={<Home />}></Route>
        </Routes>
    )
}