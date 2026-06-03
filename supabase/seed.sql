insert into public.posts (tag, title, excerpt, tint, image, content, slug, created_at)
values
  (
    'Hari-kathā',
    'The Sweetness of Service',
    'On how loving service to the Divine purifies the heart and awakens our eternal relationship with Sri Radha-Krishna.',
    'rose',
    'https://images.unsplash.com/photo-1512632578888-169bbbc64f33?auto=format&fit=crop&w=800&q=80',
    '<p>On how loving service to the Divine purifies the heart and awakens our eternal relationship with Sri Radha-Krishna.</p><p>Full article coming soon.</p>',
    'the-sweetness-of-service',
    '2026-01-15T00:00:00Z'
  ),
  (
    'Teachings',
    'Watering the Root of the Tree',
    'Bhakti is described as nourishing every living being like watering the roots of the tree of all existence.',
    'mint',
    'https://images.unsplash.com/photo-1477120128765-a0528148fed6?auto=format&fit=crop&w=800&q=80',
    '<p>Bhakti is described as nourishing every living being like watering the roots of the tree of all existence.</p><p>Full article coming soon.</p>',
    'watering-the-root-of-the-tree',
    '2026-01-22T00:00:00Z'
  ),
  (
    'Pilgrimage',
    'A Day in Sri Radhe Kunj',
    'Glimpses of daily life at our Vrindavan headquarters, where students study, serve, and chant together.',
    'gold',
    'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&w=800&q=80',
    '<p>Glimpses of daily life at our Vrindavan headquarters, where students study, serve, and chant together.</p><p>Full article coming soon.</p>',
    'a-day-in-sri-radhe-kunj',
    '2026-01-29T00:00:00Z'
  ),
  (
    'Practice',
    'Beginning Japa Meditation',
    'A gentle guide to the practice of chanting on beads, how to start, how to sustain, and what to expect on the journey inward.',
    'lavender',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    '<p>A gentle guide to the practice of chanting on beads, how to start, how to sustain, and what to expect on the journey inward.</p><p>Full article coming soon.</p>',
    'beginning-japa-meditation',
    '2026-02-05T00:00:00Z'
  ),
  (
    'Lineage',
    'The Legacy of Srila Narayana Gosvami',
    'A reflection on how Bhakta Bandhav Srila Gurudeva spread the path of pure love across the world through tireless travel and teaching.',
    'peach',
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=800&q=80',
    '<p>A reflection on how Bhakta Bandhav Srila Gurudeva spread the path of pure love across the world through tireless travel and teaching.</p><p>Full article coming soon.</p>',
    'the-legacy-of-srila-narayana-gosvami',
    '2026-02-12T00:00:00Z'
  ),
  (
    'Centers',
    'A Visit to New Braj Dham',
    'New Braj Dham in Badger, California is a sanctuary of devotion nestled in the hills, where community and practice meet.',
    'blossom',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80',
    '<p>New Braj Dham in Badger, California is a sanctuary of devotion nestled in the hills, where community and practice meet.</p><p>Full article coming soon.</p>',
    'a-visit-to-new-braj-dham',
    '2026-02-19T00:00:00Z'
  )
on conflict (slug) do nothing;

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '14',
  'Jun',
  'Kartik Vrindavan Parikrama',
  'Sri Radhe Kunj, Vrindavan',
  'Daily · 6:00 AM',
  'Pilgrimage',
  '<p>Daily parikrama and devotional gatherings in Vrindavan.</p>',
  '2026-06-14T06:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Kartik Vrindavan Parikrama'
    and d = '14'
    and m = 'Jun'
    and place = 'Sri Radhe Kunj, Vrindavan'
);

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '28',
  'Jun',
  'Online Satsang & Hari-kathā',
  'Live on Zoom & YouTube',
  '7:00 PM EST',
  'Online',
  '<p>An online satsang and hari-kathā session for the community.</p>',
  '2026-06-28T19:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Online Satsang & Hari-kathā'
    and d = '28'
    and m = 'Jun'
    and place = 'Live on Zoom & YouTube'
);

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '09',
  'Jul',
  'Bhakta Youth Retreat',
  'New Braj Dham, Badger CA',
  'Weekend',
  'Retreat',
  '<p>A weekend retreat focused on sangha, study, and devotional practice.</p>',
  '2026-07-09T00:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Bhakta Youth Retreat'
    and d = '09'
    and m = 'Jul'
    and place = 'New Braj Dham, Badger CA'
);

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '21',
  'Jul',
  'Guru Purnima Celebration',
  'Sri Radhe Kunj, Vrindavan',
  'All Day',
  'Festival',
  '<p>A full day celebration with kirtan, classes, and offerings in honor of Guru Purnima.</p>',
  '2026-07-21T00:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Guru Purnima Celebration'
    and d = '21'
    and m = 'Jul'
    and place = 'Sri Radhe Kunj, Vrindavan'
);

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '03',
  'Aug',
  'Janmashtami Mahotsava',
  'Multiple Centers Worldwide',
  'Evening Programme',
  'Festival',
  '<p>Janmashtami celebrations across centers worldwide with kirtan, hari-kathā, and festival offerings.</p>',
  '2026-08-03T00:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Janmashtami Mahotsava'
    and d = '03'
    and m = 'Aug'
    and place = 'Multiple Centers Worldwide'
);

insert into public.events (d, m, title, place, time, tag, description, created_at)
select
  '16',
  'Aug',
  'Bhakti Study Weekend',
  'Bhakta Bandhav, Upstate New York',
  'Weekend',
  'Study',
  '<p>A study weekend focused on scripture, discussion, and shared devotional practice.</p>',
  '2026-08-16T00:00:00Z'
where not exists (
  select 1
  from public.events
  where title = 'Bhakti Study Weekend'
    and d = '16'
    and m = 'Aug'
    and place = 'Bhakta Bandhav, Upstate New York'
);
