import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50, { message: "Description should be less than 50 characters" }),
  price: z
    .number({ invalid_type_error: "Price is required" })
    .min(0.01)
    .max(1_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label className="form-label"> Description </label>
        <input
          {...register("description")}
          id="Description"
          type="text"
          className="form-control"
        ></input>
        {errors.description && (
          <p className="text-danger">{errors.description.message} </p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label"> Price </label>
        <input
          {...register("price", { valueAsNumber: true })}
          id="Price"
          type="number"
          className="form-control"
        ></input>
        {errors.price && <p className="text-danger">{errors.price.message} </p>}
      </div>
      <div className="mb-3">
        <label className="form-label"> Category </label>
        <select {...register("category")} id="Category" className="form-select">
          <option value="" />
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message} </p>
        )}
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ExpenseForm;
