import { Authenticated, ErrorComponent, Refine } from "@refinedev/core";

import routerBindings, {
  CatchAllNavigate,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "./providers/dataProvider";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";
import { authProvider } from "./providers/authProvider";
import { Layout } from "./components/layout";
import {
  IdentityProviderCreate,
  IdentityProviderEdit,
  IdentityProviderList,
  IdentityProviderShow,
} from "./pages/identity-providers";
import { UserCreate, UserEdit, UserList, UserShow } from "./pages/users";
import {
  SettingCreate,
  SettingEdit,
  SettingList,
  SettingShow,
} from "./pages/settings";
import {
  PermissionCreate,
  PermissionEdit,
  PermissionList,
  PermissionShow,
} from "./pages/permissions";
import {
  ApplicationCreate,
  ApplicationEdit,
  ApplicationList,
  ApplicationShow,
} from "./pages/applications";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { ForgotPassword } from "./pages/forgotPassword";
import { Login } from "./pages/login";
import { Register } from "./pages/register";
import { Home } from "./pages/home";

function App() {
  return (
    <BrowserRouter>
      <Refine
        dataProvider={dataProvider("http://localhost:5169/api")}
        routerProvider={routerBindings}
        authProvider={authProvider}
        resources={[
          {
            name: "Applications",
            list: "/applications",
            create: "/applications/create",
            edit: "/applications/edit/:id",
            show: "/applications/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "EntityAccess",
            list: "/entityAccess",
            create: "/entityAccess/create",
            edit: "/entityAccess/edit/:id",
            show: "/entityAccess/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "EntityReference",
            list: "/EntityReference",
            create: "/EntityReference/create",
            edit: "/EntityReference/edit/:id",
            show: "/EntityReference/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "IdentityProvider",
            list: "/IdentityProvider",
            create: "/IdentityProvider/create",
            edit: "/IdentityProvider/edit/:id",
            show: "/IdentityProvider/show/:id",
            meta: {
              canDelete: true,
            },
          },
          {
            name: "JobRole",
            list: "/JobRole",
            create: "/JobRole/create",
            edit: "/JobRole/edit/:id",
            show: "/JobRole/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "JobRoleApplication",
            list: "/JobRoleApplication",
            create: "/JobRoleApplication/create",
            edit: "/JobRoleApplication/edit/:id",
            show: "/JobRoleApplication/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "JobRoleApplicationPermission",
            list: "/JobRoleApplicationPermission",
            create: "/JobRoleApplicationPermission/create",
            edit: "/JobRoleApplicationPermission/edit/:id",
            show: "/JobRoleApplicationPermission/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "Permission",
            list: "/Permission",
            create: "/Permission/create",
            edit: "/Permission/edit/:id",
            show: "/Permission/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "User",
            list: "/User",
            create: "/User/create",
            edit: "/User/edit/:id",
            show: "/User/show/:id",
            meta: {
              canDelete: false,
            },
          },
          {
            name: "Setting",
            list: "/settings",
            create: "/Setting/create",
            edit: "/settings/edit/:id",
            show: "/settings/show/:id",
            meta: {
              canDelete: false,
            },
          },

          // {
          //   name: "blog_posts",
          //   list: "/blog-posts",
          //   create: "/blog-posts/create",
          //   edit: "/blog-posts/edit/:id",
          //   show: "/blog-posts/show/:id",
          //   meta: {
          //     canDelete: true,
          //   },
          // },
          // {
          //   name: "categories",
          //   list: "/categories",
          //   create: "/categories/create",
          //   edit: "/categories/edit/:id",
          //   show: "/categories/show/:id",
          //   meta: {
          //     canDelete: true,
          //   },
          // },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
          useNewQueryKeys: true,
          projectId: "bsaW3l-ifyWvt-XPfnPY",
        }}
      >
        <Routes>
          <Route
            element={
              <Authenticated
                key="authenticated-inner"
                fallback={<CatchAllNavigate to="/login" />}
              >
                <Layout>
                  <Outlet />
                </Layout>
              </Authenticated>
            }
          >
            <Route
              index
              element={<NavigateToResource resource="blog_posts" />}
            />
            <Route path="/identity-providers">
              <Route index element={<IdentityProviderList />} />
              <Route path="create" element={<IdentityProviderCreate />} />
              <Route path="edit/:id" element={<IdentityProviderEdit />} />
              <Route path="show/:id" element={<IdentityProviderShow />} />
            </Route>
            <Route path="/users">
              <Route index element={<UserList />} />
              <Route path="create" element={<UserCreate />} />
              <Route path="edit/:id" element={<UserEdit />} />
              <Route path="show/:id" element={<UserShow />} />
            </Route>
            <Route path="/settings">
              <Route index element={<SettingList />} />
              <Route path="create" element={<SettingCreate />} />
              <Route path="edit/:id" element={<SettingEdit />} />
              <Route path="show/:id" element={<SettingShow />} />
            </Route>
            <Route path="/permissions">
              <Route index element={<PermissionList />} />
              <Route path="create" element={<PermissionCreate />} />
              <Route path="edit/:id" element={<PermissionEdit />} />
              <Route path="show/:id" element={<PermissionShow />} />
            </Route>
            <Route path="/applications">
              <Route index element={<ApplicationList />} />
              <Route path="create" element={<ApplicationCreate />} />
              <Route path="edit/:id" element={<ApplicationEdit />} />
              <Route path="show/:id" element={<ApplicationShow />} />
            </Route>
            <Route path="/blog-posts">
              <Route index element={<BlogPostList />} />
              <Route path="create" element={<BlogPostCreate />} />
              <Route path="edit/:id" element={<BlogPostEdit />} />
              <Route path="show/:id" element={<BlogPostShow />} />
            </Route>
            <Route path="/categories">
              <Route index element={<CategoryList />} />
              <Route path="create" element={<CategoryCreate />} />
              <Route path="edit/:id" element={<CategoryEdit />} />
              <Route path="show/:id" element={<CategoryShow />} />
            </Route>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<ErrorComponent />} />
          </Route>
          <Route
            element={
              <Authenticated key="authenticated-outer" fallback={<Outlet />}>
                <NavigateToResource />
              </Authenticated>
            }
          >
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
          </Route>
        </Routes>

        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
}

export default App;
