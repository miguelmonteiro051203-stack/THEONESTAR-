import React from 'react';

export const SuiteSelectionScreen: React.FC = () => {
  return (
    <div className="relative flex h-full min-h-screen w-full flex-col overflow-x-hidden max-w-md mx-auto shadow-2xl bg-background-light dark:bg-background-dark text-neutral-900 dark:text-white transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-3 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-black">
            <span className="material-symbols-outlined text-[24px]">
              apartment
            </span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-bold leading-none tracking-wide text-neutral-900 dark:text-white">
              THEONESTAR
            </h1>
            <span className="text-[10px] font-medium tracking-widest text-neutral-500 uppercase">
              Residence
            </span>
          </div>
        </div>
        <button className="flex items-center justify-center size-10 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700">
          <span className="material-symbols-outlined">person</span>
        </button>
      </header>

      {/* Greeting & Title */}
      <div className="px-5 pt-6 pb-2">
        <p className="text-neutral-500 dark:text-neutral-400 text-sm font-medium">
          Bem-vindo de volta, Carlos
        </p>
        <h2 className="text-2xl font-bold leading-tight mt-1">
          Escolha sua Suíte
        </h2>
      </div>

      {/* Filters (Chips) */}
      <div className="sticky top-[65px] z-10 bg-background-light dark:bg-background-dark py-2">
        <div className="flex gap-2 px-5 overflow-x-auto no-scrollbar pb-2">
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-primary px-5 transition-transform active:scale-95">
            <p className="text-black text-sm font-bold">Todos</p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-5 transition-transform active:scale-95">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">
              Normal
            </p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-5 transition-transform active:scale-95">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">
              King
            </p>
          </button>
          <button className="flex h-9 shrink-0 items-center justify-center rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 px-5 transition-transform active:scale-95">
            <p className="text-neutral-600 dark:text-neutral-300 text-sm font-medium">
              Piscina
            </p>
          </button>
        </div>
        {/* Gradient fade for scroll hint */}
        <div className="absolute right-0 top-2 bottom-2 w-8 bg-gradient-to-l from-background-light dark:from-background-dark to-transparent pointer-events-none"></div>
      </div>

      {/* Listings List */}
      <div className="flex flex-col gap-5 px-5 pb-24 pt-2">
        {/* Card 1: Normal */}
        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800/50">
          <div className="relative h-48 w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              data-alt="Modern minimalist hotel room with white bedding and soft lighting"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzpLYcBmX_Q_lNLwPNIqLxvWPBvbd5N6lHKOMzZo4dyLdFSu6tGxlbogMIRIMdPKUbGxPcOm1s9JR_6ebFSB4k4zVNv9X_mVUHFtG9xnXbtTgrBZPZWULjv32fnKhzq5apiYbthpVCG36NpN0h-xepV9vHOgWRPHS_O-8Vdwu664yzk1RrA7n0gwi97HRWo6FfQJyxRNI63NpaCag8ycpdjCZqYt8NE-WTDAsdYVvp-QWc9w5HXiMyNRV1jYzSZ0AD0MdfhEOF4Lo")',
              }}
            ></div>
            <div className="absolute top-3 right-3 flex gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                <span className="size-2 rounded-full bg-green-500"></span> 5
                Livres
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Suíte Normal
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Conforto essencial para estadias curtas.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  A partir de
                </p>
                <p className="text-lg font-bold text-primary dark:text-primary">
                  R$ 150
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-1">
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    wifi
                  </span>{' '}
                  Wi-Fi
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    ac_unit
                  </span>{' '}
                  Ar
                </div>
              </div>
              <button className="h-9 px-4 bg-primary rounded-full text-black text-sm font-bold flex items-center gap-1 transition-colors hover:bg-[#eaea05]">
                Ver Detalhes
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: King */}
        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800/50">
          <div className="relative h-48 w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              data-alt="Luxurious king size bedroom with warm ambient lighting and wood accents"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC0gqvvvfF9TcPvv7seWsuhdSGG9A2jFC4f41Wsd5IrthimfWxMX8BVXKnE6T7CDzO9-RNCx_pi7SDhSRA88moHRklUo8SyFCNlnrwqrSB6gF3cBivYojx4y4K8bb5I71TO62iysLONiEShD5lWylwuqOmp54Agcp6PXZi8R-7s6yKc2h-nxXiu9ONLSk9andbf3uXsYE5FOPoUmJKEyis89A_WL4NU2Sq4JxsBeIoEeBSRxSuQjX1qnHGYvBHkd56fDiFWthyesCk")',
              }}
            ></div>
            <div className="absolute top-3 right-3 flex gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                <span className="size-2 rounded-full bg-yellow-400"></span> 2
                Livres
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Suíte King
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Espaço extra e cama King Size.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  A partir de
                </p>
                <p className="text-lg font-bold text-primary dark:text-primary">
                  R$ 250
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-1">
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    king_bed
                  </span>{' '}
                  King
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    tv
                  </span>{' '}
                  Smart TV
                </div>
              </div>
              <button className="h-9 px-4 bg-primary rounded-full text-black text-sm font-bold flex items-center gap-1 transition-colors hover:bg-[#eaea05]">
                Ver Detalhes
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3: Piscina (Sold Out) */}
        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-all duration-300 opacity-90 border border-neutral-100 dark:border-neutral-800/50">
          <div className="relative h-48 w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center grayscale-[50%]"
              data-alt="Private pool suite with water view and deck chairs"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCa1KlXTw4dW1BVETK4y2GVE-RlOg_V4Da4Ve_mD-mhCiU4pF-620Jn-MrWpKP-p9vrEnkb40QoyXfUuQtMSzs5DJgZ-S0WV5Pd4Yw6qMgXYQKpEcnFl7gV3RMHIYI5U_s6kvZuQgTpygQseKnFlALiq97E-i-g6fn2TH-yC7UAS63IUzwvEg_HFIVIiXZeiC0gWxrolKCKufIB9HLNoZuvf_uKg5y-63WHJh3Va9p70NWx6RTybrbCVYBfhDJxiJHqsysQwoPCDPQ")',
              }}
            ></div>
            {/* Overlay for Sold Out */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="rounded-full border border-white/30 bg-black/40 px-4 py-1.5 text-sm font-bold text-white backdrop-blur-sm">
                Esgotado
              </span>
            </div>
            <div className="absolute top-3 right-3 flex gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-red-500/90 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                <span className="size-2 rounded-full bg-white"></span> 0 Livres
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-neutral-500 dark:text-neutral-400">
                  Suíte Com Piscina
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Acesso direto à área de lazer.
                </p>
              </div>
              <div className="text-right opacity-60">
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  A partir de
                </p>
                <p className="text-lg font-bold text-neutral-500 dark:text-neutral-400">
                  R$ 400
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-1">
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    pool
                  </span>{' '}
                  Piscina
                </div>
              </div>
              <button
                className="h-9 px-4 bg-neutral-200 dark:bg-neutral-800 rounded-full text-neutral-400 text-sm font-bold flex items-center gap-1 cursor-not-allowed"
                disabled
              >
                Indisponível
              </button>
            </div>
          </div>
        </div>

        {/* Card 4: Privativa */}
        <div className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-card-light dark:bg-card-dark shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-100 dark:border-neutral-800/50">
          <div className="relative h-48 w-full overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              data-alt="Exclusive private suite interior with modern decor and garden view"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtY64UUbJewI54rcWFEqAD-MBBf1GNMSw02PNLMdl06QTmkjftstlOoBMQvWfHCNc-aChjNTpyTla-0NMc4aukHvhoB-h6neWCmwqO8nLGRS1WWLymY7LFnqkqAJoYANIJyGuGMsrDYcnPar4GE5VVr12td40pjWQjq1JmOpnKPLqzy1o7DbWE2LULx_GAkMFgxngDqwxF9qZqKt3h7WT-7ZcymkurCMdI26yMQHD65yAhtyoZ5ta-w1tL2QiQNghqbY2XIOY1oN0")',
              }}
            ></div>
            <div className="absolute top-3 right-3 flex gap-1">
              <span className="inline-flex items-center gap-1 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-xs font-medium text-white">
                <span className="size-2 rounded-full bg-green-500"></span> 1
                Livre
              </span>
            </div>
            <div className="absolute top-3 left-3">
              <span className="rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
                VIP
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3 p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">
                  Privativa c/ Piscina
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Experiência exclusiva e isolada.
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-neutral-400 font-medium uppercase tracking-wider">
                  A partir de
                </p>
                <p className="text-lg font-bold text-primary dark:text-primary">
                  R$ 600
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 pt-3 mt-1">
              <div className="flex items-center gap-4 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    local_bar
                  </span>{' '}
                  Bar
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    hot_tub
                  </span>{' '}
                  Jacuzzi
                </div>
              </div>
              <button className="h-9 px-4 bg-primary rounded-full text-black text-sm font-bold flex items-center gap-1 transition-colors hover:bg-[#eaea05]">
                Ver Detalhes
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAB: WhatsApp Contact */}
      <div className="fixed bottom-6 right-6 z-30">
        <button className="group flex items-center gap-2 rounded-full bg-[#25D366] pl-4 pr-5 py-3 shadow-lg shadow-green-900/20 transition-all hover:scale-105 active:scale-95 text-white">
          <span className="material-symbols-outlined text-[24px]">chat</span>
          <span className="font-bold text-sm">WhatsApp</span>
        </button>
      </div>

      {/* Optional: Bottom Gradient for smooth scroll finish */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent pointer-events-none z-10 max-w-md mx-auto"></div>
    </div>
  );
};