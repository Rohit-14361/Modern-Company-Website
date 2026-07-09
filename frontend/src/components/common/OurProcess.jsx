import React from "react";

function OurProcess() {
  const steps = [
    {
      no: "01",
      title: "Discover",
      desc: "Understand your goals, users, and workflows—then map the fastest path to value.",
    },
    {
      no: "02",
      title: "Design",
      desc: "Prototype the experience and define the architecture for reliable automation.",
    },
    {
      no: "03",
      title: "Develop",
      desc: "Build integrations and automations with clean engineering and measurable outcomes.",
    },
    {
      no: "04",
      title: "Deploy",
      desc: "Launch, monitor, and iterate—so your solution keeps improving over time.",
    },
  ];

  return (
    <section className="w-full bg-gray-400 px-32 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-y-4">
          <div className="inline-flex items-center gap-x-3">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            <p className="text-sm font-mono tracking-wide text-gray-300">
              Our Process
            </p>
          </div>
          <h2 className="text-4xl font-semibold text-gray-100">
            A clear workflow—from idea to impact.
          </h2>
          <p className="text-gray-400 max-w-3xl">
            Discover → Design → Develop → Deploy. We keep everything structured so
            your automation scales smoothly.
          </p>
        </div>

        <div className="relative mt-10">
          {/* connecting line */}
          <div className="absolute left-0 right-0 top-7 h-[2px] bg-gray-600 hidden sm:block" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, idx) => (
              <div
                key={s.no}
                className="group relative rounded-2xl border border-gray-600/70 bg-gradient-to-b from-gray-900/40 to-gray-800/60 p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-gray-400/60"
              >
                <div className="flex items-center gap-x-3">
                  <div className="h-10 w-10 rounded-xl bg-gray-700/70 flex items-center justify-center border border-gray-600">
                    <span className="text-sm font-mono text-gray-200">{s.no}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100">
                    {s.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-400">
                  {s.desc}
                </p>

                {idx !== steps.length - 1 && (
                  <span className="pointer-events-none absolute -right-2 top-7 h-4 w-4 rounded-full bg-gray-700 border border-gray-600" />
                )}

                <div className="mt-6 h-px w-full bg-gray-700/70" />
                <div className="mt-4 flex items-center text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="mr-2">→</span>
                  <span>Step {s.no}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


export default OurProcess;

