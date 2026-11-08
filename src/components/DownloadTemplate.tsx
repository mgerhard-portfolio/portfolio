export const DownloadTemplate = () => {
  return (
    <>
      {/* --- HIDDEN PRINT VIEW CONTAINER --- */}
      <div
        id="recipe-pdf-template"
        className="hidden bg-white text-left font-sans text-stone-900 print:m-0 print:block
          print:w-full print:p-0"
      >
        <div className="mx-auto max-w-[800px] p-12">
          <header className="mb-8 flex flex-col items-center border-b border-stone-200 pb-6 text-center">
            <div className="mb-4 flex w-full max-w-xl items-center gap-3 text-[9px] font-black tracking-[0.28em] text-amber-800/75 uppercase">
              <span className="h-px flex-1 bg-amber-700/25" />
              <span className="shrink-0">Golden Toppers · Recipe Book</span>
              <span className="h-px flex-1 bg-amber-700/25" />
            </div>
            <div>
              <h1 className="font-serif text-4xl leading-tight font-black tracking-wide text-stone-900 italic">
                Topper Plan
              </h1>
            </div>
            <div className="mt-3 rounded-md border border-amber-200/60 bg-amber-50 px-2.5 py-1 text-[9px] font-black tracking-[0.2em] text-amber-800 uppercase">
              Dietary Strategy: 10% Fresh Food Supplemental Bowl Booster
            </div>
            <div className="mt-3 font-mono text-[10px] text-stone-400">
              Generated: {new Date().toLocaleDateString()}
            </div>
          </header>

          <section className="mb-8 flex gap-8 rounded-2xl border border-stone-100 bg-stone-50 p-6">
            <div
              className="flex w-full flex-row flex-wrap items-start justify-between gap-y-4
                font-sans select-none"
            >
              <div className="flex min-w-[80px] flex-col items-start leading-tight">
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-stone-500
                    uppercase"
                >
                  Dog Weight
                </span>
              </div>

              <div className="flex min-w-[100px] flex-col items-start leading-tight">
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-stone-500
                    uppercase"
                >
                  Exercise Tier
                </span>
              </div>

              <div
                className="flex min-w-[130px] flex-col items-start border-l border-stone-200 pl-6
                  leading-tight md:pl-8"
              >
                <span
                  className="mb-1.5 text-[10px] font-black tracking-[0.2em] text-amber-600
                    uppercase"
                >
                  Serving Scale
                </span>
                <div
                  className="flex items-center gap-1.5 text-lg font-black whitespace-nowrap
                    text-amber-950"
                ></div>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2
              className="border-b border-stone-200 pb-2 text-xs font-black tracking-widest
                text-stone-800 uppercase"
            >
              Selected Kitchen Ingredients
            </h2>

            <ul className="m-0 list-none space-y-4 p-0" role="list">
              {["hello", "world"].map((item) => {
                return (
                  <li
                    key={item}
                    className="flex items-start justify-between border-b border-stone-100 py-3 print:break-inside-avoid"
                    role="listitem"
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </section>

          <footer
            className="mt-16 border-t border-stone-100 pt-8 text-[9px] leading-relaxed
              tracking-widest text-stone-400 uppercase"
          >
            * This document provides general nutritional estimates based on
            average values. Individual dog requirements vary. Always confirm
            long-term fresh dietary strategies with your primary care
            veterinarian.
          </footer>
        </div>
      </div>
    </>
  );
};
