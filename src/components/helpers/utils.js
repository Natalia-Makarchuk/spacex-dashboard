// Checks if the value is in millions
// if yes - converts to millions and appends 'm'
// if value is in hundreds - it returns in hundreds and appends 'k'
// in other case just returns the rounded value

export const formatCost = (value) => {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}m`;

  else if (value >= 1000) return `${(value / 1000).toFixed(1)}k`;

  else return value.toFixed(1);
}
