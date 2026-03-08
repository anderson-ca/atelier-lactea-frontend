'use client';

import type { ReactNode } from 'react';
import { ConfigProvider } from 'antd';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2F2A24',
          colorText: '#2F2A24',
          colorBgBase: '#F7F3EC',
          borderRadius: 14,
          fontFamily: 'var(--font-body)'
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
}
