export declare function signUpUser(email: string, password: string): Promise<{
    user: import("@supabase/supabase-js").AuthUser | null;
    session: import("@supabase/supabase-js").AuthSession | null;
} | {
    user: null;
    session: null;
}>;
export declare function signInUser(email: string, password: string): Promise<{
    user: import("@supabase/supabase-js").AuthUser;
    session: import("@supabase/supabase-js").AuthSession;
    weakPassword?: import("@supabase/supabase-js").WeakPassword;
} | {
    user: null;
    session: null;
    weakPassword?: null;
}>;
