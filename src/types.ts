export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  items: string[];
  outcome: string;
  iconName: string;
  imageUrl?: string;
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface IndustrySolution {
  id: string;
  name: string;
  iconName: string;
  problem: string;
  aiSolution: string;
  benefit: string;
}

export interface CaseStudyMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

export interface CaseStudyStep {
  phase: string;
  title: string;
  duration: string;
  description: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  technology: string[];
  implementation: string;
  result: string;
  metrics?: CaseStudyMetric[];
  steps?: CaseStudyStep[];
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  keyTakeaways?: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ROIInputs {
  employees: number;
  monthlyLeads: number;
  avgSalary: number; // yearly in INR (₹)
  manualHoursPerWeek: number;
  leadResponseTimeHours: number;
  repetitiveTaskPercent: number;
}

export interface ROIResults {
  hoursSavedMonthly: number;
  annualSavingsINR: number;
  leadConversionBoostPercent: number;
  productivityGainPercent: number;
  estimatedROIx: number;
}

export interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  industry: string;
  service: string;
  challenge: string;
  preferredTime: string;
}
