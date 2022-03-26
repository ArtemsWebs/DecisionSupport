import { createGlobalStyle } from 'styled-components';

export interface AppStylesProps {
  rootSelector?: string;
}

const AppStyles = createGlobalStyle<AppStylesProps>`
  ${(props) => props.rootSelector || ''} {
    width: 100%;
    height: 100%;
    margin: 0px;
  }
`;
export default AppStyles;
