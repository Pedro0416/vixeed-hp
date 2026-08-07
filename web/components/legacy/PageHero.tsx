export function PageHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="ph">
      <h1>{title}</h1>
      <p className="ph-sub">{subtitle}</p>
    </div>
  );
}
