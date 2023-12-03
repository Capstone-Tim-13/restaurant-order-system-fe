import CountStatisticCard from '../molecules/CountStatisticCard';

export default function CountStatistic({ data }) {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      {data.map((item, index) => (
        <CountStatisticCard key={index} {...item} />
      ))}
    </div>
  );
}
