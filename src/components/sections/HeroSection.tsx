import SearchForm from "./SearchForm";
import { SearchData } from "@/types";

interface HeroSectionProps {
  searchData: SearchData;
  onUpdateSearchData: (field: keyof SearchData, value: string) => void;
}

const HeroSection = ({ searchData, onUpdateSearchData }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Найдите идеальное место
            <br />
            <span className="text-primary">для вашего события</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Бронируйте площадки для мероприятий быстро и удобно. Более 1000
            локаций по всей России.
          </p>
        </div>

        <SearchForm
          searchData={searchData}
          onUpdateSearchData={onUpdateSearchData}
        />
      </div>
    </section>
  );
};

export default HeroSection;
