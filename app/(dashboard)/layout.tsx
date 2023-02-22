import GlassPane from '@/components/GlassPane';
import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';

export default function DashboardRootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className='h-screen w-screen candy-mesh p-6'>
        <GlassPane className='h-full w-full flex items-center'>
          <Sidebar />
          {children}
        </GlassPane>
        <div id='modal'></div>
      </body>
    </html>
  );
}
