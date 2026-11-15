const SectionHeading = ({ index, children }) => (
  <div className="mb-10 flex items-center gap-3">
    <span aria-hidden="true" className="shrink-0 font-mono text-sm text-blue-400">
      {index}
    </span>
    <h2 className="text-xl font-semibold text-slate-100 md:text-2xl">
      {children}
    </h2>
    <span
      aria-hidden="true"
      className="hidden h-px flex-1 bg-slate-700 sm:block"
    />
  </div>
);

export default SectionHeading;