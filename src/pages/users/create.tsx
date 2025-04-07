import { useNavigation } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const UserCreate = () => {
  const { list } = useNavigation();

  const {
    refineCore: { onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <div style={{ padding: "16px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Create</h1>
        <div>
          <button
            onClick={() => {
              list("users");
            }}
          >
            List
          </button>
        </div>
      </div>
      <form onSubmit={handleSubmit(onFinish)}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <label>
            <span style={{ marginRight: "8px" }}>First Name</span>
            <input
              type="text"
              {...register("firstName", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.firstName?.message as string}
            </span>
          </label>

          <label>
            <span style={{ marginRight: "8px" }}>Last Name</span>
            <input
              type="text"
              {...register("lastName", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.lastName?.message as string}
            </span>
          </label>

          <label>
            <span style={{ marginRight: "8px" }}>Birthday</span>
            <input
              type="date"
              {...register("birthday", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.birthday?.message as string}
            </span>
          </label>

          <label>
            <span style={{ marginRight: "8px" }}>email</span>
            <input
              type="email"
              {...register("email", {
                required: "This field is required",
              })}
            />
            <span style={{ color: "red" }}>
              {(errors as any)?.email?.message as string}
            </span>
          </label>

          <div>
            <input type="submit" value={"Save"} />
          </div>
        </div>
      </form>
    </div>
  );
};
