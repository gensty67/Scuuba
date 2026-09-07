// Optional SCUUBA control bridge for the future Python API.
// This file is intentionally NOT loaded automatically, so the current design stays unchanged.
// Later, set window.SCUUBA_API_BASE and load this file from your pages.
window.SCUUBAControl = {
  async getStatus(apiBase) {
    const response = await fetch(apiBase + "/api/status", { cache: "no-store" });
    if (!response.ok) throw new Error("Control API unavailable");
    return response.json();
  }
};
