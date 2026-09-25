import Link from 'next/link';
import {
  Rocket,
  Swords,
  Shield,
  Zap,
  Globe,
  Trophy,
  BarChart3,
  Server,
  Target,
  Boxes,
  FolderTree,
  Database,
} from 'lucide-react';



const phases = [
  {
    name: 'Tutorial Zigma',
    description:
      'Bangun game kuis multiplayer real-time lengkap dengan sistem room, gameplay, kuis, dan ranking.',
    href: '/docs/tutorial',
    icon: Swords,
    color: 'from-violet-500/20 to-blue-500/20',
    border: 'border-violet-500/30 hover:border-violet-400',
  },
  {
    name: 'Karakter & Tampilan',
    description:
      'Kustomisasi karakter Human 2D dengan layered sprites dan pilihan gaya rambut (HAIR_OPTIONS).',
    href: '/docs/karakter',
    icon: Shield,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30 hover:border-emerald-400',
  },
  {
    name: 'Sistem Combat & Aksi',
    description:
      'Mekanika tebasan 2D, AI musuh yang melarikan diri (flee), kamera sinematik, dan transisi ke kuis.',
    href: '/docs/combat',
    icon: Zap,
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30 hover:border-orange-400',
  },
  {
    name: 'Multiplayer',
    description:
      'Sinkronisasi real-time WebSocket dengan Colyseus 0.15, partisi sub-room pulau, dan interpolasi LERP.',
    href: '/docs/multiplayer',
    icon: Globe,
    color: 'from-cyan-500/20 to-sky-500/20',
    border: 'border-cyan-500/30 hover:border-cyan-400',
  },
  {
    name: 'Progress & Rewards',
    description:
      'Formula skor proporsional 100/N, bonus peti harta karun (chest), dan pencatatan akurasi.',
    href: '/docs/tutorial/host/progress-rewards',
    icon: Trophy,
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/30 hover:border-yellow-400',
  },
  {
    name: 'Leaderboard',
    description:
      'Podium juara 3 besar dan klasemen skor akhir pertandingan di layar Host.',
    href: '/docs/tutorial/host/leaderboard-ranking',
    icon: BarChart3,
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30 hover:border-pink-400',
  },
  {
    name: 'Deploy & Monitoring',
    description:
      'Pengujian dengan Bot Simulator, PM2 cluster mode, Redis presence, dan pipeline GitLab CI/CD.',
    href: '/docs/deploy',
    icon: Server,
    color: 'from-red-500/20 to-orange-500/20',
    border: 'border-red-500/30 hover:border-red-400',
  },
];

const quickLinks = [
  {
    title: 'Struktur Project',
    description: 'Arsitektur monorepo Zigma — client, server, dan shared beserta file-file kuncinya.',
    href: '/docs/structure',
    icon: FolderTree,
  },
  {
    title: 'Stack Teknologi',
    description: 'Vite, Phaser 3, Colyseus, Express, Supabase, Redis — pilihan stack dan alasan teknisnya.',
    href: '/docs/stack',
    icon: Boxes,
  },
  {
    title: 'Database Schema',
    description: 'Skema database Supabase untuk users, questions, rooms, dan match history.',
    href: '/docs/database',
    icon: Database,
  },
  {
    title: 'Deploy & Monitoring',
    description: 'Panduan deploy server Colyseus + Express dan monitoring performa game.',
    href: '/docs/deploy',
    icon: Server,
  },
];


const stats = [
  { value: '10', label: 'Bab Tutorial', icon: Rocket },
  { value: '30+', label: 'Code Snippet', icon: Boxes },
  { value: '6', label: 'Kategori Kuis', icon: Shield },
  { value: '∞', label: 'Match Multiplayer', icon: Globe },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full max-w-5xl px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-4 py-1.5 text-sm text-fd-muted-foreground mb-6">
          <span className="size-2 rounded-full bg-green-500 animate-pulse" />
          Build Guide - Zigma
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Bangun Game Kuis 2D Action{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Multiplayer
          </span>{' '}
        </h1>

        <p className="text-lg text-fd-muted-foreground max-w-2xl mx-auto mb-8">
          Panduan teknis lengkap membangun game kuis aksi 2D dengan Phaser 3, Colyseus WebSocket, dan
          Supabase. Dari setup monorepo hingga deployment PM2 cluster.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white"
            style={{ background: 'linear-gradient(135deg, #6366f1, #a855f7)' }}
          >
            <Rocket className="size-4" />
            Mulai Bangun Game
          </Link>
          <Link
            href="/docs/tutorial"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold hover:bg-fd-accent transition-colors"
          >
            <Target className="size-4" />
            Lihat Tutorial
          </Link>
          <a
            href="https://gameforsmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-5 py-2.5 text-sm font-semibold hover:bg-fd-accent transition-colors"
          >
            <Globe className="size-4" />
            gameforsmart.com
          </a>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="w-full max-w-5xl px-6 mb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-xl border border-fd-border bg-fd-card p-4 text-center"
              >
                <Icon className="size-6 mx-auto mb-2 text-fd-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-fd-muted-foreground mt-0.5">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full max-w-5xl px-6 mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Zap className="size-5 text-fd-primary" />
          Mulai dari Sini
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition-colors"
              >
                <div className="rounded-lg bg-fd-primary/10 p-2 text-fd-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-fd-primary transition-colors">
                    {link.title}
                  </div>
                  <div className="text-sm text-fd-muted-foreground mt-0.5">
                    {link.description}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Modules Showcase */}
      <section className="w-full max-w-5xl px-6 mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <Swords className="size-5 text-fd-primary" />
            Modul Game
          </h2>
          <Link
            href="/docs/tutorial"
            className="text-sm text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            Lihat Semua →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {phases.map((phase) => {
            const Icon = phase.icon;
            return (
              <Link
                key={phase.name}
                href={phase.href}
                className={`group relative rounded-xl border bg-gradient-to-br p-5 transition-all hover:shadow-lg ${phase.color} ${phase.border}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="rounded-lg bg-fd-background/80 backdrop-blur p-2 text-fd-foreground">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-xs text-fd-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    Baca docs →
                  </span>
                </div>
                <h3 className="font-bold text-base mb-1">{phase.name}</h3>
                <p className="text-sm text-fd-muted-foreground line-clamp-2">
                  {phase.description}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full max-w-5xl px-6 mb-16">
        <div
          className="rounded-2xl p-8 text-center text-white"
          style={{ background: 'linear-gradient(135deg, #1e1b4b, #4c1d95, #581c87)' }}
        >
          <h2 className="text-2xl font-bold mb-2">Siap Membangun Game Pertamamu?</h2>
          <p className="text-purple-200 mb-6">
            Mulai dari setup project, bangun karakter pertama, dan luncurkan MVP dalam hitungan
            minggu.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg bg-white text-purple-900 px-5 py-2.5 text-sm font-bold hover:bg-purple-50 transition-colors"
            >
              <Target className="size-4" />
              Mulai dari Setup
            </Link>
            <Link
              href="/docs/tutorial"
              className="inline-flex items-center gap-2 rounded-lg border border-purple-400 text-white px-5 py-2.5 text-sm font-semibold hover:bg-purple-800/50 transition-colors"
            >
              <Swords className="size-4" />
              Lihat Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
