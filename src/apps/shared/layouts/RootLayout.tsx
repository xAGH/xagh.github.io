import { FC } from 'react';
import { Outlet } from 'react-router-dom';

type RootLayoutProps = object;

const RootLayout: FC<RootLayoutProps> = () => {

  return (
    <>
      <div style={{
        position: 'relative',
      }}>
        <Outlet/>
      </div>
    </>
  );
};

export default RootLayout;