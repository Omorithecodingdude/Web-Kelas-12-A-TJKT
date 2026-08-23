// ============================================================
// components.js
// Navbar & footer bersama untuk semua halaman + interaksi kecil.
// Cukup taruh <div id="navbar"></div> dan <div id="footer"></div>
// di HTML, lalu load file ini sebagai <script defer>.
// ============================================================

const NAV_LINKS = [
  { href: "index.html", label: "Beranda" },
  { href: "profil.html", label: "Profil" },
  { href: "struktur.html", label: "Struktur" },
  { href: "siswa.html", label: "Siswa" },
  { href: "prestasi.html", label: "Prestasi" },
  { href: "berita.html", label: "Berita" },
  { href: "galeri.html", label: "Galeri" },
  { href: "kontak.html", label: "Kontak" },
];

function currentPage() {
  const path = window.location.pathname.split("/").pop();
  return path === "" ? "index.html" : path;
}

function renderNavbar() {
  const mount = document.getElementById("navbar");
  if (!mount) return;
  const active = currentPage();

  const links = NAV_LINKS.map((link) => {
    const isActive = link.href === active;
    return `
      <a href="${link.href}"
         class="nav-link relative px-3 py-2 text-sm tracking-wide transition-colors ${
           isActive ? "text-[#22D3EE]" : "text-[#9BA3AB] hover:text-[#E7ECF2]"
         }">
        ${link.label}
        ${isActive ? '<span class="absolute left-3 right-3 -bottom-[2px] h-[2px] bg-[#22D3EE] rounded-full"></span>' : ""}
      </a>`;
  }).join("");

  const mobileLinks = NAV_LINKS.map((link) => {
    const isActive = link.href === active;
    return `
      <a href="${link.href}"
         class="block px-4 py-3 text-sm border-b border-[#2B2F34] ${
           isActive ? "text-[#22D3EE]" : "text-[#C4CEDD]"
         }">
        ${link.label}
      </a>`;
  }).join("");

  mount.innerHTML = `
    <div class="w-full bg-[#16181B]/95 backdrop-blur border-b border-[#2B2F34] sticky top-0 z-50">
      <!-- status strip -->
      <div class="hidden sm:flex items-center justify-center gap-2 py-1 text-[10px] font-mono tracking-[0.2em] text-[#5B6B87] border-b border-[#141C2E]">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#22D3EE] animate-pulse"></span>
        NODE::XII-TJKT-A &nbsp;/&nbsp; SMK &nbsp;/&nbsp; STATUS: ONLINE
      </div>

      <nav class="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="index.html" class="flex items-center gap-2 font-display font-semibold text-[#E7ECF2] tracking-tight">
          <span class="w-8 h-8 rounded-md bg-[#22D3EE] text-[#16181B] grid place-items-center font-mono text-xs font-bold">12A</span>
          <span class="text-base">XII TJKT A</span>
        </a>

        <div class="hidden md:flex items-center gap-1">${links}</div>

        <button id="menu-btn" aria-label="Buka menu" aria-expanded="false"
          class="md:hidden w-9 h-9 grid place-items-center rounded-md border border-[#383D43] text-[#C4CEDD]">
          <svg id="menu-icon-open" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg id="menu-icon-close" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <div id="mobile-menu" class="md:hidden hidden bg-[#16181B] border-t border-[#2B2F34]">
        ${mobileLinks}
      </div>
    </div>
  `;

  const btn = document.getElementById("menu-btn");
  const menu = document.getElementById("mobile-menu");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");
  btn.addEventListener("click", () => {
    const isHidden = menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(isHidden));
  });
}

function renderFooter() {
  const mount = document.getElementById("footer");
  if (!mount) return;
  const year = new Date().getFullYear();
  mount.innerHTML = `
    <footer class="border-t border-[#2B2F34] bg-[#16181B]">
      <div class="max-w-6xl mx-auto px-5 sm:px-8 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-7 h-7 rounded-md bg-[#22D3EE] text-[#16181B] grid place-items-center font-mono text-[11px] font-bold">12A</span>
            <span class="font-display font-semibold text-[#E7ECF2]">XII TJKT A</span>
          </div>
          <p class="text-sm text-[#7C8AA3] leading-relaxed">
            Teknik Jaringan Komputer dan Telekomunikasi.<br/>
            Menghubungkan ide, merangkai jaringan.
          </p>
        </div>

        <div>
          <p class="text-xs font-mono tracking-[0.2em] text-[#5B6B87] mb-3">NAVIGASI</p>
          <ul class="space-y-2 text-sm text-[#9BA3AB]">
            <li><a href="profil.html" class="hover:text-[#22D3EE] transition-colors">Profil Kelas</a></li>
            <li><a href="struktur.html" class="hover:text-[#22D3EE] transition-colors">Struktur Organisasi</a></li>
            <li><a href="siswa.html" class="hover:text-[#22D3EE] transition-colors">Daftar Siswa</a></li>
            <li><a href="prestasi.html" class="hover:text-[#22D3EE] transition-colors">Prestasi</a></li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-mono tracking-[0.2em] text-[#5B6B87] mb-3">SOSIAL MEDIA</p>
          <ul class="space-y-2 text-sm text-[#9BA3AB]">
            <li><a href="https://instagram.com/xiitjkt.a" target="_blank" rel="noopener noreferrer" class="hover:text-[#22D3EE] transition-colors">Instagram &mdash; @xiitjkt.a</a></li>
            <li><a href="https://tiktok.com/@xiitjkt.a" target="_blank" rel="noopener noreferrer" class="hover:text-[#22D3EE] transition-colors">TikTok &mdash; @xiitjkt.a</a></li>
            <li><a href="kontak.html" class="text-muted hover:underline">Lihat semua kontak &rarr;</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-[#141C2E] py-4 text-center text-[11px] font-mono text-[#4B5872]">
        &copy; ${year} XII TJKT A &mdash; Dibuat dengan HTML, Tailwind CSS &amp; JavaScript
      </div>
    </footer>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();
});
