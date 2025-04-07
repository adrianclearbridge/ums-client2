import { AuthPage } from "@refinedev/core";

export const Register = () => {
  return (
    <AuthPage
      type="register"
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
