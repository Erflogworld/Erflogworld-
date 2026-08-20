import React, { useState, useEffect, useCallback } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Search, 
  RefreshCw, 
  X, 
  Code2, 
  Globe, 
  Tag, 
  Sparkles,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

export interface SEOCheckItem {
  id: string;
  category: 'meta' | 'schema' | 'social' | 'structure';
  title: string;
  value?: string;
  status: 'pass' | 'warn' | 'fail';
  message: string;
  recommendation?: string;
}

export interface SchemaValidationResult {
  valid: boolean;
  type?: string;
  rawJson?: string;
  error?: string;
}

export const SEOHealthChecker: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'meta' | 'schema' | 'social' | 'structure'>('all');
  const [isScanning, setIsScanning] = useState(false);
  const [checks, setChecks] = useState<SEOCheckItem[]>([]);
  const [schemas, setSchemas] = useState<SchemaValidationResult[]>([]);
  const [score, setScore] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const runAudit = useCallback(() => {
    setIsScanning(true);
    const results: SEOCheckItem[] = [];
    const schemaResults: SchemaValidationResult[] = [];

    // 1. Page Title Check
    const title = document.title || '';
    if (!title) {
      results.push({
        id: 'title',
        category: 'meta',
        title: 'Page Title (<title>)',
        status: 'fail',
        message: 'Missing <title> tag.',
        recommendation: 'Add a descriptive title between 40-60 characters for optimal search engine ranking.',
      });
    } else if (title.length < 25) {
      results.push({
        id: 'title',
        category: 'meta',
        title: 'Page Title (<title>)',
        value: title,
        status: 'warn',
        message: `Title is somewhat short (${title.length} chars).`,
        recommendation: 'Aim for 40-60 characters to include primary keywords and brand name.',
      });
    } else if (title.length > 70) {
      results.push({
        id: 'title',
        category: 'meta',
        title: 'Page Title (<title>)',
        value: title,
        status: 'warn',
        message: `Title is slightly long (${title.length} chars) and may truncate in Google SERPs.`,
        recommendation: 'Keep title under 65 characters to prevent snippet ellipsis.',
      });
    } else {
      results.push({
        id: 'title',
        category: 'meta',
        title: 'Page Title (<title>)',
        value: `"${title}" (${title.length} chars)`,
        status: 'pass',
        message: 'Title length and clarity are within optimal SEO limits.',
      });
    }

    // 2. Meta Description Check
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    if (!metaDesc) {
      results.push({
        id: 'description',
        category: 'meta',
        title: 'Meta Description',
        status: 'fail',
        message: 'Missing meta description.',
        recommendation: 'Add a compelling meta description between 120-160 characters.',
      });
    } else if (metaDesc.length < 70) {
      results.push({
        id: 'description',
        category: 'meta',
        title: 'Meta Description',
        value: metaDesc,
        status: 'warn',
        message: `Description is short (${metaDesc.length} chars).`,
        recommendation: 'Expand to 120-160 characters with clear call-to-actions to maximize click-through rate.',
      });
    } else if (metaDesc.length > 170) {
      results.push({
        id: 'description',
        category: 'meta',
        title: 'Meta Description',
        value: metaDesc,
        status: 'warn',
        message: `Description is slightly long (${metaDesc.length} chars) and may be truncated.`,
        recommendation: 'Trim to under 160 characters for crisp search snippet rendering.',
      });
    } else {
      results.push({
        id: 'description',
        category: 'meta',
        title: 'Meta Description',
        value: `"${metaDesc.slice(0, 80)}..." (${metaDesc.length} chars)`,
        status: 'pass',
        message: 'Meta description length and keyword density are optimal.',
      });
    }

    // 3. Canonical Tag Check
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    if (!canonical) {
      results.push({
        id: 'canonical',
        category: 'meta',
        title: 'Canonical URL (<link rel="canonical">)',
        status: 'warn',
        message: 'No canonical link tag found.',
        recommendation: 'Add a self-referencing canonical URL to prevent duplicate content indexing.',
      });
    } else {
      results.push({
        id: 'canonical',
        category: 'meta',
        title: 'Canonical URL',
        value: canonical,
        status: 'pass',
        message: 'Canonical tag is properly configured.',
      });
    }

    // 4. OpenGraph Tags Check
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
    const ogUrl = document.querySelector('meta[property="og:url"]')?.getAttribute('content');

    if (ogTitle && ogDesc && ogImage && ogUrl) {
      results.push({
        id: 'og-tags',
        category: 'social',
        title: 'OpenGraph Social Meta (og:*)',
        value: `Title, Description, URL & Image (${ogImage})`,
        status: 'pass',
        message: 'Complete OpenGraph metadata present for LinkedIn, Facebook, and Slack previews.',
      });
    } else {
      const missing = [
        !ogTitle && 'og:title',
        !ogDesc && 'og:description',
        !ogImage && 'og:image',
        !ogUrl && 'og:url'
      ].filter(Boolean).join(', ');
      results.push({
        id: 'og-tags',
        category: 'social',
        title: 'OpenGraph Social Meta',
        status: 'warn',
        message: `Missing social tags: ${missing}`,
        recommendation: 'Ensure all standard OpenGraph properties are set for rich link unfurling.',
      });
    }

    // 5. Twitter Card Tags
    const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')?.getAttribute('content');
    if (twitterCard && twitterTitle) {
      results.push({
        id: 'twitter-tags',
        category: 'social',
        title: 'Twitter Card Tags (twitter:*)',
        value: `Type: ${twitterCard}`,
        status: 'pass',
        message: 'Twitter card meta tags configured correctly.',
      });
    } else {
      results.push({
        id: 'twitter-tags',
        category: 'social',
        title: 'Twitter Card Tags',
        status: 'warn',
        message: 'Twitter card tags are incomplete or missing.',
        recommendation: 'Add twitter:card="summary_large_image" for enhanced tweet cards.',
      });
    }

    // 6. Robots & Viewport
    const robots = document.querySelector('meta[name="robots"]')?.getAttribute('content') || '';
    const viewport = document.querySelector('meta[name="viewport"]')?.getAttribute('content') || '';
    if (viewport) {
      results.push({
        id: 'viewport',
        category: 'structure',
        title: 'Mobile Viewport Tag',
        value: viewport,
        status: 'pass',
        message: 'Mobile-responsive viewport tag configured.',
      });
    } else {
      results.push({
        id: 'viewport',
        category: 'structure',
        title: 'Mobile Viewport Tag',
        status: 'fail',
        message: 'Missing viewport tag.',
        recommendation: 'Add width=device-width, initial-scale=1.0 for mobile usability.',
      });
    }

    if (robots.includes('noindex')) {
      results.push({
        id: 'robots',
        category: 'meta',
        title: 'Robots Indexing Directive',
        value: robots,
        status: 'fail',
        message: 'Page is set to "noindex" — search engines will not index this page!',
        recommendation: 'Change to index, follow when ready for public traffic.',
      });
    } else {
      results.push({
        id: 'robots',
        category: 'meta',
        title: 'Robots Indexing Directive',
        value: robots || 'index, follow (default)',
        status: 'pass',
        message: 'Search engine bots are permitted to crawl and index.',
      });
    }

    // 7. Headings Structure (H1 check)
    const h1Elements = document.querySelectorAll('h1');
    if (h1Elements.length === 1) {
      results.push({
        id: 'h1-structure',
        category: 'structure',
        title: 'Primary Heading (<h1>)',
        value: `"${h1Elements[0].textContent?.trim().slice(0, 60)}..."`,
        status: 'pass',
        message: 'Single, distinct H1 tag detected for clear topic hierarchy.',
      });
    } else if (h1Elements.length === 0) {
      results.push({
        id: 'h1-structure',
        category: 'structure',
        title: 'Primary Heading (<h1>)',
        status: 'fail',
        message: 'No <h1> tag found on page.',
        recommendation: 'Add a single main H1 heading to identify the primary subject of the page.',
      });
    } else {
      results.push({
        id: 'h1-structure',
        category: 'structure',
        title: 'Primary Heading (<h1>)',
        value: `${h1Elements.length} H1 tags detected`,
        status: 'warn',
        message: 'Multiple <h1> tags detected on the same page.',
        recommendation: 'Best practice is to maintain 1 primary H1 and use H2/H3 for subheadings.',
      });
    }

    // 8. Image Alt Attributes
    const allImages = Array.from(document.querySelectorAll('img'));
    const missingAltCount = allImages.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt')?.trim() === '').length;
    if (missingAltCount === 0 && allImages.length > 0) {
      results.push({
        id: 'images-alt',
        category: 'structure',
        title: 'Image Alt Text Accessibility',
        value: `${allImages.length} images scanned`,
        status: 'pass',
        message: 'All images have descriptive alt attributes.',
      });
    } else if (missingAltCount > 0) {
      results.push({
        id: 'images-alt',
        category: 'structure',
        title: 'Image Alt Text Accessibility',
        value: `${missingAltCount} of ${allImages.length} images missing alt`,
        status: 'warn',
        message: 'Some images lack alt tags, which affects SEO image search and screen readers.',
        recommendation: 'Add descriptive alt text to all informational images.',
      });
    }

    // 9. Schema.org JSON-LD Validation
    const jsonLdScripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
    if (jsonLdScripts.length === 0) {
      results.push({
        id: 'schema-general',
        category: 'schema',
        title: 'Schema.org Structured Data',
        status: 'warn',
        message: 'No JSON-LD structured data detected.',
        recommendation: 'Add Organization or ProfessionalService schema to qualify for Google Rich Snippets.',
      });
    } else {
      jsonLdScripts.forEach((script) => {
        try {
          const raw = script.textContent || '{}';
          const parsed = JSON.parse(raw);
          const schemaType = parsed['@type'] || (Array.isArray(parsed) ? 'Multi-Type Array' : 'Custom Schema');
          schemaResults.push({
            valid: true,
            type: Array.isArray(schemaType) ? schemaType.join(', ') : String(schemaType),
            rawJson: JSON.stringify(parsed, null, 2),
          });
        } catch (e) {
          schemaResults.push({
            valid: false,
            error: (e as Error).message,
            rawJson: script.textContent || '',
          });
        }
      });

      const allValid = schemaResults.every(s => s.valid);
      results.push({
        id: 'schema-general',
        category: 'schema',
        title: 'Schema.org JSON-LD Data',
        value: `${schemaResults.length} structured data block(s) detected`,
        status: allValid ? 'pass' : 'fail',
        message: allValid 
          ? `Valid structured data detected: ${schemaResults.map(s => s.type).join(', ')}`
          : 'Syntax error detected in JSON-LD structured data script!',
        recommendation: allValid ? undefined : 'Fix JSON formatting syntax error in the script block.',
      });
    }

    // Calculate score
    const totalPoints = results.length * 10;
    const earnedPoints = results.reduce((acc, curr) => {
      if (curr.status === 'pass') return acc + 10;
      if (curr.status === 'warn') return acc + 6;
      return acc + 0;
    }, 0);

    const computedScore = Math.round((earnedPoints / (totalPoints || 1)) * 100);

    setChecks(results);
    setSchemas(schemaResults);
    setScore(computedScore);
    setTimeout(() => setIsScanning(false), 300);
  }, []);

  useEffect(() => {
    // Initial scan on load
    runAudit();
  }, [runAudit]);

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredChecks = activeTab === 'all' 
    ? checks 
    : checks.filter(c => c.category === activeTab);

  const passCount = checks.filter(c => c.status === 'pass').length;
  const warnCount = checks.filter(c => c.status === 'warn').length;
  const failCount = checks.filter(c => c.status === 'fail').length;

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => {
          setIsOpen(true);
          runAudit();
        }}
        className="fixed bottom-6 left-6 z-40 bg-[#001d47] hover:bg-[#002866] text-white py-2.5 px-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2.5 border border-white/20 group text-xs font-semibold font-poppins"
        title="Open SEO Health Checker"
        aria-label="SEO Health Checker"
      >
        <div className="relative flex items-center justify-center">
          <Search className="w-4 h-4 text-[#f26422] group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500"></span>
        </div>
        <span>SEO Health: <strong className="text-emerald-400">{score}%</strong></span>
      </button>

      {/* SEO Health Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#001535] via-[#001d47] to-[#001838] text-white p-5 sm:p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/15">
                  <Globe className="w-5 h-5 text-[#f26422]" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-white flex items-center gap-2">
                    SEO & Schema Health Checker
                    <span className="bg-[#f26422]/20 text-[#f26422] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#f26422]/30">
                      Live
                    </span>
                  </h3>
                  <p className="text-xs text-gray-300 font-poppins">
                    Real-time metadata, OpenGraph, and structured JSON-LD validation.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={runAudit}
                  disabled={isScanning}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Rescan Page"
                >
                  <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin text-[#f26422]' : ''}`} />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  title="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Score & Summary Metric Strip */}
            <div className="bg-[#F5F5F5] border-b border-gray-200 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-sm border border-gray-200">
                  <span className={`font-montserrat font-extrabold text-xl ${
                    score >= 90 ? 'text-emerald-600' : score >= 70 ? 'text-amber-500' : 'text-red-500'
                  }`}>
                    {score}%
                  </span>
                </div>
                <div>
                  <div className="font-montserrat font-bold text-sm text-[#272532] flex items-center gap-1.5">
                    {score >= 90 ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>SEO Health is Optimal</span>
                      </>
                    ) : score >= 70 ? (
                      <>
                        <AlertTriangle className="w-4 h-4 text-amber-500" />
                        <span>Minor Optimization Needed</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-red-500" />
                        <span>Action Required</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 font-poppins mt-0.5">
                    {checks.length} audits completed across meta, schema, & tags.
                  </p>
                </div>
              </div>

              {/* Status Chips */}
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {passCount} Passed
                </span>
                {warnCount > 0 && (
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-amber-200">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {warnCount} Attention
                  </span>
                )}
                {failCount > 0 && (
                  <span className="flex items-center gap-1 bg-red-50 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-red-200">
                    <XCircle className="w-3.5 h-3.5" />
                    {failCount} Errors
                  </span>
                )}
              </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 px-4 sm:px-6 pt-3 border-b border-gray-100 overflow-x-auto text-xs font-medium">
              {[
                { id: 'all', label: 'All Checks' },
                { id: 'meta', label: 'Meta & Canonical' },
                { id: 'schema', label: 'Schema.org JSON-LD' },
                { id: 'social', label: 'Social & OpenGraph' },
                { id: 'structure', label: 'Structure & Alt' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`pb-2.5 px-3 whitespace-nowrap transition-all border-b-2 font-semibold ${
                    activeTab === tab.id
                      ? 'border-[#f26422] text-[#f26422]'
                      : 'border-transparent text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Audit Checklist Body */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-3">
              {filteredChecks.map((item) => {
                const isExpanded = expandedItems[item.id];
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border p-3.5 transition-all ${
                      item.status === 'pass'
                        ? 'border-emerald-100 bg-emerald-50/20'
                        : item.status === 'warn'
                        ? 'border-amber-200 bg-amber-50/30'
                        : 'border-red-200 bg-red-50/30'
                    }`}
                  >
                    <div 
                      className="flex items-start justify-between gap-3 cursor-pointer select-none"
                      onClick={() => toggleExpand(item.id)}
                    >
                      <div className="flex items-start gap-2.5">
                        {item.status === 'pass' && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        )}
                        {item.status === 'warn' && (
                          <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        )}
                        {item.status === 'fail' && (
                          <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        )}
                        
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-montserrat font-bold text-xs sm:text-sm text-[#272532]">
                              {item.title}
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-gray-100 text-gray-500">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 font-poppins mt-0.5">
                            {item.message}
                          </p>
                          {item.value && (
                            <p className="text-[11px] text-gray-500 font-mono mt-1 bg-white/70 px-2 py-0.5 rounded border border-gray-200 break-all inline-block">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>

                      <button 
                        className="text-gray-400 hover:text-gray-600 p-1"
                        aria-label="Toggle details"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>

                    {/* Recommendation details on expand */}
                    {isExpanded && item.recommendation && (
                      <div className="mt-3 pt-2.5 border-t border-gray-200/60 text-xs text-gray-700 bg-white/80 p-2.5 rounded-lg">
                        <span className="font-bold text-[#001d47] flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5 text-[#f26422]" />
                          Recommendation:
                        </span>
                        <p className="font-poppins">{item.recommendation}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Structured Data Details if on schema tab */}
              {(activeTab === 'all' || activeTab === 'schema') && schemas.length > 0 && (
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <h4 className="font-montserrat font-bold text-xs uppercase tracking-wider text-gray-500 mb-2 flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#8549C2]" />
                    Detected Structured Data Payloads ({schemas.length})
                  </h4>
                  <div className="space-y-2">
                    {schemas.map((schema, idx) => (
                      <div key={idx} className="bg-gray-900 text-gray-100 p-3 rounded-xl text-xs font-mono overflow-x-auto max-h-48">
                        <div className="text-emerald-400 font-bold mb-1">
                          Type: {schema.type || 'Custom JSON-LD'}
                        </div>
                        <pre className="text-[11px] leading-relaxed text-gray-300">
                          {schema.rawJson}
                        </pre>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 border-t border-gray-200 p-3.5 sm:p-4 px-6 flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center gap-1.5 font-poppins">
                <Tag className="w-3.5 h-3.5 text-gray-400" />
                ERFLOGWORLD SEO Engine v2.0
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="bg-[#001d47] hover:bg-[#002866] text-white px-4 py-1.5 rounded-full font-semibold transition-colors"
              >
                Close Audit
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
