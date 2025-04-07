import { AuthPage } from "@refinedev/core";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      renderContent={(content) => (
        <div
          style={{
            display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'
          }}
        >
          <div
            style={{
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 15,
              width: 400,
            }}
          >

            {content}
          </div>
        </div>
      )}
    />
  );
};
