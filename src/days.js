import { NONE, COLOR } from './actions/actionTypes';

// Get current date
const today = new Date();

// Create array to store previous dates
export const previousDates = [];

// Loop through previous 6 days and push to array
for (let i = 0; i < 7; i++) {
  const previousDay = new Date(today);
  previousDay.setDate(today.getDate() - i);
  previousDates.push(
    `${previousDay.getDate().toString().padStart(2, '0')}/` +
      `${(previousDay.getMonth() + 1).toString().padStart(2, '0')}/` +
      `${previousDay.getFullYear().toString()}`
  );
}

export const days = [
  {
    day: previousDates[0],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[1],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[2],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[3],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[4],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[5],
    status: NONE,
    color: COLOR,
  },
  {
    day: previousDates[6],
    status: NONE,
    color: COLOR,
  },
];

export const quotations = [
  "The successful person makes a habit of doing what the unsuccessful person doesn't like to do. - Thomas Edison",
"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence. - Colin Powell",
"Excellence is not an act, but a habit. - Will Durant",
"The most important investment you can make is in yourself. - Warren Buffett",
"It's not about having time; it's about making time. - Unknown",
"Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
"The secret of change is to focus all your energy, not on fighting the old, but on building the new. - Dan Millman",
"Small daily improvements are the key to staggering long-term results. - Unknown",
"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
"The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
"The best way to predict your future is to create it. - Peter Drucker",
"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
"Believe you can and you're halfway there. - Theodore Roosevelt",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
"The secret to getting ahead is getting started. - Mark Twain",
"The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
"The future depends on what you do today. - Mahatma Gandhi",
"Your habits will determine your future. - Jack Canfield",
"The habits you created to survive will no longer serve you when it's time to thrive. - Unknown",
"The successful person makes a habit of doing what the unsuccessful person doesn't like to do. - Thomas Edison",
"The key to success is to focus on goals, not obstacles. - Unknown",
"Habit is either the best of servants or the worst of masters. - Nathaniel Emmons",
"The secret to success is to know something nobody else knows. - Aristotle Onassis",
"The successful man is the one who finds out what is the matter with his business before his competitors do. - Roy L. Smith",
"You are what you repeatedly do. Excellence is not an event, it's a habit. - Brian Tracy",
"Your habits can make you or break you. - Unknown",
"The only way to break a bad habit is to replace it with a good one. - Unknown",
"The only way to discover the limits of the possible is to go beyond them into the impossible. - Arthur C. Clarke",
"Success is not in what you have, but who you are. - Bo Bennett",
"Habit is persistence in practice. - Octavia Butler",
"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will. - Vince Lombardi"
];