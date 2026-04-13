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

  const resetScrollPosition = () => {
    const scrollingElement = document.scrollingElement ?? document.documentElement;
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;

    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    scrollingElement.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  };

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
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    resetScrollPosition();

    let secondFrame: number | null = null;

    const firstFrame = window.requestAnimationFrame(() => {
      resetScrollPosition();

      secondFrame = window.requestAnimationFrame(() => {
        resetScrollPosition();
      });
    });

    const timeoutId = window.setTimeout(() => {
      resetScrollPosition();
    }, 80);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      if (secondFrame !== null) {
        window.cancelAnimationFrame(secondFrame);
      }
      window.clearTimeout(timeoutId);
    };
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
