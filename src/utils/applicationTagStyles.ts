const normalizeApplication = (application: string) => application.trim().toLowerCase();

export const getApplicationTagClass = (application: string) => {
  switch (normalizeApplication(application)) {
    case 'wood':
      return 'border border-[#5C3716] text-white bg-[#8B5A2B]';
    case 'aluminum':
      return 'border border-slate-500/45 text-slate-900 bg-slate-100';
    case 'stone':
      return 'border border-stone-600/45 text-stone-900 bg-stone-100';
    case 'composites':
      return 'border border-zinc-800 text-white bg-zinc-700';
    case 'plastic':
      return 'border border-violet-500/40 text-violet-900 bg-violet-100';
    case 'glass':
      return 'border border-sky-500/45 text-sky-900 bg-cyan-50';
    default:
      return 'border border-primary-200 text-primary-600 bg-primary-50';
  }
};
