const normalizeApplication = (application: string) => application.trim().toLowerCase();

export const getApplicationTagClass = (application: string) => {
  switch (normalizeApplication(application)) {
    case 'wood':
      return 'border border-amber-700/35 text-amber-950 bg-amber-200';
    case 'aluminum':
      return 'border border-slate-500/40 text-slate-900 bg-slate-200';
    case 'stone':
      return 'border border-stone-500/40 text-stone-900 bg-stone-200';
    case 'composites':
      return 'border border-cyan-700/40 text-cyan-950 bg-cyan-200';
    case 'plastic':
      return 'border border-fuchsia-400/40 text-fuchsia-900 bg-fuchsia-100';
    case 'glass':
      return 'border border-sky-400/45 text-sky-950 bg-sky-100';
    default:
      return 'border border-primary-200 text-primary-600 bg-primary-50';
  }
};
