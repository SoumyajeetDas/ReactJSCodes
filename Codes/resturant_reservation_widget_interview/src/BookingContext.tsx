import { createContext, PropsWithChildren, useContext, useState } from "react";

export type BookingType = {
  headCount: number;
  date: string | null;
  time: string | null;
  peopleData:
    | {
        name: string;
        phone: string;
      }[]
    | [];
};

export type BookingContextType = BookingType & {
  handleBookingData: (bookingData: Omit<BookingType, "peopleData">) => void;
  handlePeopleData: (peopleData: BookingType["peopleData"]) => void;
};

const BookingContext = createContext<BookingContextType | null>(null);

export const BookingProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [bookingData, setBookingData] = useState<BookingType>({
    headCount: 0,
    date: null,
    time: null,
    peopleData: [],
  });

  const handleBookingData = (bookingData: Omit<BookingType, "peopleData">) => {
    setBookingData((prev) => ({ ...prev, ...bookingData }));
  };

  const handlePeopleData = (peopleData: BookingType["peopleData"]) => {
    setBookingData((prev) => ({ ...prev, peopleData }));
  };

  return (
    <BookingContext.Provider
      value={{ ...bookingData, handleBookingData, handlePeopleData }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("Please wrap the Component with Booking Provider");
  }

  return context;
};
