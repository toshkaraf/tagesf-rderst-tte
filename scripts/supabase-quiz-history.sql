-- Run once in Supabase SQL Editor (Project → SQL → New query).
-- Stores quiz cooldown history for a single user/site.

create table if not exists public.quiz_user_history (
  id text primary key,
  outcomes jsonb not null default '{}'::jsonb,
  fact_counters jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.quiz_user_history enable row level security;

-- No public policies: only the service role key (server-side) may read/write.
