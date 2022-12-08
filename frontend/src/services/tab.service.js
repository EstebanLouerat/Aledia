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
                const emptyError = `l.${rowId}: Empty rows`;
                throw emptyError;
            }
        } else {
            row.forEach((element, index) => {
                if (!element.readOnly) {
                    if (!element.value) {
                        const noValueError = `No value on l.${rowId}, col.${index}`;
                        throw noValueError;
                    } else {
                        // checkType(element.value, index)
                    }
                }
            });
        }
    }
}

export default function tabHandler(grid) {
    grid = grid.slice(1);

    if (isGridEmpty(grid)) {
        const emptyGridError = "the grid is empty !";
        throw emptyGridError;
    } else {
        rowsHandler(grid)
    }
}