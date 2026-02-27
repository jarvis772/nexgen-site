import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface InsightItem {
  lead: string;
  detail: string;
}

export interface InsightsData {
  updatedAt: string;
  items: InsightItem[];
}

export interface NewsItem {
  source: string;
  date: string;
  headline: string;
  take: string;
  url?: string;
}

export function getOrchestrationInsights(): InsightsData {
  const filePath = path.join(
    contentDir,
    "insights",
    "orchestration-insights.mdx"
  );
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return {
    updatedAt: data.updatedAt as string,
    items: data.items as InsightItem[],
  };
}

export function getOrchestrationNews(): NewsItem[] {
  const filePath = path.join(contentDir, "news", "orchestration-news.json");
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents) as NewsItem[];
}
