import {MainLayoutProps} from './contracts';

export const MainLayout = (props: MainLayoutProps) => {
  const {children} = props;
  return <div>{children}</div>;
};
