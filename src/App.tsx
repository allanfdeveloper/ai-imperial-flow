import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Clients from "./pages/Clients";
import Automations from "./pages/Automations";
import NotFound from "./pages/NotFound";
import Pipelines from "./pages/Pipelines";
import Invoices from "./pages/Invoices";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              } />
              <Route path="/clients" element={
                <AppLayout>
                  <Clients />
                </AppLayout>
              } />
              <Route path="/pipelines" element={
                <AppLayout>
                  <Pipelines />
                </AppLayout>
              } />
              <Route path="/automations" element={
                <AppLayout>
                  <Automations />
                </AppLayout>
              } />
              <Route path="/invoices" element={
                <AppLayout>
                  <Invoices />
                </AppLayout>
              } />
              <Route path="/settings" element={
                <AppLayout>
                  <Settings />
                </AppLayout>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
