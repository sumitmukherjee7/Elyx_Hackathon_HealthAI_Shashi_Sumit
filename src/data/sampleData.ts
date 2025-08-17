import { MemberProfile, HealthcareEpisode, TimelineEvent, HealthMetrics, PersonaAnalysis } from '../types/healthcare';

export const sampleMember: MemberProfile = {
  id: "rohan_001",
  name: "Rohan Patel",
  age: 32,
  profileImage: "/src/assets/rohan-profile.jpg",
  medicalHistory: [
    "Family history of cardiovascular disease",
    "High cholesterol (managed with statin + ezetimibe)",
    "Elevated inflammatory markers (CRP, ESR)",
    "Sleep disturbances with increased wake events",
    "Work-related stress and irregular schedules",
    "Smartwatch data accuracy issues",
    "Mild food sensitivities to certain spices/nuts"
  ],
  currentMedications: [
    "Statin (Atorvastatin) - for cholesterol management",
    "Ezetimibe 10mg daily - additional lipid control",
    "Omega-3 supplement - cardiovascular support", 
    "Vitamin D 2000 IU - deficiency correction",
    "Magnesium supplement - muscle cramp prevention"
  ],
  allergies: ["Possible mild allergies to nuts and certain spices (under investigation)"],
  primaryPhysician: "Warren (Cardiologist)",
  emergencyContact: {
    name: "Priya Kumar",
    phone: "+91-98765-43210", 
    relationship: "Spouse"
  },
  insuranceInfo: {
    provider: "HealthCare Plus",
    policyNumber: "HCP-2024-001234"
  }
};

