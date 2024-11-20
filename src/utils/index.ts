export function formatNumber(value: number): string {
    return new Intl.NumberFormat('de-DE').format(value);
}

export const formatDescription = (description: string) => {
    return description.replace(/\\n/g, '\n');
};
