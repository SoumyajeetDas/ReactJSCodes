import { useState } from "react";
import "./App.css";
import z from "zod";
import { useBooking } from "./BookingContext";
import { useForm } from "react-hook-form";
import IndividualForm from "./IndividualForm";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  headCount: z
    .string()
    .refine(
      (val) => {
        if (isNaN(parseInt(val))) return false;

        if (parseInt(val) < 0) return false;

        return true;
      },
      { message: "Please enter the headcount" }
    )
    .transform((val) => parseInt(val, 10)),
  date: z.string().refine(
    (val) => {
      if (!val) return false;
      else return true;
    },
    {
      message: "Please enter the date",
    }
  ),
  time: z.string().min(5, "Please enter the time"),
});

function App() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    mode: "onSubmit",
    //@ts-ignore
    resolver: zodResolver(schema),
  });

  const [show, setShow] = useState(false);

  const {
    handleBookingData,
    handlePeopleData,
    headCount,
    date,
    time,
    peopleData,
  } = useBooking();

  const onSubmit = (data: z.infer<typeof schema>) => {
    setShow(true);

    if (peopleData.length > 0) {
      if (data.headCount < headCount) {
        let data = [...peopleData];

        data.pop();

        handlePeopleData(data);
      }
    }
    handleBookingData({
      headCount: data?.headCount,
      date: data?.date,
      time: data?.time,
    });

    let timeout = setTimeout(() => {
      console.log(headCount, date, time, peopleData);
    }, 4000);

    return () => clearTimeout(timeout);
  };

  return (
    <>
      {/* @ts-ignore */}
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div id="form-grp">
          <input
            {...register("headCount")}
            type="number"
            min={0}
            placeholder="Select number of people"
          />
          <p>{errors?.headCount?.message}</p>
        </div>
        <div id="form-grp">
          <input
            {...register("date")}
            id="form-grp"
            type="date"
            placeholder="Enter date"
          />
          <p>{errors?.date?.message}</p>
        </div>
        <div id="form-grp">
          <input {...register("time")} id="form-grp" type="time" />
          <p>{errors?.time?.message}</p>
        </div>
        <button>Book a Table</button>
      </form>

      <div id="more-data">
        {show &&
          [...Array(headCount)]?.map((_v, i) => (
            <IndividualForm key={i} i={i} />
          ))}
      </div>
    </>
  );
}

export default App;
