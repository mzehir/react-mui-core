import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER } from "../utils/constants/routerConstant";

import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import PresentationLayout from "../layouts/PresentationLayout";
import AuthGuard from "../guard/AuthGuard";

import SignUpPage from "../pages/signUp/SignUpPage";
import SignInPage from "../pages/signIn/SignInPage";
import VerifySignInPage from "../pages/verifySignIn.js/VerifySignInPage";
import ResetPasswordPage from "../pages/resetPassword/ResetPasswordPage";
import ForgotPasswodPage from "../pages/forgotPassword/ForgotPasswodPage";

import DashboadPage from "../pages/dashboard/DashboardPage";
import DashboardPresentationPage from "../pages/dashboardPresentation/DashboardPresentationPage";
import AccountAndSettings from "../pages/accountAndSettings/AccountAndSettings";

import AdvancedSelectPage from "../pages/components/custom/AdvancedSelectPage";
import CustomFilterPage from "../pages/components/custom/CustomFilterPage";
import ReactToastifyPage from "../pages/components/custom/ReactToastifyPage";
import TextEditorPage from "../pages/components/custom/TextEditorPage";
import ButtonsPage from "../pages/components/custom/ButtonsPage";
import AlertsPage from "../pages/components/custom/AlertsPage";

import TypographyPageCore from "../pages/components/core/TypographyPage";
import TextFieldPageCore from "../pages/components/core/TextFieldPage";
import ButtonPageCore from "../pages/components/core/ButtonPage";
import AlertPageCore from "../pages/components/core/AlertPage";
import SnackbarPageCore from "../pages/components/core/SnackbarPage";

import ReduxToolkitPage from "../pages/components/advanced/ReduxToolkitPage";

const PagesRouter = () => {
  return (
    <React.Fragment>
      <Route
        path={ROUTER.DASHBOARD_PRESENTATION.path}
        element={
          <PresentationLayout>
            <DashboardPresentationPage />
          </PresentationLayout>
        }
      />

      <Route
        path={ROUTER.DASHBOARD.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <DashboadPage />
            </DefaultLayout>
          </AuthGuard>
        }
      />

      <Route
        path={ROUTER.ACCOUNT_AND_SETTINGS.path}
        element={
          <AuthGuard>
            <DefaultLayout>
              <AccountAndSettings />
            </DefaultLayout>
          </AuthGuard>
        }
      />
    </React.Fragment>
  );
};

const AuthRouter = () => {
  return (
    <React.Fragment>
      <Route
        path={ROUTER.SIGN_UP.path}
        element={
          <AuthLayout>
            <SignUpPage />
          </AuthLayout>
        }
      />

      <Route
        path={ROUTER.SIGN_IN.path}
        element={
          <AuthLayout>
            <SignInPage />
          </AuthLayout>
        }
      />

      <Route
        path={ROUTER.VERIFY_SIGN_IN.path}
        element={
          <AuthLayout>
            <VerifySignInPage />
          </AuthLayout>
        }
      />

      <Route
        path={ROUTER.RESET_PASSWORD.path}
        element={
          <AuthLayout>
            <ResetPasswordPage />
          </AuthLayout>
        }
      />

      <Route
        path={ROUTER.FORGOT_PASSWORD.path}
        element={
          <AuthLayout>
            <ForgotPasswodPage />
          </AuthLayout>
        }
      />
    </React.Fragment>
  );
};

const ComponentsRouter = () => {
  return (
    <React.Fragment>
      <Route
        path={ROUTER.ADVANCED_SELECT_CUSTOM.path}
        element={
          <DefaultLayout>
            <AdvancedSelectPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.CUSTOM_FILTER_CUSTOM.path}
        element={
          <DefaultLayout>
            <CustomFilterPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.REACT_TOASTIFY_CUSTOM.path}
        element={
          <DefaultLayout>
            <ReactToastifyPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.TEXT_EDITOR_CUSTOM.path}
        element={
          <DefaultLayout>
            <TextEditorPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.BUTTONS_CUSTOM.path}
        element={
          <DefaultLayout>
            <ButtonsPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.ALERTS_CUSTOM.path}
        element={
          <DefaultLayout>
            <AlertsPage />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.BUTTON_CORE.path}
        element={
          <DefaultLayout>
            <ButtonPageCore />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.ALERT_CORE.path}
        element={
          <DefaultLayout>
            <AlertPageCore />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.TYPOGRAPHY_CORE.path}
        element={
          <DefaultLayout>
            <TypographyPageCore />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.TEXT_FIELD_CORE.path}
        element={
          <DefaultLayout>
            <TextFieldPageCore />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.SNACKBAR_CORE.path}
        element={
          <DefaultLayout>
            <SnackbarPageCore />
          </DefaultLayout>
        }
      />

      <Route
        path={ROUTER.REDUX_TOOLKIT_ADVANCED.path}
        element={
          <DefaultLayout>
            <ReduxToolkitPage />
          </DefaultLayout>
        }
      />
    </React.Fragment>
  );
};

export const Router = () => {
  return (
    <Routes>
      {PagesRouter()}
      {AuthRouter()}
      {ComponentsRouter()}
    </Routes>
  );
};
