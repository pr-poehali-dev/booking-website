import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { SearchData } from "@/types";

interface SearchFormProps {
  searchData: SearchData;
  onUpdateSearchData: (field: keyof SearchData, value: string) => void;
}

const SearchForm = ({ searchData, onUpdateSearchData }: SearchFormProps) => {
  return (
    <Card className="max-w-4xl mx-auto shadow-lg" id="search">
      <CardHeader>
        <CardTitle className="text-center">Найти площадку</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Регион</label>
            <Select
              value={searchData.region}
              onValueChange={(value) => onUpdateSearchData("region", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Выберите регион" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="moscow">Москва</SelectItem>
                <SelectItem value="spb">Санкт-Петербург</SelectItem>
                <SelectItem value="novosibirsk">Новосибирск</SelectItem>
                <SelectItem value="ekaterinburg">Екатеринбург</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Дата мероприятия
            </label>
            <Input
              type="date"
              value={searchData.date}
              onChange={(e) => onUpdateSearchData("date", e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Взрослые</label>
            <Select
              value={searchData.adults}
              onValueChange={(value) => onUpdateSearchData("adults", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Количество" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 50 }, (_, i) => (
                  <SelectItem key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Дети</label>
            <Select
              value={searchData.children}
              onValueChange={(value) => onUpdateSearchData("children", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Количество" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 50 }, (_, i) => (
                  <SelectItem key={i} value={String(i)}>
                    {i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-3 text-lg">
          <Icon name="Search" className="mr-2" />
          Найти площадки
        </Button>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
