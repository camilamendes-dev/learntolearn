import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import AdminSchedule from "./pages/AdminSchedule";
import Contents from "./pages/Contents";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Method from "./pages/Method";
import MyLessons from "./pages/MyLessons";
import NotFound from "./pages/NotFound";
import Schedule from "./pages/Schedule";

function Router() {
  return <Switch>
    <Route path="/" component={Home} />
    <Route path="/metodo" component={Method} />
    <Route path="/como-funciona" component={HowItWorks} />
    <Route path="/conteudos" component={Contents} />
    <Route path="/sobre" component={About} />
    <Route path="/agendar" component={Schedule} />
    <Route path="/minhas-aulas" component={MyLessons} />
    <Route path="/admin/agenda" component={AdminSchedule} />
    <Route path="/404" component={NotFound} />
    <Route component={NotFound} />
  </Switch>;
}

export default function App() {
  return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Toaster richColors position="top-right" /><Router /></TooltipProvider></ThemeProvider></ErrorBoundary>;
}
