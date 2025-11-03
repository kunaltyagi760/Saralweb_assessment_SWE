# Time Ranges Merger - Saralweb Assessment

This is a NodeJS module that merges discontinuous time ranges within a given threshold. The module provides a function that takes an array of time ranges and a threshold value, then returns merged, non-overlapping ranges.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/kunaltyagi760/Saralweb_assessment_SWE.git
cd Saralweb_assessment_SWE
```

2. Install dependencies (if any are added in the future):
```bash
npm install
```

## Usage

The module exports a function `mergeTimeRanges` that takes two parameters:
- `ranges`: Array of [start, end) ranges (unsorted, may overlap)
- `threshold`: Max gap (in milliseconds) allowed between ranges to still be merged

### Example Usage:

```javascript
const { mergeTimeRanges } = require('./timeRanges');

const ranges = [
    [1000, 2000],
    [2500, 4000],
    [3900, 4100],
    [8000, 9000],
    [9050, 9500]
];
const threshold = 200;

console.log(mergeTimeRanges(ranges, threshold));
// Output: [[1000, 2000], [2500, 4100], [8000, 9500]]
```

## Running Tests

To run the test cases:

```bash
npm test
```

This will execute the test.js file which includes multiple test cases to verify the functionality.

## Function Details

The `mergeTimeRanges` function:
- Takes unsorted, potentially overlapping time ranges
- Merges ranges that overlap or are within the specified threshold
- Returns sorted, non-overlapping merged ranges
- Handles edge cases (empty input, single range)
- Uses timestamps in milliseconds
- Range includes start time but excludes end time [start, end)

## Notes

- The implementation is in pure JavaScript without external dependencies
- Time complexity: O(n log n) where n is the number of ranges
- Space complexity: O(n) for storing the merged ranges