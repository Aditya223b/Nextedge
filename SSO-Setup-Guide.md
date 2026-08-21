# Nextedge — Google & Microsoft SSO Setup Guide

Both providers redirect back through the **same fixed Supabase callback URL** — copy this once, you'll paste it into both Google Cloud and Azure:

```
https://yvdiqabntvoqnkqchbvz.supabase.co/auth/v1/callback
```

---

## Part 1 — Google (Google Workspace for Education)

1. Go to **[console.cloud.google.com](https://console.cloud.google.com)**, create a new project (e.g. "Nextedge").
2. **APIs & Services → OAuth consent screen** → User Type **External** → fill in app name ("Nextedge"), support email, developer email → **Save and Continue** through Scopes and Test Users (add your own test Google account here) → **Save**.
3. **APIs & Services → Credentials → + Create Credentials → OAuth client ID** → Application type **Web application**.
4. Under **Authorized redirect URIs**, add:
   ```
   https://yvdiqabntvoqnkqchbvz.supabase.co/auth/v1/callback
   ```
5. Click **Create**. Copy the **Client ID** and **Client Secret**.
6. In Supabase: **[supabase.com/dashboard/project/yvdiqabntvoqnkqchbvz/auth/providers](https://supabase.com/dashboard/project/yvdiqabntvoqnkqchbvz/auth/providers)** → find **Google** → enable → paste Client ID + Secret → **Save**.

---

## Part 2 — Microsoft (Microsoft 365 Education / Entra ID)

1. Go to **[portal.azure.com](https://portal.azure.com)** → search **App registrations** → **+ New registration**.
2. Name: "Nextedge". **Supported account types**: choose "Accounts in any organizational directory and personal Microsoft accounts" (or narrower, per your institution's IT policy — ask them if unsure).
3. **Redirect URI**: platform **Web**, value:
   ```
   https://yvdiqabntvoqnkqchbvz.supabase.co/auth/v1/callback
   ```
4. Click **Register**. On the app's Overview page, copy the **Application (client) ID**.
5. Go to **Certificates & secrets → + New client secret** → add a description, choose an expiry → **Add**. Copy the secret's **Value** immediately (it's hidden after you leave the page).
6. In Supabase: same providers page as above → find **Azure** → enable → paste:
   - **Client ID** = the Application (client) ID from step 4
   - **Client Secret** = the secret value from step 5
   - **Azure Tenant URL / Tenant ID**: use `common` unless your institution's IT wants it restricted to their own tenant ID (found on the Azure app's Overview page as "Directory (tenant) ID").
   → **Save**.

---

## Part 3 — Enable the Custom Access Token Hook (needed for RLS)

This is separate from SSO but required for the role/institution-scoped database access to work:

1. Go to **[supabase.com/dashboard/project/yvdiqabntvoqnkqchbvz/auth/hooks](https://supabase.com/dashboard/project/yvdiqabntvoqnkqchbvz/auth/hooks)**.
2. Under **Customize Access Token (JWT) Claims hook**, enable it and select the Postgres function `public.custom_access_token_hook` (already created by the schema migration).
3. **Save**.

---

Once all three parts are done, sign-in with either provider will work end-to-end, and role-based access control will be fully enforced at the database level (not just in the app).
