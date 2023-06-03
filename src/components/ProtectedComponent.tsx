interface ProtectedComponentProps {
  component: React.LazyExoticComponent<() => JSX.Element>;
}

export const ProtectedComponent = ({ component: Component }: ProtectedComponentProps) => {
  // This component can be extended to grant access depending on the user.

  return <Component />;
};
