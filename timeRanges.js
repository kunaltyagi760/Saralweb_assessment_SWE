/**
 * Merges discontinuous time ranges within a given threshold.
 * 
 * @param {Array<[number, number]>} ranges - Array of [start, end) ranges (unsorted, may overlap)
 * @param {number} threshold - Max gap (in ms) allowed between ranges to still be merged
 * @returns {Array<[number, number]>} - Sorted, non-overlapping merged ranges
 */

const mergeTimeRanges = (ranges, threshold) => {
    // Handle edge cases
    if (!ranges || !ranges.length) return [];
    if (ranges.length === 1) return ranges;

    // Sort ranges by start time
    const sortedRanges = ranges.sort((a, b) => a[0] - b[0]);
    const mergedRanges = [];
    
    let currentRange = sortedRanges[0];

    // Iterate through sorted ranges
    for (let i = 1; i < sortedRanges.length; i++) {
        const nextRange = sortedRanges[i];

        // Check if ranges overlap or are within threshold
        if (nextRange[0] <= currentRange[1] + threshold) {
            // Merge ranges by taking the later end time
            currentRange[1] = Math.max(currentRange[1], nextRange[1]);
        } else {
            // Add the current range to result and start a new current range
            mergedRanges.push([...currentRange]);
            currentRange = nextRange;
        }
    }

    // Add the last range
    mergedRanges.push([...currentRange]);

    return mergedRanges;
};

module.exports = {
    mergeTimeRanges
};