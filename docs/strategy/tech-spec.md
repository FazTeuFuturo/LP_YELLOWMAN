# Tech Spec: Yellowman Landing Page
**Responsável:** Aria (@architect) | **Status:** Finalized

## 1. Stack Tecnológica
- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **CSS:** Tailwind CSS (Utilitários e Design System)
- **Animações:** Framer Motion (Base para componentes do 21st.dev)
- **UI Libraries (via 21st.dev):**
  - **Magic UI:** Para efeitos de fundo e grids.
  - **Aceternity UI:** Para componentes de layout "Wow" (Bento Grids, Hover Effects).
  - **Shadcn/UI:** Para componentes funcionais base (Botões, Modais, Accordions).

## 2. Arquitetura de Componentes (Atomic)
- **Atoms:** `Button`, `Badge`, `Typography`, `Icon`.
- **Molecules:** `PricingCard`, `FAQItem`, `ServiceCard`.
- **Organisms:** `HeroSection`, `PortfolioGrid`, `TestimonialCarousel`, `Navbar`, `Footer`.
- **Templates:** `MainLayout`.

## 3. Estratégia de Performance
- **Image Optimization:** Uso obrigatório do `next/image` para todos os assets.
- **Fontes:** Google Fonts (Outfit) via `next/font` (local first).
- **Animations:** Uso de `will-change` e otimização de renderização do Framer Motion para evitar jank em dispositivos móveis.

## 4. SEO & Metadata
- Implementação dinâmica via Metadata API do Next.js.
- Schema.org (JSON-LD) para `Service` e `LocalBusiness`.
- OpenGraph e Twitter Cards configurados.

## 5. Deployment & CI/CD
- **Hospedagem:** Vercel (ideal para Next.js).
- **Quality Gates:** `npm run build` e `npm run lint` antes de qualquer merge.

---
— Aria, arquitetando o futuro 🏗️
