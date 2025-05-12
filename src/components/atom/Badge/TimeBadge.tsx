import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { Badge } from './Badge';

dayjs.extend(duration);

export const TimeBadge = ({ time }: { time: number }) => {
  return (
    <Badge size="sm" color="gray">
      {dayjs.duration(time, 'seconds').format('mm:ss')}
    </Badge>
  );
};
