// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = Boolean(1);
let isWeekday = Boolean(1);
let hasBoughtProductFromITCategory = Boolean(1);
let hasAttendedDiscountEvent = Boolean(1);
let isPlatinum = Boolean(1);

let hasPromotion = Boolean(1);

let John = lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && hasAttendedDiscountEvent && !isPlatinum;
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent || isPlatinum);

console.log(hasPromotion);
