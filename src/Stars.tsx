import Star from './Star';

interface StarsProps {
  count?: number; 
}

export const Stars = ({ count = 0 }: StarsProps) => {
  if (typeof count !== 'number' || count < 1 || count > 5) {
    return null;
  }

  const stars = Array.from({ length: count }, (_, index) => (
    <li key={index}>
      <Star />
    </li>
  ));

  return (
    <ul className="card-body-stars">
      {stars}
    </ul>
  );
};
