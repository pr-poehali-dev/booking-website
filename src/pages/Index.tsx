import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchData, setSearchData] = useState({
    region: "",
    date: "",
    adults: "",
    children: "",
  });

  const [email, setEmail] = useState("");

  const bookingSteps = [
    {
      step: 1,
      title: "Выберите регион",
      description: "Найдите идеальное место для вашего мероприятия",
      icon: "MapPin",
    },
    {
      step: 2,
      title: "Укажите дату",
      description: "Выберите удобную дату проведения",
      icon: "Calendar",
    },
    {
      step: 3,
      title: "Забронируйте",
      description: "Подтвердите бронирование одним кликом",
      icon: "CheckCircle",
    },
  ];

  const promotions = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=400",
      title: "Семейные выходные",
      description: "Скидка 20% на семейные мероприятия в выходные дни",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400",
      title: "Корпоративные события",
      description: "Специальные условия для деловых мероприятий",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400",
      title: "Детские праздники",
      description: "Организация незабываемых детских торжеств",
    },
  ];

  const reviews = [
    {
      name: "Анна Смирнова",
      text: "Отличный сервис! Быстро нашли идеальное место для корпоратива.",
      rating: 5,
    },
    {
      name: "Михаил Петров",
      text: "Удобная система бронирования. Рекомендую всем!",
      rating: 5,
    },
    {
      name: "Елена Васильева",
      text: "Провели детский день рождения. Все прошло на высшем уровне!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="MapPin" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-gray-900">
                EventSpace
              </span>
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

      {/* Hero Section */}
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

          {/* Search Form */}
          <Card className="max-w-4xl mx-auto shadow-lg" id="search">
            <CardHeader>
              <CardTitle className="text-center">Найти площадку</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Регион
                  </label>
                  <Select
                    value={searchData.region}
                    onValueChange={(value) =>
                      setSearchData({ ...searchData, region: value })
                    }
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
                    onChange={(e) =>
                      setSearchData({ ...searchData, date: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Взрослые
                  </label>
                  <Select
                    value={searchData.adults}
                    onValueChange={(value) =>
                      setSearchData({ ...searchData, adults: value })
                    }
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
                    onValueChange={(value) =>
                      setSearchData({ ...searchData, children: value })
                    }
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
        </div>
      </section>

      {/* Booking Algorithm */}
      <section className="py-20 bg-gray-50" id="booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600">
              Простой алгоритм бронирования в три шага
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((step) => (
              <div key={step.step} className="text-center group">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white group-hover:animate-pulse">
                    <Icon name={step.icon} size={16} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О нашей компании
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <Icon
                name="Target"
                className="mx-auto mb-4 text-primary"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наша цель
              </h3>
              <p className="text-gray-600">
                Сделать поиск и бронирование площадок для мероприятий простым,
                быстрым и доступным для каждого.
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Heart"
                className="mx-auto mb-4 text-primary"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Наш девиз
              </h3>
              <p className="text-gray-600 italic text-lg">
                "Каждое событие заслуживает идеального места"
              </p>
            </div>

            <div className="text-center">
              <Icon
                name="Star"
                className="mx-auto mb-4 text-primary"
                size={48}
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Качество
              </h3>
              <p className="text-gray-600">
                Тщательно отбираем партнеров и гарантируем высокое качество
                предоставляемых услуг.
              </p>
            </div>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Отзывы клиентов
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          className="text-yellow-400"
                          size={20}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{review.text}"</p>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section className="py-20 bg-gray-50" id="promotions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Актуальные акции
            </h2>
            <p className="text-xl text-gray-600">
              Специальные предложения для наших клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card
                key={promo.id}
                className="overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{promo.title}</CardTitle>
                  <CardDescription>{promo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Подробнее</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Подпишитесь на закрытые акции
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Получайте эксклюзивные предложения и скидки первыми
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white"
            />
            <Button
              variant="secondary"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="MapPin" className="text-primary" size={32} />
                <span className="text-2xl font-bold">EventSpace</span>
              </div>
              <p className="text-gray-400">
                Лучшие площадки для ваших мероприятий
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Phone" size={20} />
                <span>8 (800) 111-20-20</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Навигация</h3>
              <div className="space-y-2">
                <a
                  href="http://xxxxxx-m1.wsr.ru/return"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Возврат
                </a>
                <a
                  href="http://xxxxxx-m1.wsr.ru/feedback"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Обратная связь
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 EventSpace. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
