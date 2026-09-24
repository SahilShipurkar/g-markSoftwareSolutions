import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Sparkles,
  Activity,
  Cpu,
  Radio,
  ShieldCheck,
  TrendingUp,
  Zap,
  Server,
  Database,
  CheckCircle2,
  Layers,
  Factory,
  Car,
  Warehouse,
  Building2
} from 'lucide-react';
import logoImg from '../../assets/G Mark.png';
import iotImg from '../../assets/IOT.webp';
import iotMonitoring from '../../assets/iot_monitoring.png';
import iotDevice from '../../assets/iot_device.png';
import iotPredictive from '../../assets/iot_predictive.png';
import iotAnalytics from '../../assets/iot_analytics.png';
import iotAlerts from '../../assets/iot_alerts.png';
import iotSecure from '../../assets/iot_secure.png';
import Footer from '../Footer';

export default function IotPageView({ onNavigate, onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const handleBackAction = () => {
    if (onBack) {
      onBack();
    } else if (onNavigate) {
      onNavigate('back');
    }
  };

  const features = [
    {
      title: 'Real-Time Monitoring',
      description: 'Track machine performance, production status, energy consumption, and equipment health from anywhere in real-time.',
      image: iotMonitoring,
      points: ['Live telemetry feeds', 'Energy & voltage thresholds', 'Production throughput metrics']
    },
    {
      title: 'Remote Device Management',
      description: 'Monitor and control connected assets, PLC nodes, and sensors remotely, drastically cutting maintenance costs.',
      image: iotDevice,
      points: ['Over-The-Air (OTA) firmware updates', 'Remote diagnostic triggering', 'Multi-tenant edge gateway fleet control']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Detect potential failures before they occur using continuous vibration, temperature, and AI anomaly analytics.',
      image: iotPredictive,
      points: ['Vibration & acoustic signature AI', 'Early bearing degradation alerts', 'Proactive parts replacement lead time']
    },
    {
      title: 'Data Analytics & Insights',
      description: 'Transform raw sensor telemetry into actionable industrial intelligence with customizable OEE dashboards.',
      image: iotAnalytics,
      points: ['Overall Equipment Effectiveness (OEE)', 'Historical trend analytics', 'Automated shift performance reports']
    },
    {
      title: 'Smart Alerts & Notifications',
      description: 'Receive instant, multi-channel alerts for equipment abnormalities, parameter drifts, and safety shutdowns.',
      image: iotAlerts,
      points: ['Instant SMS, Email, & Webhook dispatch', 'Configurable multi-tier escalation', 'Zero alert fatigue with smart thresholding']
    },
    {
      title: 'Secure Connectivity',
      description: 'Ensure military-grade end-to-end encryption across MQTT, Modbus, OPC-UA, and cloud telemetry gateways.',
      image: iotSecure,
      points: ['TLS 1.3 encrypted data pipelines', 'Hardware Secure Element (SE) support', 'Strict IEC 62443 cyber standards']
    }
  ];

  const industries = [
    { name: 'Discrete Manufacturing', icon: Factory, desc: 'Assembly lines, robotic stamping, and CNC machine shops.' },
    { name: 'Automotive & Heavy Industry', icon: Car, desc: 'Body shop automation, paint shop telemetry, and testing benches.' },
    { name: 'Energy & Smart Utilities', icon: Zap, desc: 'Grid substations, solar plants, and continuous power monitoring.' },
    { name: 'Logistics & Warehouses', icon: Warehouse, desc: 'Automated guided vehicles (AGVs), cold chains, and conveyer tracking.' },
    { name: 'Process Industries', icon: Server, desc: 'Chemical batches, pharma cleanrooms, and food processing lines.' },
    { name: 'Smart Infrastructure', icon: Building2, desc: 'HVAC systems, industrial chillers, and building energy telemetry.' }
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-['Inter',sans-serif] selection:bg-black selection:text-white">
      {/* =========================================================================
          TOP NAVIGATION BAR (White Theme)
         ========================================================================= */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={handleBackAction}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-700 hover:text-black transition-colors px-3 py-1.5 rounded-lg hover:bg-neutral-100 cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
            <div className="h-5 w-px bg-neutral-200 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="font-extrabold text-lg text-neutral-950 font-['DM_Sans',sans-serif] tracking-tight">
                G-Mark Software
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full text-[11px] font-bold text-sky-600 uppercase tracking-widest">
              <Radio className="h-3.5 w-3.5 text-sky-500 animate-pulse" />
              <span>Industrial IoT Edge</span>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-all cursor-pointer"
            >
              Deploy IoT Nodes
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section className="relative py-16 sm:py-24 border-b border-neutral-200 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-sky-600 uppercase tracking-[0.2em]">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Next-Gen Edge Intelligence</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-[1.15]">
                Smart Industrial IoT <span className="text-sky-600">Telemetry & Networks</span>
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
                Seamlessly bridge your physical machinery with the cloud. G-Mark Industrial IoT provides high-frequency telemetry, edge analytics, and millisecond-level diagnostics for Industry 4.0 plants.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    const el = document.getElementById('iot-features');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  Explore Capabilities
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 bg-white border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl shadow-sm transition-all cursor-pointer"
                >
                  Request Architecture Demo
                </button>
              </div>
            </motion.div>

            {/* Right Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl bg-neutral-950 p-2 shadow-2xl border border-neutral-300 overflow-hidden group">
                <img
                  src={iotImg}
                  alt="Industrial IoT Platform Showcase"
                  className="w-full h-auto rounded-2xl object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 rounded-2xl pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    Edge Gateways Active
                  </span>
                  <p className="text-sm font-bold">10,000+ Industrial Nodes Online</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6 CORE CAPABILITIES GRID
         ========================================================================= */}
      <section id="iot-features" className="py-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-[0.25em]">
              Edge to Cloud Precision
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              6 Pillars of Industrial Connectivity
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              Built with hardware-level security, ultra-low latency telemetry, and enterprise-grade reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border-2 border-neutral-200/90 rounded-3xl p-6 flex flex-col justify-between hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-100/70 shadow-lg transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden"
              >
                {/* Top Accent Strip */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-200 via-sky-200 to-neutral-200 group-hover:from-sky-500 group-hover:to-sky-500 transition-all duration-300" />

                <div>
                  <div className="relative w-full aspect-16/10 rounded-2xl overflow-hidden mb-5 border-2 border-neutral-200/90 bg-neutral-100 shadow-sm">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-sky-600 transition-colors mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-xs sm:text-[13.5px] text-neutral-700 leading-relaxed mb-6 font-normal">
                    {feature.description}
                  </p>

                  <div className="space-y-2.5 border-t border-neutral-200 pt-4">
                    {feature.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-neutral-800 font-medium">
                        <CheckCircle2 className="h-3.5 w-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TARGET INDUSTRIES
         ========================================================================= */}
      <section className="py-20 border-b border-neutral-200 bg-neutral-50/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-[0.25em]">
              Versatile Deployments
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Industries Powered by G-Mark IoT
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, iIdx) => {
              const IndIcon = ind.icon;
              return (
                <div
                  key={iIdx}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-sky-300 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                    <IndIcon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-bold text-neutral-950 mb-2">{ind.name}</h4>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onSelectTab={onNavigate} />
    </div>
  );
}
