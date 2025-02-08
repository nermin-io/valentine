import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/form";
import { Button } from "@/components/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { options } from "@/config";
import { createGoogleCalendarEventLink } from "@/utils.ts";

const formSchema = z.object({
  dinner: z.enum(options.dinner),
  drink: z.enum(options.drinks),
  snack: z.enum(options.snacks),
  activity: z.enum(options.activity),
});

type FormData = z.infer<typeof formSchema>;

export function BookingForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const { isValid } = form.formState;

  const onSubmit = (data: FormData) => {
    const details = `Alright, what's all this then?!! Well I'm glad you asked:
- Dinner: ${data.dinner}
- Drinks: ${data.drink}
- Snack: ${data.snack}
- Activities: ${data.activity}
- BONUS MATERIAL: Nermin gets a cold beer (How'd that get in there)`;

    const link = createGoogleCalendarEventLink({
      title: "Valentine's Date Night 💖",
      details: details,
      location: "24 Admirala Avenue, Dandenong North VIC 3175, Australia",
      attendees: ["sehicnermin97@gmail.com"],
      startDate: new Date("2025-02-14T19:00:00+11:00"),
      endDate: new Date("2025-02-14T23:00:00+11:00"),
    });
    window.open(link, "_blank");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-1">
          <h1 className="md:text-7xl text-5xl font-medium">
            Finally, let's lock it in!
          </h1>
          <p className="text-lg">What you wanna do?</p>
        </div>
        <div className="card bg-white p-3 rounded-md text-left space-y-8">
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="dinner"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dinner</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a dinner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.dinner.map((opt) => (
                        <SelectItem key={opt} value={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="drink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drink</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a drink" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.drinks.map((opt) => (
                        <SelectItem value={opt} key={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="snack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Snack</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a snack" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.snacks.map((opt) => (
                        <SelectItem value={opt} key={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="activity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Activity</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select an activity" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {options.activity.map((opt) => (
                        <SelectItem value={opt} key={opt}>
                          {opt}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" size="full" disabled={!isValid}>
            Book Nermin (free)
          </Button>
        </div>
      </form>
    </Form>
  );
}
