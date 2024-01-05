import React from "react";
import { Routes, Route } from "react-router-dom";

import { ROUTER } from "../utils/constants/routerConstant";

import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import AuthGuard from "../guard/AuthGuard";

import SignUpPage from "../pages/signUp/SignUpPage";
import SignInPage from "../pages/signIn/SignInPage";
import VerifySignInPage from "../pages/verifySignIn.js/VerifySignInPage";
import ResetPasswordPage from "../pages/resetPassword/ResetPasswordPage";
import ForgotPasswodPage from "../pages/forgotPassword/ForgotPasswodPage";

import DashboadPage from "../pages/dashboard/DashboardPage";
import AccountAndSettings from "../pages/accountAndSettings/AccountAndSettings";

import ButtonsPage from "../pages/components/custom/ButtonsPage";
import AlertsPage from "../pages/components/custom/AlertsPage";
import TextEditorPage from "../pages/components/custom/TextEditorPage";

import ButtonPageCore from "../pages/components/core/ButtonPage";
import AlertPageCore from "../pages/components/core/AlertPage";
import TypographyPageCore from "../pages/components/core/TypographyPage";

const PagesRouter = () => {
  return (
    <React.Fragment>
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
        path={ROUTER.TEXT_EDITOR_CUSTOM.path}
        element={
          <DefaultLayout>
            <TextEditorPage />
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
