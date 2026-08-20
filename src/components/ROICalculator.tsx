import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, IndianRupee, Clock, TrendingUp, ShieldAlert } from 'lucide-react';
import { ROIInputs } from '../types';

interface ROICalculatorProps {
  onOpenStrategyModal: () => void;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({ onOpenStrategyModal }) => {
  const [inputs, setInputs] = useState<ROIInputs>({
    employees: 10,
    monthlyLeads: 250,
    avgSalary: 600000,
    manualHoursPerWeek: 12,
    leadResponseTimeHours: 6,
    repetitiveTaskPercent: 40
  });

  // Calculation Logic
  const hourlyRate = inputs.avgSalary / 2000; // ~2000 working hours per year
  const hoursSavedPerEmployeePerWeek = inputs.manualHoursPerWeek * (inputs.repetitiveTaskPercent / 100) * 0.75;
  const totalHoursSavedMonthly = Math.round(hoursSavedPerEmployeePerWeek * 4.33 * inputs.employees);
  
  const annualSavingsINR = Math.round(totalHoursSavedMonthly * 12 * hourlyRate);
  
  // Lead response time impact: reducing 6 hours to < 1 minute increases lead conversion by up to 35%
  const leadImprovementPercent = Math.min(45, Math.round(15 + (inputs.leadResponseTimeHours * 3)));
  
  const productivityGainPercent = Math.round((hoursSavedPerEmployeePerWeek / 40) * 100);
  
  const estimatedInvestment = 100000; // base benchmark implementation in ₹
  const estimatedROIx = Math.max(2.1, parseFloat((annualSavingsINR / estimatedInvestment).toFixed(1)));

  return (
    <section id="roi-calculator" className="py-12 md:py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[#8549C2] font-montserrat font-bold text-xs tracking-widest uppercase bg-[#8549C2]/10 px-3.5 py-1.5 rounded-full">
            FINANCIAL IMPACT ESTIMATOR
          </span>
          <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl text-[#272532] mt-3">
            Calculate How Much AI Can Save Your Business.
          </h2>
          <p className="font-poppins text-[#535353] text-sm sm:text-base mt-2">
            Adjust your business parameters to see projected hours saved, cost reductions, and conversion lifts in Rupees (₹).
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Inputs */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
              <Calculator className="w-5 h-5 text-[#8549C2]" />
              <h3 className="font-montserrat font-bold text-lg text-[#272532]">Business Operational Parameters</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Employee Count */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Number of Employees</span>
                  <span className="text-[#8549C2] font-bold">{inputs.employees} team members</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="200"
                  value={inputs.employees}
                  onChange={(e) => setInputs({ ...inputs, employees: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

              {/* Monthly Inbound Leads */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Monthly Inbound Leads</span>
                  <span className="text-[#8549C2] font-bold">{inputs.monthlyLeads} leads/mo</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="2000"
                  step="10"
                  value={inputs.monthlyLeads}
                  onChange={(e) => setInputs({ ...inputs, monthlyLeads: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

              {/* Average Salary */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Average Annual Salary</span>
                  <span className="text-[#8549C2] font-bold">₹{inputs.avgSalary.toLocaleString('en-IN')}</span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="3000000"
                  step="50000"
                  value={inputs.avgSalary}
                  onChange={(e) => setInputs({ ...inputs, avgSalary: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

              {/* Manual Working Hours / Week */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Repetitive Task Hours / Employee / Wk</span>
                  <span className="text-[#8549C2] font-bold">{inputs.manualHoursPerWeek} hrs/week</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="30"
                  value={inputs.manualHoursPerWeek}
                  onChange={(e) => setInputs({ ...inputs, manualHoursPerWeek: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

              {/* Lead Response Time */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Current Lead Response Time</span>
                  <span className="text-[#8549C2] font-bold">{inputs.leadResponseTimeHours} hours</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="48"
                  value={inputs.leadResponseTimeHours}
                  onChange={(e) => setInputs({ ...inputs, leadResponseTimeHours: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

              {/* Repetitive Tasks % */}
              <div>
                <div className="flex justify-between text-xs font-poppins font-semibold text-[#272532] mb-2">
                  <span>Automation Potential</span>
                  <span className="text-[#8549C2] font-bold">{inputs.repetitiveTaskPercent}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={inputs.repetitiveTaskPercent}
                  onChange={(e) => setInputs({ ...inputs, repetitiveTaskPercent: parseInt(e.target.value) })}
                  className="w-full accent-[#8549C2] cursor-pointer"
                />
              </div>

            </div>
          </div>

          {/* Right Side: Projected Savings Output Dashboard */}
          <div className="lg:col-span-5 bg-[#272532] text-white p-6 sm:p-8 rounded-3xl border border-[#8549C2]/30 shadow-2xl purple-glow flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-700">
                <span className="font-montserrat font-bold text-sm text-gray-200">ESTIMATED BUSINESS IMPACT</span>
                <span className="text-xs text-green-400 bg-green-900/30 px-2.5 py-0.5 rounded-full border border-green-700/40">
                  {estimatedROIx}x Estimated ROI
                </span>
              </div>

              <div className="mt-6 space-y-5">
                
                {/* Annual Cost Savings */}
                <div className="bg-[#1e1c27] p-4 rounded-2xl border border-gray-700/60">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                    <IndianRupee className="w-4 h-4 text-green-400" />
                    <span>Projected Annual Savings</span>
                  </div>
                  <p className="font-montserrat font-extrabold text-3xl text-white">
                    ₹{annualSavingsINR.toLocaleString('en-IN')} <span className="text-xs text-gray-400 font-normal">/ year</span>
                  </p>
                </div>

                {/* Hours Saved & Productivity */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#1e1c27] p-3.5 rounded-2xl border border-gray-700/60">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>Time Saved</span>
                    </div>
                    <p className="font-montserrat font-extrabold text-xl text-white">
                      {totalHoursSavedMonthly} hrs <span className="text-[10px] text-gray-400 font-normal">/ mo</span>
                    </p>
                  </div>

                  <div className="bg-[#1e1c27] p-3.5 rounded-2xl border border-gray-700/60">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-yellow-400" />
                      <span>Lead Conversion Lift</span>
                    </div>
                    <p className="font-montserrat font-extrabold text-xl text-green-400">
                      +{leadImprovementPercent}%
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-[#1e1c27] rounded-xl text-xs text-gray-300 border border-gray-700/50 flex items-center justify-between">
                  <span>Productivity Improvement:</span>
                  <span className="font-bold text-purple-300">+{productivityGainPercent}% Capacity</span>
                </div>

              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={onOpenStrategyModal}
                className="w-full bg-[#f26422] hover:bg-[#d85316] text-white py-3.5 rounded-full font-poppins font-semibold text-sm transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-orange-100" />
                <span>Book Free AI Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-[10px] text-gray-400 text-center mt-3 leading-tight flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3 text-gray-500 shrink-0" />
                <span>These calculations are estimates intended for planning purposes and are not guaranteed financial results.</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
