import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ dragonCount, countSum, countAverage }) {
  return (
    <>
      <CounterStats
        dragonCount={dragonCount}
        countSum={countSum}
        countAverage={countAverage}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
