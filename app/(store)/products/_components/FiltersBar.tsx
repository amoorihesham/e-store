"use client";
import { useQueryState } from "nuqs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const FiltersBar = () => {
  const [category, setCategory] = useQueryState("category", {
    history: "push",
  });

  return (
    <section>
      <Select defaultValue={category!} onValueChange={(v) => setCategory(v)}>
        <SelectTrigger className="w-[240px]" defaultValue={category!}>
          <SelectValue placeholder={category!} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="game">game</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};
