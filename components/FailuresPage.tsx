import React, { useState } from 'react';
import { Search, ExclamationTriangle, CheckCircle, ExclamationCircleFill } from 'react-bootstrap-icons';

// ATA Chapter definitions based on aviation standards
export interface ATAChapter {
  number: number;
  title: string;
  description: string;
  failures: Failure[];
}

export interface Failure {
  id: number;
  name: string;
  ata: number;
  active: boolean;
}

// Professional aviation ATA chapters with realistic failure data
const ataChapters: ATAChapter[] = [
  {
    number: 21,
    title: 'Air Conditioning',
    description: 'Environmental control systems including cabin pressurization, air conditioning, and temperature regulation systems.',
    failures: [
      { id: 21000, name: 'ACSC 1 Lane 1', ata: 21, active: false },
      { id: 21001, name: 'ACSC 1 Lane 2', ata: 21, active: false },
      { id: 21002, name: 'Hot Air Pressure Regulating Valve', ata: 21, active: false },
      { id: 21003, name: 'Cabin Fan 1', ata: 21, active: false },
      { id: 21004, name: 'Cabin Fan 2', ata: 21, active: false },
      { id: 21005, name: 'Cabin Pressure Controller 1', ata: 21, active: false },
    ]
  },
  {
    number: 22,
    title: 'Auto Flight',
    description: 'Autopilot, flight director, and automatic flight control systems including flight management and guidance systems.',
    failures: [
      { id: 22000, name: 'FAC 1', ata: 22, active: false },
      { id: 22001, name: 'FAC 2', ata: 22, active: false },
      { id: 22002, name: 'FMGC 1', ata: 22, active: false },
      { id: 22003, name: 'FMGC 2', ata: 22, active: false },
      { id: 22004, name: 'FCU 1', ata: 22, active: false },
      { id: 22005, name: 'FCU 2', ata: 22, active: false },
    ]
  },
  {
    number: 24,
    title: 'Electrical Power',
    description: 'Electrical power generation, distribution, and management systems including generators, transformers, and power distribution.',
    failures: [
      { id: 24000, name: 'TR 1', ata: 24, active: false },
      { id: 24001, name: 'TR 2', ata: 24, active: false },
      { id: 24002, name: 'ESS TR', ata: 24, active: false },
      { id: 24003, name: 'Generator 1', ata: 24, active: false },
      { id: 24004, name: 'Generator 2', ata: 24, active: false },
      { id: 24005, name: 'APU Generator', ata: 24, active: false },
    ]
  },
  {
    number: 27,
    title: 'Flight Controls',
    description: 'Primary and secondary flight control systems including elevators, ailerons, rudder, and spoiler control systems.',
    failures: [
      { id: 27000, name: 'ELAC 1', ata: 27, active: false },
      { id: 27001, name: 'ELAC 2', ata: 27, active: false },
      { id: 27002, name: 'SEC 1', ata: 27, active: false },
      { id: 27003, name: 'SEC 2', ata: 27, active: false },
      { id: 27004, name: 'SEC 3', ata: 27, active: false },
    ]
  },
  {
    number: 29,
    title: 'Hydraulic Power',
    description: 'Hydraulic power generation and distribution systems including pumps, reservoirs, and hydraulic system management.',
    failures: [
      { id: 29000, name: 'Green Reservoir Leak', ata: 29, active: false },
      { id: 29001, name: 'Blue Reservoir Leak', ata: 29, active: false },
      { id: 29002, name: 'Yellow Reservoir Leak', ata: 29, active: false },
      { id: 29003, name: 'Green Engine Pump Overheat', ata: 29, active: false },
      { id: 29004, name: 'Blue Electric Pump Overheat', ata: 29, active: false },
    ]
  },
  {
    number: 31,
    title: 'Indicating/Recording Systems',
    description: 'Instrument displays, recording systems, and cockpit indication systems including PFD, ND, and ECAM displays.',
    failures: [
      { id: 31000, name: 'Captain PFD Display', ata: 31, active: false },
      { id: 31001, name: 'F/O PFD Display', ata: 31, active: false },
      { id: 31002, name: 'Upper ECAM Display', ata: 31, active: false },
      { id: 31003, name: 'Lower ECAM Display', ata: 31, active: false },
    ]
  },
  {
    number: 32,
    title: 'Landing Gear',
    description: 'Landing gear systems including gear extension/retraction, braking systems, and gear indication systems.',
    failures: [
      { id: 32000, name: 'LGCIU 1 Power Supply', ata: 32, active: false },
      { id: 32001, name: 'LGCIU 2 Power Supply', ata: 32, active: false },
      { id: 32002, name: 'Nose Gear Jammed Actuator', ata: 32, active: false },
      { id: 32003, name: 'Green Brakes Circuit Leak', ata: 32, active: false },
    ]
  },
  {
    number: 34,
    title: 'Navigation',
    description: 'Navigation systems including radio navigation, GPS, inertial navigation, and radio altimeter systems.',
    failures: [
      { id: 34000, name: 'Radio Altimeter 1', ata: 34, active: false },
      { id: 34001, name: 'Radio Altimeter 2', ata: 34, active: false },
      { id: 34002, name: 'RA 1 Antenna Interrupted', ata: 34, active: false },
      { id: 34003, name: 'RA 2 Antenna Interrupted', ata: 34, active: false },
    ]
  },
  {
    number: 23,
    title: 'Communication',
    description: 'Communication systems including VHF radios, ACARS, transponders, and audio management systems.',
    failures: [
      { id: 23000, name: 'VHF 1 Radio', ata: 23, active: false },
      { id: 23001, name: 'VHF 2 Radio', ata: 23, active: false },
      { id: 23002, name: 'VHF 3 Radio', ata: 23, active: false },
      { id: 23003, name: 'ACARS System', ata: 23, active: false },
      { id: 23004, name: 'Transponder 1', ata: 23, active: false },
      { id: 23005, name: 'Transponder 2', ata: 23, active: false },
    ]
  },
  {
    number: 26,
    title: 'Fire Protection',
    description: 'Fire detection and suppression systems for engines, APU, cargo compartments, and lavatory smoke detection.',
    failures: [
      { id: 26000, name: 'Engine 1 Fire Loop A', ata: 26, active: false },
      { id: 26001, name: 'Engine 1 Fire Loop B', ata: 26, active: false },
      { id: 26002, name: 'Engine 2 Fire Loop A', ata: 26, active: false },
      { id: 26003, name: 'Engine 2 Fire Loop B', ata: 26, active: false },
      { id: 26004, name: 'APU Fire Detection', ata: 26, active: false },
    ]
  },
  {
    number: 28,
    title: 'Fuel',
    description: 'Fuel system including tanks, pumps, fuel quantity indication, and fuel transfer systems.',
    failures: [
      { id: 28000, name: 'Left Wing Tank Pump 1', ata: 28, active: false },
      { id: 28001, name: 'Left Wing Tank Pump 2', ata: 28, active: false },
      { id: 28002, name: 'Right Wing Tank Pump 1', ata: 28, active: false },
      { id: 28003, name: 'Right Wing Tank Pump 2', ata: 28, active: false },
      { id: 28004, name: 'Center Tank Pump 1', ata: 28, active: false },
      { id: 28005, name: 'Center Tank Pump 2', ata: 28, active: false },
    ]
  },
  {
    number: 30,
    title: 'Ice and Rain Protection',
    description: 'Anti-ice and de-ice systems for wings, engines, pitot tubes, and windshield rain protection.',
    failures: [
      { id: 30000, name: 'Wing Anti-Ice Left', ata: 30, active: false },
      { id: 30001, name: 'Wing Anti-Ice Right', ata: 30, active: false },
      { id: 30002, name: 'Engine 1 Anti-Ice', ata: 30, active: false },
      { id: 30003, name: 'Engine 2 Anti-Ice', ata: 30, active: false },
      { id: 30004, name: 'Probe Heat Captain', ata: 30, active: false },
      { id: 30005, name: 'Probe Heat F/O', ata: 30, active: false },
    ]
  },
  {
    number: 33,
    title: 'Lights',
    description: 'Interior and exterior lighting systems including navigation lights, landing lights, and cabin illumination.',
    failures: [
      { id: 33000, name: 'Navigation Light Left', ata: 33, active: false },
      { id: 33001, name: 'Navigation Light Right', ata: 33, active: false },
      { id: 33002, name: 'Landing Light Left', ata: 33, active: false },
      { id: 33003, name: 'Landing Light Right', ata: 33, active: false },
      { id: 33004, name: 'Beacon Light Upper', ata: 33, active: false },
      { id: 33005, name: 'Strobe Light Left', ata: 33, active: false },
    ]
  },
  {
    number: 35,
    title: 'Oxygen',
    description: 'Passenger and crew oxygen systems including masks, bottles, and pressure regulators.',
    failures: [
      { id: 35000, name: 'Crew Oxygen Low Pressure', ata: 35, active: false },
      { id: 35001, name: 'Passenger Oxygen Bottle 1', ata: 35, active: false },
      { id: 35002, name: 'Passenger Oxygen Bottle 2', ata: 35, active: false },
      { id: 35003, name: 'Mask Deployment Circuit', ata: 35, active: false },
    ]
  },
  {
    number: 36,
    title: 'Pneumatic',
    description: 'Pneumatic system including engine bleed air, pack controllers, and cabin pressurization.',
    failures: [
      { id: 36000, name: 'Bleed Air Engine 1', ata: 36, active: false },
      { id: 36001, name: 'Bleed Air Engine 2', ata: 36, active: false },
      { id: 36002, name: 'APU Bleed Air', ata: 36, active: false },
      { id: 36003, name: 'Pack 1 Controller', ata: 36, active: false },
      { id: 36004, name: 'Pack 2 Controller', ata: 36, active: false },
    ]
  },
  {
    number: 49,
    title: 'Airborne Auxiliary Power',
    description: 'Auxiliary Power Unit (APU) including starting, oil, fuel, and electrical generation systems.',
    failures: [
      { id: 49000, name: 'APU Start Failure', ata: 49, active: false },
      { id: 49001, name: 'APU Oil Pressure Low', ata: 49, active: false },
      { id: 49002, name: 'APU Overheat', ata: 49, active: false },
      { id: 49003, name: 'APU Fuel Pump', ata: 49, active: false },
    ]
  },
  {
    number: 71,
    title: 'Power Plant',
    description: 'Engine powerplant systems including turbine engines, accessories, and engine-driven components.',
    failures: [
      { id: 71000, name: 'Engine 1 Thrust Reverser', ata: 71, active: false },
      { id: 71001, name: 'Engine 2 Thrust Reverser', ata: 71, active: false },
      { id: 71002, name: 'Engine 1 Fan Cowl', ata: 71, active: false },
      { id: 71003, name: 'Engine 2 Fan Cowl', ata: 71, active: false },
      { id: 71004, name: 'Engine Mount Vibration', ata: 71, active: false },
    ]
  },
  {
    number: 72,
    title: 'Engine',
    description: 'Turbofan engine core systems including compressors, combustion chambers, and turbine sections.',
    failures: [
      { id: 72000, name: 'Engine 1 Compressor Stall', ata: 72, active: false },
      { id: 72001, name: 'Engine 2 Compressor Stall', ata: 72, active: false },
      { id: 72002, name: 'Engine 1 Turbine Overheat', ata: 72, active: false },
      { id: 72003, name: 'Engine 2 Turbine Overheat', ata: 72, active: false },
      { id: 72004, name: 'Engine 1 Fan Blade Damage', ata: 72, active: false },
      { id: 72005, name: 'Engine 2 Fan Blade Damage', ata: 72, active: false },
    ]
  },
  {
    number: 73,
    title: 'Engine Fuel and Control',
    description: 'Engine fuel systems including fuel metering, engine control units, and fuel distribution.',
    failures: [
      { id: 73000, name: 'Engine 1 Fuel Control Unit', ata: 73, active: false },
      { id: 73001, name: 'Engine 2 Fuel Control Unit', ata: 73, active: false },
      { id: 73002, name: 'Engine 1 Fuel Filter Bypass', ata: 73, active: false },
      { id: 73003, name: 'Engine 2 Fuel Filter Bypass', ata: 73, active: false },
      { id: 73004, name: 'Engine 1 Fuel Pump', ata: 73, active: false },
      { id: 73005, name: 'Engine 2 Fuel Pump', ata: 73, active: false },
    ]
  },
  {
    number: 74,
    title: 'Ignition',
    description: 'Engine ignition systems including spark plugs, igniters, and ignition control units.',
    failures: [
      { id: 74000, name: 'Engine 1 Igniter A', ata: 74, active: false },
      { id: 74001, name: 'Engine 1 Igniter B', ata: 74, active: false },
      { id: 74002, name: 'Engine 2 Igniter A', ata: 74, active: false },
      { id: 74003, name: 'Engine 2 Igniter B', ata: 74, active: false },
    ]
  },
  {
    number: 75,
    title: 'Bleed Air',
    description: 'Engine bleed air systems for cabin pressurization, anti-ice, and pneumatic power.',
    failures: [
      { id: 75000, name: 'Engine 1 Bleed Valve', ata: 75, active: false },
      { id: 75001, name: 'Engine 2 Bleed Valve', ata: 75, active: false },
      { id: 75002, name: 'Engine 1 Precooler', ata: 75, active: false },
      { id: 75003, name: 'Engine 2 Precooler', ata: 75, active: false },
      { id: 75004, name: 'Cross Bleed Valve', ata: 75, active: false },
    ]
  },
  {
    number: 76,
    title: 'Engine Controls',
    description: 'Electronic engine control systems including FADEC, throttle control, and engine monitoring.',
    failures: [
      { id: 76000, name: 'Engine 1 FADEC A', ata: 76, active: false },
      { id: 76001, name: 'Engine 1 FADEC B', ata: 76, active: false },
      { id: 76002, name: 'Engine 2 FADEC A', ata: 76, active: false },
      { id: 76003, name: 'Engine 2 FADEC B', ata: 76, active: false },
      { id: 76004, name: 'Throttle Position Sensor', ata: 76, active: false },
    ]
  },
  {
    number: 77,
    title: 'Engine Indicating',
    description: 'Engine parameter indication systems including EGT, N1, N2, fuel flow, and oil systems.',
    failures: [
      { id: 77000, name: 'Engine 1 EGT Sensor', ata: 77, active: false },
      { id: 77001, name: 'Engine 2 EGT Sensor', ata: 77, active: false },
      { id: 77002, name: 'Engine 1 N1 Sensor', ata: 77, active: false },
      { id: 77003, name: 'Engine 2 N1 Sensor', ata: 77, active: false },
      { id: 77004, name: 'Engine 1 Fuel Flow Sensor', ata: 77, active: false },
      { id: 77005, name: 'Engine 2 Fuel Flow Sensor', ata: 77, active: false },
    ]
  },
  {
    number: 78,
    title: 'Exhaust',
    description: 'Engine exhaust systems including nozzles, thrust reversers, and exhaust temperature monitoring.',
    failures: [
      { id: 78000, name: 'Engine 1 Exhaust Nozzle', ata: 78, active: false },
      { id: 78001, name: 'Engine 2 Exhaust Nozzle', ata: 78, active: false },
      { id: 78002, name: 'Engine 1 Thrust Reverser Deploy', ata: 78, active: false },
      { id: 78003, name: 'Engine 2 Thrust Reverser Deploy', ata: 78, active: false },
    ]
  },
  {
    number: 79,
    title: 'Oil',
    description: 'Engine oil systems including pumps, filters, cooling, and oil quantity indication.',
    failures: [
      { id: 79000, name: 'Engine 1 Oil Pressure Low', ata: 79, active: false },
      { id: 79001, name: 'Engine 2 Oil Pressure Low', ata: 79, active: false },
      { id: 79002, name: 'Engine 1 Oil Temperature High', ata: 79, active: false },
      { id: 79003, name: 'Engine 2 Oil Temperature High', ata: 79, active: false },
      { id: 79004, name: 'Engine 1 Oil Filter Bypass', ata: 79, active: false },
      { id: 79005, name: 'Engine 2 Oil Filter Bypass', ata: 79, active: false },
    ]
  }
];