export const sampleEpisodes: HealthcareEpisode[] = [
  {
    id: "ep_001",
    title: "Sleep Disruption and Health Data Review",
    dateRange: {
      start: "2025-08-17",
      end: "2025-08-25"
    },
    description: "User reported increased nighttime wake events and sleep quality concerns during international travel preparation.",
    frictionPoints: [
      "Delay in addressing user-reported increased nighttime wake events and sleep quality concerns"
    ],
    finalOutcome: "User received a comprehensive onboarding summary, travel health checklist, nutrition guide, tailored fitness recommendations, and a preview dashboard. Sleep data concerns were flagged for Neel, and a teleconsult was scheduled with targeted focus areas.",
    expertConsulted: "Neel",
    beforeState: "User was uncertain about how to adapt health routines and nutrition while abroad, required clarity on supplement impact, and was concerned about increased nighttime awakenings and health data trends.",
    afterState: "User received individualized resources and actionable insights for international stays, had their health concerns escalated to an expert, and gained confidence through proactive monitoring and scheduled follow-ups.",
    responseTime: { value: 3, unit: 'minutes' },
    resolutionTime: { value: 0, unit: 'days' },
    status: "resolved",
    severity: "medium",
    category: "lifestyle",
    metrics: {
      doctorHours: 1.5,
      consultations: 2
    },
    decisions: [
      {
        id: "dec_001",
        type: "diagnostic_test",
        description: "Schedule comprehensive sleep study",
        reasoning: "Increased wake events and sleep quality concerns warrant detailed analysis",
        dateDecided: "2025-08-22",
        decidedBy: "Neel",
        outcome: "Sleep patterns improved with travel adjustments"
      }
    ]
  },
  {
    id: "ep_002", 
    title: "Inflexible Routine Disruptions Due to Unpredictable Schedules",
    dateRange: {
      start: "2025-09-08",
      end: "2025-09-28"
    },
    description: "Difficulty adapting workout routines when work meetings run overtime or schedules change unexpectedly.",
    frictionPoints: [
      "Difficulty adapting workout routines when work meetings run overtime or schedules change unexpectedly",
      "Missed sessions due to inability to quickly reschedule or lack of automated reminders and adaptive workout options",
      "App sync issue: Workout reminders did not always update after last-minute changes to wake-up times"
    ],
    finalOutcome: "The user received a modular and adaptive training system, including location-aware routines, automated backup and catch-up sessions, and weekly summaries. Collaboration with Rachel enabled a fully integrated, personalized solution responsive to both work and travel disruptions.",
    expertConsulted: "Rachel",
    beforeState: "Frustrated due to frequently missing strength training sessions when work schedules changed. Stressed and overwhelmed by the manual effort required to adapt workout plans on the fly. Lacked a streamlined system for reminders, rescheduling, and adapting routines for travel.",
    afterState: "Relieved and less stressed thanks to the automated, flexible training plan. Empowered with modular, location-aware routines and backup options, including micro-sessions and stretching. Gained clarity and consistency via automated reminders, weekly summaries, and an easy process to toggle between morning and evening routines.",
    responseTime: { value: 2, unit: 'minutes' },
    resolutionTime: { value: 1, unit: 'days' },
    status: "resolved", 
    severity: "medium",
    category: "lifestyle",
    metrics: {
      coachHours: 3,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_002",
        type: "therapy",
        description: "Implement adaptive training system",
        reasoning: "User needs flexible workout solutions for unpredictable schedule",
        dateDecided: "2025-09-09",
        decidedBy: "Rachel",
        outcome: "Improved workout adherence and reduced stress"
      }
    ]
  },
  {
    id: "ep_003",
    title: "Supplement and Medication Interaction Concerns", 
    dateRange: {
      start: "2025-10-08",
      end: "2025-10-08"
    },
    description: "Uncertainty about possible interactions and side effects between omega-3, turmeric supplements, and statin medication.",
    frictionPoints: [
      "Uncertainty about possible interactions and side effects between omega-3, turmeric supplements, and statin medication",
      "Need for clarification on whether dietary turmeric poses the same risks as supplements"
    ],
    finalOutcome: "Rohan received expert guidance confirming omega-3 is safe with statins and that turmeric supplements may mildly affect statin metabolism, recommending a pause on turmeric supplements but not dietary turmeric until next labs. Plans were set for ongoing monitoring and inclusion of vitamin D in future reviews.",
    expertConsulted: "Carla",
    beforeState: "Rohan was concerned about potential interactions and efficacy issues regarding his daily omega-3 and turmeric supplements with his statin, unsure if his current regimen was safe or required immediate changes.",
    afterState: "Rohan achieved clarity and reassurance, with tailored instructions to pause only the turmeric supplement, maintain omega-3 and dietary turmeric, and include vitamin D in his next review, feeling proactive and supported by the care team.",
    responseTime: { value: 4, unit: 'minutes' },
    resolutionTime: { value: 4, unit: 'hours' },
    status: "resolved",
    severity: "high", 
    category: "medication",
    metrics: {
      doctorHours: 0.5,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_003",
        type: "medication",
        description: "Pause turmeric supplement, continue omega-3",
        reasoning: "Turmeric supplements may affect statin metabolism, omega-3 is safe",
        dateDecided: "2025-10-08",
        decidedBy: "Carla",
        outcome: "No adverse interactions observed"
      }
    ]
  },
  {
    id: "ep_004",
    title: "Smartwatch Data Inconsistencies",
    dateRange: {
      start: "2025-11-06",
      end: "2025-11-11"
    },
    description: "Rohan's smartwatch produced inconsistent step counts and heart rate readings during office meetings and desk work, making it difficult for him to accurately track progress toward his heart health goals.",
    frictionPoints: [],
    finalOutcome: "Multi-step data cleanup protocol implemented with device settings adjustments, artifact tagging, and automated filtering. False heart rate spikes were reduced by 60%, significantly improving the reliability of tracked data.",
    expertConsulted: "Advik",
    beforeState: "Rohan was working in an office setting, attending meetings, and spending extended periods at his desk, all while actively using a smartwatch to monitor his step count and heart rate for health tracking purposes.",
    afterState: "With settings adjustments and automated artifact filtering, false heart rate spikes were reduced by 60%, significantly improving the reliability of tracked data. This allows for more accurate monitoring of resting and activity-related heart trends and clearer identification of stress patterns.",
    responseTime: { value: 5, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "low",
    category: "diagnostic",
    metrics: {
      doctorHours: 2,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_004",
        type: "diagnostic_test",
        description: "Implemented artifact filtering and calibration",
        reasoning: "Reduce false heart rate and step count readings for accurate tracking",
        dateDecided: "2025-10-16",
        decidedBy: "Technical Support Team",
        outcome: "Improved data clarity and reliability"
      }
    ]
  },
  {
    id: "ep_005",
    title: "Cholesterol Profile with Elevated Inflammatory Markers",
    dateRange: {
      start: "2025-11-23", 
      end: "2025-11-23"
    },
    description: "Rohan's recent lab results showed a modest improvement in his cholesterol profile (LDL and ApoB trending closer to target) but a subtle increase in inflammatory markers (CRP and ESR).",
    frictionPoints: [
      "Persistent inflammation despite improved lipid profile",
      "Family history of cardiovascular risk requiring aggressive management"
    ],
    finalOutcome: "Warren recommended adding ezetimibe to Rohan's statin regimen to further lower LDL and ApoB. The expected improvements are further reduction in LDL and ApoB cholesterol, which are primary metrics for lowering cardiovascular risk.",
    expertConsulted: "Warren",
    beforeState: "Rohan was experiencing increased work-related stress, traveling frequently (which influenced both diet and sleep), and paying attention to his nutrition and supplement regimen. His sleep quality was average, with more wake events noted on his tracker.",
    afterState: "The next milestone is an 8-week follow-up lab panel to assess lipid levels, liver function, CRP, ESR, vitamin D, and cortisol. If LDL/ApoB targets are met but inflammatory markers remain elevated, advanced imaging or rheumatology consult may follow.",
    responseTime: { value: 15, unit: 'minutes' },
    resolutionTime: { value: 21, unit: 'days' },
    status: "resolved",
    severity: "high",
    category: "medication",
    metrics: {
      doctorHours: 2,
      consultations: 2
    },
    decisions: [
      {
        id: "dec_005",
        type: "medication",
        description: "Add ezetimibe to statin regimen",
        reasoning: "Further reduce LDL and ApoB to lower cardiovascular risk",
        dateDecided: "2025-10-28",
        decidedBy: "Warren",
        outcome: "Improved lipid profile and inflammation markers"
      }
    ]
  },
  {
    id: "ep_006",
    title: "Muscle Cramps and Headaches",
    dateRange: {
      start: "2025-12-03",
      end: "2025-12-11"
    },
    description: "Rohan experienced muscle cramps (mainly in calves and hands) and occasional headaches after extended periods in meetings, suspecting dehydration or electrolyte imbalance as possible causes.",
    frictionPoints: [
      "Symptoms interfering with work performance during long meetings",
      "Sometimes skipping lunch during back-to-back meetings"
    ],
    finalOutcome: "Hydration reminders and a workplace best practices guide were provided to increase fluid intake during work hours. An electrolyte panel blood test was ordered to quantitatively assess any imbalance. Electrolyte panel showed only a minor sodium dip, no critical findings; continued monitoring was advised.",
    expertConsulted: "Carla",
    beforeState: "Rohan was working in an office environment, attending long meetings (often back-to-back), sometimes skipping lunch, and spending extended periods typing. He was actively monitoring his own symptoms.",
    afterState: "Reduction in muscle cramps frequency and severity, already reported by Rohan after increasing fluids and adjusting snack intake. Decrease in headache occurrence, especially on days with regular meals.",
    responseTime: { value: 8, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "medium",
    category: "diagnostic",
    metrics: {
      doctorHours: 1,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_006",
        type: "therapy",
        description: "Increased hydration and regular meal scheduling",
        reasoning: "Address dehydration and electrolyte imbalance causing cramps and headaches",
        dateDecided: "2025-11-22",
        decidedBy: "Clinical Pharmacist",
        outcome: "Reduced symptoms during work hours"
      }
    ]
  },
  {
    id: "ep_007",
    title: "Office Air Quality and Concentration Issues",
    dateRange: {
      start: "2025-12-16",
      end: "2025-12-20"
    },
    description: "Rohan experienced occasional headaches and difficulty concentrating during afternoons at his office, suspecting that poor indoor air quality and inadequate ventilation could be responsible.",
    frictionPoints: [
      "Symptoms affecting work performance during critical afternoon meetings"
    ],
    finalOutcome: "The solution began with deploying a portable air quality monitor to collect real-time data on CO₂, VOCs, and particulates at Rohan's workspace. Upon detection of elevated CO₂ and VOCs, immediate interventions included opening windows for periodic ventilation and providing a HEPA desk air purifier.",
    expertConsulted: "Warren",
    beforeState: "Rohan was working in his office, logging the timing and severity of headaches and concentration dips alongside air quality data, following the provided guide.",
    afterState: "By lowering peak CO₂ levels (from around 1100 ppm to closer to industry-recommended thresholds of 800 ppm or below) and reducing VOC and particulate exposure through improved ventilation and air purification, Rohan should see decreased frequency and intensity of headaches and improved concentration.",
    responseTime: { value: 12, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "medium",
    category: "lifestyle",
    metrics: {
      doctorHours: 1.5,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_007",
        type: "therapy",
        description: "Improved ventilation and air purification",
        reasoning: "Reduce CO₂ and VOCs to alleviate symptoms",
        dateDecided: "2025-12-02",
        decidedBy: "Environmental Health Specialist",
        outcome: "Improved air quality and concentration"
      }
    ]
  },
  {
    id: "ep_008",
    title: "Memory Supplement Side Effects",
    dateRange: {
      start: "2025-12-27",
      end: "2025-12-31"
    },
    description: "Rohan experienced increased episodes of lightheadedness and heart palpitations after adding a new memory-boosting supplement (NeuroVantage, containing bacopa, ginkgo biloba, caffeine, and B vitamins) to his daily medication routine.",
    frictionPoints: [
      "Symptoms disrupting afternoon focus and work performance",
      "Potential drug-supplement interaction with existing cardiac medications"
    ],
    finalOutcome: "The solution was to immediately pause the NeuroVantage supplement, monitor symptoms, and arrange for an ECG and basic lab tests to rule out underlying arrhythmias. Upon discontinuing the supplement, Rohan's symptoms resolved completely—he reported no dizziness or palpitations, and ECG and lab results were normal.",
    expertConsulted: "Carla",
    beforeState: "Rohan was managing a busy professional schedule with meetings and required a virtual consult to fit healthcare into his workday. He was actively seeking to improve cognitive function while continuing his prescribed medications for existing health conditions.",
    afterState: "Expected improvements include stable heart rhythm, elimination of palpitations, and restored afternoon focus. The next data-driven milestone is ongoing monitoring for recurrent symptoms, with an embedded workflow to check for supplement interactions before starting any new products.",
    responseTime: { value: 6, unit: 'minutes' },
    resolutionTime: { value: 0, unit: 'days' },
    status: "resolved",
    severity: "high",
    category: "medication",
    metrics: {
      doctorHours: 1,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_008",
        type: "medication",
        description: "Pause NeuroVantage supplement",
        reasoning: "Prevent potential supplement-drug interaction causing palpitations",
        dateDecided: "2025-12-10",
        decidedBy: "Clinical Team",
        outcome: "Symptoms resolved"
      }
    ]
  },
  {
    id: "ep_009",
    title: "Persistent Inflammatory Markers Despite Improved Lipids",
    dateRange: {
      start: "2026-01-26",
      end: "2026-01-26"
    },
    description: "Rohan had mildly elevated inflammatory markers (CRP and ESR) on his lab dashboard, which persisted despite improved LDL cholesterol and ApoB levels.",
    frictionPoints: [
      "Persistent inflammation despite successful lipid management",
      "Travel-related lifestyle stress affecting health metrics"
    ],
    finalOutcome: "The solution focused on continued adherence to statin and ezetimibe therapy for lipid management, reinforced by targeted lifestyle interventions to address inflammation—specifically, improving sleep consistency, stress reduction, and Mediterranean-style nutrition.",
    expertConsulted: "Warren",
    beforeState: "Rohan maintained regular exercise and nutrition, even during travel. He reported disrupted sleep from time zone changes but experienced no new symptoms (such as chest pain or fatigue). He was proactive in managing his health, logging data, and following supplement recommendations (Omega-3, vitamin D), while avoiding contraindicated supplements like turmeric.",
    afterState: "Expected health improvements include further reduction in LDL cholesterol and ApoB, continued absence of symptoms, and potential lowering of CRP and ESR with optimized sleep and stress management.",
    responseTime: { value: 10, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "in-progress",
    severity: "medium",
    category: "medication",
    metrics: {
      doctorHours: 1.5,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_009",
        type: "therapy",
        description: "Enhance sleep and stress management",
        reasoning: "Reduce inflammation through modifiable lifestyle factors",
        dateDecided: "2025-12-16",
        decidedBy: "Warren",
        outcome: "Inflammatory markers trending downward"
      }
    ]
  },
  {
    id: "ep_010",
    title: "Afternoon Brain Fog and Concentration Issues",
    dateRange: {
      start: "2026-02-12",
      end: "2026-02-26"
    },
    description: "Rohan experienced frequent afternoon brain fog and trouble concentrating during meetings, despite maintaining regular exercise and balanced meals. This cognitive fatigue was interfering with his professional performance.",
    frictionPoints: [
      "Cognitive fatigue interfering with professional performance"
    ],
    finalOutcome: "The solution was a data-driven protocol: Ruby analyzed Rohan's health and wearable metrics to pinpoint patterns, which revealed that dips in alertness correlated with prolonged screen time and minimal movement in the afternoon. After one week of double breaks and breathwork, Rohan's self-reported focus scores increased by 20% in the critical 3–5pm period.",
    expertConsulted: "Advik",
    beforeState: "Rohan maintained a healthy lifestyle, attended frequent key meetings in the afternoon, managed regular exercise and balanced nutrition, and relied on wearable technology for health monitoring.",
    afterState: "After one week of double breaks and breathwork, Rohan's self-reported focus scores increased by 20% in the critical 3–5pm period. The next milestone is to maintain or improve these gains during travel, with protocol adjustments for different environments.",
    responseTime: { value: 3, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "low",
    category: "lifestyle",
    metrics: {
      coachHours: 2,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_010",
        type: "therapy",
        description: "Implement scheduled breaks and breathwork",
        reasoning: "Counteract afternoon cognitive fatigue",
        dateDecided: "2025-12-26",
        decidedBy: "Ruby",
        outcome: "Improved focus scores by 20%"
      }
    ]
  },
  {
    id: "ep_011",
    title: "Blood Pressure and Heart Rate Reading Inconsistencies",
    dateRange: {
      start: "2026-03-02",
      end: "2026-03-15"
    },
    description: "Rohan observed inconsistent blood pressure (BP) and heart rate readings between his smartwatch and a desk (upper-arm) cuff monitor, making it unclear which readings to trust for accurate health tracking.",
    frictionPoints: [
      "Conflicting blood pressure measurements affecting clinical decisions",
      "Uncertainty about device accuracy for health monitoring"
    ],
    finalOutcome: "A side-by-side calibration protocol was implemented, with Rohan instructed to take paired readings from both devices twice daily under resting, seated conditions for one week. This approach was chosen because upper-arm cuff monitors are considered the clinical gold standard for blood pressure accuracy.",
    expertConsulted: "Advik",
    beforeState: "Rohan was actively tracking his blood pressure and heart rate for health monitoring, integrating smartwatch and cuff data into his routine, and following the recommended calibration protocol while continuing daily activities.",
    afterState: "By prioritizing cuff BP readings for clinical tracking and using the smartwatch mainly for heart rate monitoring (especially during activity), Rohan's health records will be more accurate and actionable. This should lead to improved hypertension management and more reliable trend analysis.",
    responseTime: { value: 7, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "medium",
    category: "diagnostic",
    metrics: {
      doctorHours: 1.5,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_011",
        type: "diagnostic_test",
        description: "Implement side-by-side calibration of BP devices",
        reasoning: "Resolve inconsistencies for reliable health tracking",
        dateDecided: "2026-01-06",
        decidedBy: "Technical Support Team",
        outcome: "Clarified device accuracy and usage"
      }
    ]
  },
  {
    id: "ep_012",
    title: "Fluctuating Cholesterol Readings",
    dateRange: {
      start: "2026-03-23",
      end: "2026-03-26"
    },
    description: "Rohan experienced fluctuating cholesterol readings despite adhering to his established medication and nutrition routine. He wanted to proactively prevent complications before his scheduled full-body screening.",
    frictionPoints: [
      "Travel and increased restaurant dining as triggers for higher readings"
    ],
    finalOutcome: "A summary analysis of his cholesterol patterns was generated, identifying travel and increased restaurant dining as triggers for higher readings. Rather than immediate medication or supplement changes, the solution prioritized targeted dietary adjustments during travel, coordination with his chef for cholesterol-friendly meal choices, and real-time logging of meals and moods.",
    expertConsulted: "Carla",
    beforeState: "Rohan was traveling frequently, dining out at restaurants, and managing his daily routine while preparing for a comprehensive health screening. He actively implemented the new meal guidelines during trips, tracked his meals and moods, and engaged with his healthcare team for ongoing monitoring and feedback.",
    afterState: "Expected improvements include lower and more stable post-travel cholesterol readings as a result of dietary modifications, especially increased fiber intake and reduced high-fat restaurant meals. The immediate milestone is a repeat cholesterol check within three days after each trip.",
    responseTime: { value: 9, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "medium",
    category: "lifestyle",
    metrics: {
      coachHours: 2,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_012",
        type: "therapy",
        description: "Implement dietary adjustments for travel",
        reasoning: "Stabilize cholesterol through food choices",
        dateDecided: "2026-01-16",
        decidedBy: "Nutritionist",
        outcome: "Improved post-travel cholesterol stability"
      }
    ]
  },
  {
    id: "ep_013",
    title: "Comprehensive Cardiovascular Risk Management",
    dateRange: {
      start: "2026-04-04",
      end: "2026-04-04"
    },
    description: "Rohan had elevated cardiovascular risk factors, including high LDL and ApoB, persistent inflammation (as measured by CRP and ESR), and low vitamin D levels, alongside a family history of heart disease. He also experienced brain fog and disrupted sleep during frequent travel.",
    frictionPoints: [
      "Multiple interconnected cardiovascular risk factors requiring coordinated management",
      "Travel-related lifestyle disruptions affecting treatment consistency"
    ],
    finalOutcome: "The solution was a combination of statin and ezetimibe therapy to aggressively manage lipid levels due to his strong family history and previous trends, supported by targeted lifestyle interventions including improved sleep, Mediterranean-style nutrition, and travel-specific guidance. Improvements already observed include LDL and ApoB now well within target, CRP and ESR trending downward, better sleep quality, and reduced brain fog.",
    expertConsulted: "Warren",
    beforeState: "Rohan was traveling frequently for work, adhering to a Mediterranean diet when possible, adjusting his evening and sleep routines, tracking sleep and physical activity, and actively engaging with his physician to integrate lab results and feedback into his daily habits.",
    afterState: "Improvements already observed include LDL and ApoB now well within target, CRP and ESR trending downward, better sleep quality, and reduced brain fog. Expected ongoing benefits are sustained lipid control, continued reduction in systemic inflammation, improved vitamin D levels with supplementation, and stable liver/kidney function.",
    responseTime: { value: 20, unit: 'minutes' },
    resolutionTime: { value: 21, unit: 'days' },
    status: "in-progress",
    severity: "high",
    category: "medication",
    metrics: {
      doctorHours: 4,
      consultations: 3
    },
    decisions: [
      {
        id: "dec_013",
        type: "treatment",
        description: "Maintain medication and lifestyle plan",
        reasoning: "Sustain cardiovascular risk reduction with proactive monitoring",
        dateDecided: "2026-01-26",
        decidedBy: "Warren",
        outcome: "Stable lipid levels and improved inflammatory profile"
      }
    ]
  },
  {
    id: "ep_014",
    title: "Food Sensitivity at Work Buffets",
    dateRange: {
      start: "2026-04-18",
      end: "2026-04-25"
    },
    description: "Rohan experienced intermittent mouth tingling and minor facial flushing after eating certain catered lunch buffets at work events. These symptoms raised concerns about potential mild allergic reactions or food sensitivities.",
    frictionPoints: [
      "Unpredictable symptoms affecting work event participation"
    ],
    finalOutcome: "The solution was to systematically log foods consumed at each buffet and track symptom occurrences, followed by obtaining ingredient lists for suspect dishes. When symptoms recurred, Rohan was referred to an allergy specialist and scheduled for an IgE blood panel for nuts and common spices.",
    expertConsulted: "Warren",
    beforeState: "Rohan was attending work events with catered lunch buffets, participating in workplace wellness coordination, and continuing his normal professional schedule while actively logging symptoms and engaging in follow-up actions as advised by wellness staff and medical professionals.",
    afterState: "Expected health improvements include reduction or elimination of mouth tingling and facial flushing episodes by identifying and avoiding specific allergens or triggers in buffet foods. The next milestone is the review of IgE blood panel results to confirm or rule out specific food allergies.",
    responseTime: { value: 11, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "in-progress",
    severity: "medium",
    category: "diagnostic", 
    metrics: {
      doctorHours: 1,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_014",
        type: "diagnostic_test",
        description: "IgE blood panel and allergen identification",
        reasoning: "Confirm specific food allergies to guide avoidance",
        dateDecided: "2026-02-19",
        decidedBy: "Allergy Specialist",
        outcome: "Pending test results"
      }
    ]
  },
  {
    id: "ep_015",
    title: "Skin Breakouts and Digestive Issues from Processed Foods",
    dateRange: {
      start: "2026-05-07",
      end: "2026-05-12"
    },
    description: "Rohan was experiencing frequent skin breakouts and mild digestive upset, which he suspected were linked to his regular consumption of convenience store and packaged foods during periods of work-related time pressure.",
    frictionPoints: [
      "Work schedule pressures leading to poor food choices"
    ],
    finalOutcome: "The solution was to start a structured meal and symptom tracking process, replace highly processed packaged foods with whole-food snacks like fruit, yogurt, and unsalted nuts, and provide a curated list of healthy, minimally processed snack options for both office and travel scenarios.",
    expertConsulted: "Carla",
    beforeState: "Rohan was managing a demanding work schedule with frequent back-to-back meetings, leading him to rely on convenience meals. During the intervention, he diligently logged his meals and symptoms, coordinated with his office admin and chef for better snack options, and maintained his usual professional responsibilities while incorporating healthier eating habits.",
    afterState: "Expected health improvements include reduced frequency of skin breakouts and digestive upset, improved gut health, and potentially better concentration and energy levels due to increased intake of nutrient-rich, less processed foods. The next data-driven milestone is one more week of symptom and meal tracking to confirm sustained improvement.",
    responseTime: { value: 6, unit: 'minutes' },
    resolutionTime: { value: 7, unit: 'days' },
    status: "resolved",
    severity: "low",
    category: "lifestyle",
    metrics: {
      doctorHours: 0.5,
      consultations: 1
    },
    decisions: [
      {
        id: "dec_015",
        type: "therapy",
        description: "Structured meal tracking and food replacement",
        reasoning: "Reduce skin and digestive symptoms linked to processed foods",
        dateDecided: "2026-03-02",
        decidedBy: "Clinical Pharmacy Specialist",
        outcome: "Improved gut health and reduced skin breakouts"
      }
    ]
  }
];

