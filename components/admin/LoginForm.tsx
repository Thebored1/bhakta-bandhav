"use client";

import { useActionState } from "react";
import { loginAction } from "@/lib/auth/actions";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <form action={formAction} className="admin-login-form">
      <label className="admin-label">
        Password
        <input
          type="password"
          name="password"
          className="admin-input"
          placeholder="Enter admin password"
          required
          autoFocus
        />
      </label>
      {state?.error && <p className="admin-error">{state.error}</p>}
      <button type="submit" className="admin-btn-primary" disabled={isPending}>
        {isPending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
