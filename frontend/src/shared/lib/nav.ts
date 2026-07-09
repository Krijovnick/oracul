export function isNavLinkActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  if (href === '/tarot') {
    return pathname === '/tarot' || pathname.startsWith('/spreads/');
  }
  if (href === '/history') {
    return pathname === '/history';
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}