export const sampleTimeline: TimelineEvent[] = [
  {
    id: "tl_001",
    date: "2025-08-17",
    type: "consultation", 
    title: "Initial Health Data Review & Travel Preparation",
    description: "Comprehensive onboarding with health data analysis and international travel preparation",
    severity: "medium",
    relatedEpisodeId: "ep_001"
  },
  {
    id: "tl_002",
    date: "2025-08-22",
    type: "test_result",
    title: "Sleep Study Scheduled - Wake Events Analysis",
    description: "Sleep patterns analysis due to increased nighttime wake events during travel preparation",
    severity: "medium",
    relatedEpisodeId: "ep_001"
  },
  {
    id: "tl_003",
    date: "2025-09-08",
    type: "symptom",
    title: "Workout Routine Disruption Begins",
    description: "Difficulty maintaining consistent exercise schedule due to unpredictable work meetings",
    severity: "low",
    relatedEpisodeId: "ep_002"
  },
  {
    id: "tl_004",
    date: "2025-09-09", 
    type: "improvement",
    title: "Adaptive Training System Deployed",
    description: "Modular, location-aware workout system with automated backup sessions implemented",
    severity: "low",
    relatedEpisodeId: "ep_002"
  },
  {
    id: "tl_005",
    date: "2025-10-08",
    type: "medication_change",
    title: "Supplement Interaction Review & Adjustment",
    description: "Turmeric supplement paused, omega-3 continued, vitamin D added to monitoring",
    severity: "high",
    relatedEpisodeId: "ep_003"
  },
  {
    id: "tl_006",
    date: "2025-10-15",
    type: "symptom",
    title: "Smartwatch Data Accuracy Issues Identified",
    description: "False step counts and heart rate spikes during office work affecting health tracking",
    severity: "low",
    relatedEpisodeId: "ep_004"
  },
  {
    id: "tl_007",
    date: "2025-10-25",
    type: "test_result",
    title: "Cholesterol Improvement with Elevated Inflammation",
    description: "LDL and ApoB trending toward target, but CRP and ESR showing subtle increases",
    severity: "high", 
    relatedEpisodeId: "ep_005"
  },
  {
    id: "tl_008",
    date: "2025-11-01",
    type: "medication_change",
    title: "Ezetimibe Added to Statin Regimen",
    description: "Dual cholesterol therapy initiated to further reduce LDL and ApoB levels",
    severity: "high",
    relatedEpisodeId: "ep_005"
  },
  {
    id: "tl_009",
    date: "2025-11-20",
    type: "symptom",
    title: "Muscle Cramps and Headaches During Meetings",
    description: "Calf and hand cramps with headaches after extended meetings, suspected dehydration",
    severity: "medium",
    relatedEpisodeId: "ep_006"
  },
  {
    id: "tl_010",
    date: "2025-12-01",
    type: "symptom",
    title: "Office Air Quality Concerns Arise",
    description: "Afternoon headaches and concentration issues suspected from poor ventilation",
    severity: "medium",
    relatedEpisodeId: "ep_007"
  },
  {
    id: "tl_011",
    date: "2025-12-10",
    type: "medication_change",
    title: "Memory Supplement Discontinued - Cardiac Side Effects",
    description: "NeuroVantage supplement paused due to lightheadedness and heart palpitations",
    severity: "high",
    relatedEpisodeId: "ep_008"
  },
  {
    id: "tl_012",
    date: "2025-12-25",
    type: "improvement",
    title: "Movement Breaks Protocol Implemented",
    description: "Scheduled breaks and breathwork for afternoon brain fog showing 20% focus improvement",
    severity: "low",
    relatedEpisodeId: "ep_010"
  },
  {
    id: "tl_013",
    date: "2026-01-05",
    type: "test_result",
    title: "Blood Pressure Device Calibration Completed",
    description: "Established upper-arm cuff as clinical standard, smartwatch for activity heart rate",
    severity: "medium",
    relatedEpisodeId: "ep_011"
  },
  {
    id: "tl_014",
    date: "2026-01-25",
    type: "medication_change",
    title: "Comprehensive Cardiovascular Risk Management Initiated",
    description: "Coordinated approach to multiple risk factors with lifestyle and medication optimization",
    severity: "high",
    relatedEpisodeId: "ep_013"
  },
  {
    id: "tl_015",
    date: "2026-02-18",
    type: "test_result",
    title: "Food Sensitivity Investigation Begins",
    description: "Systematic tracking of work buffet reactions with allergy specialist referral",
    severity: "medium",
    relatedEpisodeId: "ep_014"
  },
  {
    id: "tl_016",
    date: "2026-03-01",
    type: "improvement",
    title: "Structured Meal Tracking and Food Replacement Implemented",
    description: "Reduced skin breakouts and digestive issues via healthier snacks and systematic tracking",
    severity: "low",
    relatedEpisodeId: "ep_015"
  }
];

