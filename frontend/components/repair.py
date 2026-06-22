from pathlib import Path
p = Path('header-hero.tsx')
text = p.read_text(encoding='utf-8')
marker = '      {/* -- STATS BAR -- */}'
parts = text.split(marker)
print('marker count =', len(parts)-1)
if len(parts) != 3:
    raise SystemExit(f'Unexpected marker count: {len(parts)-1}')
new_section = '''          </div>

          {/* RIGHT: Hero image frame */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-xl min-h-[570px] overflow-hidden rounded-[2.5rem] border border-pink-100 bg-white shadow-[0_30px_80px_rgba(215,77,113,0.12)]">
              <svg viewBox="0 0 540 570" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                  <clipPath id="wavyFrameClip">
                    <path
                      d="
                        M 200,18
                        C 260,5 370,2 460,15
                        C 510,22 532,55 534,130
                        C 536,220 534,350 530,430
                        C 526,490 490,540 420,555
                        C 340,568 180,565 100,535
                        C 48,515 18,470 14,400
                        C 8,320 50,280 44,210
                        C 38,145 4,115 10,60
                        C 16,20 80,10 130,22
                        C 160,30 180,55 200,18
                        Z
                      "
                    />
                  </clipPath>
                </defs>

                {backgroundImages.map((img, idx) => (
                  <image
                    key={idx}
                    href={img}
                    x="0" y="0" width="540" height="570"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath="url(#wavyFrameClip)"
                    style={{
                      opacity: currentImageIndex === idx ? 1 : 0,
                      transition: 'opacity 1s ease-in-out',
                    }}
                  />
                ))}

                <path
                  d="
                    M 200,18
                    C 260,5 370,2 460,15
                    C 510,22 532,55 534,130
                    C 536,220 534,350 530,430
                    C 526,490 490,540 420,555
                  "
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="
                    M 420,555
                    C 340,568 180,565 100,535
                  "
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <path
                  d="
                    M 100,535
                    C 48,515 18,470 14,400
                    C 8,320 50,280 44,210
                    C 38,145 4,115 10,60
                    C 16,20 80,10 130,22
                    C 160,30 180,55 200,18
                  "
                  fill="none"
                  stroke="#D4A017"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="
                    M 205,22
                    C 263,9 368,6 456,19
                    C 504,26 526,58 528,132
                    C 530,222 528,348 524,426
                    C 520,484 486,532 418,547
                  "
                  fill="none"
                  stroke="#F5E070"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {backgroundImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    aria-label={`Image ${idx + 1}`}
                    className={`rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/60 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </div>

            {/* Floating birthday card � bottom-left of frame */}
            <div className="absolute bottom-14 left-4 w-44 bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden z-20">
              <div
                className="h-28 bg-cover bg-center"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=400&h=300&fit=crop&q=80)`,
                }}
              />
              <div className="absolute top-[58px] right-2 w-16 h-16 rounded-full bg-[#C9386B] flex flex-col items-center justify-center text-white shadow-md">
                <span className="text-[10px] font-semibold">?</span>
                <span className="text-base font-bold leading-tight">500+</span>
                <span className="text-[8px] font-medium text-center leading-tight px-1">EVENTS DECORATED</span>
              </div>
            </div>

            {/* Sparkle stars */}
            <div className="absolute top-6 right-2 text-[#C9932A] text-2xl select-none pointer-events-none z-20">?</div>
            <div className="absolute top-20 right-0 text-[#C9386B] text-base select-none pointer-events-none z-20">?</div>
          </div>
        </div>
      </main>
'''
new_text = parts[0] + new_section + marker + parts[2]
p.write_text(new_text, encoding='utf-8')
print('Replaced broken section with right hero content.')
