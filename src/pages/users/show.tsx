import { useNavigation, useResource, useShow } from "@refinedev/core";

export const UserShow = () => {
  const { edit, list } = useNavigation();
  const { id } = useResource();
  const { queryResult } = useShow({});
  const { data } = queryResult;

  const record = data?.data;

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>Show</h1>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={() => list("users")}>List</button>
          <button onClick={() => edit("users", id ?? "")}>Edit</button>
        </div>
      </div>
      <div>
        <div style={{ marginTop: "6px" }}>
          <h5>ID</h5>
          <div>{record?.id ?? ""}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>First Name</h5>
          <div>{record?.firstName}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Last Name</h5>
          <div>{record?.lastName}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Birthday</h5>
          <div>{record?.birthday}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>email</h5>
          <div>{record?.email}</div>
        </div>
        <div style={{ marginTop: "6px" }}>
          <h5>Skills</h5>
          <div>{record?.skills.join(', ')}</div>
        </div>
      </div>
    </div>
  );
};
