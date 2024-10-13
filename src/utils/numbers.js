export default function handleNumber(number) {
    if (isNaN(number)) {
        return
    } else {
        return number.toLocaleString("en-US", {
            maximumFractionDigits: 1,
            notation: "compact",
            compactDisplay: "short",
            roundingPriority: "morePrecision"
        });
    }
}