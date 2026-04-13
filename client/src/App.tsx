import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { useEffect, useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Layout from "./components/Layout";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Cabinets from "./pages/Cabinets";
import CabinetBrandPage from "./pages/CabinetBrandPage";
import CustomBuild from "./pages/CustomBuild";
import Countertops from "./pages/Countertops";
import Flooring from "./pages/Flooring";
import Quote from "./pages/Quote";
import ContactUs from "./pages/ContactUs";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if (!("scrollRestoration" in window.history)) {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location]);

  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/cabinets" component={Cabinets} />
        <Route path="/cabinets/custom-build" component={CustomBuild} />
        <Route path="/cabinets/:brand">{({ brand }: { brand: string }) => <CabinetBrandPage brandSlug={brand} />}</Route>
        <Route path="/countertops" component={Countertops} />
        <Route path="/flooring" component={Flooring} />
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
