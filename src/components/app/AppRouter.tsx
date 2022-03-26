import { useRoutes } from 'react-router-dom';
import { AppBankRoutes } from '../../constants/Routes';
import { MainPage, Task1 } from './AppPages';

const AppRouter = () => {
  return useRoutes([
    {
      path: AppBankRoutes.HOME,
      element: <MainPage />,
    },
    {
      path: AppBankRoutes.HOME_TWO,
      element: <MainPage />,
    },
    {
      path: AppBankRoutes.FIRST_TASK,
      element: <Task1 />,
    },
  ]);
};
export default AppRouter;