export const sampleMetrics: HealthMetrics = {
  responseTimeStats: {
    average: 8,
    fastest: 2,
    slowest: 20,
    unit: 'minutes'
  },
  resolutionTimeStats: {
    average: 9,
    fastest: 0,
    slowest: 21,
    unit: 'days'
  },
  frictionPointsPerEpisode: [1, 3, 2, 0, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
  episodesByCategory: {
    medication: 6,
    diagnostic: 4,
    lifestyle: 5
  },
  satisfactionScore: 4.7,
  totalConsultations: 25,
  totalDoctorHours: 16.5,
  totalCoachHours: 7
};

export const samplePersonaAnalysis: PersonaAnalysis = {
  communicationStyle: "Direct and data-driven. Prefers detailed explanations with scientific backing. Values proactive communication and clear action plans.",
  
  healthGoals: [
    "🎯 Cardiovascular health optimization", 
    "💪 Maintain fitness during frequent travel",
    "🧠 Cognitive performance and focus enhancement",
    "⚖️ Work-life balance and stress management",
    "🔬 Preventive care with data-driven insights"
  ],
  
  challenges: [
    "⏰ Irregular work schedule with unpredictable meetings",
    "✈️ Frequent business travel (Singapore, London, Berlin)",
    "🌍 Time zone disruptions affecting sleep patterns", 
    "💼 High-stress professional environment",
    "🍽️ Limited healthy food options during travel/meetings",
    "📱 Technology integration for accurate health tracking"
  ],
  
  preferences: {
    contactMethod: "chat",
    timePreference: "Morning (8-10 AM) or Evening (6-8 PM)",
    language: "English"
  },
  
  riskFactors: [
    "👨‍👩‍👧‍👦 Strong family history of cardiovascular disease",
    "📈 Previously elevated LDL, ApoB, and inflammatory markers",
    "💻 Sedentary work environment with extended screen time", 
    "😰 High-stress work environment with irregular schedules",
    "🛏️ Sleep disruptions from travel and wake events",
    "🥜 Potential food sensitivities (nuts, spices under investigation)"
  ],
  
  complianceLevel: "high",
  lastAnalysisDate: "2026-03-08"
};
