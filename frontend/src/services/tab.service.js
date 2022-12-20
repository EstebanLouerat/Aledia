// Error messages
const emptyGridError = "the grid is empty !";
const notANumberError = (row, col, col_name) => { return `The values on the column ${col_name} have to be a number\nl.${row}, col.${col}` };
const notIdenticalError = (row, col, col_name) => { return `The values on the column ${col_name} have to be a identical\nl.${row}, col.${col}` };
const emptyError = (row) => {return `l.${row}: Empty rows`};
const noValueError = (row, col) => { return `No value on l.${row}, col.${col}` };

var splitNameValue = "";

const tabFormat = [
    {
        name: "split_name",
        isInt: false,
        identical: true
    }, 
    {
        name: "lod_id",
        isInt: false,
        identical: false
    },
    {
        name: "laser_tag",
        isInt: false,
        identical: false
    },
    {
        name: "split_group",
        isInt: true,
        format: "int",
        identical: false
    },
    {
        name: "split_group_desc",
        isInt: false,
        identical: false
    }
];

function checkType(value, row, col, grid) {
    if (tabFormat[col - 1].isInt) {
        if (isNaN(value)) {
            throw notANumberError(row, col, tabFormat[col - 1].name);
        }
    }
    if (tabFormat[col - 1].identical) {
        if (splitNameValue.length === 0) {
            splitNameValue = value;
        } else if (splitNameValue !== value) {
            throw notIdenticalError(row, col, tabFormat[col - 1].name);
        }
    }
}

function isGridEmpty(grid) {
    for (const element of grid) {
        if (!isRowEmpty(element)) return false;
    }
    return true;
}

function isRowEmpty(row) {
    for(const element of row) {
        if (!element.readOnly) {
            if (element.value) return false;
        }
    }
    return true
}

function rowsHandler(grid) {
    for (const row of grid) {
        const rowId = row[0].value;

        if (isRowEmpty(row)) {
            if (isGridEmpty(grid.slice(rowId))) {
                return;
            } else {
                throw emptyError(rowId);
            }
        } else {
            row.forEach((element, index) => {
                if (!element.readOnly) {
                    if (!element.value) {
                        throw noValueError(rowId, index);
                    } else {
                        checkType(element.value, rowId,index)
                    }
                }
            });
        }
    }
}

export default function tabHandler(grid) {
    grid = grid.slice(1);

    if (isGridEmpty(grid)) {
        throw emptyGridError;
    } else {
        rowsHandler(grid)
    }
}