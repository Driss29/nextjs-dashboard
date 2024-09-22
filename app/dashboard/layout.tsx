import SideNav from '@/app/ui/dashboard/sidenav';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-visible bg-red-600">
      <div className="w-full flex-none md:w-64 bg-red-700">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-blue-400">{children}</div>
    </div>
  );
}