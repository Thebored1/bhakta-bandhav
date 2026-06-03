create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  tag text not null check (char_length(trim(tag)) > 0),
  title text not null check (char_length(trim(title)) > 0),
  excerpt text not null check (char_length(trim(excerpt)) > 0),
  tint text not null check (tint in ('rose', 'peach', 'mint', 'lavender', 'gold', 'blossom')),
  image text not null check (char_length(trim(image)) > 0),
  content text not null default '<p></p>',
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  d text not null check (d ~ '^[0-9]{1,2}$'),
  m text not null check (m in ('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec')),
  title text not null check (char_length(trim(title)) > 0),
  place text not null check (char_length(trim(place)) > 0),
  time text not null check (char_length(trim(time)) > 0),
  tag text not null check (char_length(trim(tag)) > 0),
  description text not null default '<p></p>',
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists posts_created_at_idx on public.posts (created_at desc);
create index if not exists events_created_at_idx on public.events (created_at asc);

drop trigger if exists posts_set_updated_at on public.posts;
create trigger posts_set_updated_at
before update on public.posts
for each row
execute function public.set_updated_at();

drop trigger if exists events_set_updated_at on public.events;
create trigger events_set_updated_at
before update on public.events
for each row
execute function public.set_updated_at();

alter table public.posts enable row level security;
alter table public.events enable row level security;

grant usage on schema public to anon, authenticated;
grant select on public.posts to anon, authenticated;
grant select on public.events to anon, authenticated;
grant all privileges on public.posts to service_role;
grant all privileges on public.events to service_role;

drop policy if exists "public_can_read_posts" on public.posts;
create policy "public_can_read_posts"
on public.posts
for select
to anon, authenticated
using (true);

drop policy if exists "public_can_read_events" on public.events;
create policy "public_can_read_events"
on public.events
for select
to anon, authenticated
using (true);

comment on table public.posts is 'Blog posts shown on the public site and edited from the admin panel.';
comment on table public.events is 'Events shown on the public site and edited from the admin panel.';
