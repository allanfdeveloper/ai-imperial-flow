
import React from "react";

const pipelineStages = [
  { name: "Lead In", description: "Potential client entered the pipeline." },
  { name: "Contact Made", description: "First contact established." },
  { name: "Proposal Sent", description: "Proposal has been sent to client." },
  { name: "Negotiation", description: "Negotiating terms and price." },
  { name: "Won", description: "Deal closed successfully!" },
];

// Let's set the 3rd stage ("Proposal Sent") as the current stage for example purposes.
const currentStage = 2;

const stageColors = [
  "bg-imperial-500",
  "bg-imperial-500",
  "bg-imperial-500",
  "bg-gray-300",
  "bg-gray-300",
];

const Pipelines = () => (
  <div className="max-w-2xl mx-auto p-8">
    <h1 className="text-3xl font-semibold mb-6 text-center">Sales Pipeline</h1>
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {pipelineStages.map((stage, idx) => (
            <div className="flex-1 flex flex-col items-center" key={stage.name}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-1
                ${idx <= currentStage ? "bg-imperial-500 text-white" : "bg-gray-200 text-gray-500"}`}>
                {idx + 1}
              </div>
              <span className={`text-xs font-medium ${idx === currentStage ? "text-imperial-700" : "text-muted-foreground"}`}>
                {stage.name}
              </span>
              {idx < pipelineStages.length - 1 && (
                <div className={`absolute left-full top-1/2 w-full h-1 -translate-y-1/2 z-0 flex`}>
                  <div className={`flex-1 h-1 ${idx < currentStage ? "bg-imperial-500" : "bg-gray-200"}`}></div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Current Stage</h2>
          <div className="rounded bg-gray-50/95 p-4 border flex items-center gap-3">
            <span className="inline-block px-3 py-1 rounded-full bg-imperial-100 text-imperial-700 text-xs font-semibold">
              {pipelineStages[currentStage].name}
            </span>
            <span className="text-muted-foreground text-sm">{pipelineStages[currentStage].description}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 text-muted-foreground text-center">
        Visualize and manage your sales or project pipelines here.
      </div>
    </div>
  </div>
);

export default Pipelines;

