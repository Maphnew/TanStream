import { 
  DashboardOutlined
} from '@ant-design/icons';

const dashBoardNavTree = [{
  key: 'home',
  path: '/app/home',
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
}]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;
