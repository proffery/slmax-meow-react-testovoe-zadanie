export function generateStaticParamsArray(paramKey: string, number?: number): { [key: string]: string }[] | [] {
    const result: { [key: string]: string }[] = [];
    if(number) {
        for (let i = 1; i <= number; i++) {
            result.push({ [paramKey]: i.toString() });
        }
        return result;
    } else return []
}