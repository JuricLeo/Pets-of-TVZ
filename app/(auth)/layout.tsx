const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[30rem] md:h-[60rem] flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
