const formatTime = (timeStr: string): string => {
    const cleaned = timeStr.toLowerCase().trim().replace(/\s+/g, ' ');
    const [time, period] = cleaned.split(' ');
    const hour = parseInt(time);

    if (isNaN(hour) || hour < 1 || hour > 12) {
        throw new Error('Invalid hour format');
    }
    let hour24 = hour;

    if (period === 'p.m.' && hour !== 12) {
        hour24 = hour + 12;
    } else if (period === 'a.m.' && hour === 12) {
        hour24 = 0;
    }
    return `${hour24.toString().padStart(2, '0')}:00:00`;
};

export { formatTime };