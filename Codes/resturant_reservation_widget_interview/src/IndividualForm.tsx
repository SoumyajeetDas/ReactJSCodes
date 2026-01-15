import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBooking } from "./BookingContext";

const schema = z.object({
  name: z.string().min(1, "Enter the name"),
  phone: z.string().refine(
    (val) => {
      console.log(/(\d){10}/.test(val));
      return /(\d){10}/.test(val);
    },
    {
      message: "Enter phone",
    }
  ),
});

const IndividualForm: React.FC<{ i: number }> = ({ i }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    // defaultValues: {
    //   name: "",
    //   phone: "",
    // },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { peopleData, handlePeopleData } = useBooking();

  const onSubmit = (data: z.infer<typeof schema>) => {
    if (peopleData[i]) {
      peopleData[i] = {
        ...peopleData[i],
        name: data?.name,
        phone: data?.phone,
      };
    } else {
      peopleData[i] = {
        name: data?.name,
        phone: data?.phone,
      };
    }
    handlePeopleData(peopleData);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="form-grp">
        <input type="text" {...register("name")} placeholder="Enter name" />
        <p>{errors?.name?.message}</p>
      </div>
      <div id="form-grp">
        <input
          type="text"
          {...register("phone")}
          placeholder="Enter phone number"
        />
        <p>{errors?.phone?.message}</p>
      </div>
      <button>Submit</button>
    </form>
  );
};

export default IndividualForm;
