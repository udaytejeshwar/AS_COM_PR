const normalizeApplication = (application: string) => application.trim().toLowerCase();

export const getApplicationTagClass = (application: string) => {
  switch (normalizeApplication(application)) {
    case 'wood':
      return 'border border-amber-700/35 text-amber-950 [background-image:repeating-linear-gradient(45deg,rgba(180,120,68,0.18)_0,rgba(180,120,68,0.18)_6px,rgba(126,78,44,0.28)_6px,rgba(126,78,44,0.28)_12px),linear-gradient(180deg,#f3d7b3_0%,#d29a68_100%)]';
    case 'aluminum':
      return 'border border-slate-500/40 text-slate-900 [background-image:repeating-linear-gradient(135deg,rgba(255,255,255,0.45)_0,rgba(255,255,255,0.45)_5px,rgba(148,163,184,0.28)_5px,rgba(148,163,184,0.28)_10px),linear-gradient(180deg,#f1f5f9_0%,#bfc9d8_100%)]';
    case 'stone':
      return 'border border-stone-500/40 text-stone-900 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.3)_0,rgba(255,255,255,0)_25%),radial-gradient(circle_at_80%_70%,rgba(120,113,108,0.35)_0,rgba(120,113,108,0)_30%),linear-gradient(180deg,#e7e5e4_0%,#a8a29e_100%)]';
    case 'composites':
      return 'border border-cyan-700/40 text-cyan-950 [background-image:repeating-linear-gradient(120deg,rgba(14,116,144,0.2)_0,rgba(14,116,144,0.2)_4px,rgba(103,232,249,0.2)_4px,rgba(103,232,249,0.2)_8px),linear-gradient(180deg,#d9f4fb_0%,#7dd3fc_100%)]';
    case 'plastic':
      return 'border border-fuchsia-400/40 text-fuchsia-900 [background-image:linear-gradient(180deg,#fdf4ff_0%,#f5d0fe_100%)]';
    case 'glass':
      return 'border border-sky-400/45 text-sky-950 [background-image:linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(186,230,253,0.95)_100%)]';
    default:
      return 'border border-primary-200 text-primary-600 bg-primary-50';
  }
};
