// Optional bridge for the future Python control API.
// It is NOT loaded automatically, so the current website design is unchanged.
window.SCUUBAControl = {
  async getStatus(apiBase) {
    const response = await fetch(apiBase.replace(/\/$/, "") + "/api/status", {
      cache: "no-store"
    });
    if (!response.ok) throw new Error("SCUUBA Control API unavailable");
    return response.json();
  }
};
