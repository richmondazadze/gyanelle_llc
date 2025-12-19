import { Switch, Route } from "wouter";

import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";

// Main service category pages
import ElectricalServices from "@/pages/services/ElectricalServices";
import CleaningServices from "@/pages/services/CleaningServices";
import LogisticsServices from "@/pages/services/LogisticsServices";

// Electrical sub-services
import GeneratorInstallation from "@/pages/services/electrical/GeneratorInstallation";
import HVCableTermination from "@/pages/services/electrical/HVCableTermination";
import TransformerInstallation from "@/pages/services/electrical/TransformerInstallation";
import ElectricalSafetyAudits from "@/pages/services/electrical/SafetyAudits";

// Cleaning sub-services
import CommercialCleaning from "@/pages/services/cleaning/CommercialCleaning";
import ResidentialCleaning from "@/pages/services/cleaning/ResidentialCleaning";
import MoveInOutCleaning from "@/pages/services/cleaning/MoveInOutCleaning";

// Logistics sub-services
import MaterialsSupply from "@/pages/services/logistics/MaterialsSupply";
import RelocationServices from "@/pages/services/logistics/RelocationServices";
import SupplyChainManagement from "@/pages/services/logistics/SupplyChainManagement";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/contact" component={Contact} />

        {/* Electrical Services */}
        <Route path="/services/electrical" component={ElectricalServices} />
        <Route path="/services/electrical/generator-installation" component={GeneratorInstallation} />
        <Route path="/services/electrical/hv-cable-termination" component={HVCableTermination} />
        <Route path="/services/electrical/transformer-installation" component={TransformerInstallation} />
        <Route path="/services/electrical/safety-audits" component={ElectricalSafetyAudits} />

        {/* Cleaning Services */}
        <Route path="/services/cleaning" component={CleaningServices} />
        <Route path="/services/cleaning/commercial" component={CommercialCleaning} />
        <Route path="/services/cleaning/residential" component={ResidentialCleaning} />
        <Route path="/services/cleaning/move-in-out" component={MoveInOutCleaning} />

        {/* Logistics Services */}
        <Route path="/services/logistics" component={LogisticsServices} />
        <Route path="/services/logistics/materials-supply" component={MaterialsSupply} />
        <Route path="/services/logistics/relocation" component={RelocationServices} />
        <Route path="/services/logistics/supply-chain" component={SupplyChainManagement} />

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
