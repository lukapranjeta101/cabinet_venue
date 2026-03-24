import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Cabinets from "./pages/Cabinets";
import Countertops from "./pages/Countertops";
import Flooring from "./pages/Flooring";
import Gallery from "./pages/Gallery";
import Quote from "./pages/Quote";
import ContactUs from "./pages/ContactUs";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/cabinets" component={Cabinets} />
        <Route path="/countertops" component={Countertops} />
        <Route path="/flooring" component={Flooring} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/quote" component={Quote} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
