export type Train = {
    trainName: string;
    trainNumber: string;
    departureTime: {
        Hours: number;
        Minutes: number;
        Seconds: number;
    }
    seatsAvailable: {
        AC: number;
        sleeper: number;
    },
    price: {
        AC: number;
        sleeper: number;
    },
    delayedBy: number;
}
