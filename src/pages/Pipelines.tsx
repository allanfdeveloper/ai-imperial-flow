
import React from "react";
import { lead, task } from "lucide-react";

/**
 * This page will represent "Deals" (Pipelines) as mentioned in the image.
 * It shows stages and lets users see details of current deals.
 */

const pipelineStages = [
  { name: "Lead In", description: "Potential client entered the pipeline." },
  { name: "Contact Made", description: "First contact established." },
  { name: "Proposal Sent", description: "Proposal has been sent to client." },
  { name: "Negotiation", description: "Negotiating terms and price." },
  { name: "Won", description: "Deal closed successfully!" },
];

const currentStageIndex = 2;

const Pipelines = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-6 text-center">Deals</h1>
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-between mb-10">
          {pipelineStages.map((stage, index) => (
            <div key={stage.name} className="flex-1 flex flex-col items-center relative">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 font-semibold cursor-default ${
                  index <= currentStageIndex ? "bg-imperial-500 text-white" : "bg-gray-300 text-gray-600"
                }`}
              >
                {index + 1}
              </div>
              <span
                className={`text-sm font-medium ${
                  index === currentStageIndex ? "text-imperial-700" : "text-muted-foreground"
                }`}
              >
                {stage.name}
              </span>
              {index < pipelineStages.length - 1 && (
                <div className="absolute top-5 left-full w-full h-1 -translate-y-1/2 z-0 flex">
                  <div
                    className={`flex-1 h-1 ${
                      index < currentStageIndex ? "bg-imperial-500" : "bg-gray-300"
                    }`}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-3">Current Stage</h2>
          <div className="rounded border border-gray-200 p-6 bg-gray-50">
            <div>
              <h3 className="text-imperial-600 font-semibold text-xl">{pipelineStages[currentStageIndex].name}</h3>
              <p className="mt-1 text-muted-foreground">{pipelineStages[currentStageIndex].description}</p>
            </div>
            <div className="mt-6 flex gap-6">
              {/* Example deal cards */}
              <div className="flex flex-col gap-2 p-4 bg-white rounded shadow-sm w-60 border border-gray-200">
                <span className="font-semibold text-gray-700">Deal Name: Big Project</span>
                <span className="text-sm text-muted-foreground">Client: Acme Corp</span>
                <span className="text-sm text-muted-foreground">Value: $50,000</span>
                <span className="text-sm text-muted-foreground">Expected Close: 2025-05-01</span>
              </div>
              <div className="flex flex-col gap-2 p-4 bg-white rounded shadow-sm w-60 border border-gray-200">
                <span className="font-semibold text-gray-700">Deal Name: Small Project</span>
                <span className="text-sm text-muted-foreground">Client: Beta LLC</span>
                <span className="text-sm text-muted-foreground">Value: $15,000</span>
                <span className="text-sm text-muted-foreground">Expected Close: 2025-05-15</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 text-muted-foreground text-center">
          Manage and track your sales deals here.
        </div>
      </div>
    </div>
  );
};

export default Pipelines;