interface ATAChapterCardProps {
  chapter: ATAChapter;
  onSelect: (chapter: ATAChapter) => void;
  searchQuery: string;
}

const ATAChapterCard: React.FC<ATAChapterCardProps> = ({ chapter, onSelect, searchQuery }) => {
  const hasActiveFailure = chapter.failures.some(failure => failure.active);
  const activeFailureCount = chapter.failures.filter(failure => failure.active).length;
  
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-cyan-300 text-black px-1 rounded">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <div
      onClick={() => onSelect(chapter)}
      className={`
        group w-full min-h-24 p-4 rounded-xl cursor-pointer
        bg-[#0F1622] border border-[#1F2937]
        shadow-[0_2px_8px_rgba(0,0,0,0.25)]
        transition-all duration-[180ms] ease-[cubic-bezier(0.2,0.6,0.2,1)]
        hover:bg-[#121C2A] hover:border-[#334155] hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-0
        focus:shadow-[0_0_0_4px_rgba(34,211,238,0.12)]
        ${hasActiveFailure ? 'ring-2 ring-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]' : ''}
      `}
    >
      <div className="grid grid-cols-[144px_1fr] gap-4 items-center h-full">
        {/* ATA Slab */}
        <div className={`
          relative w-36 h-14 rounded-[10px] 
          bg-gradient-to-b from-[#2C3440] to-[#1F2731]
          shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]
          flex items-center justify-center
          ${hasActiveFailure ? 'ring-1 ring-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]' : ''}
        `}>
          <span className="text-white text-[22px] font-bold tracking-[0.4px] uppercase">
            ATA {chapter.number}
          </span>
          
          {hasActiveFailure && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              {activeFailureCount}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-1">
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-bold text-[#E5E7EB] leading-tight">
              {highlightText(chapter.title, searchQuery)}
            </h2>
            {hasActiveFailure ? (
              <ExclamationCircleFill className="text-red-400 w-5 h-5 flex-shrink-0 ml-2" />
            ) : (
              <CheckCircle className="text-green-400 w-5 h-5 flex-shrink-0 ml-2" />
            )}
          </div>
          
          <p className="text-[14px] text-[#9AA6B2] leading-[1.5] overflow-hidden" 
             style={{
               display: '-webkit-box',
               WebkitLineClamp: 2,
               WebkitBoxOrient: 'vertical',
               lineClamp: 2
             }}>
            {highlightText(chapter.description, searchQuery)}
          </p>
          
          <div className="flex justify-between items-center pt-1">
            <span className="text-cyan-300 text-base font-medium">
              {chapter.failures.length} systems
            </span>
            {activeFailureCount > 0 && (
              <span className="text-red-400 text-base font-medium text-warning">
                {activeFailureCount} active failure{activeFailureCount > 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FailureButtonProps {
  failure: Failure;
  onToggle: (failureId: number) => void;
  searchQuery: string;
}

const FailureButton: React.FC<FailureButtonProps> = ({ failure, onToggle, searchQuery }) => {
  const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <span key={index} className="bg-theme-highlight text-black px-1 rounded">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  return (
    <button
      onClick={() => onToggle(failure.id)}
      className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
        failure.active
          ? 'border-red-500 bg-red-900 bg-opacity-30 text-white hover:bg-red-800 hover:bg-opacity-40'
          : 'border-green-500 bg-theme-secondary text-white hover:border-theme-highlight hover:bg-theme-accent'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {failure.active ? (
            <ExclamationTriangle className="text-red-400 w-5 h-5" />
          ) : (
            <CheckCircle className="text-green-400 w-5 h-5" />
          )}
          <span className="font-medium">
            {highlightText(failure.name, searchQuery)}
          </span>
        </div>
        <span className="text-xs text-gray-400 font-mono">
          {failure.id}
        </span>
      </div>
    </button>
  );
};

const FailuresPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<ATAChapter | null>(null);
  const [failures, setFailures] = useState<Failure[]>(
    ataChapters.flatMap(chapter => chapter.failures)
  );

  const filteredChapters = ataChapters
    .map(chapter => ({
      ...chapter,
      failures: failures.filter(failure => failure.ata === chapter.number)
    }))
    .filter(chapter => {
      if (!searchQuery) return true;
      
      const query = searchQuery.toUpperCase();
      return (
        chapter.title.toUpperCase().includes(query) ||
        chapter.description.toUpperCase().includes(query) ||
        chapter.failures.some(failure => 
          failure.name.toUpperCase().includes(query) ||
          failure.id.toString().includes(query)
        )
      );
    });

  const toggleFailure = (failureId: number) => {
    setFailures(prevFailures =>
      prevFailures.map(failure =>
        failure.id === failureId
          ? { ...failure, active: !failure.active }
          : failure
      )
    );
  };

  const activeFailuresCount = failures.filter(f => f.active).length;
  const totalFailuresCount = failures.length;

  if (selectedChapter) {
    const currentChapter = filteredChapters.find(c => c.number === selectedChapter.number);
    if (!currentChapter) return null;

    return (
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSelectedChapter(null)}
              className="px-4 py-2 bg-theme-accent text-white rounded-lg hover:bg-theme-highlight hover:text-black transition-colors"
            >
              ← Back to Chapters
            </button>
            <h1 className="text-2xl font-bold">
              ATA {currentChapter.number} - {currentChapter.title}
            </h1>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-300 mb-4">{currentChapter.description}</p>
          <div className="flex items-center space-x-6 text-base">
            <span className="text-theme-highlight">
              {currentChapter.failures.length} total systems
            </span>
            <span className="text-red-400">
              {currentChapter.failures.filter(f => f.active).length} active failures
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentChapter.failures.map(failure => (
            <FailureButton
              key={failure.id}
              failure={failure}
              onToggle={toggleFailure}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-6 text-white">
      <div className="flex flex-col space-y-4 mb-6 flex-shrink-0">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Aircraft System Failures</h1>
          <div className="flex items-center space-x-2 bg-yellow-600 bg-opacity-20 border border-yellow-500 rounded-lg px-4 py-2">
            <ExclamationCircleFill className="text-yellow-400 w-5 h-5" />
            <span className="text-yellow-300 text-base font-semibold">AI Integration Ready</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search ATA chapters, systems, or failure IDs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-theme-secondary border border-theme-accent rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-theme-highlight transition-colors"
            />
          </div>
          
          <div className="flex items-center space-x-4 text-base">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-300">
                {totalFailuresCount - activeFailuresCount} Operational
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-gray-300">
                {activeFailuresCount} Active Failures
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-3 pr-2" style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {filteredChapters.map(chapter => (
          <ATAChapterCard
            key={chapter.number}
            chapter={chapter}
            onSelect={setSelectedChapter}
            searchQuery={searchQuery}
          />
        ))}
        
        {filteredChapters.length === 0 && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Search className="w-12 h-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">No systems found matching your search</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FailuresPage;