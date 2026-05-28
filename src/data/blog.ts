export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'Architecture';
  tags: string[];
  content: string;
  mediumLink?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "decimal-precision-fintech",
    title: "Handling Decimal Precision & Rounding in FinTech Systems",
    excerpt: "An engineering deep-dive on representing monetary balances, configuring MS SQL decimal storage, and standardizing rounding policies in ASP.NET Core.",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "Backend",
    tags: [".NET Core", "SQL Server", "FinTech", "Best Practices"],
    content: `
      <p class="mb-4">When building enterprise financial systems—especially ledger management and fixed deposit systems—precision is everything. A fraction of a cent lost in calculation rounding can compound over millions of transactions, leading to auditing discrepancies and balance mismatches.</p>
      
      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">1. Floating Point vs. Fixed Point Decimals</h3>
      <p class="mb-4">The first cardinal rule of financial software engineering: <strong>never use float or double for monetary values</strong>. Floating-point types (represented using binary fractions under IEEE 754) cannot precisely represent decimal numbers like 0.1 or 0.2, leading to accumulation errors: <code>0.1 + 0.2 === 0.30000000000000004</code>.</p>
      
      <p class="mb-4">In C#, we always use the <code>decimal</code> type, which is a 128-bit floating-point representation with a scaling factor, allowing exact base-10 representations. In MS SQL Server, we mirror this with <code>DECIMAL(18, 4)</code> or <code>DECIMAL(19, 4)</code>, storing up to four decimal places of precision to capture micro-interest calculations before final rounding.</p>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">2. Standardizing Rounding: Banker's Rounding</h3>
      <p class="mb-4">Standard arithmetic rounding (always rounding 0.5 up) creates a statistical upward bias in large datasets. If you always round up on halves, the total sum of rounded numbers will be higher than the actual sum.</p>
      
      <p class="mb-4">To solve this, financial systems use <strong>Banker's Rounding</strong> (or Round-to-Even). If the digit to be rounded is exactly halfway between two numbers, it rounds to the nearest <em>even</em> digit. For example:</p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li><code>2.25</code> rounded to 1 decimal place becomes <code>2.2</code> (since 2 is even).</li>
        <li><code>2.35</code> rounded to 1 decimal place becomes <code>2.4</code> (since 4 is even).</li>
      </ul>
      
      <p class="mb-4">In C#, <code>Math.Round()</code> performs Banker's Rounding by default. However, when writing APIs, always specify the behavior explicitly to avoid system differences:</p>
      
      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
// C# Explicit Banker's Rounding for Interest Computation
decimal principal = 150000.00m;
decimal annualRate = 0.0825m; // 8.25%
decimal monthlyAccrual = (principal * annualRate) / 12;

// Explicitly use ToEven (Banker's Rounding)
decimal roundedInterest = Math.Round(monthlyAccrual, 2, MidpointRounding.ToEven);
      </pre>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">3. Database Schema Mapping</h3>
      <p class="mb-4">When saving to MS SQL Server via Entity Framework Core, explicitly configure the decimal property precision. Leaving it to defaults can truncate values to two decimal places or trigger warning alarms in system logs:</p>
      
      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
// Entity Framework Core Fluent API Configuration
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity&lt;FixedDeposit&gt;()
        .Property(fd =&gt; fd.InterestAccrued)
        .HasColumnType("decimal(18, 4)");
        
    modelBuilder.Entity&lt;FixedDeposit&gt;()
        .Property(fd =&gt; fd.PrincipalAmount)
        .HasColumnType("decimal(18, 2)");
}
      </pre>
      
      <p class="mb-4">By enforcing strict type alignments and standardized rounding parameters, you guarantee that ledger balance reconciliations compile perfectly down to the lowest currency unit.</p>
    `
  },
  {
    slug: "angular-native-federation",
    title: "Micro-Frontends in Angular: Modular Architecture via Native Federation",
    excerpt: "A practical guide to implementing independent frontend modules and micro-apps using Angular 19 and Native Federation.",
    date: "April 28, 2026",
    readTime: "8 min read",
    category: "Frontend",
    tags: ["Angular", "Micro-Frontends", "Native Federation", "TypeScript"],
    mediumLink: "https://medium.com/@chamaldeshitha2001/building-microfrontends-using-native-federation-and-custom-elements-in-angular-f7ceaca95632",
    content: `
      <p class="mb-4">As enterprise applications scale, managing a monolithic frontend codebase becomes a bottleneck. Compile times balloon, and cross-team dependencies complicate deployment pipelines. In my experience working on finance portals, modularizing features using micro-frontends is key to maintaining deployment velocity.</p>
      
      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">1. Why Native Federation?</h3>
      <p class="mb-4">Historically, Angular micro-frontends relied on Webpack Module Federation. However, with the migration of Angular to the Esbuild and Vite-based builder (application builder), Webpack-specific setups are deprecated. <strong>Native Federation</strong> solves this by providing a builder-agnostic micro-frontend system that works natively in the browser using Import Maps.</p>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">2. Architectural Layout</h3>
      <p class="mb-4">In a Native Federation layout, we define two main application roles:</p>
      <ul class="list-disc pl-6 mb-4 space-y-1">
        <li><strong>Shell (Host)</strong>: The primary orchestrator that boots up first, renders the base layout (headers, footers, sidebars), and loads remote modules dynamically.</li>
        <li><strong>Micro-Apps (Remotes)</strong>: Independent modules (e.g., a transaction history table or interest calculator page) that expose specific routes or components.</li>
      </ul>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">3. Step-by-Step Implementation</h3>
      <p class="mb-4">Let's walk through configuring a Remote module to expose a fixed deposit widget. First, define the federated components in the remote configuration:</p>

      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
// federation.config.js (Remote App)
const { withFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withFederation({
  name: 'depositRemote',
  exposes: {
    './DepositCalculator': './src/app/calculator/calculator.component.ts',
  },
  shared: shareAll({ 
    singleton: true, 
    strictVersion: true, 
    requiredVersion: 'auto' 
  }),
});
      </pre>

      <p class="mb-4">Next, configure the Shell app to map the remote's entry point inside its dynamic routing module:</p>

      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
// app.routes.ts (Shell App)
import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'calculators',
    loadComponent: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.json',
      exposedModule: './DepositCalculator'
    }).then(m => m.CalculatorComponent)
  }
];
      </pre>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">4. Key Advantages</h3>
      <p class="mb-4">By establishing this dynamic import-map standard, different engineering teams can build, test, and release their frontend modules completely independently. The Shell fetches the latest compiled javascript chunks in real-time, ensuring seamless integration without requiring a full system compile.</p>
    `
  },
  {
    slug: "sql-ledger-optimization",
    title: "Optimizing MS SQL Server Queries for High-Volume Ledger Audits",
    excerpt: "How to avoid table locks, design covering indexes, and write highly performant queries to aggregate transaction history records.",
    date: "March 12, 2026",
    readTime: "5 min read",
    category: "Database",
    tags: ["SQL Server", "Database Tuning", "Performance", "FinTech"],
    content: `
      <p class="mb-4">In financial portals, users frequently view transaction ledgers, audit trails, and payment histories. These tables accumulate millions of rows quickly. Querying them with basic <code>SELECT</code> statements can result in slow response times, database CPU spikes, and page lock deadlocks. Optimizing these queries is crucial to maintain database health.</p>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">1. The Power of Covering Indexes</h3>
      <p class="mb-4">A standard index points to table rows where the data resides. If a query requests fields that are not in the index, the query engine must perform a <strong>Key Lookup</strong> (accessing the data page itself to read the extra columns). This adds extra I/O operations.</p>
      
      <p class="mb-4">A <strong>Covering Index</strong> includes all columns requested by the query. By appending columns to the index definition using the <code>INCLUDE</code> clause, we satisfy the query entirely from the index page, eliminating Key Lookups:</p>

      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
-- Creating a Covering Index for Account Ledgers
CREATE NONCLUSTERED INDEX IX_Ledger_AccountId_Date
ON [dbo].[TransactionLedger] ([AccountId], [TransactionDate] DESC)
INCLUDE ([Amount], [TransactionType], [BalanceAfter]);
      </pre>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">2. Eliminating Locks: Read Committed Snapshot Isolation (RCSI)</h3>
      <p class="mb-4">By default, SQL Server locks rows during write operations. When a user runs a heavy audit report, that read query can block incoming transaction writes, leading to timeouts. While developers often use the <code>NOLOCK</code> hint to bypass this, it can lead to "dirty reads" (reading uncommitted, invalid transactions).</p>
      
      <p class="mb-4">A much cleaner, enterprise-grade solution is enabling <strong>Read Committed Snapshot Isolation (RCSI)</strong> at the database level. RCSI uses temporary row versioning in <code>tempdb</code>. Read operations read the last committed version of the data without acquiring locks, ensuring read and write queries never block each other:</p>

      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
-- Enabling RCSI on SQL Server database
ALTER DATABASE [FinancialEnterprise] 
SET READ_COMMITTED_SNAPSHOT ON 
WITH ROLLBACK IMMEDIATE;
      </pre>

      <h3 class="text-2xl font-serif text-sb-house mt-6 mb-3 font-bold">3. Efficient Pagination via OFFSET-FETCH</h3>
      <p class="mb-4">When displaying transaction histories, avoid loading all records at once. Instead of subqueries, use the native SQL Server <code>OFFSET</code> and <code>FETCH</code> clauses for fast, server-side pagination:</p>

      <pre class="bg-sb-house text-white p-4 rounded-xl overflow-x-auto text-xs font-mono mb-6 leading-relaxed">
-- Optimized Paged Query
SELECT TransactionId, TransactionDate, Amount, TransactionType
FROM [dbo].[TransactionLedger]
WHERE AccountId = @AccountId
ORDER BY TransactionDate DESC
OFFSET @PageSize * (@PageNumber - 1) ROWS
FETCH NEXT @PageSize ROWS ONLY;
      </pre>

      <p class="mb-4">By coupling covering indexes with RCSI and strict server-side paging, audit logs can query millions of rows in milliseconds, keeping the enterprise portal fast and responsive.</p>
    `
  }
];
