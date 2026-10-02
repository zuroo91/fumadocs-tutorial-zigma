import Link from 'next/link';
import {
  Swords,
  Shield,
  Zap,
  Globe,
  Trophy,
  BarChart3,
  Play,
  Layers,
  BookOpen,
  LogIn,
  LayoutDashboard,
  UserPlus,
  Crown,
  Gamepad2,
  Target,
} from 'lucide-react';



const phases = [
  {
    name: 'Tutorial Zigma',
    description:
      'Bangun game kuis multiplayer real-time lengkap dengan sistem room, gameplay, kuis, dan ranking.',
    href: '/docs/developer/tutorial',
    icon: Swords,
    color: 'from-violet-500/20 to-blue-500/20',
    border: 'border-violet-500/30 hover:border-violet-400',
  },
  {
    name: 'Karakter & Tampilan',
    description:
      'Kustomisasi karakter Human 2D dengan layered sprites dan pilihan gaya rambut (HAIR_OPTIONS).',
    href: '/docs/developer/karakter',
    icon: Shield,
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/30 hover:border-emerald-400',
  },
  {
    name: 'Sistem Combat & Aksi',
    description:
      'Mekanika tebasan 2D, AI musuh yang melarikan diri (flee), kamera sinematik, dan transisi ke kuis.',
    href: '/docs/developer/combat',
    icon: Zap,
    color: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30 hover:border-orange-400',
  },
  {
    name: 'Multiplayer',
    description:
      'Sinkronisasi real-time WebSocket dengan Colyseus 0.15, partisi sub-room pulau, dan interpolasi LERP.',
    href: '/docs/developer/multiplayer',
    icon: Globe,
    color: 'from-cyan-500/20 to-sky-500/20',
    border: 'border-cyan-500/30 hover:border-cyan-400',
  },
  {
    name: 'Progress & Rewards',
    description:
      'Formula skor proporsional 100/N, bonus peti harta karun (chest), dan pencatatan akurasi.',
    href: '/docs/developer/tutorial/host/progress-rewards',
    icon: Trophy,
    color: 'from-yellow-500/20 to-amber-500/20',
    border: 'border-yellow-500/30 hover:border-yellow-400',
  },
  {
    name: 'Leaderboard',
    description:
      'Podium juara 3 besar dan klasemen skor akhir pertandingan di layar Host.',
    href: '/docs/developer/tutorial/host/leaderboard-ranking',
    icon: BarChart3,
    color: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30 hover:border-pink-400',
  },
];

const userGuides = [
  {
    title: 'Login',
    description: 'Panduan masuk ke dalam game Zigma menggunakan Google atau akun Guest.',
    href: '/docs/user/panduan-bermain/login',
    icon: LogIn,
  },
  {
    title: 'Dashboard',
    description: 'Mengenal tampilan Home Page, navigasi menu, profil, dan pengaturan game.',
    href: '/docs/user/panduan-bermain/home-page',
    icon: LayoutDashboard,
  },
  {
    title: 'Join Game',
    description: 'Cara bergabung ke ruangan kuis menggunakan kode PIN unik atau scan QR Code.',
    href: '/docs/user/panduan-bermain/player/join-game',
    icon: UserPlus,
  },
  {
    title: 'Host',
    description: 'Memilih kuis, mengatur durasi room, dan memimpin jalannya sesi multiplayer.',
    href: '/docs/user/panduan-bermain/host/select-quiz',
    icon: Crown,
  },
  {
    title: 'Player',
    description: 'Kustomisasi karakter, kontrol gerakan 2D, aksi pedang, dan melihat skor hasil.',
    href: '/docs/user/panduan-bermain/player/waiting-room',
    icon: Gamepad2,
  },
  {
    title: 'Tryout',
    description: 'Mode latihan mandiri untuk mencoba kuis tanpa memerlukan pemain lain.',
    href: '/docs/user/panduan-bermain/tryout',
    icon: Target,
  },
];

export default function HomePage() {
  return (
    <>
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

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/docs/user/pengenalan/gambaran-umum"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: '#8b5cf6' }}
          >
            <Play className="size-5 fill-current" />
            User
          </Link>
          <Link
            href="/docs/developer/getting-started"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #1e1b4b, #4c1d95)' }}
          >
            <Layers className="size-5" />
            Developer
          </Link>
        </div>
      </section>

      {/* User Guides */}
      <section className="w-full max-w-5xl px-6 mb-12">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BookOpen className="size-5 text-fd-primary" />
          Panduan Bermain Zigma
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {userGuides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.title}
                href={guide.href}
                className="group flex items-start gap-4 rounded-xl border border-fd-border bg-fd-card p-5 hover:bg-fd-accent transition-colors"
              >
                <div className="rounded-lg bg-fd-primary/10 p-2 text-fd-primary">
                  <Icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold group-hover:text-fd-primary transition-colors">
                    {guide.title}
                  </div>
                  <div className="text-sm text-fd-muted-foreground mt-0.5">
                    {guide.description}
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
            href="/docs/developer/tutorial"
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


    </main>

    {/* Footer */}
    <footer className="w-full border-t border-fd-border bg-fd-background/80 backdrop-blur">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-sm text-fd-muted-foreground">
        <span>© 2026 Zigma. Hak Cipta Dilindungi Undang-Undang.</span>
        <div className="flex items-center gap-1">
          <a
            href="https://gameforsmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fd-primary transition-colors"
          >
            Website Resmi
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
