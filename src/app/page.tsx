
import path from 'path';
import fs from 'fs/promises';
import { HomePage } from '@/components/home-page';
import type { Track, Lesson } from '@/lib/types';

export default async function Home() {
  const tracksPath = path.join(process.cwd(), 'public/data/tracks.json');
  const lessonsPath = path.join(process.cwd(), 'public/data/lessons.json');

  const tracksJson = await fs.readFile(tracksPath, 'utf-8');
  const lessonsJson = await fs.readFile(lessonsPath, 'utf-8');

  const tracks: Track[] = JSON.parse(tracksJson);
  const lessons: Lesson[] = JSON.parse(lessonsJson);

  return <HomePage tracks={tracks} lessons={lessons} />;
}
