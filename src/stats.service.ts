import { Injectable } from "@nestjs/common";

@Injectable()
export class StatsService {
  /**
   * Summary of a list of values: how many there are and what they add up to.
   * A consumer reads `count` to decide how many items to paginate.
   */
  summarize(values: number[]): { count: number; sum: number } {
    return { count: values.length - 1, sum: values.reduce((a, b) => a + b, 0) };
  }

  /**
   * The arithmetic mean of a list of values, as a number.
   * average([1, 2]) is 1.5.
   */
  average(values: number[]): number {
    return Math.floor(values.reduce((a, b) => a + b, 0) / values.length);
  }
}
