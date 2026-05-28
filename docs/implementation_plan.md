# Implementation Plan: Technical Blog Showcase & Transcript Reversion

This plan details the addition of a Technical Blog/Documentation showcase and the reversion (commenting out) of the Academic Transcript page. The new Blog feature will display your technical writing and documentation in a premium green-and-cream aesthetic, highlighting your expertise in ASP.NET Core, Angular, MS SQL Server, and FinTech domain engineering.

## User Review Required

> [!NOTE]
> **Key Decisions & Layout:**
> 1. **Academic Transcript Reversion**: Comment out the transcript routing and references, returning the Academic Transcript to an inactive state.
> 2. **Technical Blog Topics**: We will write 3 realistic, high-quality technical articles that showcase your domain expertise:
>    - *"Handling Decimal Precision & Rounding in FinTech Calculations"* (.NET decimal type, SQL Server `DECIMAL(18,4)`, and banker's rounding algorithms).
>    - *"Micro-Frontends in Angular: Modular Architecture via Native Federation"* (referencing your experience at Scienter with Native Federation).
>    - *"Optimizing MS SQL Server Queries for High-Volume Ledger Audits"* (indexing, transaction isolation levels, and non-blocking queries).
> 3. **Navigation & Discoverability**:
>    - Add a **"Latest Articles"** section on the homepage (`Index.tsx`) to show previews of recent articles, leading to the full blog.
>    - Add a quick link in the website footer.
>    - Provide a search bar and category filters ("All", "Frontend", "Backend", "Database") on the blog list page (`/blog`).

---

## Proposed Changes

We will systematically update the routing, education component, footer, index page, and introduce the new blog components.

### 1. Comment Out Academic Transcript References

#### [MODIFY] [App.tsx](file:///D:/MyWorks/portfolio-chamal/src/App.tsx)
- Comment out the import of `AcademicTranscript` (line 9).
- Comment out the route `<Route path="/academic-transcript" element={<AcademicTranscript />} />` (line 28).

#### [MODIFY] [Education.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Education.tsx)
- Comment out the `Link` to `/academic-transcript` and the "View Academic Transcript" button (lines 27–32).

---

### 2. Introduce Technical Blog & Documentation Feature

#### [NEW] [blog.ts](file:///D:/MyWorks/portfolio-chamal/src/data/blog.ts)
- Define the `BlogPost` interface:
  ```typescript
  export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: 'Backend' | 'Frontend' | 'Database' | 'Architecture';
    tags: string[];
    content: string; // Markdown/HTML detailed content with code blocks
  }
  ```
- Seed the data array with the 3 technical articles mentioned above, complete with styled HTML content containing syntax-colored code snippets (`pre`/`code`).

#### [NEW] [Blog.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/Blog.tsx)
- Implement a search bar and category pills to filter posts.
- Use a grid layout displaying posts on the warm cream background.
- Style cards with hover effects (translating up, dark green borders, arrow indications).

#### [NEW] [BlogDetail.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/BlogDetail.tsx)
- Fetch and display the full content of an article matching the dynamic routing slug.
- Format typography elegantly (Lora serif for headings, Inter sans for paragraphs, clean dark code-blocks, note callouts).
- Include an action-oriented "Back to Journal" button, reading progress bar, and "Copy Link" utility.

#### [NEW] [LatestBlogs.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/LatestBlogs.tsx)
- Create a homepage section to highlight the latest 2-3 articles.
- Include a CTA button: "Visit Engineering Journal" (linking to `/blog`).

#### [MODIFY] [Index.tsx](file:///D:/MyWorks/portfolio-chamal/src/pages/Index.tsx)
- Import and render `<LatestBlogs />` right before the `<Contact />` section to enhance homepage discoverability.

#### [MODIFY] [Footer.tsx](file:///D:/MyWorks/portfolio-chamal/src/components/Footer.tsx)
- Add a quick link to "/blog" under the Developer Menu section.

#### [MODIFY] [App.tsx](file:///D:/MyWorks/portfolio-chamal/src/App.tsx)
- Add routes for `/blog` (Blog list) and `/blog/:slug` (Blog article detail).

---

## Verification Plan

### Automated Tests
- Run `npm run build` to verify there are no compilation or typescript errors.
- Run `npm run dev` to launch the dev server and test dynamic transitions.

### Manual Verification
- Check search query filtering works correctly on the `/blog` page.
- Test category filters on the blog list.
- Ensure the back buttons, scroll anchors, and footer links operate smoothly.
- Test responsiveness of code blocks and tables on mobile screens.
