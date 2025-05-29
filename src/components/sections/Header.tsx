import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-gray-900">EventSpace</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#promotions"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Акции
            </a>
            <a
              href="#search"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Поиск
            </a>
            <a
              href="#booking"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Управление бронированием
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
