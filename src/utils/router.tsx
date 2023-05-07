import {createBrowserRouter} from "react-router-dom";
import {
    PieChartOutlined,
} from '@ant-design/icons';
import About from "../pages/About";
import Index from "../pages/Index";
import Draw from "../pages/Draw";

const childRoutes = [
    {
        path: '',
        element: <About />,
        icon: <PieChartOutlined />,
        label: 'About Me',
        link: ''
    },
    {
        path: '/draw',
        element: <Draw/>,
        icon: <PieChartOutlined />,
        label: 'Collad Draw',
        link: '/draw'
    },
    {
        path: "*",
        element: <div>404 :(</div>,
        icon: <PieChartOutlined />,
        label: 'About Me',
        link: ''
    },
]

const routes = [
    {
        path: "",
        element: <Index />,
        children: childRoutes
    },
]

const router = createBrowserRouter(routes);

export { router, routes, childRoutes }
