import Header from "@/components/layout/global/header";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <main className="px-4 lg:px-36">
        {children}
      </main>
    </div>
  )
}

export default AppLayout;