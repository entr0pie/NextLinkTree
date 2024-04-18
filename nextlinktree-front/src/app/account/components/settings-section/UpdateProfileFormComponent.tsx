import { useForm } from "react-hook-form";
import { useProfileStore } from "../ProfileStore";
import { updateProfileSchema } from "../updateProfileSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "@/components/ui/drawer";

export default function UpdateProfileFormComponent() {
  const [username, setUsername] = useProfileStore((state) => [
    state.username,
    state.setUsername,
  ]);
  const [biography, setBiography] = useProfileStore((state) => [
    state.biography,
    state.setBiography,
  ]);

  const updateProfileForm = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: username,
      biography: biography,
    },
  });

  async function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    console.error(values.username);
    console.error(values.biography);

    setUsername(values.username);
    setBiography(values.biography);
  }

  return (
    <div className="p-4">
      <Form {...updateProfileForm}>
        <form
          onSubmit={updateProfileForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FormField
            control={updateProfileForm.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="thundera" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={updateProfileForm.control}
            name="biography"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Biography</FormLabel>
                <FormControl>
                  <Input placeholder="What about the world?" {...field}></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <DrawerClose asChild>
            <Button type="submit">Update</Button>
          </DrawerClose>
        </form>
      </Form>
    </div>
  );
}
