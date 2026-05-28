# Walkthrough - Technical Blog Showcase & Transcript Reversion

We have successfully commented out the Academic Transcript page references and introduced a premium, high-quality **Technical Blog & Documentation Showcase** feature inside the developer portfolio.

## Changes Made

### 1. Academic Transcript Reversion
- **[App.tsx](file:///D:/MyWorks/portfolio-chamal/src/App.tsx)**: Commented out the import of `AcademicTranscript` and its route definition.
- **[Education.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Education.tsx)**: Commented out the dynamic transcript navigation Link and button in the academic section, returning it to an inactive state.

### 2. Seeding Technical Blog Data
- **[blog.ts](file:///D:/MyWorks/portfolio-chamal/src/data/blog.ts)**: Created a new data module for storing articles. Seeded it with 3 professional, high-fidelity engineering articles tailored to your professional background:
  1. *"Handling Decimal Precision & Rounding in FinTech Systems"* (covering `decimal` types in C#, `DECIMAL(18,4)` configuration in SQL Server, and Banker's Rounding via `MidpointRounding.ToEven`).
  2. *"Micro-Frontends in Angular: Modular Architecture via Native Federation"* (demonstrating host/shell and remote configurations using import maps in Angular).
  3. *"Optimizing MS SQL Server Queries for High-Volume Ledger Audits"* (detailing covering indexes, Read Committed Snapshot Isolation (RCSI), and OFFSET-FETCH server-side pagination).

### 3. Blog Pages & Routing
- **[Blog.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/Blog.tsx)**: Created the blog listing view `/blog`. Features include a dynamic text search bar and tag filtering, category pill selectors ("All", "Backend", "Frontend", "Database"), and responsive article preview cards styled with subtle slide-up hover micro-animations.
- **[BlogDetail.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/BlogDetail.tsx)**: Developed the detailed article reader `/blog/:slug`. Features include a sticky scroll reading progress bar, a direct "Copy Link" share tool, a bio panel for the author, back button navigation, and a styled markdown-equivalent prose system (Lora serif titles, Inter content body, dark code blocks).
- **[App.tsx](file:///D:/MyWorks/portfolio-chamal/src/App.tsx)**: Registered path routes for `/blog` and `/blog/:slug`.

### 4. Homepage Highlights & Footer Links
- **[LatestBlogs.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/LatestBlogs.tsx)**: Created a new homepage showcase component displaying cards for the latest 3 technical articles.
- **[Index.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/Index.tsx)**: Integrated the `<LatestBlogs />` component onto the homepage directly before the `<Contact />` section.
- **[Footer.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Footer.tsx)**: Added a "Tech Blog & Docs" navigation link inside the quick link columns.

### 5. Medium Publication Link Support
- **[blog.ts](file:///D:/MyWorks/portfolio-chamal/src/data/blog.ts)**: Added an optional `mediumLink` property to the `BlogPost` data model and mapped your official Medium URL to the Native Federation article entry.
- **Dynamic external routing**: Updated [LatestBlogs.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/LatestBlogs.tsx) and [Blog.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/Blog.tsx) to render title links and "Read on Medium" CTA buttons linking directly to Medium for posts with configured `mediumLink` instances.
- **[BlogDetail.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/BlogDetail.tsx)**: Added a premium header banner on the article reading details page, prompting the visitor to optionally read the original post on Medium to claps/comments.

### 6. Profile Picture Enhancement
- **AI Quality Upscaling & Sharpening**: Enhanced the resolution, sharpness, and lighting balance of the original profile picture using AI, outputting it as [profile-image.png](file:///D:/MyWorks/portfolio-chamal/src/assets/profile-image.png).
- **Component Import Updates**: Updated the asset imports in [Hero.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Hero.tsx) and [BlogDetail.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/BlogDetail.tsx) to point to the new high-resolution `.png` file.

### 7. Skills & Tools Updates
- **Rename Swagger**: Updated "Swagger" to "Swagger Docs" in both [portfolio.ts](file:///D:/MyWorks/portfolio-chamal/src/data/portfolio.ts) and [Skills.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Skills.tsx), adding a customized professional API documentation definition.
- **Add Scalar Docs**: Added "Scalar Docs" as a new tool skill in [portfolio.ts](file:///D:/MyWorks/portfolio-chamal/src/data/portfolio.ts) and mapped its description/competence level inside [Skills.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Skills.tsx).

---

## Validation Results

### Code Compilation
We ran a full production build to ensure that all typescript typings, routes, and imports resolve cleanly:
```bash
npm run build
```
**Results:** Built successfully in 4.95 seconds with zero compilation warnings or typescript issues.

### Feature UX Verification
- Navigation links in the footer, back-buttons on internal pages, and the CTA button on the homepage function correctly.
- Searching for text dynamically narrows down the blog post cards.
- Category pills filter the list seamlessly.
- Responsive breakpoints handle long code blocks gracefully on mobile widths.
