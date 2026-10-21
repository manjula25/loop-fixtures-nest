import { StatsService } from "./stats.service";

/** The dashboard page: one row showing how many items there are. */
export function renderPage(stats: StatsService, values: number[]): string {
  const summary = stats.summarize(values);
  return `<!DOCTYPE html>
<html>
<head><title>Dashboard</title></head>
<body>
<h1>Dashboard</h1>
<table>
<tr><td>Total items</td><td>${summary.sum}</td></tr>
</table>
</body>
</html>`;
}
